import Footer from "../components/footer";
import Header from "../components/header";

const ProductPage = {
    print() {
        return /* html */`
        ${Header.print()}
        ${Footer.print()}
        `;
    },
};
export default ProductPage;