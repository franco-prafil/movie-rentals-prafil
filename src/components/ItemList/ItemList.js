import  "./ItemList.css";
import Item  from "../Item/Item";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";


const ItemList = ({products}) => {
    return(
        <div className="direction-item">
            <Swiper
                slidesPerView={3}
                spaceBetween={15}
                slidesPerGroup={3}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[ Navigation]} 
                breakpoints={{
                20: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                    },
                767: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    },
                910: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    },
                1178: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                    },
                }}
                className="mySwiper"
                >
                {
                    products.map( ({title, category, image, id, stock, price}) => {
                        return(
                            <>
                            <SwiperSlide key={id}>
                            <Item className="direction-item" title={title} category={category} image={image} id={id} stock={stock} price={price}/>
                            </SwiperSlide>
                            </>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ItemList