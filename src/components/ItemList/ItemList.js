import  "./ItemList.css";
import Item  from "../Item/Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";


const ItemList = ({products}) => {

    return(
        <div className="direction-item">
                <Swiper
                    // slidesPerView={3}
                    // spaceBetween={15}
                    modules={[Navigation]} 
                    navigation={true}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 70,
                    },
                    }}
                    
                    className="mySwiper"
                >
                        {
                            products.map( ({title, category, image, id}) => {
                                return(
                                    <>

                                    <SwiperSlide key={id}>
                                        <Item className="direction-item" title={title} category={category} image={image} id={id}/>
                                    </SwiperSlide>
                                    {/* <SwiperSlide key={id}>
                                        <Item className="direction-item" title={title} category={category} image={image}/>
                                    </SwiperSlide> */}
                                    
                                    </>
                                )
                            })
                        }
                </Swiper>
        </div>
    )
}

export default ItemList