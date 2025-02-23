import "./Navbar.css"
import Logo from "../../assets/Logo"
import { FaTimes } from "react-icons/fa";
import { menu } from "../../data";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered
} from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
    const [showSidebar,setShowSidebar] = useState(false);
    return (
        <nav className="card flex__center navbar">
            {showSidebar && (
                <div
                className="aside__overlay"
                onClick={() => setShowSidebar(!showSidebar)}
                />)}
            <div className="flex__center logo" onClick={()=>scroll.
                scrollToTop({ duration: 500 })}>
                <Logo/>
            </div>
            <aside className="flex__center sidebar">
                <div className="flex sidebar__top">
                    <span className="icon__container closebtn"
                    onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <FaTimes />
                    </span>
                </div>
                <div className="flex sidebar__middle">
                    {
                      menu.map((list,index)=>(
                        <Link 
                        to={list.name.toLowerCase()}
                        spy={true}
                        key={index}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="tab"
                        activeClass="btn__shine"
                        >
                        {list.name}
                        </Link>
                      ))
                    }
                </div>
            </aside>
            <div className="flex__center buttons__wrapper">
                <Link to="contact" className="btn flex__center hire__btn"> 
                Hire Me 
                <div className="flex__center icon">
                    <FaArrowUpRightFromSquare/>
                </div>
                 
                </Link>
                    <FaBarsStaggered 
                    className="menu" 
                    onClick={()=> setShowSidebar(!showSidebar)} />
            </div>
        </nav>
    )
}

export default Navbar