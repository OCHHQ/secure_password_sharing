# model/password.py
from app import db
from app.services import SecurityService
from datetime import datetime
from sqlalchemy.orm import relationship


class Password(db.Model):
    __tablename__ = 'passwords'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    encrypted_password = db.Column(db.Text, nullable=False)
    encrypted_salt = db.Column(db.LargeBinary, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationship with user
    user = relationship('User', back_populates='passwords')

    def encrypt_password(self, password, encryption_key):
        """
        Encrypt the password

        Args:
            password (str): The password to encrypt
            encryption_key (bytes): The encryption key
        """
        encrypted_password = SecurityService.encrypt_data(password, encryption_key)
        self.encrypted_password = encrypted_password
        self.encrypted_salt = encryption_key

    def decrypt_password(self, encryption_key):
        """
        Decrypt the password

        Args:
            encryption_key (bytes): The encryption key

        Returns:
            str: Decrypted password
        """
        return SecurityService.decrypt_data(
            self.encrypted_password,
            encryption_key
        )

    @classmethod
    def create_password_entry(cls, user, title, password, encryption_key):
        """
        Class method to create a new password entry

        Args:
            user (User): The user creating the password entry
            title (str): Title/description of the password
            password (str): The password to be encrypted
            encryption_key (bytes): The encryption key

        Returns:
            Password: Newly created password entry
        """
        new_password_entry = cls(
            user=user,
            title=title
        )
        new_password_entry.encrypt_password(password, encryption_key)
        return new_password_entry