import "./topbar.scss";
// import {Face3, Mail} from "@mui/icons-material";
// import {Face3, Mail} from "@material-ui/core";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            {/* <Face3 className="icon"/> */}
            <span>+92 310 xxxx xxx</span>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon"/> */}
            <span>shamamatarif@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
