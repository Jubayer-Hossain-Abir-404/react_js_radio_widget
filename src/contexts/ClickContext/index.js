import { useState, createContext, useContext } from "react";

// custom hook creation
const ClickContext = createContext();

export const useClick = () => useContext(ClickContext);

function ClickContextProvider(props) {
  const [bottomText, setBottomText] = useState(0);

  const [slideUp1, setSlideUp1] = useState(false);
  const [slideUp2, setSlideUp2] = useState(false);
  const [slideUp3, setSlideUp3] = useState(false);
  const [slideUp4, setSlideUp4] = useState(false);
  const [slideUp5, setSlideUp5] = useState(false);
  
//   each slideUp function is called and the radio which gets clicked becomes true
//   rest of the radio becomes false
  function slidefunc1() {
    setSlideUp2(false);
    setSlideUp1(!slideUp1);
    setSlideUp3(false);
    setSlideUp4(false);
    setSlideUp5(false);
    // if all the slideState is false then set BottomText to 0
    if (slideUp1) {
      setBottomText(0);
    } else {
      setBottomText(1);
    }
  }
  function slidefunc2() {
    setSlideUp1(false);
    setSlideUp2(!slideUp2);
    setSlideUp3(false);
    setSlideUp4(false);
    setSlideUp5(false);

    if (slideUp2) {
      setBottomText(0);
    } else {
      setBottomText(2);
    }
  }
  function slidefunc3() {
    setSlideUp2(false);
    setSlideUp3(!slideUp3);
    setSlideUp1(false);
    setSlideUp4(false);
    setSlideUp5(false);

    if (slideUp3) {
      setBottomText(0);
    } else {
      setBottomText(3);
    }
  }
  function slidefunc4() {
    setSlideUp2(false);
    setSlideUp4(!slideUp4);
    setSlideUp1(false);
    setSlideUp3(false);
    setSlideUp5(false);

    if (slideUp4) {
      setBottomText(0);
    } else {
      setBottomText(4);
    }
  }
  function slidefunc5() {
    setSlideUp2(false);
    setSlideUp5(!slideUp5);
    setSlideUp1(false);
    setSlideUp3(false);
    setSlideUp4(false);
    if (slideUp5) {
      setBottomText(0);
    } else {
      setBottomText(5);
    }
  }

//   all of these values are being returned
  const value = {
    bottomText,
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
  };
  return (
    <ClickContext.Provider value={value}>
      {/* these values will be used over all the childrens */}
      {props.children}
    </ClickContext.Provider>
  );
}

export default ClickContextProvider;
