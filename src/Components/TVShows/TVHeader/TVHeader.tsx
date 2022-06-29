import { useRef, useState, useEffect } from 'react';
import "./TVHeader.css";

import { ReactComponent as GridIcon } from '../../../assets/icons/grid-menu.svg';
import { ReactComponent as ThumbnailsIcon } from '../../../assets/icons/thumbnails-menu.svg';
import { ReactComponent as ListIcon } from '../../../assets/icons/list-menu.svg';

export default function TVHeader({ setLayoutType }:any) {

    const viewRefs = useRef<HTMLDivElement>(null);

    const layoutIcons = [<GridIcon />, <ThumbnailsIcon />, <ListIcon />];

    const handleLayoutClick = (e:any, index:number) => {
        const layoutTypes = ["grid", "thumb", "list"];
        const refChildren = viewRefs.current!.childNodes as any as Array<HTMLElement>
        refChildren.forEach((e) => {
            e.classList.remove("active");
        });
        e.target.classList.add("active");
        setLayoutType(layoutTypes[index]);
    }

  return (
    <div className="tvHeaderWrapper">
        <h1>TV Shows</h1>
        <p>TV shows sorted alphabetically.</p>
        <div className="viewAbsolute">
            <div className="viewWrapper" ref={viewRefs}>
                {layoutIcons.map((e:any, i:number) => {
                    return (
                        <div key={i} className={i === 0 ? "viewIconWrapper active" : "viewIconWrapper"} onClick={(e) => handleLayoutClick(e, i)}>{e}</div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}
