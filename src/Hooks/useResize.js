import {useState, useCallBack, useEffect, useRef} from 'react';

const useResize = ({ref, onResizeStart, onResizeOver, OnResizeEnd}) => {
  const [resizeState, updateResizeState] = useState('resizable');
  const resizeStart = e => {
    updateResizeState('resizing');

    onResizeStart && onResizeStart(e);
    e.stopPropagation();

  };
  const resizeOver = e => {
    e.preventDefault();
    updateResizeState('resizedOver');
    onResizeOver && onResizeOver(ev);
    e.stopPropagation();
  };

  const resizeEnd = e => {
    updateResizeState('Resizable');
    onResizeEnd && onResizeEnd(e);
  };
  useEffect(()=>{
    const elem = ref.current;
    if(elem){
      elem.setAttribute('resizable', true);
      elem.addEventListener('resizeStart', resizeStart);
      elem.addEventListener('resizeover', resizeOver);
      elem.addEventListener('resizeend', resizeEnd);
      return () => {
        elem.removeEventListener('resizeStart', resizeStart);
        elem.removeEventListener('resizeover', resizeOver);
        elem.removeEventListener('resizeend', resizeEnd);     
       };
    }
  }, [onResizeStart, onResizeOver, onResizeEnd]);
  return{
    resizeState : resizeState
  };
};
export default useResize;