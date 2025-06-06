import type { FC, MouseEventHandler } from "react";
import "./AddIngredient.css";
import { INGREDIENTS } from "../../helpers/consts";

interface Props {
    name: string;
    count: number;
    increaseCount: MouseEventHandler;
    decreaseCount: MouseEventHandler;
    resetCount: MouseEventHandler;
}

const AddIngredient: FC<Props> = (props) => {
    const ingredient = INGREDIENTS.filter(
        (ingredient) => ingredient.name == props.name
    )[0];
    const { name, price, image } = ingredient;

    return (
        <div className="AddIngredient">
            <div className="AddIngredient__firstColumn">
                <img src={image} alt="#" />
                <h3>{name}</h3>
                <p>{price} Som</p>
            </div>
            <div className="AddIngredient__secondColumn">
                <button onClick={props.decreaseCount}>-</button>
                <button onClick={props.increaseCount}>+</button>
                <p>{props.count}x</p>
                <button onClick={props.resetCount}>Reset</button>
            </div>
        </div>
    );
};

export default AddIngredient;
