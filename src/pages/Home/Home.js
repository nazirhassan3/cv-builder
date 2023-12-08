import "./Home.css";
import logo from "../../5988705.png";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Home() {
  const location = useLocation();
  const { hash, pathname, search } = location;

  return (
    <div className="App">
      <header class="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 50px  0 20px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" class="logo" />
          <h1 class="header__title">CV Builder</h1>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
          <Link style={{ color: `${pathname === "/" ? "red" : "#fff"}`, textDecoration: "none", fontWeight: "600", fontSize: "19px" }} to="/">
            Home
          </Link>
          <Link style={{ color: `${pathname === "/viewall" ? "red" : "#fff"}`, textDecoration: "none", fontWeight: "600", fontSize: "19px" }} to="/viewall">
            View All Resume
          </Link>
        </div>
      </header>
      <div style={{ padding: "50px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
