import { useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Items } from "./items";

export const Todo = () => {
  const inputRef = useRef();
  const [shopList, setShopList] = useState([]);

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }

    const newItem = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setShopList((prev) => [...prev, newItem]);
    inputRef.current.value = "";
  };

  const deleteItem = (id) => {
    setShopList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const toggle = (id) => {
    setShopList((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: !item.isComplete };
        }
        return item;
      });
    });
  };
  useEffect(() => {}, [shopList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mb-10">
        <FaCartShopping size={40} className="mr-2" />
        <h1 className="font-bold text-2xl">SHOPPING LIST</h1>
      </div>

      {/* input Box */}
      <div className="bg-gray-200 rounded-full flex ">
        <input
          placeholder="Office table"
          type="text"
          ref={inputRef}
          className="rounded-full h-12 w-80 flex-1 placeholder:text-lg bg-transparent border-0 outline-none placeholder:text-slate-600 pl-6 pr-2"
        />
        <button
          onClick={add}
          className="rounded-full bg-gray-300  w-20 cursor-pointer hover:bg-black hover:text-white"
        >
          ADD
        </button>
      </div>

      {/* shopping list */}
      <div className="mt-10">
        {shopList.map((item, index) => {
          return (
            <Items
              key={index}
              text={item.text}
              isComplete={item.isComplete}
              deleteItem={deleteItem}
              id={item.id}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};
