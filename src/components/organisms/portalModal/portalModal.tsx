import * as React from "react";
import ReactDOM = require("react-dom");

function usePortal(id: string) {
  const rootElemRef = React.useRef<HTMLDivElement | null>(null);
  const currentScroll = React.useRef(document.documentElement.scrollTop);

  React.useEffect(() => {
    const parentElem = document.querySelector(`#${id}`);

    if (!parentElem || !rootElemRef.current) {
      return
    }

    parentElem.appendChild(rootElemRef.current);

    return () => {
      document.body.style.overflowY = "auto";
      window.scrollTo(0, currentScroll.current)

      if (rootElemRef.current) {
        rootElemRef.current.remove();
      }
    };
  }, []);

  if (!rootElemRef.current) {
    document.body.style.overflowY = "hidden";
    rootElemRef.current = document.createElement("div");
    rootElemRef.current.className = "playlist-modal";

    window.scrollTo(0, 0)
  }

  return rootElemRef.current;
}


const Portal: React.FC = ({ children }) => {
  const target = usePortal("app");
  return ReactDOM.createPortal(
    children,
    target,
  );
};

export default Portal;