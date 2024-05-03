import React, { useState } from "react";

export default function ItemList() {
  const [itemsVisibility, setItemsVisibility] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  function toggleItemVisibility(itemKey) {
    setItemsVisibility({
      ...itemsVisibility,
      [itemKey]: !itemsVisibility[itemKey],
    });
  }

  return (
    <div>
      <ul>
        <li>
          Item 1:
          <button onClick={() => toggleItemVisibility("item1")}>
            Toggle Visibility
          </button>
          {itemsVisibility.item1 && <span>Visible</span>}
        </li>
        <li>
          Item 2:
          <button onClick={() => toggleItemVisibility("item2")}>
            Toggle Visibility
          </button>
          {itemsVisibility.item2 && <span>Visible</span>}
        </li>
        <li>
          Item 3:
          <button onClick={() => toggleItemVisibility("item3")}>
            Toggle Visibility
          </button>
          {itemsVisibility.item3 && <span>Visible</span>}
        </li>
      </ul>
    </div>
  );
}
