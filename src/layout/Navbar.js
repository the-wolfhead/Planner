import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedoutLinks';
const Navbar = () =>{
    return (
        <nav className="nav wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Planner</Link>
                <SignedInLinks />
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar