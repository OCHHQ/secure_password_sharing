# app/__init__.py
from flask import Flask
from config import get_config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS
import os

# Initialize extensions outside the function to avoid circular imports
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app(config_name='development'):
    """
    Application factory function

    :param config_name: Configuration environment (development, testing, production)
    :return: Configured Flask application
    """
    # Create Flask app instance
    app = Flask(__name__)

    # Load configuration
    config_class = get_config(config_name)
    app.config.from_object(config_class)

    # Set secret key for JWT (ensure this is a strong, unique secret)
    app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'your-fallback-secret-key')

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Import blueprints INSIDE the function to avoid circular imports
    from .routes import auth_bp, password_bp, root_bp

    # Register the blueprints
    app.register_blueprint(root_bp)
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(password_bp, url_prefix='/passwords')

    # Configure error handlers
    @app.errorhandler(404)
    def not_found_error(error):
        return {'message': 'Resource not found'}, 404

    @app.errorhandler(500)
    def internal_error(error):
        db.session.rollback()
        return {'message': 'Internal server error'}, 500

    # CORS configuration
    CORS(app, resources={r"/*": {"origins": "*"}})

    return app