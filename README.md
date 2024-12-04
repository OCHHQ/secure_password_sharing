# Secure Password Sharing Platform

## Project Overview
The Secure Password Sharing Platform is a robust web application designed to securely share and manage passwords using advanced encryption and security measures. It provides user authentication, encrypted storage, and safe sharing mechanisms, ensuring high-level data protection.

## Team Members
Chiba Ismail: Lead Developer, Backend Developer
Enoseje Collins: Backend Developer
Obah Edwin: Backend Developer
Onyinyechi Nwaneri: Frontend Developer

---

## Features
- **User Authentication**: Secure login and registration mechanisms.
- **Password Management**: Store, retrieve, and share passwords securely.
- **Encryption**: Robust encryption and decryption for password security.
- **Access Control**: Users can only view and manage their own passwords.
- **Audit Logging**: Tracks access and modifications for security purposes.

---

## Setup Instructions

### 1. Clone the Repository
```bash
$ git clone https://github.com/yourusername/secure_password_sharing.git
$ cd secure_password_sharing
```

### 2. Create a Virtual Environment
```bash
$ python3 -m venv venv
```

### 3. Activate the Virtual Environment
- **Linux/MacOS**:
  ```bash
  $ source venv/bin/activate
  ```
- **Windows**:
  ```bash
  > venv\Scripts\activate
  ```

### 4. Install Dependencies
```bash
$ pip install -r requirements.txt
```

### 5. Configure Environment Variables
Create a `.env` file in the project root directory and add the following:
```env
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///passwords.db
```
Update `SECRET_KEY` and `DATABASE_URL` as per your requirements.

### 6. Run Database Migrations
```bash
$ flask db init
$ flask db migrate -m "Initial migration."
$ flask db upgrade
```

### 7. Run the Application
```bash
$ python run.py
```
Visit [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## Technologies Used
- **Backend**: Flask, Flask-SQLAlchemy, Flask-Bcrypt, Flask-Migrate, Flask-CORS
- **Encryption**: Cryptography for secure password encryption and decryption
- **Database**: SQLite (can be replaced with PostgreSQL or MySQL for production)
- **Deployment**: Gunicorn (for production-ready WSGI server)

---

## Project Structure
```
secure_password_sharing/
├── app/
│   ├── __init__.py      # Flask app initialization
│   ├── models.py        # Database models
│   ├── routes.py        # Application routes
│   └── utils.py         # Utility functions (encryption, validation)
├── migrations/          # Database migration files
├── templates/           # HTML templates for the frontend
├── static/              # Static assets (CSS, JS, images)
├── .env                 # Environment variables
├── requirements.txt     # Python dependencies
├── run.py               # Application entry point
└── README.md            # Project documentation
```

---

## Security Best Practices

1. **Encryption**:
   - Passwords are encrypted before storage using AES (Advanced Encryption Standard).
   - Avoid storing sensitive data in plain text.

2. **Authentication**:
   - Use Flask-Bcrypt for password hashing.
   - Implement multi-factor authentication (future enhancement).

3. **Access Control**:
   - Ensure users can only view and edit their own data.

4. **Audit Logging**:
   - Log all access and modifications to sensitive data for accountability.

5. **Secure Deployment**:
   - Use HTTPS in production to encrypt data in transit.
   - Protect the application with a firewall and follow least privilege principles.

---

## Next Steps

1. **Backend Development**
   - Implement user authentication routes (register, login, logout).
   - Develop CRUD operations for password management.
   - Encrypt passwords before saving to the database.

2. **Database Management**
   - Configure the database to store user information and encrypted passwords.
   - Set up efficient indexing for quick retrieval.

3. **Frontend Integration**
   - Build user-friendly interfaces using HTML/CSS and integrate with backend APIs.
   - Ensure responsive design for mobile compatibility.

4. **Testing**
   - Write unit tests for all key functionalities.
   - Perform penetration testing to identify and fix vulnerabilities.

5. **Deployment**
   - Deploy the application on a production server using Gunicorn and Nginx.
   - Monitor performance and implement auto-scaling if necessary.

---

## Contribution Guidelines
We welcome contributions! Please fork the repository, create a feature branch, and submit a pull request. Ensure all code adheres to PEP 8 standards and is well-documented.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For any questions or feedback, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)

---

Start building secure password-sharing solutions today! 🚀