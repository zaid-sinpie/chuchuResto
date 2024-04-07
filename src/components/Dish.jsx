import { useEffect, useState } from "react";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import Button from "./Button.jsx";

export default function Dish({ id }) {
  const [currImage, setImage] = useState(dish1);
  useEffect(() => {
    if (id === "dish1") {
      setImage(dish1);
    }
    if (id === "dish2") {
      setImage(dish2);
    }
  }, []);

  return (
    <figure id={id} className="dish">
      <img src={currImage} alt="" className="dish-img" />
      <article className=" dish-text">
        <h1>Dish Name</h1>
        <p>Just for $0.00</p>
        <Button>ORDER NOW</Button>
      </article>
    </figure>
  );
}
