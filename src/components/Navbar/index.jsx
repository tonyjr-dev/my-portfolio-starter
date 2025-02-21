import "./Navbar.css"
import Logo from "../../assets/Logo"

const Navbar = () => {
    return (
        <nav className="card flex__center navbar">
            <div className="flex__center log">
                <Logo/>
            </div>
        </nav>
    )
}

export default Navbar