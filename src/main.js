import Navigo from "navigo";
import Dashboard from "./page/admin";
import ProductsAdminPage from "./page/admin/products";
import ProductAdd from "./page/admin/products/productAdd";
import ProductEdit from "./page/admin/products/productEdit";
import SliderAdminPage from "./page/admin/slider";
import SliderAdd from "./page/admin/slider/sliderAdd";
import SliderEdit from "./page/admin/slider/sliderEdit";
import AccountsAdminPage from "./page/admin/users";
import UserAdd from "./page/admin/users/userAdd";
import UserEdit from "./page/admin/users/userEdit";
import HomePage from "./page/home";
import SignInPage from "./page/signIn";
import SignUpPage from "./page/signUp";

const router = new Navigo("/", { linksSelector: "a" });
const render = async (content, id) => {
    document.getElementById("app").innerHTML = await content.print(id);
    if (typeof content.afterRender === "function") {
        content.afterRender(id);
    }
};

router.on({
    "/": () => render(HomePage),
    "/signup": () => render(SignUpPage),
    "/signin": () => render(SignInPage),
    "/admin": () => render(Dashboard),
    "/admin/dashboard": () => render(Dashboard),
    "/admin/products": () => render(ProductsAdminPage),
    "/admin/products/add": () => render(ProductAdd),
    "/admin/products/:id/edit": (value) => render(ProductEdit, value.data.id),
    "/admin/users": () => render(AccountsAdminPage),
    "/admin/users/add": () => render(UserAdd),
    "/admin/users/:id/edit": (value) => render(UserEdit, value.data.id),
    "/admin/sliders": () => render(SliderAdminPage),
    "/admin/sliders/add": () => render(SliderAdd),
    "/admin/sliders/:id/edit": (value) => render(SliderEdit, value.data.id),
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();