import data from "../assets/JSON/movies.json";
import Item from "./Item";
const Items = () => {
  return (
    <>
      {data.map((elem) => {
        return (
          <Item elem={elem}/>
        );
      })}
    </>
  );
};

export default Items;
