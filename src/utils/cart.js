import toastr from "toastr";
import "toastr/build/toastr.min.css";

let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.cart);
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newProduct, callback) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        // eslint-disable-next-line no-plusplus
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};

export const increaseQuantity = (id, callback) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const decreaseQuantity = (id, callback) => {
    const currentProduct = cart.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;

    if (currentProduct.quantity < 1) {
        // eslint-disable-next-line no-alert
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
            toastr.success("Delete successfully!");
        } else {
            currentProduct.quantity = 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const removeItemInCart = (id, callback) => {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
        toastr.success("Delete successfully!");
    } else {
        toastr.error("Delete finally!");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};