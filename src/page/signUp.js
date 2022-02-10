import Footer from "../components/footer";
import Header from "../components/header";

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
                <form class="mt-8 space-y-6" action="#" method="POST">
                  <input type="hidden" name="remember" value="true">
                  <div class="rounded-md shadow-sm -space-y-px">
                    <div class="mb-4">
                      <label for="input-account-name" class="py-2">Tài khoản</label>
                      <input id="input-account-name" name="input-account-name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Tài khoản*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-username" class="py-2">Họ tên</label>
                      <input id="input-username" name="input-username" type="text" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Họ tên*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-password" class="py-2">Mật khẩu</label>
                      <input id="input-password" name="input-password" type="password" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Mật khẩu*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-re-password" class="py-2">Nhập lại mật khẩu</label>
                      <input id="input-re-password" name="input-repassword" type="password" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Nhập lai mật khẩu*">
                    </div>
    
                    <div class="pb-4">
                      <label for="input-email" class="py-2">Email</label>
                      <input id="input-email" name="input-email" type="email" required class="appearance-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Email*">
                    </div>
    
                    <div class="mb-4">
                      <label for="input-avatar" class="py-2">Ảnh đại điện</label>
                      <input id="input-avatar" name="input-avatar" type="file" required class="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#f26629] focus:border-[#f26629] focus:z-10 sm:text-sm" placeholder="Ảnh đại diện">
                    </div>
                  </div>
            
                  <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#f26629] hover:bg-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Đăng ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
${Footer.print()}
        `;
    },
};
export default SignUpPage;