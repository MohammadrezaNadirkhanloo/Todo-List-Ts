import { useEffect, useState } from "react";
import Itemnot from "../ui/Itemnot";
import ItemList from "../ui/Item";

function Item() {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    setfirst((prev) => !prev);
  }, [first]);

  if (!first) return <Itemnot />;
  return (
    <div>
      <ItemList />
    </div>
  );
}

export default Item;
