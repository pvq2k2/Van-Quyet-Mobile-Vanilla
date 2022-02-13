import instance from "./instance";

// eslint-disable-next-line import/prefer-default-export
export const getAllSliders = () => {
    const url = "/sliders";
    return instance.get(url);
};