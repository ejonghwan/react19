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
  const [swiperIdx, setSwiperIdx] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);


  // 모든 타이머(Timeout, Interval)를 관리할 Ref 배열
  const allTimers = useRef<NodeJS.Timeout[]>([]);


  // 섹션별 DOM Ref
  const ani2ElRef = useRef<HTMLDivElement | null>(null);
  const ani3ElRef = useRef<HTMLDivElement | null>(null);


  // 모든 애니메이션 초기화 (타이머 정리 + 클래스 제거)
  const killAllAnimations = useCallback(() => {
    allTimers.current.forEach(t => {
      clearTimeout(t);
      clearInterval(t);
    });
    allTimers.current = [];

    [ani2ElRef.current, ani3ElRef.current].forEach(el => {
      if (el) {
        el.className = el.className.replace(/\bstep\d+\b/g, '').trim();
      }
    });
  }, []);



  // 순차 애니메이션 실행 로직
  const startSequence = useCallback((el: HTMLDivElement | null, delays: number[]) => {
    if (!el) return;
    let accumulated = 0;
    delays.forEach((delay, idx) => {
      accumulated += delay;
      const timer = setTimeout(() => {
        el.classList.add(`step${idx}`);
      }, accumulated);
      allTimers.current.push(timer);
    });
  }, []);


  // 메인 이펙트: 슬라이드가 바뀔 때마다 실행
  useEffect(() => {
    // 슬라이드가 바뀌면 이전 애니메이션 즉시 중단
    killAllAnimations();

    // 슬라이드 1 : 15.5초마다 리셋
    if (swiperIdx === 0) {
      const interval = setInterval(() => {
        const activeSlide = swiperRef.current?.el?.querySelector('.swiper-slide-active');
        activeSlide?.classList.remove('swiper-slide-active');
        setTimeout(() => activeSlide?.classList.add('swiper-slide-active'), 100);
      }, 15500);
      allTimers.current.push(interval);
    }

    // 슬라이드 2 : 11초 루프 애니메이션
    if (swiperIdx === 1) {
      const runLoop = () => {
        // 내부 초기화
        if (ani2ElRef.current) {
          ani2ElRef.current.className = ani2ElRef.current.className.replace(/\bstep\d+\b/g, '').trim();
        }
        // 이 슬라이드에서 생성된 타임아웃만 제거 (interval은 유지)
        allTimers.current = allTimers.current.filter(t => {
          // if (typeof t === 'number' || (t && t._idleTimeout)) { // 브라우저/Node 환경 대응
          if (typeof t === 'number') { // 브라우저/Node 환경 대응
            clearTimeout(t);
            return false;
          }
          return true;
        });

        // 50ms 후 재생 (DOM 리셋 인지 시간)
        const wait = setTimeout(() => startSequence(ani2ElRef.current, aniTime[0].delayTime), 50);
        allTimers.current.push(wait);
      };

      runLoop();
      const loop = setInterval(runLoop, 11000);
      allTimers.current.push(loop);
    }

    // 슬라이드 3 : 1회성 애니메이션
    if (swiperIdx === 2) {
      startSequence(ani3ElRef.current, aniTime[1].delayTime);
    }

    return () => killAllAnimations();

  }, [swiperIdx, killAllAnimations, startSequence]);



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
        <SwiperSlide className={style['swiper__wrap--item']}>
          <div className={clsx(style['ani__wrap'], style['ani_3'])} ref={ani3ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_3_1'])}><img src={img_3_1} alt="" /></div>
            <div className={clsx(style['ani__wrap--item'], style['ani_3_2'])}>
              <div className={style['ani_3_2_1']}><img src={img_3_2_1} alt="" /></div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_2'])}><img src={img_3_2_2} alt="" /></div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_3'])}>
                <div className={style['ani_3_2_3_1']}><img src={img_3_2_3_1} alt="" /></div>
                <div className={style['ani_3_2_3_2']}><img src={img_3_2_3_2} alt="" /></div>
                <div className={style['ani_3_2_3_3']}><img src={img_3_2_3_3} alt="" /></div>
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_3_2_4'])}><img src={img_3_2_4} alt="" /></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Ani;