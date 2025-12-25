import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import style from './ani.module.scss'
import { Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';





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
                <SwiperSlide className={style["swiper__wrap--item"]}>
                    <div className={style["ani__wrap"]}>
                        <div className={clsx(style["ani__wrap--item"], style["step1"])}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["step2"])}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["step3"])}>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style["swiper__wrap--item"]}>
                    <div className={style["ani__wrap"]}>
                        <div className={style["ani__wrap--item"]}>1</div>
                        <div className={style["ani__wrap--item"]}>2</div>
                        <div className={style["ani__wrap--item"]}>3</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={style["swiper__wrap--item"]}>
                    <div className={style["ani__wrap"]}>
                        <div className={style["ani__wrap--item"]}>1</div>
                        <div className={style["ani__wrap--item"]}>2</div>
                        <div className={style["ani__wrap--item"]}>3</div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Ani



