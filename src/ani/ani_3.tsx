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
// import img_01 from '../../public/img01/img_01.png';
// import img_02 from '../../public/img01/img_02.png';
// import img_03 from '../../public/img01/img_03.png';
// import img_04 from '../../public/img01/img_04.png';
// import img_05 from '../../public/img01/img_05.png';
// import img_06 from '../../public/img01/img_06.png';
// import img_07 from '../../public/img01/img_07.png';
// import img_08 from '../../public/img01/img_08.png';

// import img_icon1_1 from '../../public/img01/icon_1/1.png';
// import img_icon1_2 from '../../public/img01/icon_1/2.png';
// import img_icon1_3 from '../../public/img01/icon_1/3.png';
// import img_icon1_4 from '../../public/img01/icon_1/4.png';
// import img_icon1_5 from '../../public/img01/icon_1/5.png';
// import img_icon1_6 from '../../public/img01/icon_1/6.png';

// import img_icon2_1 from '../../public/img01/icon_2/1.png';
// import img_icon2_2 from '../../public/img01/icon_2/2.png';
// import img_icon2_3 from '../../public/img01/icon_2/3.png';
// import img_icon2_4 from '../../public/img01/icon_2/4.png';
// import img_icon2_5 from '../../public/img01/icon_2/5.png';
// import img_icon2_6 from '../../public/img01/icon_2/6.png';

// import img_icon3_1 from '../../public/img01/icon_3/1.png';
// import img_icon3_2 from '../../public/img01/icon_3/2.png';
// import img_icon3_3 from '../../public/img01/icon_3/3.png';
// import img_icon3_4 from '../../public/img01/icon_3/4.png';
// import img_icon3_5 from '../../public/img01/icon_3/5.png';
// import img_icon3_6 from '../../public/img01/icon_3/6.png';
import img_09 from '../../public/img01_back/img_09.png';


// 첫번쨰 섹션
import img_1_1_1 from '../../public/img01/img_1_1_1.png';
import img_1_1_2 from '../../public/img01/img_1_1_2.png';
import img_1_1_3 from '../../public/img01/img_1_1_3.png';

import img_1_2 from '../../public/img01/img_1_2.png';
import img_1_3_t from '../../public/img01/img_1_3_t.png';  //그림자 포함
import img_1_3_tit from '../../public/img01/img_1_3_tit.png';
// import img_1_3_1 from '../../public/img01/img_1_3_1.png';
// import img_1_3_2 from '../../public/img01/img_1_3_2.png';
// import img_1_3_3 from '../../public/img01/img_1_3_3.png';
// import img_1_3_4 from '../../public/img01/img_1_3_4.png';
// import img_1_3_5 from '../../public/img01/img_1_3_5.png';
// import img_1_3_6 from '../../public/img01/img_1_3_6.png';

import img_1_4_1 from '../../public/img01/img_1_4_1.png';
import img_1_4_tit from '../../public/img01/img_1_4_tit.png';
import img_ico_1_4_1_1 from '../../public/img01/img_ico_1_4_1_1.png';
import img_ico_1_4_1_2 from '../../public/img01/img_ico_1_4_1_2.png';
import img_ico_1_4_1_3 from '../../public/img01/img_ico_1_4_1_3.png';
import img_ico_1_4_1_4 from '../../public/img01/img_ico_1_4_1_4.png';
import img_ico_1_4_1_5 from '../../public/img01/img_ico_1_4_1_5.png';
import img_ico_1_4_1_6 from '../../public/img01/img_ico_1_4_1_6.png';

import img_ico_1_4_2_1 from '../../public/img01/img_ico_1_4_2_1.png';
import img_ico_1_4_2_2 from '../../public/img01/img_ico_1_4_2_2.png';
import img_ico_1_4_2_3 from '../../public/img01/img_ico_1_4_2_3.png';
import img_ico_1_4_2_4 from '../../public/img01/img_ico_1_4_2_4.png';
import img_ico_1_4_2_5 from '../../public/img01/img_ico_1_4_2_5.png';
import img_ico_1_4_2_6 from '../../public/img01/img_ico_1_4_2_6.png';

import img_ico_1_4_3_1 from '../../public/img01/img_ico_1_4_3_1.png';
import img_ico_1_4_3_2 from '../../public/img01/img_ico_1_4_3_2.png';
import img_ico_1_4_3_3 from '../../public/img01/img_ico_1_4_3_3.png';
import img_ico_1_4_3_4 from '../../public/img01/img_ico_1_4_3_4.png';
import img_ico_1_4_3_5 from '../../public/img01/img_ico_1_4_3_5.png';
import img_ico_1_4_3_6 from '../../public/img01/img_ico_1_4_3_6.png';


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

// 네번째 섹션
import img_4_1 from '../../public/img04/img_4_1.png';
import img_4_2_1 from '../../public/img04/img_4_2_1.png';
import img_4_2_2 from '../../public/img04/img_4_2_2.png';
import img_4_2_3 from '../../public/img04/img_4_2_3.png';
import img_4_2_4 from '../../public/img04/img_4_2_4.png';
import img_4_2_5 from '../../public/img04/img_4_2_5.png';


