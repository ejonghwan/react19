// import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import Swiper styles
import 'swiper/css';
import style from './ani.module.scss'
// import { Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';
// import test1 from '../../public/test1.png';
import img_01 from '../../public/img01/img_01.png';
import img_02 from '../../public/img01/img_02.png';
import img_03 from '../../public/img01/img_03.png';
import img_04 from '../../public/img01/img_04.png';
import img_05 from '../../public/img01/img_05.png';
import img_06 from '../../public/img01/img_06.png';
import img_07 from '../../public/img01/img_07.png';
import img_08 from '../../public/img01/img_08.png';

import img_icon1_1 from '../../public/img01/icon_1/1.png';
import img_icon1_2 from '../../public/img01/icon_1/2.png';
import img_icon1_3 from '../../public/img01/icon_1/3.png';
import img_icon1_4 from '../../public/img01/icon_1/4.png';
import img_icon1_5 from '../../public/img01/icon_1/5.png';
import img_icon1_6 from '../../public/img01/icon_1/6.png';

import img_icon2_1 from '../../public/img01/icon_2/1.png';
import img_icon2_2 from '../../public/img01/icon_2/2.png';
import img_icon2_3 from '../../public/img01/icon_2/3.png';
import img_icon2_4 from '../../public/img01/icon_2/4.png';
import img_icon2_5 from '../../public/img01/icon_2/5.png';
import img_icon2_6 from '../../public/img01/icon_2/6.png';

import img_icon3_1 from '../../public/img01/icon_3/1.png';
import img_icon3_2 from '../../public/img01/icon_3/2.png';
import img_icon3_3 from '../../public/img01/icon_3/3.png';
import img_icon3_4 from '../../public/img01/icon_3/4.png';
import img_icon3_5 from '../../public/img01/icon_3/5.png';
import img_icon3_6 from '../../public/img01/icon_3/6.png';

import img_09 from '../../public/img01/img_09.png';
import { useEffect, useRef, useState } from 'react';





const Ani = () => {

    // const [active, setActive] = useState<number | null>(null)

    const [swiperIdx, setSwiperIdx] = useState<number>(0)
    const swiperRef = useRef<HTMLDivElement | null>(null)
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null)
    const handleSwiperChange = (swi: SwiperType) => {
        console.log('slide change', swi)
        setSwiperIdx(swi.activeIndex)
    }

    const handleSwiperClick = (swi: SwiperType) => {
        console.log('slide click', swi, swi.slides[swi.clickedIndex])
        // swi.slides[swi.clickedIndex].classList.add('hohohoho')
        // setActive(swi.clickedIndex)


    }

    useEffect(() => {

        if (timerRef.current) {
            clearInterval(timerRef.current)
        }
        if (!swiperRef.current) return;

        // console.log('swiperIdx?', swiperIdx)



        if (swiperIdx === 0) {
            const activeSlide = swiperRef.current?.querySelector('.swiper-slide-active')
            timerRef.current = setInterval(() => {
                // console.log('timeout inner', activeSlide)
                activeSlide?.classList.remove('swiper-slide-active')
                setTimeout(() => {
                    activeSlide?.classList.add('swiper-slide-active')
                }, 100)

                console.log('ani time out')
            }, 15500)
        }


        // console.log('swiperRef??', swiperRef.current)


        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current)
            }
        }

    }, [swiperIdx])


    return (
        <>

            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                // modules={[Pagination, Navigation]}
                // spaceBetween={50}
                slidesPerView={1}
                onSlideChange={(swiper) => handleSwiperChange(swiper)}
                onSwiper={(swiper) => console.log(swiper)}
                className={style["swiper__wrap"]}
                onClick={swiper => handleSwiperClick(swiper)}
                ref={swiperRef}
            >
                {/* slide 1 */}
                <SwiperSlide className={clsx(style["swiper__wrap--item"])} >
                    <div className={clsx(style["ani__wrap"], style["ani_1"])}>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_1"])}>
                            <img src={img_03} alt="" className={style["img_03"]} />
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_2"])}>
                            <img src={img_04} alt="" className={style["img_04"]} />
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_3"])}>
                            <img src={img_05} alt="" className={style["img_05"]} />
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_5"])}>
                            <img src={img_02} alt="" className={style["img_02"]} />
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_5_1"])}>
                                <img src={img_01} alt="" />
                            </div>
                            <div className={clsx(style["ani__wrap--item"], style["ani_1_5_2"])}>
                                <img src={img_06} alt="" />
                            </div>
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_6_tit"])}>
                            <img src={img_07} alt="" className={style["img_07"]} />
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_6"])}>
                            <img src={img_08} alt="" className={style["img_08"]} />
                            <div className={style["icon_wrap"]}>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_1"])}>
                                    <div>
                                        <img src={img_icon1_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_1} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_1} alt="" />
                                    </div>
                                </div>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_2"])}>
                                    <div>
                                        <img src={img_icon1_2} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_2} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_2} alt="" />
                                    </div>
                                </div>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_3"])}>
                                    <div>
                                        <img src={img_icon1_3} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_3} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_3} alt="" />
                                    </div>
                                </div>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_4"])}>
                                    <div>
                                        <img src={img_icon1_4} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_4} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_4} alt="" />
                                    </div>
                                </div>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_5"])}>
                                    <div>
                                        <img src={img_icon1_5} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_5} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_5} alt="" />
                                    </div>
                                </div>
                                <div className={clsx(style["ani__wrap--item"], style["ani_1_6_6"])}>
                                    <div>
                                        <img src={img_icon1_6} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon2_6} alt="" />
                                    </div>
                                    <div>
                                        <img src={img_icon3_6} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_7"])}>
                            <img src={img_03} alt="" className={style["img_03"]} />
                        </div>


                        {/* 마지막 */}
                        <div className={clsx(style["ani__wrap--item"], style["ani_1_8"])}>
                            <img src={img_09} alt="" className={style["img_09"]} />
                        </div>

                    </div>
                </SwiperSlide>


                {/* slide 2 */}
                <SwiperSlide className={clsx(style["swiper__wrap--item"])} >
                    <div className={clsx(style["ani__wrap"], style["ani_2"])}>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_1"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_2"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_3"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_4"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_5"])}></div>
                    </div>
                </SwiperSlide>


                {/* slide 3 */}
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



