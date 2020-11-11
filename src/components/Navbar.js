// import Logo from "../Images/logo/FRS2.png";

const Navbar = () => {
    let url = "#";
    return (
        <>
            <nav style={{ backgroundColor: "#00acc1" }} className="navbar navbar-expand-sm">
                <ul className="navbar-nav">
                    {/* <li className="nav-item">
                        <a className="nav-link text-light p-1 pl-5" href={url} >
                            <img src={Logo} width={"40px"} alt="FRS" />
                        </a>
                    </li> */}

                    <li className="nav-item active">
                        <a className="nav-link text-light p-1 pl-5" href={url}>
                            <h5>
                                Face Recognition System
                            </h5>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;