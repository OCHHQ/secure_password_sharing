from app import db
from app.services import SecurityService
from sqlalchemy.orm import relationship
from datetime import datetime, timedelta
import secrets


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    password_salt = db.Column(db.LargeBinary, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # New security-related columns
    is_verified = db.Column(db.Boolean, default=False)
    verification_token = db.Column(db.String(100), nullable=True)
    verification_token_expires_at = db.Column(db.DateTime, nullable=True)
    failed_login_attempts = db.Column(db.Integer, default=0)
    last_login_attempt = db.Column(db.DateTime, nullable=True)
    is_locked = db.Column(db.Boolean, default=False)

    # Relationship with passwords
    passwords = relationship('Password', back_populates='user')

    def set_password(self, password):
        """
        Hash and set user's password with enhanced security
        """
        hashed_password, salt = SecurityService.hash_password(password)
        self.password_hash = hashed_password
        self.password_salt = salt
        # Reset failed login attempts on password change
        self.failed_login_attempts = 0
        self.is_locked = False

    def check_password(self, password):
        """
        Verify provided password with additional security checks
        """
        # Check if account is locked
        if self.is_locked:
            return False

        # Implement progressive delay for failed attempts
        if self.failed_login_attempts >= 5:
            # Lock account after 5 failed attempts
            self.is_locked = True
            return False

        is_valid = SecurityService.verify_password(
            self.password_hash,
            self.password_salt,
            password
        )

        if is_valid:
            # Reset failed attempts on successful login
            self.failed_login_attempts = 0
            return True
        else:
            # Increment failed login attempts
            self.failed_login_attempts += 1
            self.last_login_attempt = datetime.utcnow()
            return False

    def generate_verification_token(self):
        """
        Generate email verification token
        """
        self.verification_token = secrets.token_urlsafe(32)
        self.verification_token_expires_at = datetime.utcnow() + timedelta(hours=24)
        return self.verification_token

    def verify_email(self, token):
        """
        Verify email with token
        """
        if (self.verification_token == token and
                self.verification_token_expires_at and
                datetime.utcnow() < self.verification_token_expires_at):
            self.is_verified = True
            self.verification_token = None
            self.verification_token_expires_at = None
            return True
        return False

    def unlock_account(self):
        """
        Method to unlock account after a certain period or manual intervention
        """
        self.is_locked = False
        self.failed_login_attempts = 0