import { Link } from "react-router-dom";
import logo from "../../../assets/images/roofologo.png"
const Logo = () => {
    return (
        <Link to='/'><img src={logo} alt="logo" className="hidden md:block w-16 h-14" /></Link>
        );
};

export default Logo;
// #377b82 blue

// #e63024 red
// #f14e38 orange