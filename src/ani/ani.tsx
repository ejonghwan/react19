import { useCallback, useEffect, useRef, useState } from 'react';
// import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// Import Swiper styles;
import 'swiper/css';
import style from './ani.module.scss';
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

// 두번째 섹션
import img_2_1_1 from '../../public/img02/img_2_1_1.png';
import img_2_2_1 from '../../public/img02/img_2_2_1.png';
import img_2_2_2 from '../../public/img02/img_2_2_2.png';
import img_2_2_3 from '../../public/img02/img_2_2_3.png';
import img_2_2_4 from '../../public/img02/img_2_2_4.png';
import img_2_2_5 from '../../public/img02/img_2_2_5.png';
import img_2_2_6 from '../../public/img02/img_2_2_6.png';

// 세번째 섹션
import img_3_1 from '../../public/img03/img_3_1.png';
import img_3_2_1 from '../../public/img03/img_3_2_1.png';
import img_3_2_2 from '../../public/img03/img_3_2_2.png';
import img_3_2_3_1 from '../../public/img03/img_3_2_3_1.png';
import img_3_2_3_2 from '../../public/img03/img_3_2_3_2.png';
import img_3_2_3_3 from '../../public/img03/img_3_2_3_3.png';
import img_3_2_4 from '../../public/img03/img_3_2_4.png';

interface ResetAniType {
  el: HTMLDivElement | null;
  timersRef: React.RefObject<ReturnType<typeof setTimeout>[]>;
  cancelRef: React.RefObject<boolean>;
}

interface StartAniType {
  section: { section: number; delayTime: number[] };
  el: HTMLDivElement | null;
  timersRef: React.RefObject<ReturnType<typeof setTimeout>[]>;
  cancelRef: React.RefObject<boolean>;
}

interface LoopAniType {
  section: { section: number; delayTime: number[] };
  el: HTMLDivElement | null;
  timersRef: React.RefObject<ReturnType<typeof setTimeout>[]>;
  cancelRef: React.RefObject<boolean>;
  totalTime: number;
}

// ani 2 ~ 마지막까지는 클래스 추가방식 아래 배열로 딜레이만 관리
const aniTime = [
  // {
  //     section: 1,
  //     delayTime: [500, 1000, 2000, 2000, 2000, 2000], //step 5
  //   },
  {
    section: 2,
    delayTime: [500, 1000, 2000, 2000, 2000, 2000], //step 5
  },
  {
    section: 3,
    delayTime: [500, 2000, 4000],
  },
  {
    section: 4,
    delayTime: [2000, 3000, 4000],
  },
];

