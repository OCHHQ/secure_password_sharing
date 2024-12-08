import os
from app import create_app, db
from flask_jwt_extended import JWTManager

# Create application
app = create_app(os.getenv('FLASK_ENV', 'development'))

# Initialize JWT
jwt = JWTManager(app)

if __name__ == '__main__':
    # Ensure database is created
    with app.app_context():
        db.create_all()

    # Run the application
    app.run(debug=True, host='0.0.0.0', port=5000)
