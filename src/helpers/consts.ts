import type { Ingredient } from "./types";
import meatImage from "../assets/meat.jpeg";
import baconImage from "../assets/bacon.jpeg";
import saladImage from "../assets/salad.jpeg";
import cheeseImage from "../assets/cheese.jpeg";

export const INGREDIENTS: Ingredient[] = [
    { name: "Meat", price: 80, image: meatImage },
    { name: "Bacon", price: 60, image: baconImage },
    { name: "Salad", price: 10, image: saladImage },
    { name: "Cheese", price: 50, image: cheeseImage },
];
