# service/security.py
import base64
import os
from typing import Tuple, Optional

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend


class SecurityService:
    @staticmethod
    def generate_salt(length: int = 16) -> bytes:
        """
        Generate a cryptographically secure random salt.

        Args:
            length (int): Length of salt in bytes (must be > 0)

        Returns:
            bytes: Cryptographically secure random salt
        """
        if length <= 0:
            raise ValueError("Salt length must be greater than 0.")
        return os.urandom(length)

    @staticmethod
    def derive_key(password: str, salt: Optional[bytes] = None, iterations: int = 100000) -> Tuple[bytes, bytes]:
        """
        Derive a secure encryption key from a password using PBKDF2.

        Args:
            password (str): User's password
            salt (bytes, optional): Salt for key derivation
            iterations (int): Number of iterations for key stretching

        Returns:
            Tuple[bytes, bytes]: Derived key and salt
        """
        if not password:
            raise ValueError("Password cannot be empty.")
        if salt is None:
            salt = SecurityService.generate_salt()

        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=iterations,
            backend=default_backend()
        )
        derived_key = kdf.derive(password.encode('utf-8'))
        return derived_key, salt

    @staticmethod
    def encrypt_data(data: str, key: bytes) -> str:
        """
        Encrypt data using AES encryption (CFB mode).

        Args:
            data (str): Data to encrypt
            key (bytes): Encryption key

        Returns:
            str: Base64 encoded IV and ciphertext
        """
        if not data:
            raise ValueError("Data to encrypt cannot be empty.")
        if len(key) != 32:
            raise ValueError("Key length must be 32 bytes.")

        iv = os.urandom(16)
        cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
        encryptor = cipher.encryptor()
        encrypted_data = encryptor.update(data.encode('utf-8')) + encryptor.finalize()

        combined = {"iv": iv, "ciphertext": encrypted_data}
        return base64.b64encode(iv + encrypted_data).decode('utf-8')

    @staticmethod
    def decrypt_data(encrypted_data: str, key: bytes) -> str:
        """
        Decrypt AES encrypted data.

        Args:
            encrypted_data (str): Base64 encoded encrypted data
            key (bytes): Decryption key

        Returns:
            str: Decrypted data
        """
        if not encrypted_data:
            raise ValueError("Encrypted data cannot be empty.")
        if len(key) != 32:
            raise ValueError("Key length must be 32 bytes.")

        try:
            combined = base64.b64decode(encrypted_data.encode('utf-8'))
            iv = combined[:16]
            ciphertext = combined[16:]

            cipher = Cipher(algorithms.AES(key), modes.CFB(iv), backend=default_backend())
            decryptor = cipher.decryptor()
            decrypted = decryptor.update(ciphertext) + decryptor.finalize()
            return decrypted.decode('utf-8')
        except Exception as e:
            raise ValueError("Decryption failed. Ensure the key and data are correct.") from e

    @staticmethod
    def hash_password(password: str, salt: Optional[bytes] = None) -> Tuple[str, bytes]:
        """
        Securely hash a password using PBKDF2.

        Args:
            password (str): Password to hash
            salt (bytes, optional): Salt for password hashing

        Returns:
            Tuple[str, bytes]: Base64 encoded hashed password and salt
        """
        if not password:
            raise ValueError("Password cannot be empty.")
        salt = salt or SecurityService.generate_salt()
        hashed_key, _ = SecurityService.derive_key(password, salt)
        hashed_password = base64.b64encode(hashed_key).decode('utf-8')
        return hashed_password, salt

    @staticmethod
    def verify_password(stored_password: str, stored_salt: bytes, provided_password: str) -> bool:
        """
        Verify a password against its stored hash.

        Args:
            stored_password (str): Previously hashed password
            stored_salt (bytes): Salt used in original hashing
            provided_password (str): Password to verify

        Returns:
            bool: True if password is correct, False otherwise
        """
        new_hash, _ = SecurityService.hash_password(provided_password, stored_salt)
        return new_hash == stored_password

    @staticmethod
    def generate_secure_token(length: int = 32) -> str:
        """
        Generate a cryptographically secure random token.

        Args:
            length (int): Length of token in bytes (must be > 0)

        Returns:
            str: Base64 encoded secure token
        """
        if length <= 0:
            raise ValueError("Token length must be greater than 0.")
        return base64.urlsafe_b64encode(os.urandom(length)).decode('utf-8')
