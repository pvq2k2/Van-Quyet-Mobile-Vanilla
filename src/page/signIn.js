import Footer from "../components/footer";
import Header from "../components/header";

const SignInPage = {
    print() {
        return /* html */ `
        ${Header.print()}
        <div class="xl:w-[1200px] xl:mx-auto mt-10 shadow-inner rounded-lg mx-3">
        <div class="content grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 shadow-lg">
          <section class="hidden xl:flex lg:flex bg-[#e7f6fb] justify-center rounded-l-lg">
            <img class="p-5 w-8/12 
            xl:px-0 xl:py-20 xl:w-6/12
            lg:p-20 lg:w-11/12" src="https://res.cloudinary.com/assignmentjs/image/upload/v1644399101/img/login-bg_yyrdj7.png" alt="">
          </section>
          <section>
            <div class="min-h-full flex items-center justify-center p-12 px-4 sm:px-6 lg:px-8">
              <div class="max-w-md w-full space-y-8">
                <div>
                  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 uppercase">Đăng nhập</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true">
                  <div class="rounded-md shadow-sm -space-y-px">
                    <div class="mb-4">
                      <label for="input-email" class="py-2">Email</label>
                      <input id="input-email" name="input-email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Email">
                    </div>
                    <div class="mb-4">
                      <label for="input-password" class="py-2">Mật khẩu</label>
                      <input id="input-password" name="input-password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Mật khẩu">
                    </div>
                  </div>
            
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-[#f26629] focus:ring-[#f26629] border-gray-300 rounded">
                      <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Nhớ mật khẩu </label>
                    </div>
            
                    <div class="text-sm">
                      <a href="#" class="font-medium text-[#f26629] hover:text-[#30a2e1]"> Quên mật khẩu? </a>
                    </div>
                  </div>
            
                  <div class="grid grid-cols-2 gap-3">
                    <button type="submit" class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f26629] hover:bg-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Đăng nhập
                    </button>
                    <a href="/signup" class="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#f26629] border-[#f26629] hover:border-[#30a2e1] hover:text-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Đăng ký
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
        ${Footer.print()}`;
    },
};
export default SignInPage;