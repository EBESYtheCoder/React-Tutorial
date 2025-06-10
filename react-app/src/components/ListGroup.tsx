import { useState } from "react";

// {items: [], heading: string}

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


  // items = [];
  // const message = items.length === 0 ? <p>No item found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
