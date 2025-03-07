import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface ListgroupProps{
    items: string[];
    heading: string;
    //(item:string) => void
    onSelectItem : (item:string) => void;
}

function ListGroup({items,heading, onSelectItem}: ListgroupProps) {
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' :'list-group-item'}key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item);}}>{item}</li>
                ))} 
            </ul>
        </>
    )
}

export default ListGroup;