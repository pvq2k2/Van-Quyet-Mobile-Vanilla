import Footer from "../components/footer";
import Header from "../components/header";
import listPhone from "../components/listPhone";
import Nav from "../components/nav";
import Slider from "../components/slider";

const HomePage = {
    async print() {
        return `
        ${Header.print()}
        ${Nav.print()}
        ${await Slider.print()}
        ${await listPhone.print()}
        ${Footer.print()}
        `;
    },
    afterRender() {
        Slider.afterRender();
    },
};

export default HomePage;