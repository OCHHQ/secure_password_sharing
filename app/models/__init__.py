# models/__init__.py
from flask import Flask
from config.database import DatabaseConfig
from config import get_config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from .user import User

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()


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

    # Initialize database
    db.init_app(app)
    migrate.init_app(app, db)

    # Import and register blueprints
    from app.routes import auth_bp, password_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(password_bp, url_prefix='/passwords')

    # Optional: Configure error handlers
    @app.errorhandler(404)
    def not_found_error(error):
        return {'message': 'Resource not found'}, 404

    @app.errorhandler(500)
    def internal_error(error):
        db.session.rollback()
        return {'message': 'Internal server error'}, 500

    return app
