const Header = {
    print() {
        return /* html */`
        <header>
        <!-- Nav mobile-tablet -->
        <input type="checkbox" hidden id="nav-mobile-input">
        <label for="nav-mobile-input" class="overlay  
          lg:hidden 
          xl:hidden 
          hidden fixed top-0 right-0 left-0 bottom-0 bg-black/30 z-20
          "></label>
        <nav id="nav-mobile" class="nav-mobile z-50 xl:hidden lg:hidden 
          block fixed top-0 left-0 bottom-0 w-320px max-w-full bg-white translate-x-[-100%] opacity-0
          transition-all ease-linear duration-200
          ">
          <div class="w-[320px]">
            <label for="nav-mobile-input" class="nav-mobile-close absolute top-[20px] right-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg"
                class="text-gray-600 hover:text-[#f26629] ease-in-out duration-300 h-7 w-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
            <div class="user py-[10px] px-3 flex">
              <div>
                <a href="#" class="text-gray-600 hover:text-[#f26629] ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
              <div>
                <a href="#"
                  class="block text-black font-bold text-[19px] p-3 hover:text-[#f26629] ease-in-out duration-300">Đăng
                  nhập</a>
              </div>
            </div>
            <div class="search py-[10px] px-3 relative block">
              <input type="text" placeholder="Bạn cần tìm gì..."
                class="border-[1px] border-gray-400 indent-[5px] p-2 pr-14 w-full rounded-[20px] focus:outline-none focus:border-[#f26629] hover:border-[#f26629] ease-in-out duration-300">
              <button
                class="absolute text-gray-500 p-2 pr-[20px] top-[11px] right-[11px] rounded-r-[20px] hover:bg-[#f26629] hover:text-white ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <ul>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Điện thoại</span></a></li>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Laptop</span></a></li>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Tablet</span></a></li>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Smart Home</span></a></li>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Tin tức</span></a></li>
              <li><a href=""
                  class="grid grid-cols-[40px_1fr] py-5 px-10 text-black border-b border-gray-300 hover:bg-[#30a2e1] hover:text-white ease-in-out duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <span>Tra cứu đơn hàng</span></a></li>
            </ul>
          </div>
        </nav>
        <!-- --------------------- -->
        <div class="
          xl:w-[1200px] xl:mx-auto xl:flex xl:justify-between xl:py-3
          lg:px-3 lg:mx-auto lg:flex lg:justify-between lg:py-3
          mx-auto flex justify-between p-3
          ">
          <div class="icon-nav-mobile
          lg:hidden 
          xl:hidden 
          block mt-4 text-gray-400 hover:text-[#f26629] ease-in-out duration-300 relative
          ">
            <label for="nav-mobile-input" class="icon-bar">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
  
          </div>
          <div class="header-left flex">
            <div class="logo">
              <a href='/' target='_blank'><img src='https://i.postimg.cc/qtfvxTB5/logo.png' alt='logo' /></a>
            </div>
          </div>
          <div class="search 
            xl:pt-[7px] xl:relative xl:block
            lg:pt-[7px] lg:relative lg:block
            hidden
             ">
            <input type="text" placeholder="Bạn cần tìm gì..."
              class="border-[1px] border-gray-400 indent-[5px] p-2 pr-10 w-[500px] rounded-[20px] focus:outline-none focus:border-[#f26629] hover:border-[#f26629] ease-in-out duration-300">
            <button
              class="absolute text-gray-500 p-2 pr-[20px] top-2 right-0 rounded-r-[20px] hover:bg-[#f26629] hover:text-white ease-in-out duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <div class="header-right flex gap-5 mt-4">
            <div class="in-up lg:block xl:block md:hidden hidden relative h-7 w-7 group">
              <a href="#" class="text-gray-400 group-hover:text-[#f26629] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <div class="in-up--sub absolute top-12 left-[-15px] bg-white shadow-xl z-20 p-3 rounded-lg invisible ease-linear duration-300 group-hover:visible
              before:absolute before:-top-2 before:left-5 
              before:w-5 before:h-5 before:bg-white before:rounded before:rotate-45 before:-z-10  before:shadow-xl">
                <div class="flex items-center pb-3 xl:w-40 lg:w-[120px]">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm text-gray-500">
                      Xin chào !
                    </div>
                    <div class="text-sm font-medium text-gray-900">
                      Quyết
                    </div>
                  </div>
                </div>
                <ul>
                  <li class="rounded-lg hover:bg-[#f26629] hover:text-white"><a class="inline-block p-2" href="/signin">Đăng nhập</a></li>
                  <li class="rounded-lg hover:bg-[#f26629] hover:text-white"><a class="inline-block p-2" href="/signup">Đăng ký</a></li>
                  <li class="rounded-lg hover:bg-[#f26629] hover:text-white"><a class="inline-block p-2" href="/admin">Trang quản trị</a></li>
                  <li class="rounded-lg hover:bg-[#f26629] hover:text-white"><a class="inline-block p-2" href="#">Đăng xuất</a></li>
                </ul>
              </div>
            </div>
            <div class="check-order lg:block xl:block hidden">
              <a href="#" class="text-gray-400 hover:text-[#f26629] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </a>
            </div>
            <div class="cart">
              <a href="#" class="text-gray-400 hover:text-[#f26629] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
  
      </header>
        `;
    },
};

export default Header;