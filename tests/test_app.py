import sys
import os
print("Current sys.path:", sys.path)  # Add this line to debug
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../app')))
from sqlalchemy.orm import declarative_base
Base = declarative_base()

import unittest
from app import create_app, db
from app.models import User  # Import your models as needed


class BasicTests(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        """Set up any state specific to the test session."""
        # Create app using the app factory
        cls.app = create_app('testing')  # Ensure `create_app` initializes `db` properly
        cls.client = cls.app.test_client()
        cls.app.config['TESTING'] = True
        cls.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'

        # Create tables for the test database
        with cls.app.app_context():
            db.create_all()

    def test_example(self):
        """A simple test to ensure the test setup works."""
        response = self.client.get('/')  # Adjust based on your app's endpoints
        self.assertEqual(response.status_code, 200)

    @classmethod
    def tearDownClass(cls):
        """Clean up after tests."""
        with cls.app.app_context():
            db.drop_all()

