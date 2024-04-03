import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const usePageScroll = () => {
  const [y, setY] = useState(window.scrollY);
  const [direction, setDirection] = useState(null);
  //   const [value, setValue] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (y > latest) {
      setDirection("up");
    } else if (y < latest) {
      setDirection("down");
    }
    setY(latest);
  });

  return { y, direction };
};

export default usePageScroll;
