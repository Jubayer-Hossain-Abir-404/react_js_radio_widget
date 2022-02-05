import "./style.css";
import { useClick } from "../../contexts/ClickContext";
const FooterContent = (props) => {
  const { bottomText } = useClick();


  return (
    <div className="footer-container">
      condition checking
      {/* based on bottomText value footer text is being displayed */}
      {bottomText === 0 && <div></div>}

      {bottomText === 1 && (
        <div className="footer_text">
          <p>CURRENTLY PLAYING</p>
          <p>Putin FM</p>
        </div>
      )}

      {bottomText === 2 && (
        <div className="footer_text">
          <p>CURRENTLY PLAYING</p>
          <p>Dribble FM</p>
        </div>
      )}

      {bottomText === 3 && (
        <div className="footer_text">
          <p>CURRENTLY PLAYING</p>
          <p>Doge FM</p>
        </div>
      )}

      {bottomText === 4 && (
        <div className="footer_text">
          <p>CURRENTLY PLAYING</p>
          <p>Ballads FM</p>
        </div>
      )}

      {bottomText === 5 && (
        <div className="footer_text">
          <p>CURRENTLY PLAYING</p>
          <p>Maximum FM</p>
        </div>
      )}
    </div>
  );
};

export default FooterContent;
