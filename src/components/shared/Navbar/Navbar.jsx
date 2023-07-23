import Container from "../Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";

const Navbar = () => {
    
    return (
        <div className="fixed w-full bg-white z-10   mx-auto">
            <div className="py-4">
                <Container>
                    <div className="flex justify-between items-center gap-4 md:gap:0">
                        <Logo></Logo>
                        <Search></Search>
                        <MenuDropdown></MenuDropdown>

                    </div>
                </Container>
            </div>
            
        </div>
    );
};

export default Navbar;