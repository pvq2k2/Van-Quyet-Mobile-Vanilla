import { getAllProducts } from "../api/products";

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

            ${data.map(({ title, img, price }) => /* html */`
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
                <button
                  class="mx-3 inline-block bg-[#f26629] px-5 py-2 uppercase text-white font-semibold rounded-lg hover:bg-[#30a2e1] ease-in duration-300">Mua
                  Ngay</button>
              </div>
            </div>
            <!-- End product -->
            `).join("")}
            

          </div>
          <!-- End list-product -->
        </section>
      </main>
        `;
    },
};

export default listPhone;