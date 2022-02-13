import $ from "jquery";
import "slick-carousel";
import { getAllSliders } from "../api/sliders";

const Slider = {
    async print() {
        const { data } = await getAllSliders();
        return /* html */`
        <div class="box-slider
        xl:w-[1200px] xl:mx-auto xl:px-0
        px-3 mt-5 z-10">
        <div class="slider w-full group">
        ${data.map(({ img }) => /* html */`
        <div class="slider-item"><a href="#"><img class="rounded-xl"
        src="${img}"
        alt=""></a></div>
        `).join("")}
        </div>
      </div>
      <!-- End slider -->
        `;
    },
    afterRender() {
        $(document).ready(() => {
            $(".slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                draggable: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
                prevArrow: `<button type='button' class='slick-prev-news slick-arrow 
              absolute top-[40%] left-3 translate-y-1/2 border-none w-[50px] h-[50px] 
              xl:flex justify-center items-center rounded-full 
              z-10 opacity-0 hidden transition-all duration-300 ease-linear 
              bg-white xl:group-hover:opacity-100 hover:bg-[#f26629] hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg></button>`,
                nextArrow: `<button type='button' class='slick-next-news slick-arrow
              absolute top-[40%] right-3 translate-y-1/2 border-none w-[50px] h-[50px] 
              xl:flex justify-center items-center rounded-full 
              z-10 opacity-0 hidden transition-all duration-300 ease-linear 
              bg-white xl:group-hover:opacity-100 hover:bg-[#f26629] hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg></button>`,
                dots: true,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            arrow: false,
                        },
                    },
                ],
            });
        });
        return "";
    },
};

export default Slider;