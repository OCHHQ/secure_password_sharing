from flask import  request
from app.models.user import User
from app.models.password import Password
from app.services import SecurityService
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask import Blueprint, jsonify
from app import db

root_bp = Blueprint('root', __name__)

@root_bp.route('/')
def index():
    return jsonify({
        'message': 'Welcome to Secure Password Sharing API',
        'status': 'healthy',
        'version': '1.0.0'
    }), 200

# Authentication Blueprint
auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    """
    User registration endpoint
    """
    data = request.get_json()

    # Validate input
    if not data or not data.get('username') or not data.get('password'):
        return jsonify({'message': 'Username and password are required'}), 400

    # Check if user already exists
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'message': 'Username already exists'}), 400

    # Create new user
    new_user = User(
        username=data['username'],
        email=data.get('email', '')  # Optional email field
    )
    new_user.set_password(data['password'])

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    """
    User login endpoint
    """
    data = request.get_json()

    # Find user
    user = User.query.filter_by(username=data.get('username')).first()

    # Validate credentials
    if user and user.check_password(data.get('password')):
        # Create access token
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200

    return jsonify({'message': 'Invalid credentials'}), 401

# Password Management Blueprint
password_bp = Blueprint('passwords', __name__)

@password_bp.route('/add', methods=['POST'])
@jwt_required()
def add_password():
    """
    Add a new password entry
    """
    current_user_id = get_jwt_identity()
    data = request.get_json()

    # Validate input
    if not data or not data.get('title') or not data.get('password'):
        return jsonify({'message': 'Title and password are required'}), 400

    # Find the user
    user = User.query.get(current_user_id)
    if not user:
        return jsonify({'message': 'User not found'}), 404

    # Generate encryption key from master key (user's password)
    master_key, _ = SecurityService.derive_key(data.get('master_password'))

    try:
        # Create new password entry
        new_password = Password(
            user_id=current_user_id,
            title=data['title']
        )
        new_password.encrypt_password(data['password'], master_key)

        db.session.add(new_password)
        db.session.commit()

        return jsonify({'message': 'Password saved successfully'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': f'Error saving password: {str(e)}'}), 500

@password_bp.route('/list', methods=['GET'])
@jwt_required()
def list_passwords():
    """
    List all passwords for the current user
    """
    current_user_id = get_jwt_identity()

    # Retrieve passwords
    passwords = Password.query.filter_by(user_id=current_user_id).all()

    # Convert to list of dictionaries
    password_list = [
        {
            'id': p.id,
            'title': p.title,
            'created_at': p.created_at.isoformat()
        } for p in passwords
    ]

    return jsonify(password_list), 200

@password_bp.route('/retrieve/<int:password_id>', methods=['POST'])
@jwt_required()
def retrieve_password(password_id):
    """
    Retrieve a specific password
    """
    current_user_id = get_jwt_identity()
    data = request.get_json()

    # Find the password
    password = Password.query.filter_by(id=password_id, user_id=current_user_id).first()
    if not password:
        return jsonify({'message': 'Password not found'}), 404

    # Verify master password
    master_key, _ = SecurityService.derive_key(data.get('master_password'))

    try:
        # Decrypt and return password
        decrypted_password = password.decrypt_password(master_key)
        return jsonify({'title': password.title, 'password': decrypted_password}), 200
    except Exception:
        return jsonify({'message': 'Decryption failed'}), 400

@password_bp.route('/delete/<int:password_id>', methods=['DELETE'])
@jwt_required()
def delete_password(password_id):
    """
    Delete a specific password
    """
    current_user_id = get_jwt_identity()

    # Find and delete the password
    password = Password.query.filter_by(id=password_id, user_id=current_user_id).first()
    if not password:
        return jsonify({'message': 'Password not found'}), 404

    db.session.delete(password)
    db.session.commit()

    return jsonify({'message': 'Password deleted successfully'}), 200