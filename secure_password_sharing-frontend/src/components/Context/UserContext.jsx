/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


// Create the context
export const UserContext = createContext();

// Custom hook for easy access to the context
export const useUser = () => useContext(UserContext);

// UserProvider component to manage and provide the user state
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
        isLoggedIn: false,
    });

    // Function to update the user information
    const login = (email, password) => {
        setUser({ email, password, isLoggedIn: true });
    };

    const logout = () => {
        setUser({ email: '', password: '', isLoggedIn: false });
    };

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};