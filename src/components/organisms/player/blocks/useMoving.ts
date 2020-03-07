import * as React from "react";

interface IProps<T = HTMLDivElement> {
  position: number;
  ref: React.RefObject<T>;
  onChange?: (v: number) => void;
}

export function useMoving<T extends HTMLElement>({ position, ref, onChange }: IProps<T>) {
  const [positionX, setPositionX] = React.useState<number>(position);
  const isMouseDown = React.useRef(false);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  React.useEffect(() => {
    setPositionX(position);
  }, [position]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement> & React.TouchEvent<HTMLDivElement> & Event
  ) => {
    if (!ref || !ref.current || !isMouseDown.current) {
      return;
    }

    const x = e.touches ? e.touches[0].pageX : e.pageX;
    const rect = ref.current.getBoundingClientRect() as DOMRect;
    const percentage = ((x - rect.x) / ref.current.offsetWidth) * 100;

    let computed = percentage > 100 ? 100 : percentage;
    computed = computed < 0 ? 0 : computed;

    setPositionX(computed);
  };

  const handleMouseDown = React.useCallback(() => {
    isMouseDown.current = true;
  }, []);

  const getFreshState = React.useCallback(() => {
    let state = 0;
    setPositionX(posX => (state = posX));
    return state;
  }, []);

  const handleMouseUp = React.useCallback(() => {
    isMouseDown.current = false;
    onChange && onChange(getFreshState());
  }, [positionX]);

  return {
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    positionX,
  };
}
