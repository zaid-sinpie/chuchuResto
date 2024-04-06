import Dish from "./Dish.jsx";

export default function Content({}) {
  return (
    <article className="content">
      <h2 className="heading">Today's Special</h2>
      <div className="dish-wrapper">
        <Dish id='dish1'/>
        <Dish id='dish2'/>
      </div>
      <h1 className="main-heading">
        Ramen,
        <br />
        That's what you need!
      </h1>
      <p className="content-para">
        Life is hard take a break,
        <br /> Eat some <strong>RAMEN</strong> <br /> & win the{" "}
        <strong>Race</strong>
      </p>
    </article>
  );
}
