import Navigo from "navigo";
import Dashboard from "./page/admin";
import ProductsAdminPage from "./page/admin/products";
import HomePage from "./page/home";
import SignInPage from "./page/signIn";
import SignUpPage from "./page/signUp";

const router = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.print(id);
    if (typeof content.afterRender === "function") {
        content.afterRender();
    }
};

router.on({
    "/": () => render(HomePage),
    "/signup": () => render(SignUpPage),
    "/signin": () => render(SignInPage),
    "/admin": () => render(Dashboard),
    "/admin/dashboard": () => render(Dashboard),
    "/admin/products": () => render(ProductsAdminPage),
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();