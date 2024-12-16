import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    <nav aria-label="Global" className="flex  justify-between mx:auto  p-6 items-center sticky shadow font-sans md:font-serif">
    <div>
      <a href="#">
        Project-name
      </a>
    </div>
    <div className="flex space-x-8 ">
      <a href="#Personal" className="">Products</a>
      <a href="#Manager"className="">Features</a>
      <a href="#"className="">Contact</a>
    </div>
    <div>
      <button><Link to="/login">Login</Link></button>
      <button><Link to="/Signup">/ Sign Up</Link></button>
    </div>
    </nav>
    </>
    
  )
}

export default Header