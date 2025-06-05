import { useState } from "react";
import "./Burger.css";
import Bacon from "./Ingredients/Bacon/Bacon";
import Salad from "./Ingredients/Salad/Salad";
import Cheese from "./Ingredients/Cheese/Cheese";
import Meat from "./Ingredients/Meat/Meat";
import AddIngredient from "../AddIngredient/AddIngredient";

const Burger = () => {
    const [ingredients, setIngredient] = useState([
        { name: "Meat", count: 0, id: crypto.randomUUID() },
        { name: "Bacon", count: 0, id: crypto.randomUUID() },
        { name: "Salad", count: 0, id: crypto.randomUUID() },
        { name: "Cheese", count: 0, id: crypto.randomUUID() },
    ]);
    return (
        <div className="mainBlock">
            <div className="ingredientsBlock">
                {ingredients.map((ingredient) => {
                    return (
                        <AddIngredient
                            key={ingredient.id}
                            name={ingredient.name}
                            count={ingredient.count}
                        />
                    );
                })}
            </div>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                <Bacon />
                <Salad />
                <Cheese />
                <Meat />
                <div className="BreadBottom"></div>
            </div>
        </div>
    );
};

export default Burger;
