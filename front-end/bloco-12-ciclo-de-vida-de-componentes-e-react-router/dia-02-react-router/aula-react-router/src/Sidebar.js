import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <section>
                <nav>
                    <Link to="/" >Home</Link>
                        <br />
                        <br />
                    <Link to="/agenda/" >Agenda</Link>
                        <br />
                        <br />
                    <Link to="/aovivo" >Aulas ao Vivo</Link>
                        <br />
                        <br />
                    <Link to="/talks" >Trybe Talks</Link>
                </nav>
            </section>
        )
    }
}

export default Sidebar;