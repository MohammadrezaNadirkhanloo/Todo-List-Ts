import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ItemList: React.FC = () => {
  const [isActive, setisActive] = useState(false);
  const handelChecked = () => {
    setisActive((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center gap-x-6 bg-gray-400 px-6 py-3 my-4 rounded-lg border border-gray-300">
        <input
          type="checkbox"
          checked={isActive}
          onChange={handelChecked}
          className="checkbox checkbox-sm checkbox-primary checked:checkbox-secondary"
        />
        <p
          className={`  ${
            isActive ? "text-gray-300 line-through" : "text-gray-100"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          nulla est quae dicta, atque corporis quasi consectetur officiis
          excepturi, soluta consequuntur consequatur beatae quidem. Dolore
          nostrum dolores voluptatibus repellat ut?
        </p>
        <button className="btn btn-ghost hover:text-error hover:bg-gray-400 text-gray-200 px-3">
          <RiDeleteBin6Line size={22} />
        </button>
      </div>
    </>
  );
};
export default ItemList;
