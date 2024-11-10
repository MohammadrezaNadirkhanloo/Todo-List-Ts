import List from "./List";
import Chart from "./Chart";

function Body() {
  return (
    <div className="mt-12 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4">
        <div className="xl:col-span-2 ">
          <List />
        </div>
        <div className="">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default Body;
