import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import AccountsAdminPage from ".";
import { addUser } from "../../../api/users";
import NavAdmin from "../../../components/navAdmin";
import { reRender } from "../../../utils/rerender";

const UserAdd = {
    print() {
        return /* html */`
        ${NavAdmin.print()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
          <h1 class="text-3xl font-bold text-gray-900">
            User Add
          </h1>
          <a href="/admin/users" class="sm:ml-3">
          <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
            Close
          </button>
        </a>
        </div>
      </header>
        <div class="m-auto max-w-7xl pb-36 mt-5">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" id="form-add-user" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                <label for="name-add-user" class="block text-sm font-medium text-gray-700">
                  User Name
                </label>
                <div class="mt-1">
                <input type="text" id="name-add-user" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Title...">
                </div>
              </div>

                <div>
                  <label for="email-add-user" class="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div class="mt-1">
                  <input type="text" id="email-add-user" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Price...">
                  </div>
                </div>

                <div>
                <label for="password-add-user" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="mt-1">
                <input type="password" id="password-add-user" class="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Price...">
                </div>
              </div>
    
    
                <div>
                  <label class="block text-sm font-medium text-gray-700">
                    Image
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                          <input id="file-upload" name="file-upload" type="file">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-user");
        const inputImg = document.querySelector("#file-upload");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/assignmentjs/image/upload";
        const CLOUDINARY_PRESET = "imguser";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = inputImg.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            try {
                const { data } = await addUser({
                    userName: document.querySelector("#name-add-user").value,
                    password: document.querySelector("#password-add-user").value,
                    email: document.querySelector("#email-add-user").value,
                    avatar: response.data.url,
                });
                if (data) {
                    toastr.success("Add user successfully!");
                    setTimeout(() => {
                        document.location.href = "/admin/users";
                        reRender(AccountsAdminPage, "#app");
                    }, 2500);
                }
            } catch (error) {
                toastr.error(`Error: ${error.response.data}`);
            }
        });
    },

};
export default UserAdd;