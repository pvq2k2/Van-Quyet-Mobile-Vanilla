import Navigo from "navigo";
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
    // "/about": () => render(AboutPage),
    // "/news": () => render(NewsPage),
    // "/admin": () => render(Dashboard),
    // "/admin/dashboard": () => render(Dashboard),
    // "/admin/news": () => render(NewsAd),
    // "/admin/news/add": () => render(NewsAdd),
    // "/admin/news/:id/edit": (value) => render(newsEdit, value.data.id),
});
// router.on("/about", function() {
//     console.log("About")
// })

router.resolve();