const Ani = () => {
  // const [active, setActive] = useState<number | null>(null)

  const [swiperIdx, setSwiperIdx] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  //   const swiperRef = useRef<HTMLDivElement | null>(null);
  const slide1IntervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 두번째 섹션
  const ani2ElRef = useRef<HTMLDivElement | null>(null);
  const ani2CancelRef = useRef(false);
  const ani2TimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // 세번쨰 섹션
  const ani3ElRef = useRef<HTMLDivElement | null>(null);
  const ani3CancelRef = useRef(false);
  const ani3TimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleSwiperChange = (swi: SwiperType) => {
    console.log('slide change', swi);
    setSwiperIdx(swi.activeIndex);
  };

  const handleSwiperClick = (swi: SwiperType) => {
    console.log('slide click', swi, swi.slides[swi.clickedIndex]);
  };

  const resetAni = useCallback(({ el, timersRef, cancelRef }: ResetAniType) => {
    cancelRef.current = true;
    timersRef.current?.forEach(clearTimeout);
    timersRef.current = [];
    if (!el) return; // 클래스 제거
    [...el.classList].forEach(c => c.includes('step') && el!.classList.remove(c));
  }, []);

  const startAni = useCallback(({ section, el, timersRef, cancelRef }: StartAniType) => {
    // const totalDelayTime = section2.delayTime.reduce((cur, acc) => cur + acc, 0)
    let accumulatedTime = 0;

    // 이전 타이머 완전 초기화
    cancelRef.current = false;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    section.delayTime.forEach((delay, idx) => {
      accumulatedTime += delay;
      const timerId = setTimeout(() => {
        if (cancelRef.current) return;
        el?.classList.add(`step${idx}`);
      }, accumulatedTime);

      timersRef.current.push(timerId); // 전부 저장
    });
  }, []);

  const loopAni = useCallback(
    ({ section, el, cancelRef, timersRef, totalTime }: LoopAniType) => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      if (loopTimeoutRef.current) {
        clearTimeout(loopTimeoutRef.current);
        loopTimeoutRef.current = null;
      }

      startAni({ section, el, timersRef, cancelRef });

      intervalRef.current = setInterval(() => {
        resetAni({ el, timersRef, cancelRef });
        loopTimeoutRef.current = setTimeout(
          () => startAni({ section, el, timersRef, cancelRef }),
          500
        );
      }, totalTime);
    },
    [startAni, resetAni]
  );

  // swiper change
  useEffect(() => {
    if (!swiperRef.current) return;
    // if (intervalRef.current) clearInterval(intervalRef.current);
    // if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
    if (slide1IntervalRef.current) clearInterval(slide1IntervalRef.current);

    // 첫번째 슬라이드 : 이것만 css delay로 처리함.
    if (swiperIdx === 0) {
      slide1IntervalRef.current = setInterval(() => {
        const activeSlide = swiperRef.current?.el?.querySelector('.swiper-slide-active');
        // console.log('timeout inner', activeSlide)
        activeSlide?.classList.remove('swiper-slide-active');
        setTimeout(() => {
          activeSlide?.classList.add('swiper-slide-active');
        }, 100);

        console.log('ani time out');
      }, 15500);
    }

    // 두번째 슬라이드
    if (swiperIdx === 1) {
      loopAni({
        section: aniTime[0],
        el: ani2ElRef.current,
        timersRef: ani2TimersRef,
        cancelRef: ani2CancelRef,
        totalTime: 11000,
      });
      // startAni({ section: aniTime[0], el: ani2ElRef.current, timersRef: ani2TimersRef, cancelRef: ani2CancelRef })
    } else {
      // 슬라이드 벗어날 때
      resetAni({ el: ani2ElRef.current, timersRef: ani2TimersRef, cancelRef: ani2CancelRef });
    }

    // 세번째 슬라이드
    if (swiperIdx === 2) {
      // loopAni({ section: aniTime[1], el: ani3ElRef.current, timersRef: ani3TimersRef, cancelRef: ani3CancelRef, totalTime: 13000 })
      startAni({
        section: aniTime[1],
        el: ani3ElRef.current,
        timersRef: ani3TimersRef,
        cancelRef: ani3CancelRef,
      });
    } else {
      // 슬라이드 벗어날 때
      resetAni({ el: ani3ElRef.current, timersRef: ani3TimersRef, cancelRef: ani3CancelRef });
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
      resetAni({ el: ani2ElRef.current, timersRef: ani2TimersRef, cancelRef: ani2CancelRef });
      resetAni({ el: ani3ElRef.current, timersRef: ani3TimersRef, cancelRef: ani3CancelRef });
    };
  }, [swiperIdx]);

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
        onSlideChange={swiper => handleSwiperChange(swiper)}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        className={style['swiper__wrap']}
        onClick={swiper => handleSwiperClick(swiper)}
        //   ref={swiperRef}
      >
        {/* slide 1 */}
        <SwiperSlide className={clsx(style['swiper__wrap--item'])}>
          <div className={clsx(style['ani__wrap'], style['ani_1'])}>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_1'])}>
              <img src={img_03} alt="" className={style['img_03']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_2'])}>
              <img src={img_04} alt="" className={style['img_04']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_3'])}>
              <img src={img_05} alt="" className={style['img_05']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_5'])}>
              <img src={img_02} alt="" className={style['img_02']} />
              <div className={clsx(style['ani__wrap--item'], style['ani_1_5_1'])}>
                <img src={img_01} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_1_5_2'])}>
                <img src={img_06} alt="" />
              </div>
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_6_tit'])}>
              <img src={img_07} alt="" className={style['img_07']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_6'])}>
              <img src={img_08} alt="" className={style['img_08']} />
              <div className={style['icon_wrap']}>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_1'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_2'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_3'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_4'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_5'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_6'])}>
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
            <div className={clsx(style['ani__wrap--item'], style['ani_1_7'])}>
              <img src={img_03} alt="" className={style['img_03']} />
            </div>

            {/* 마지막 */}
            <div className={clsx(style['ani__wrap--item'], style['ani_1_8'])}>
              <img src={img_09} alt="" className={style['img_09']} />
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide className={clsx(style['swiper__wrap--item'])}>
          <div className={clsx(style['ani__wrap'], style['ani_2'])} ref={ani2ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_2_1'])}>
              <div className={clsx(style['ani__wrap--item'], style['ani_2_1_1'])}>
                <img src={img_2_1_1} alt="" />
              </div>
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_2_2'])}>
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_1'])}>
                <img src={img_2_2_1} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_2'])}>
                <img src={img_2_2_2} alt="" />
              </div>
              {/* 4월지출 */}
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_4'])}>
                <img src={img_2_2_4} alt="" />
              </div>
              {/* 아이콘 박스 */}
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_3'])}>
                <img src={img_2_2_3} alt="" />
              </div>
              {/* 내자산 */}
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_5'])}>
                <img src={img_2_2_5} alt="" />
              </div>
              {/* 다계좌이체 */}
              <div className={clsx(style['ani__wrap--item'], style['ani_2_2_6'])}>
                <img src={img_2_2_6} alt="" />
              </div>
            </div>
            {/* <div className={clsx(style["ani__wrap--item"], style["ani_2_3"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_4"])}></div>
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_5"])}></div> */}
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide className={clsx(style['swiper__wrap--item'])}>
          <div className={clsx(style['ani__wrap'], style['ani_3'])} ref={ani3ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_3_1'])}>
              <img src={img_3_1} alt="" />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_3_2'])}>
              <div className={style['ani_3_2_1']}>
                <img src={img_3_2_1} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_2'])}>
                <img src={img_3_2_2} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_3'])}>
                <div className={style['ani_3_2_3_1']}>
                  <img src={img_3_2_3_1} alt="" />
                </div>
                <div className={style['ani_3_2_3_2']}>
                  <img src={img_3_2_3_2} alt="" />
                </div>
                <div className={style['ani_3_2_3_3']}>
                  <img src={img_3_2_3_3} alt="" />
                </div>
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_4'])}>
                <img src={img_3_2_4} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Ani;
