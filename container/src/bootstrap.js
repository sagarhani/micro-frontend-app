import { mount as productMount } from "products/ProductIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("container");

productMount(document.querySelector("#production-products"));
cartMount(document.querySelector("#production-cart"));
