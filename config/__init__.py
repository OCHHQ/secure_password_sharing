import os
import secrets
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


def validate_env_vars(required_vars):
    """
    Validates that required environment variables are set.
    """
    for var in required_vars:
        if not os.getenv(var):
            raise ValueError(f"Environment variable '{var}' is missing.")


# Validate essential environment variables
validate_env_vars(['SECRET_KEY', 'DATABASE_URL'])


class Config:
    """Base configuration class"""
    SECRET_KEY = os.getenv('SECRET_KEY', secrets.token_hex(32))  # Use a secure fallback if missing
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///password_sharing.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Security settings
    PASSWORD_SHARE_MAX_AGE = 24 * 60 * 60  # 24 hours in seconds
    MAX_PASSWORD_VIEWS = int(os.getenv('MAX_PASSWORD_VIEWS', 3))  # Fallback to 3 views if not set

    # Logging and session security for production
    LOGGING_LEVEL = os.getenv('LOGGING_LEVEL', 'WARNING')
    SESSION_COOKIE_SECURE = os.getenv('SESSION_COOKIE_SECURE', 'True') == 'True'
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'


class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = False


class ProductionConfig(Config):
    DEBUG = False
    TESTING = False

    # Production-specific security settings
    SESSION_COOKIE_SECURE = True  # Enforce secure cookies in production


class TestingConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'  # Use in-memory database for testing
    SESSION_COOKIE_SECURE = False  # No secure cookies in testing environments


def get_config():
    """
    Dynamically select configuration based on environment.

    Returns:
        Config: Configuration class
    """
    config_name = os.getenv('FLASK_ENV', 'development')
    config_mapping = {
        'development': DevelopmentConfig,
        'production': ProductionConfig,
        'testing': TestingConfig
    }
    return config_mapping.get(config_name, DevelopmentConfig)
