import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../Redux/todo/todoListSlice";

interface Props {
  id: number;
  title: string;
  complete: boolean;
}
const ItemList: React.FC<Props> = ({ title, complete, id }) => {
  const dispatch = useDispatch();

  const handelChecked = () => {
    dispatch(toggleComplete(id));
  };
  const handelDelete = () => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div
        className={`flex justify-between gap-x-6 bg-gray-400 px-6 py-3 my-4 rounded-lg shadow ${
          complete ? "" : "border border-gray-300"
        }`}
      >
        <div className="flex items-center gap-x-6 w-5/6 ">
          <input
            type="checkbox"
            checked={complete}
            onChange={handelChecked}
            className="checkbox checkbox-sm checkbox-primary checked:checkbox-secondary"
          />
          <p
            className={` truncate  ${
              complete ? "text-gray-300 line-through" : "text-gray-100"
            }`}
          >
            {title}
          </p>
        </div>
        <div className="flex-none">

        <button
          onClick={handelDelete}
          className="btn btn-ghost hover:text-error hover:bg-gray-400 text-gray-200 px-3 justify-end"
        >
          <RiDeleteBin6Line size={22} />
        </button>
        </div>
      </div>
    </>
  );
};
export default ItemList;
