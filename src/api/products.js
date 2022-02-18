import instance from "./instance";

export const getAllProducts = () => {
    const url = "/products";
    return instance.get(url);
};
export const getProduct = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const addProduct = (product) => {
    const url = "/products";
    return instance.post(url, product);
};
export const removeProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const updateProduct = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};