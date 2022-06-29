import React, {useState, useRef, useEffect} from "react";

import "./Highlights.css"
import { pushHighlights } from '../../../getData';
import MoviecardSlide from "./MoviecardSlide/MoviecardSlide";

export default function Highlights() {

  const [highlightData, setHighlightData] = useState<object>([]);

  const buttonsRef = useRef<HTMLDivElement>(null);
  const train = useRef<HTMLDivElement>(null);

  const handleClick = (e:any, index: number) => {
    const refChildren = buttonsRef.current!.childNodes as any as Array<HTMLElement>;
    refChildren.forEach((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");

    train.current!.style.left = `${index * -1075}px`
    
  }

  const setHLData = async () => {
    setHighlightData(await pushHighlights());
  }

  useEffect(() => {
    setHLData();
  }, []);

  return (
    <div className="highlightsWrapper">
      <div className="highlightsHeader">
        <div className="col text">
          <h1>Highlights today</h1>
          <h2>Be sure not to miss these reviews today</h2>
        </div>
        <div className="col" ref={buttonsRef}>
          {Object.keys(highlightData).map((el, index) => {
            return (
              <button key={index} className={index === 0 ? "active" : ""} onClick={(e) => handleClick(e, index)}>{el}</button>
            )
          })}
        </div>
      </div>
      <div className="moviecardsParentWrapper">
        <div className="moviecardsParent" ref={train}>
          {Object.values(highlightData).map((el, i) => {
            return <MoviecardSlide key={i} data={el}/>
          })}
        </div>
      </div>
    </div>
  )
}
