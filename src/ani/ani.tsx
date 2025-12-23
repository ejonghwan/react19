import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import style from './ani.module.scss'
import { Pagination, Navigation } from 'swiper/modules';





const Ani = () => {

    const handleSwiperChange = (swiper) => {
        console.log('slide change', swiper)
    }

    return (
        <div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                // spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => handleSwiperChange(swiper)}
                onSwiper={(swiper) => console.log(swiper)}
                className={style["swiper__wrap"]}
            >
                <SwiperSlide className={style["swiper__item"]}>
                    <div className='ani__wrap'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style["swiper__item"]}>
                    <div className='ani__wrap'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div></SwiperSlide>
                <SwiperSlide className={style["swiper__item"]}>
                    <div className='ani__wrap'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style["swiper__item"]}>
                    <div className='ani__wrap'>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Ani



