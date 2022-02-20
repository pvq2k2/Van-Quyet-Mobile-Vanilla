/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
import toastr from "toastr";
import { getAllProducts, getProduct } from "../api/products";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/no-cycle
import HomePage from "../page/home";
import { reRender } from "../utils/rerender";

const listPhone = {
    async print() {
        const { data } = await getAllProducts();
        return /* html */`
        <main class="px-3 xl:w-[1200px] xl:mx-auto xl:px-0">
        <section class="content py-5">
          <div class="category inline-block overflow-hidden">
            <h4 class="bg-[#f26629] py-1 px-5 uppercase text-white font-semibold rounded-md">Điện Thoại</h4>
          </div>
          <div class="list-products grid gap-8 mt-5 grid-cols-2 
            xl:grid-cols-5 
            lg:grid-cols-4 
            md:grid-cols-3">

            ${data.map(({
        id, title, img, price,
    }) => /* html */`
            <div class="product group shadow-2xl text-center rounded-xl p-4 hover:scale-110 ease-in-out duration-500">
              <div class="product__img">
                <img class="mx-auto"
                  src="${img}"
                  alt="">
              </div>
              <div class="product__name">
                <h4 class="font-bold text-base py-2 group-hover:text-[#f26629] ease-in duration-300">${title}</h4>
              </div>
              <div class="product__price mb-3">
                <strong class="text-base text-[#fd475a]">${price} ₫</strong>
              </div>
              <div class="product__btn">
                <button data-id="${id}"
                  class="buy-btn mx-3 inline-block bg-[#f26629] px-5 py-2 uppercase text-white font-semibold rounded-lg hover:bg-[#30a2e1] ease-in duration-300">Mua
                  Ngay</button>
              </div>
            </div>
            <!-- End product -->
            `).join("")}
            

          </div>
          <!-- End list-product -->
        </section>
      </main>
      <div class="modal fixed z-[999] inset-0 overflow-y-auto hidden" role="dialog" aria-modal="true">
      <div class="flex min-h-screen text-center md:block md:px-2 lg:px-4" style="font-size: 0">
        <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" aria-hidden="true"></div>
        <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
        <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
          <div class="w-full rounded relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <button type="button" class="modal-close absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    
            <div class="modal-container w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
              <div class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                <img src="" alt="Img" class="modal-img object-center object-cover m-auto">
              </div>
    
              <div class="sm:col-span-8 lg:col-span-7">
                <h2 class="modal-title text-2xl font-extrabold text-gray-900 sm:pr-12"></h2>
    
                <section aria-labelledby="information-heading" class="mt-2">
                  <p class="modal-price text-2xl text-[#fd475a]"></p>
                </section>
    
                <section aria-labelledby="options-heading" class="mt-5">
                  <form>
                    <!-- Quantity -->
                    <div>
                      <h4 class="text-sm text-gray-900 font-medium">Số lượng</h4>
                      <div class="flex items-center mt-2">
                        <button id="down-quantity" class="cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                          </svg>
                        </button>
                        <input id="input-quantity" type="text" role="spinbutton" aria-valuenow="1" value="1" class="border w-14 h-8 text-base font-normal box-border text-center cursor-text outline-none">
                        <button id="up-quantity" class="cursor-pointer flex items-center justify-center outline-none border w-8 h-8 text-[rgba(0,0,0,.8)]">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
    
                    </div>
    
                    <button id="btn-add-to-cart" class="mt-6 w-full bg-[#f26629] border border-transparent rounded-md py-3 px-8 flex items-center ease-in duration-300 justify-center text-base font-medium text-white hover:bg-[#30a2e1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ hàng</button>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    },
    afterRender() {
        const buyBtns = document.querySelectorAll(".buy-btn");
        const btnAddToCart = document.querySelector("#btn-add-to-cart");
        const modal = document.querySelector(".modal");
        const modalTitle = modal.querySelector(".modal-title");
        const modalImg = modal.querySelector(".modal-img");
        const modalPrice = modal.querySelector(".modal-price");
        const modalContainer = document.querySelector(".modal-container");
        const modalClose = document.querySelector(".modal-close");
        const inputQuantity = document.querySelector("#input-quantity");
        const upQuantity = document.querySelector("#up-quantity");
        const downQuantity = document.querySelector("#down-quantity");

        // eslint-disable-next-line no-restricted-syntax
        for (const buyBtn of buyBtns) {
            // eslint-disable-next-line no-loop-func
            // eslint-disable-next-line no-loop-func
            buyBtn.addEventListener("click", async () => {
                const { id } = buyBtn.dataset;
                const { data } = await getProduct(id);
                // const myCart = JSON.parse(localStorage.cart).find((item) => item.id === id);
                // console.log(myCart);
                modalTitle.innerHTML = data.title;
                modalImg.src = data.img;
                modalPrice.innerHTML = `${data.price} ₫`;
                // modalQuantity.value = myCart.quantity;
                btnAddToCart.addEventListener("click", (e) => {
                    e.preventDefault();
                    addToCart({ ...data, quantity: inputQuantity.value ? +inputQuantity.value : 1 }, () => {
                        toastr.success("Add product successfully!");
                        reRender(HomePage, "#app");
                    });
                });
            });
            buyBtn.addEventListener("click", () => {
                modal.classList.remove("hidden");
                modal.classList.add("block");
            });
        }

        modalClose.addEventListener("click", () => {
            modal.classList.remove("block");
            modal.classList.add("hidden");
        });
        modal.addEventListener("click", () => {
            modal.classList.remove("block");
            modal.classList.add("hidden");
        });
        modalContainer.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        upQuantity.addEventListener("click", (e) => {
            e.preventDefault();
            // eslint-disable-next-line no-plusplus
            inputQuantity.innerHTML = inputQuantity.value++;
        });
        downQuantity.addEventListener("click", (e) => {
            e.preventDefault();
            // eslint-disable-next-line no-unused-expressions
            inputQuantity.value == 1 ? inputQuantity.value = 1 : inputQuantity.innerHTML = inputQuantity.value--;
        });
    },
};

export default listPhone;