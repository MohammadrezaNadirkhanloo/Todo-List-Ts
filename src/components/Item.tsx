import { useEffect, useState } from "react";
import Itemnot from "../ui/Itemnot";
import ItemList from "../ui/Item";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

function Item() {
  const [first, setfirst] = useState(false);
  const count = useSelector((state: RootState) => state.todoList);

  useEffect(() => {
    if (count.length) return setfirst(true);
    setfirst(false);
  }, [count]);

  if (!first) return <Itemnot />;
  return (
    <div>
      {count.map((item) => (
        <ItemList
          key={item.id}
          title={item.title}
          complete={item.complete}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default Item;
