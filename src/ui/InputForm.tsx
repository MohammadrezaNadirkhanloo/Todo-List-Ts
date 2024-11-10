import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todo/todoListSlice";
import Modal from "./Modal";

const InputForm: React.FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ title: value, complete: false, id: Date.now() }));
    setValue("");
  };
  return (
    <div className="px-5 flex items-center justify-center gap-x-2 ">
      <Modal />
      <form
        className="flex items-center justify-center gap-x-2 w-full"
        onSubmit={handelSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a new Task"
          className="w-full max-w-xl bg-gray-500 border-gray-700 placeholder:text-gray-300 input input-secondary text-gray-100 text-xl "
        />
        <button
          type="submit"
          className="btn bg-blue-dark btn-primary border-0 text-gray-100 font-medium text-lg "
        >
          <span className="hidden sm:block">Create</span>
          <IoMdAddCircleOutline size={24} />
        </button>
      </form>
    </div>
  );
};
export default InputForm;