// 네번째 섹션
import img_5_1 from '../../public/img05/img_5_1.png';
import img_5_2_1_1 from '../../public/img05/img_5_2_1_1.png';
import img_5_2_1_2 from '../../public/img05/img_5_2_1_2.png';
import img_5_2_1_3 from '../../public/img05/img_5_2_1_3.png';
import img_5_2_2 from '../../public/img05/img_5_2_2.png';
import img_5_2_3 from '../../public/img05/img_5_2_3.png';
import img_5_2_4 from '../../public/img05/img_5_2_4.png';
import img_5_2_5 from '../../public/img05/img_5_2_5.png';
import img_5_2_6 from '../../public/img05/img_5_2_6.png';



// ani 2 ~ 마지막까지는 클래스 추가방식 아래 배열로 딜레이만 관리
const aniTime = [
  {
    section: 1, // 사용 x
    delayTime: [], // 사용 x
    loopInterval: 15500,
    resetDelay: 0 // 사용 x
  },
  {
    section: 2,
    delayTime: [500, 1000, 2000, 2000, 2000, 2000], //step 5
    loopInterval: 11000,
    // loopInterval: 10000000,
    resetDelay: 50
  },
  {
    section: 3,
    delayTime: [500, 1000, 2000, 2000, 2000, 3000],
    loopInterval: 13000,
    // loopInterval: 10000000,
    resetDelay: 50
  },
  {
    section: 4,
    delayTime: [500, 1000, 2000, 2000, 2000, 3000],
    loopInterval: 13000,
    // loopInterval: 10000000,
    resetDelay: 50
  },
  {
    section: 5,
    delayTime: [500, 1000, 2000, 2000, 2000, 2000, 3000],
    loopInterval: 15000,
    // loopInterval: 10000000,
    resetDelay: 50
  },
];



