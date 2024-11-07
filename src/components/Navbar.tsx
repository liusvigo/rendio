import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container flex items-baseline justify-between py-8">
      <Link to="/" className="text-lg font-bold text-orange-400">
        Rendio
      </Link>
      <Link to="/account" className="hover:text-orange-300">
        Account
      </Link>
    </nav>
  );
};

export default Navbar;
