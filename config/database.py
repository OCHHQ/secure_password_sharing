# config/database.py
import os
from typing import Optional
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base
import logging


class DatabaseConfig:
    """
    Centralized database configuration management
    Supports multiple database types and environment-specific settings
    """
    # Base for declarative models
    Base = declarative_base()
    _engine = None  # Store the engine for retrieval

    @classmethod
    def get_database_url(cls,
                         db_type: Optional[str] = None,
                         testing: bool = False) -> str:
        """
        Retrieve database URL based on environment and configuration
        """
        if testing:
            return 'sqlite:///:memory:'

        # Check environment variable first
        env_db_url = os.getenv('DATABASE_URL')
        if env_db_url:
            return env_db_url

        # Default fallbacks
        if db_type:
            if db_type.lower() == 'postgresql':
                return os.getenv('POSTGRESQL_URL', 'postgresql://user:password@localhost/dbname')
            elif db_type.lower() == 'mysql':
                return os.getenv('MYSQL_URL', 'mysql://user:password@localhost/dbname')

        # Default SQLite
        return 'sqlite:///password_sharing.db'

    @classmethod
    def create_session(cls,
                       database_url: Optional[str] = None,
                       testing: bool = False) -> scoped_session:
        """
        Create a database session
        """
        # Use provided URL or get default
        url = database_url or cls.get_database_url(testing=testing)
        cls._engine = create_engine(
            url,
            pool_pre_ping=True,
            pool_recycle=3600,
            echo=os.getenv('SQLALCHEMY_ECHO', 'False').lower() == 'true'
        )
        logging.info(f"Database connected: {cls.mask_url(url)}")

        session_factory = sessionmaker(bind=cls._engine)
        return scoped_session(session_factory)

    @classmethod
    def init_database(cls, session: scoped_session, drop_existing: bool = False):
        """
        Initialize database
        """
        if cls._engine is None:
            raise RuntimeError("Engine is not initialized. Call create_session first.")

        if drop_existing:
            cls.Base.metadata.drop_all(cls._engine)

        cls.Base.metadata.create_all(cls._engine)
        logging.info("Database initialized.")

    @classmethod
    def get_connection_info(cls) -> dict:
        """
        Retrieve database connection information
        """
        url = cls.get_database_url()
        return {
            'url': cls.mask_url(url),
            'type': url.split('://')[0],
            'is_memory_db': url == 'sqlite:///:memory:',
            'is_file_db': url.startswith('sqlite:///'),
        }

    @staticmethod
    def mask_url(url: str) -> str:
        """
        Mask sensitive details in the connection URL
        """
        if '@' in url:
            parts = url.split('@')
            user_info = parts[0].split('://')[-1]
            masked_user_info = ':'.join(['***' if p else '' for p in user_info.split(':')])
            return f"{parts[0].split('://')[0]}://{masked_user_info}@{parts[1]}"
        return url
