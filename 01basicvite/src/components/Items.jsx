import { IoIosRadioButtonOn } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Items = ({ text, id, isComplete, deleteItem, toggle }) => {
  return (
    <div className="flex space-x-2 items-center justify-between my-2">
      {isComplete ? (
        <IoIosRadioButtonOn
          onClick={() => {
            toggle(id);
          }}
          size={30}
          className="cursor-pointer"
        />
      ) : (
        <IoIosRadioButtonOff
          onClick={() => {
            toggle(id);
          }}
          size={30}
          className="cursor-pointer"
        />
      )}

      <p
        className={`flex-1 text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
          isComplete ? "line-through" : ""
        }`}
      >
        {text}
      </p>
      <MdOutlineDeleteOutline
        size={30}
        onClick={() => {
          deleteItem(id);
        }}
        className="cursor-pointer"
      />
    </div>
  );
};