const Ani = () => {
  const [swiperIdx, setSwiperIdx] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Timeout과 Interval 분리 관리
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  // 섹션별 DOM Ref
  const ani2ElRef = useRef<HTMLDivElement | null>(null);
  const ani3ElRef = useRef<HTMLDivElement | null>(null);
  const ani4ElRef = useRef<HTMLDivElement | null>(null);
  const ani5ElRef = useRef<HTMLDivElement | null>(null);



  // 모든 애니메이션 초기화
  const resetAllAnimations = useCallback(() => {

    const aniArr = [ani2ElRef.current, ani3ElRef.current, ani4ElRef.current, ani5ElRef.current]
    timeoutsRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    timeoutsRef.current = [];
    intervalsRef.current = [];

    aniArr.forEach(el => {
      if (el) el.className = el.className.replace(/\bstep\d+\b/g, '').trim();
    });
  }, []);



  // 순차 애니메이션 실행
  const startAnimation = useCallback((el: HTMLDivElement | null, delays: number[]) => {
    if (!el) return;
    let accumulated = 0;
    delays.forEach((delay, idx) => {
      accumulated += delay;
      const timer = setTimeout(() => {
        el.classList.add(`step${idx}`);
      }, accumulated);
      timeoutsRef.current.push(timer);
    });
  }, []);



  // 공통 루프 애니메이션 함수
  const createLoopAnimation = useCallback((
    el: HTMLDivElement | null,
    delays: number[],
    loopInterval: number,
    resetDelay: number = 50
  ) => {
    const runLoop = () => {
      // Timeout만 정리 (Interval은 유지)
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];

      // 클래스 초기화
      if (el) {
        el.className = el.className.replace(/\bstep\d+\b/g, '').trim();
        // el.classList.forEach(c => {
        //   if (c.startsWith("step")) el.classList.remove(c);
        // });
      }


      // resetDelay ms 후 재시작
      const wait = setTimeout(() => {
        startAnimation(el, delays);
      }, resetDelay);
      timeoutsRef.current.push(wait);
    };

    // 첫 실행
    runLoop();

    // 루프 설정
    const loop = setInterval(runLoop, loopInterval);
    intervalsRef.current.push(loop);
  }, [startAnimation]);



  // 메인 이펙트
  useEffect(() => {
    resetAllAnimations();

    // 슬라이드 1: css로  처리
    if (swiperIdx === 0) {
      const interval = setInterval(() => {
        const activeSlide = swiperRef.current?.el?.querySelector('.swiper-slide-active');
        activeSlide?.classList.remove('swiper-slide-active');
        const t = setTimeout(() => {
          activeSlide?.classList.add('swiper-slide-active');
        }, 100);
        timeoutsRef.current.push(t);
      }, aniTime[0].loopInterval);
      intervalsRef.current.push(interval);
    }

    // 슬라이드 2
    if (swiperIdx === 1) {
      const config = aniTime[1]
      createLoopAnimation(
        ani2ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }

    // 슬라이드 3
    if (swiperIdx === 2) {
      const config = aniTime[2]
      createLoopAnimation(
        ani3ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }

    // 슬라이드 4
    if (swiperIdx === 3) {
      const config = aniTime[3]
      createLoopAnimation(
        ani4ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }
    // 슬라이드 5
    if (swiperIdx === 4) {
      const config = aniTime[4]
      createLoopAnimation(
        ani5ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }

    return () => resetAllAnimations();
  }, [swiperIdx, resetAllAnimations, createLoopAnimation]);


  return (
    <>
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        slidesPerView={1}
        onSlideChange={swi => setSwiperIdx(swi.activeIndex)}
        onSwiper={swi => { swiperRef.current = swi; }}
        className={style['swiper__wrap']}
      >
        {/* Slide 1 */}
        <SwiperSlide className={style['swiper__wrap--item']}>
          <div className={clsx(style['ani__wrap'], style['ani_1'])}>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_1'])}>
              <img src={img_1_1_1} alt="" className={style['img_03']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_2'])}>
              <img src={img_1_1_2} alt="" className={style['img_04']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_3'])}>
              <img src={img_1_1_3} alt="" className={style['img_05']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_5'])}>
              <img src={img_1_3_t} alt="" className={style['img_02']} />
              <div className={clsx(style['ani__wrap--item'], style['ani_1_5_1'])}>
                <img src={img_1_2} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_1_5_2'])}>
                <img src={img_1_3_tit} alt="" />
              </div>
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_6_tit'])}>
              <img src={img_1_4_tit} alt="" className={style['img_07']} />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_6'])}>
              <img src={img_1_4_1} alt="" className={style['img_08']} />
              <div className={style['icon_wrap']}>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_1'])}>
                  <div>
                    <img src={img_ico_1_4_1_1} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_1} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_1} alt="" />
                  </div>
                </div>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_2'])}>
                  <div>
                    <img src={img_ico_1_4_1_2} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_2} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_2} alt="" />
                  </div>
                </div>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_3'])}>
                  <div>
                    <img src={img_ico_1_4_1_3} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_3} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_3} alt="" />
                  </div>
                </div>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_4'])}>
                  <div>
                    <img src={img_ico_1_4_1_4} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_4} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_4} alt="" />
                  </div>
                </div>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_5'])}>
                  <div>
                    <img src={img_ico_1_4_1_5} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_5} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_5} alt="" />
                  </div>
                </div>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_6_6'])}>
                  <div>
                    <img src={img_ico_1_4_1_6} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_2_6} alt="" />
                  </div>
                  <div>
                    <img src={img_ico_1_4_3_6} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_7'])}>
              <img src={img_1_1_1} alt="" className={style['img_03']} />
            </div>

            {/* 마지막 */}
            <div className={clsx(style['ani__wrap--item'], style['ani_1_8'])}>
              <img src={img_09} alt="" className={style['img_09']} />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className={style['swiper__wrap--item']}>
          {/* <div className={clsx(style['ani__wrap'], style['ani_2'])} ref={ani2ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_2_1'])}>
              <div className={clsx(style['ani__wrap--item'], style['ani_2_1_1'])}><img src={img_2_1_1} alt="" /></div>
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_2_2'])}>
              {[img_2_2_1, img_2_2_2, img_2_2_4, img_2_2_3, img_2_2_5, img_2_2_6].map((img, i) => (
                <div key={i} className={clsx(style['ani__wrap--item'], style[`ani_2_2_${i + 1}`])}><img src={img} alt="" /></div>
              ))}
            </div>
          </div> */}
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
                        <div className={clsx(style["ani__wrap--item"], style["ani_2_5"])}></div> 
                        */}
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
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

        {/* Slide 4 */}
        <SwiperSlide className={clsx(style['swiper__wrap--item'])}>
          <div className={clsx(style['ani__wrap'], style['ani_4'])} ref={ani4ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_4_1'])}>
              <img src={img_4_1} alt="" />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_4_2'])}>
              <div className={style['ani_4_2_1']}>
                <img src={img_4_2_1} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_4_2_2'])}>
                <img src={img_4_2_2} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_4_2_3'])}>
                <img src={img_4_2_3} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_4_2_4'])}>
                <img src={img_4_2_4} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_4_2_5'])}>
                <img src={img_4_2_5} alt="" />
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className={clsx(style['swiper__wrap--item'])}>
          <div className={clsx(style['ani__wrap'], style['ani_5'])} ref={ani5ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_5_1'])}>
              <img src={img_5_1} alt="" />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_5_2'])}>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_1'])}>
                <div className={style['ani_5_2_1_1']}><img src={img_5_2_1_1} alt="" /></div>
                <div className={style['ani_5_2_1_2']}><img src={img_5_2_1_2} alt="" /></div>
                <div className={style['ani_5_2_1_3']}><img src={img_5_2_1_3} alt="" /></div>
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_2'])}>
                <img src={img_5_2_2} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_3'])}>
                <img src={img_5_2_3} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_4'])}>
                <img src={img_5_2_4} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_5'])}>
                <img src={img_5_2_5} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_5_2_6'])}>
                <img src={img_5_2_6} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Ani;