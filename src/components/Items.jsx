import data from "../assets/JSON/movies.json";

const Items = () => {
  return (
    <>
      {data.map((elem, index) => {
        return (
          <section key={index}>
            <h2>{elem.category}</h2>
            <div className="__images">
              {elem.images.map((elem, index2) => {
                return (
                  <div key={index2}>
                    <img src={elem} alt="" />
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Items;
