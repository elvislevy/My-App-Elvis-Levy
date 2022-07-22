import Item from "./Item";

const ItemList = ( { items } ) => {
  return (
    <div className="d-flex flex-wrap justify-content-center p-3">
        {items.map((item) => 
            <Item key={item.id} item={item} />
        )}
    </div>
  );
}

export default ItemList;