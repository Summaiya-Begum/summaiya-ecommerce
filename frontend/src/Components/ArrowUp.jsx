import React from "react";
import "../Css/arrowup.css"
import { FaAngleUp } from "react-icons/fa";
import { Button } from "@chakra-ui/button";
const ArrowUp = () => {
  const [scrollTop, setScrollTop] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scrollTop && (
        <button onClick={bottomToTop} className="backToTop" >
          <FaAngleUp size={20} cursor={"pointer"} _hover={{
            color: "black" 
          }} />
        </button>
      )}
    </>
  );
};
export default ArrowUp;