let cart = [];
if (localStorage.getItem("cart")) {
    cart = localStorage.getItem("cart");
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