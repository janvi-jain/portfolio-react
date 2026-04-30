import img1 from '/src/assets/images/review-img-1-square.png'
import img2 from '/src/assets/images/review-img-2-square.png'
import img3 from '/src/assets/images/review-img-3-square.png'
import img4 from '/src/assets/images/review-img-4-square.png'
import img5 from '/src/assets/images/review-img-5-square.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Swipper() {

    const data = [
        { id: 1, parra: "“Honestly, I’m impressed and would hire you — since you built everything yourself. I’d be more interested in reading about your approaches to building things rather than only seeing the end result.”", name: "Aarav Mehta", img: img1, company: "ScriptSmiths" },
        { id: 2, parra: "“Portfolios often miss live demos — with no demo, even polished screenshots lack impact. Also, poor mobile responsiveness and low contrast text were prevalent issues across many sites.”", name: "Priya Verma", img: img2, company: "CodeSage Creation" },
        { id: 3, parra: "“Your biggest projects need a succinct writeup explaining what you're looking at, why you built it, and how you built it—without forcing readers to dig into code.”", name: "Ananya Shah", img: img3, company: "CoreSyntax Studio" },
        { id: 4, parra: "“Great range of full-stack work! Adding brief context—your role or impact on each project—would strengthen your storytelling and showcase problem-solving.”", name: "Vikram Chatterjee", img: img4, company: "NextGen Coders" },
        { id: 5, parra: "“Mobile-friendly layout and clear navigation are strong. To build even more credibility, display a testimonial or user feedback element for one of your featured apps.”", name: "Rohan Deshmukh", img: img5, company: "DevNest Labs" },
    ];

    return (
        // <div className="swiper mySwiper">
        //     <div className="swiper-wrapper">
        //         {data.map((item) => (
        //             <div className="swiper-slide" key={item.id}>
        //                 <div className="ms-4 reviews fs-5">
        //                     <p>{item.parra}</p>
        //                     <div className="review-desc d-flex">
        //                         <div className="review-prson-img mt-3">
        //                             <img src={item.img} width="65px"
        //                                 height="65px" className="rounded-circle img-fluid"
        //                                 alt={item.name} />
        //                         </div>
        //                         <div className="flex-column text-start">
        //                             <p className="fs-4 fw-bold text-start ms-4">{item.name}</p>
        //                             <span className="text-secondary fs-6 text-start ms-4">{item.company}</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}

        //     </div>
        // </div>
       <Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  autoplay={{ delay: 1500, disableOnInteraction: false }}
  loop={true}
>

            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="ms-4 reviews fs-5">

                        <p>{item.parra}</p>

                        <div className="review-desc d-flex">
                            <div className="review-prson-img mt-3">
                                <img
                                    src={item.img}
                                    width="65"
                                    height="65"
                                    className="rounded-circle img-fluid"
                                    alt={item.name}
                                />
                            </div>

                            <div className="flex-column text-start">
                                <p className="fs-4 fw-bold ms-4">{item.name}</p>
                                <span className="text-secondary fs-6 ms-4">{item.company}</span>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    )
}

export default Swipper;

