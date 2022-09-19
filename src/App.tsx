import useWindowDimensions from "./utils/useWindowDimensions";
import DesktopContent from "./DesktopContent";
import MobileContent from "./MobileContent";
import { useState, useEffect } from "react";

function App() {
  const { width } = useWindowDimensions();
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch("ontouchstart" in window);
  }, []);

  return (
    <div className="flex justify-center items-start bg-orange-300  md:bg-gray-200 h-auto md:h-screen">
      {width > 767 ? (
        <DesktopContent isTouch={isTouch} />
      ) : (
        <MobileContent isTouch={isTouch} />
      )}
    </div>
  );
}

export default App;
