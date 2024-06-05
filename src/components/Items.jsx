import data from "../assets/JSON/movies.json";
import Item from "./Item";
const Items = () => {
  return (
    <>
      {data.map((elem) => {
        return (
          <section key={elem.category}>
            <h2>{elem.category}</h2>
            <div className="__images">
              <Item elem={elem}/>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Items;
