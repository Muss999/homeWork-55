import { useState } from "react";
import "./Burger.css";
import Bacon from "./Ingredients/Bacon/Bacon";
import Salad from "./Ingredients/Salad/Salad";
import Cheese from "./Ingredients/Cheese/Cheese";
import Meat from "./Ingredients/Meat/Meat";
import AddIngredient from "../AddIngredient/AddIngredient";
import { INGREDIENTS } from "../../helpers/consts";

const Burger = () => {
    const [ingredients, setIngredient] = useState([
        { name: "Meat", count: 0, id: crypto.randomUUID() },
        { name: "Bacon", count: 0, id: crypto.randomUUID() },
        { name: "Salad", count: 0, id: crypto.randomUUID() },
        { name: "Cheese", count: 0, id: crypto.randomUUID() },
    ]);
    const [price, setPrice] = useState(30);

    const increaseCount = (id: string) => {
        setIngredient((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.id === id) {
                    const constIngredient = INGREDIENTS.filter(
                        (constIngredient) =>
                            constIngredient.name == ingredient.name
                    )[0];
                    const newPrice = price + constIngredient.price;
                    setPrice(newPrice);

                    return {
                        ...ingredient,
                        count: ingredient.count + 1,
                    };
                }
                return ingredient;
            });
        });
    };
    const decreaseCount = (id: string) => {
        setIngredient((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.id === id) {
                    if (ingredient.count <= 0) {
                        return ingredient;
                    }
                    const constIngredient = INGREDIENTS.filter(
                        (constIngredient) =>
                            constIngredient.name == ingredient.name
                    )[0];
                    const newPrice = price - constIngredient.price;
                    setPrice(newPrice);

                    return {
                        ...ingredient,
                        count: ingredient.count - 1,
                    };
                }
                return ingredient;
            });
        });
    };
    const resetCount = (id: string) => {
        setIngredient((prevState) => {
            return prevState.map((ingredient) => {
                if (ingredient.id === id) {
                    const constIngredient = INGREDIENTS.filter(
                        (constIngredient) =>
                            constIngredient.name == ingredient.name
                    )[0];

                    const newPrice =
                        price - ingredient.count * constIngredient.price;
                    setPrice(newPrice);

                    return {
                        ...ingredient,
                        count: 0,
                    };
                }
                return ingredient;
            });
        });
    };

    return (
        <>
            <p className="totalPrice">Total price: {price} som</p>
            <div className="mainBlock">
                <div className="ingredientsBlock">
                    {ingredients.map((ingredient) => {
                        return (
                            <AddIngredient
                                key={ingredient.id}
                                name={ingredient.name}
                                count={ingredient.count}
                                increaseCount={() =>
                                    increaseCount(ingredient.id)
                                }
                                decreaseCount={() =>
                                    decreaseCount(ingredient.id)
                                }
                                resetCount={() => resetCount(ingredient.id)}
                            />
                        );
                    })}
                </div>
                <div className="Burger">
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                    {ingredients
                        .map((ingredient) => {
                            const ingredientsArr = [];
                            for (let i = 0; i < ingredient.count; i++) {
                                switch (ingredient.name) {
                                    case "Meat":
                                        ingredientsArr.push(
                                            <Meat
                                                key={`${ingredient.id}-${i}`}
                                            />
                                        );
                                        break;
                                    case "Bacon":
                                        ingredientsArr.push(
                                            <Bacon
                                                key={`${ingredient.id}-${i}`}
                                            />
                                        );
                                        break;
                                    case "Cheese":
                                        ingredientsArr.push(
                                            <Cheese
                                                key={`${ingredient.id}-${i}`}
                                            />
                                        );
                                        break;
                                    case "Salad":
                                        ingredientsArr.push(
                                            <Salad
                                                key={`${ingredient.id}-${i}`}
                                            />
                                        );
                                        break;
                                    default:
                                        alert("something went wrong");
                                }
                            }
                            return ingredientsArr;
                        })
                        .flat()}
                    <div className="BreadBottom"></div>
                </div>
            </div>
        </>
    );
};

export default Burger;
