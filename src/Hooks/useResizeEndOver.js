import { useState, useEffect } from "react";

const useResizeEndOver = ({ ref, onResizeEnd, onResizeOver, onResizeEnter, onResizeExit }) => {
  const [ResizeOverState, updateResizeOverState] = useState("resizable");

  const resizeEndOver = ev => {
    onResizeOver && onResizeOver();
    updatrResizeOverState("resizing over");
  };

  const resizeEnd = ev => {
    onResizeEnd && onResizeEnd();
    updateResizeOverState("resizeend");
  };

  const resizeEnter = ev => {
    ev.preventDefault();
    onResizeEnter && onResizeEnter();
  };
  const resizeExit = ev => {
    ev.preventDefault();
    onResizeExit && onResizeExit();
  };
  useEffect(() => {
    const elem = ref.current;
    if (elem) {
      elem.addEventListener("resizeenter", resizeEnter);
      elem.addEventListener("resizeexit", resizeExit);
      elem.addEventListener("resizing over", resizeEndOver);
      elem.addEventListener("resizeend", resizeEnd);
      return () => {
        elem.removeEventListener("resizeenter", resizeEnter);
        elem.removeEventListener("resizeexit", resizeExit);
        elem.removeEventListener("resizing over", resizeEndOver);
        elem.removeEventListener("resizeend", resizeEnd);
      };
    }
  }, [resizeEndOver, resizeEnd]);
  return {
    useResizeEndOver
  };
};

export default useResizeEndOver;