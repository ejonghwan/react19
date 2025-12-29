// import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import style from './ani.module.scss'
import { Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';
import test1 from '../../public/test1.png';






const Ani = () => {

    // const [active, setActive] = useState<number | null>(null)

    const handleSwiperChange = (swi: SwiperType) => {
        console.log('slide change', swi)
    }

    const handleSwiperClick = (swi: SwiperType) => {
        console.log('slide click', swi, swi.slides[swi.clickedIndex])
        // swi.slides[swi.clickedIndex].classList.add('hohohoho')
        // setActive(swi.clickedIndex)

    }


    return (
        <>

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
                onClick={swiper => handleSwiperClick(swiper)}
            >
                <SwiperSlide className={clsx(style["swiper__wrap--item"])} >
                    <div className={clsx(style["ani__wrap"], style["ani_1"])}>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_1"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_2"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_3"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_5"])}>
                            <img src={test1} alt="" />
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_5_1"])}></div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_5_2"])}></div>
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_6"])}>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_1"])}>
                                <div>icon1_1</div>
                                <div>icon1_2</div>
                                <div>icon1_3</div>
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_2"])}>
                                <div>icon2_1</div>
                                <div>icon2_2</div>
                                <div>icon2_3</div>
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_3"])}>
                                <div>icon3_1</div>
                                <div>icon3_2</div>
                                <div>icon3_3</div>
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_4"])}>
                                <div>icon4_1</div>
                                <div>icon4_2</div>
                                <div>icon4_3</div>
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_5"])}>
                                <div>icon5_1</div>
                                <div>icon5_2</div>
                                <div>icon5_3</div>
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_6_6"])}>
                                <div>icon6_1</div>
                                <div>icon6_2</div>
                                <div>icon6_3</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={clsx(style["swiper__wrap--item"])} >
                    <div className={clsx(style["ani__wrap"], style["ani_2"])}>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_1"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_2"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_3"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_4"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_5"])}></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={clsx(style["swiper__wrap--item"])} >
                    <div className={clsx(style["ani__wrap"], style["ani_3"])}>
                        <div className={clsx(style["ani__wrap--item"], style["ani_3_1"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_3_2"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_3_3"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_3_4"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_3_5"])}></div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    )
}

export default Ani



