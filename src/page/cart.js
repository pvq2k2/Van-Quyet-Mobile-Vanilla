/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import Footer from "../components/footer";
import Header from "../components/header";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";

const CartPage = {
    print() {
        let cart = [];
        if (localStorage.getItem("cart")) cart = JSON.parse(localStorage.getItem("cart"));
        return /* html */`
        ${Header.print()}
        <main class="xl:w-[1200px] xl:mx-auto mt-10 rounded-lg mx-3">
        <section class="pb-5">
        <a href="/" class="flex justify-start group">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 xl:h-8 xl:w-8 md:h-8 md:w-8 sm:h-8 sm:w-8 group-hover:text-[#f26629] ease-linear duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="xl:text-xl md:text-xl sm:text-xl group-hover:text-[#f26629] ease-linear duration-200">Quay lại</span>
        </a>
      </section>

        ${localStorage.getItem("cart") ? /* html */`
        <section>
        <div class="w-full mx-auto py-6 sm:px-6 lg:px-8">
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Controls
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${cart.map(({
        id, title, img, price, quantity,
    }, index) => /* html */`
                    <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-500">
                        ${index + 1}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-sm leading-5 font-semibold">
                      ${title}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap w-52">
                  <img width="50%" src="${img}">
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-sm leading-5 font-semibold">
                  ${price}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center mt-2">
              <button data-id="${id}" class="btn down-quantity cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <input id="input-quantity" type="text" role="spinbutton" aria-valuenow="1" value="${quantity}" class="border w-14 h-8 text-base font-normal box-border text-center cursor-text outline-none">
              <button data-id="${id}" class="btn up-quantity cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            </td>
              <td class="px-6 py-4 text-sm font-medium">
              <button data-id="${id}" class="btn text-red-600 hover:text-red-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            </td>
            </tr>
            `).join("")}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    </section>
    ` : /* html */`
    <h1 class="text-center uppercase text-xl xl:text-3xl md:text-3xl sm:text-3xl font-semibold">Chưa có sản phẩm nào</h1>
    <img class="xl:w-[50%] md:w-[50%] sm:w-[50%] w-[90%] mx-auto" src="https://res.cloudinary.com/assignmentjs/image/upload/v1645284550/img/Add_to_Cart-amico_x0d0gz.svg">
    `}
        </main>
        ${Footer.print()}
        `;
    },
    afterRender() {
        Header.afterRender();
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("up-quantity")) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("down-quantity")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    },
};
export default CartPage;