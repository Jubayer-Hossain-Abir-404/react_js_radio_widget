import "./style.css";
import { plusIcon, minusIcon } from "../../assets";
import { useClick } from "../../contexts/ClickContext";
const BodyContent = (props) => {
  const {
    slideUp1,
    slideUp2,
    slideUp3,
    slideUp4,
    slideUp5,
    slidefunc1,
    slidefunc2,
    slidefunc3,
    slidefunc4,
    slidefunc5,
  } = useClick();

  return (
    <div className="body-container">
      {/* if slideUp1 is true then display
      else not display */}
      {slideUp1 && (
        <div className="radio1_content">
          <div className="header flex justify-sb">
            <button className="plus_btn">
              <img src={plusIcon} className="plus_image" alt="" />
            </button>
            <div className="radio_image">
              <img alt="" />
            </div>
            <button className="minus_btn">
              <img src={minusIcon} alt="" />
            </button>
          </div>
        </div>
      )}
      <div onClick={slidefunc1} className="radio1 flex justify-sb">
        <p>Putin FM</p>
        <p>66,6</p>
      </div>

      <div className="radio_border"></div>

      {slideUp2 && (
        <div className="radio2_content">
          <div className="header flex justify-sb">
            <button className="plus_btn">
              <img src={plusIcon} className="plus_image" alt="" />
            </button>
            <div className="radio_image">
              <img alt="" />
            </div>
            <button className="minus_btn">
              <img src={minusIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      <div onClick={slidefunc2} className="radio2 flex justify-sb">
        <p>Dribble FM</p>
        <p>101,2</p>
      </div>

      <div className="radio_border"></div>

      {slideUp3 && (
        <div className="radio3_content">
          <div className="header flex justify-sb">
            <button className="plus_btn">
              <img src={plusIcon} className="plus_image" alt="" />
            </button>
            <div className="radio_image">
              <img alt="" />
            </div>
            <button className="minus_btn">
              <img src={minusIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      <div onClick={slidefunc3} className="radio3 flex justify-sb">
        <p>Doge FM</p>
        <p>99,4</p>
      </div>

      <div className="radio_border"></div>

      {slideUp4 && (
        <div className="radio4_content">
          <div className="header flex justify-sb">
            <button className="plus_btn">
              <img src={plusIcon} className="plus_image" alt="" />
            </button>
            <div className="radio_image">
              <img alt="" />
            </div>
            <button className="minus_btn">
              <img src={minusIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      <div onClick={slidefunc4} className="radio4 flex justify-sb">
        <p>Ballads FM</p>
        <p>87,1</p>
      </div>

      <div className="radio_border"></div>

      {slideUp5 && (
        <div className="radio5_content">
          <div className="header flex justify-sb">
            <button className="plus_btn">
              <img src={plusIcon} className="plus_image" alt="" />
            </button>
            <div className="radio_image">
              <img alt="" />
            </div>
            <button className="minus_btn">
              <img src={minusIcon} alt="" />
            </button>
          </div>
        </div>
      )}

      <div onClick={slidefunc5} className="radio5 flex justify-sb">
        <p>Maximum FM</p>
        <p>142,2</p>
      </div>
    </div>
  );
};

export default BodyContent;
