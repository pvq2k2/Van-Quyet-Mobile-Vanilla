import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { signup } from "../api/users";
import Footer from "../components/footer";
import Header from "../components/header";
import { reRender } from "../utils/rerender";
import SignInPage from "./signIn";

const SignUpPage = {
    print() {
        return /* html */`
        ${Header.print()}
        <div class="xl:w-[1200px] xl:mx-auto mt-10 shadow-inner rounded-lg mx-3">
        <div class="content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 shadow-lg">
          <section class="hidden xl:flex lg:flex bg-[#e7f6fb] justify-center rounded-l-lg">
            <img class="p-5 w-8/12 
            xl:px-0 xl:py-40 xl:w-6/12
            lg:px-20 lg:py-36 lg:w-11/12" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png" alt="">
          </section>
          <section>
            <div class="min-h-full flex items-center justify-center pb-12 px-4 sm:px-6 lg:px-8">
              <div class="max-w-md w-full space-y-8">
                <div>
                  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">Đăng Ký</h2>
                  <p class="mt-2 text-center text-sm text-gray-600">
                    Chú ý các nội dung có dấu * bạn cần phải nhập
                  </p>
                </div>
                <form class="mt-8 space-y-6" id="form-signup" action="#" method="POST">
                  <input type="hidden" name="remember" value="true">
                  <div class="rounded-md shadow-sm -space-y-px">
    
                    <div class="pb-4">
                      <label for="input-username" class="py-2">Họ tên</label>
                      <input id="input-username" name="input-username" type="text" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Họ tên*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-password" class="py-2">Mật khẩu</label>
                      <input id="input-password" name="input-password" type="password" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Mật khẩu*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-email" class="py-2">Email</label>
                      <input id="input-email" name="input-email" type="email" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Email*">
                    </div>
    
                    <div class="mb-4">
                      <label for="input-avatar" class="py-2">Ảnh đại điện</label>
                      <input id="input-avatar" name="input-avatar" type="file" required class="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md ease-in-out duration-300 hover:border-[#f26629] focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Ảnh đại diện">
                    </div>
                  </div>
            
                  <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f26629] hover:bg-[#30a2e1] ease-in-out duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Đăng ký
                    </button>
                  </div>
                  <p class="mt-3 text-center text-sm text-gray-600">
                  Bạn đã có tài khoản? 
                  <a href="/signin" class="font-medium ease-in-out duration-300 text-[#f26629] hover:text-[#30a2e1]"> Đăng nhập </a>
                </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
${Footer.print()}
        `;
    },
    afterRender() {
        const formSignUp = document.querySelector("#form-signup");
        const inputAvatar = document.querySelector("#input-avatar");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
        const CLOUDINARY_PRESET = "imguser";
        formSignUp.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = inputAvatar.files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            try {
                const { data } = await signup({
                    accountName: document.querySelector("#input-account-name").value,
                    userName: document.querySelector("#input-username").value,
                    password: document.querySelector("#input-password").value,
                    email: document.querySelector("#input-email").value,
                    avatar: response.data.url,
                });
                if (data) {
                    toastr.success("Signup successfully!");
                    setTimeout(() => {
                        document.location.href = "/signin";
                        reRender(SignInPage, "#app");
                    }, 2500);
                }
            } catch (error) {
                toastr.error(`Error: ${error.response.data}`);
            }
        });
    },
};
export default SignUpPage;