import toastr from "toastr";
import { getAllProducts, removeProduct } from "../../../api/products";
import NavAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils/rerender";
import "toastr/build/toastr.min.css";

const ProductsAdminPage = {
    async print() {
        const { data } = await getAllProducts();
        return /* html */`
        ${NavAdmin.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            Product List
          </h1>
          <a href="/admin/products/add" class="sm:ml-3">
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
          Add Product
        </button>
      </a>
        </div>
      </header>
      <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
                    Controls
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                ${data.map(({
        id, title, img, price,
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
            <td class="px-6 py-4 text-sm font-medium">
            <button class=" text-indigo-600 hover:text-indigo-900">
            <a href="/admin/products/${id}/edit">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>
            </a>
            </button>
            <button data-id="${id}" class="btn text-indigo-600 hover:text-indigo-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </button>
          </td>
                `).join("")}

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
      </div>
    </main>

        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                // eslint-disable-next-line no-alert
                const confirm = window.confirm("Are you sure you want to delete this item?");
                if (confirm) {
                    removeProduct(id);
                    toastr.success("Delete item successfully!");
                    reRender(ProductsAdminPage, "#app");
                }
            });
        });
    },
};
export default ProductsAdminPage;