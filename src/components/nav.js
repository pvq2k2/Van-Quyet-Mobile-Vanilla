const Nav = {
    print() {
        return /* html */`
        <nav class="lg:px-3">
        <div class="
          xl:w-[1200px] xl:block mt-2 mx-auto text-center bg-[#f26629] rounded-lg
          lg:block
          hidden
          ">
          <ul>
            <li class="inline-block"><a href=""
                class="inline-block py-[10px] px-10 text-white hover:bg-[#30a2e1] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Điện thoại</span></a></li>
            <li class="inline-block"><a href=""
                class="inline-block py-[10px] px-10 text-white hover:bg-[#30a2e1] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>Laptop</a></li>
            <li class="inline-block"><a href=""
                class="inline-block py-[10px] px-10 text-white hover:bg-[#30a2e1] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>Tablet</a></li>
            <li class="inline-block"><a href=""
                class="inline-block py-[10px] px-10 text-white hover:bg-[#30a2e1] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>Smart Home</a></li>
            <li class="inline-block"><a href=""
                class="inline-block py-[10px] px-10 text-white hover:bg-[#30a2e1] ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>Tin tức</a></li>
          </ul>
        </div>
      </nav>
        `;
    },
};

export default Nav;