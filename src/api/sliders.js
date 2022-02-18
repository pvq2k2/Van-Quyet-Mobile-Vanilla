import instance from "./instance";

export const getAllSliders = () => {
    const url = "/sliders";
    return instance.get(url);
};
export const getSlider = (id) => {
    const url = `/sliders/${id}`;
    return instance.get(url);
};
export const addSlider = (slider) => {
    const url = "/sliders";
    return instance.post(url, slider);
};
export const removeSlider = (id) => {
    const url = `/sliders/${id}`;
    return instance.delete(url);
};
export const updateSlider = (slider) => {
    const url = `/sliders/${slider.id}`;
    return instance.put(url, slider);
};