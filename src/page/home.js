/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import Footer from "../components/footer";
import Header from "../components/header";
import listPhone from "../components/listPhone";
import Nav from "../components/nav";
import Slider from "../components/slider";

const HomePage = {
    async print() {
        return /* html */`
        <header>
        ${Header.print()}
        </header>
        ${Nav.print()}
        ${await Slider.print()}
        ${await listPhone.print()}
        ${Footer.print()}
        `;
    },
    afterRender() {
        Slider.afterRender();
        Header.afterRender();
        listPhone.afterRender();
    },
};

export default HomePage;