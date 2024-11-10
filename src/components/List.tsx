import Item from "./Item";

function List() {
  return (
    <div className="space-y-7 h-full">
      <div >
        <p className="font-bold text-xl flex items-center text-primary gap-x-2">
          Tasks created <span className="badge text-gray-100 bg-gray-400">10</span>
        </p>
      </div>
      <div className="h-full"><Item /></div>
    </div>
  );
}

export default List;
