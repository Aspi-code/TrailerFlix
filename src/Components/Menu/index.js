import React from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./menu.css";
import Button from "../../Components/Button/index";

export default function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Alura Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}
