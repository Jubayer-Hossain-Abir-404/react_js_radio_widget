import { backArrowIcon, switchIcon } from "../../assets";
import "./style.css";
const Header = (props) => {
  return (
    <div className="header-container">
      {/* three components in header is in flex and space between them is justified */}
      <header className="header flex justify-sb">
        <button className="back_arrow_button">
          <img src={backArrowIcon} className="back_arrow_image" alt="" />
        </button>
        <div className="stations_text">STATIONS</div>
        <button className="switch_button">
          <img src={switchIcon} alt="" />
        </button>
      </header>
    </div>
  );
};

export default Header;
