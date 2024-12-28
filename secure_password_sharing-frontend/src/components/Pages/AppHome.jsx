import { useUser } from '../Context/UserContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function AppHome() {
    const { user } = useUser();
    const {email, password, isLoggedIn } = user;
    const { logout } = useUser(); 

    return (
        <>
        <Header></Header>
        <div className='h-svh'>
        <div id='Vaults' className='block mx-auto md:w-3/4 py-20 justify-around'>
        </div>
        <div>
            <h1 className="text-3xl text-center font-semibold">Welcome to the Home Page</h1>
            {isLoggedIn && (
                <div>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <button onClick={logout}> <Link to={"/"}> LogOut</Link></button>
                </div>
                
            )}
            
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default AppHome
