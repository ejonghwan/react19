import { useCallback, useEffect, useRef, useState, } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import style from './ani.module.scss';
import clsx from 'clsx';

// 첫번쨰 섹션
import img_1_1_1 from '../../public/tutorial/main_tuto_1_1_1.png';
import img_1_1_2 from '../../public/tutorial/main_tuto_1_1_2.png';
import img_1_1_3 from '../../public/tutorial/main_tuto_1_1_3.png';

import img_1_2 from '../../public/tutorial/main_tuto_1_2.png';
// import img_1_3_t from '../../public/tutorial/main_tuto_1_3_t.png';  //그림자 포함
import img_1_3_tit from '../../public/tutorial/main_tuto_1_3_tit.png';
import img_1_3_1 from '../../public/tutorial/main_tuto_1_3_1.png';
import img_1_3_2 from '../../public/tutorial/main_tuto_1_3_2.png';
import img_1_3_3 from '../../public/tutorial/main_tuto_1_3_3.png';
import img_1_3_4 from '../../public/tutorial/main_tuto_1_3_4.png';
import img_1_3_5 from '../../public/tutorial/main_tuto_1_3_5.png';
import img_1_3_6 from '../../public/tutorial/main_tuto_1_3_6.png';

import img_1_4_1 from '../../public/tutorial/main_tuto_1_4_1.png';
import img_1_4_tit from '../../public/tutorial/main_tuto_1_4_tit.png';
import img_ico_1_4_1_1 from '../../public/tutorial/main_tuto_ico_1_4_1_1.png';
import img_ico_1_4_1_2 from '../../public/tutorial/main_tuto_ico_1_4_1_2.png';
import img_ico_1_4_1_3 from '../../public/tutorial/main_tuto_ico_1_4_1_3.png';
import img_ico_1_4_1_4 from '../../public/tutorial/main_tuto_ico_1_4_1_4.png';
import img_ico_1_4_1_5 from '../../public/tutorial/main_tuto_ico_1_4_1_5.png';
import img_ico_1_4_1_6 from '../../public/tutorial/main_tuto_ico_1_4_1_6.png';

import img_ico_1_4_2_1 from '../../public/tutorial/main_tuto_ico_1_4_2_1.png';
import img_ico_1_4_2_2 from '../../public/tutorial/main_tuto_ico_1_4_2_2.png';
import img_ico_1_4_2_3 from '../../public/tutorial/main_tuto_ico_1_4_2_3.png';
import img_ico_1_4_2_4 from '../../public/tutorial/main_tuto_ico_1_4_2_4.png';
import img_ico_1_4_2_5 from '../../public/tutorial/main_tuto_ico_1_4_2_5.png';
import img_ico_1_4_2_6 from '../../public/tutorial/main_tuto_ico_1_4_2_6.png';

import img_ico_1_4_3_1 from '../../public/tutorial/main_tuto_ico_1_4_3_1.png';
import img_ico_1_4_3_2 from '../../public/tutorial/main_tuto_ico_1_4_3_2.png';
import img_ico_1_4_3_3 from '../../public/tutorial/main_tuto_ico_1_4_3_3.png';
import img_ico_1_4_3_4 from '../../public/tutorial/main_tuto_ico_1_4_3_4.png';
import img_ico_1_4_3_5 from '../../public/tutorial/main_tuto_ico_1_4_3_5.png';
import img_ico_1_4_3_6 from '../../public/tutorial/main_tuto_ico_1_4_3_6.png';
// import img_1_5 from '../../public/tutorial/main_tuto_1_5.png';

// 두번째 섹션
import img_2_1_1 from '../../public/tutorial/main_tuto_2_1_1.png';
import img_2_2_1 from '../../public/tutorial/main_tuto_2_2_1.png';
import img_2_2_2 from '../../public/tutorial/main_tuto_2_2_2.png';
import img_2_2_3 from '../../public/tutorial/main_tuto_2_2_3.png';
import img_2_2_4 from '../../public/tutorial/main_tuto_2_2_4.png';
import img_2_2_5 from '../../public/tutorial/main_tuto_2_2_5.png';
import img_2_2_6 from '../../public/tutorial/main_tuto_2_2_6.png';

// 세번째 섹션
import img_3_1 from '../../public/tutorial/main_tuto_3_1.png';
import img_3_2_1 from '../../public/tutorial/main_tuto_3_2_1.png';
import img_3_2_2 from '../../public/tutorial/main_tuto_3_2_2.png';
import img_3_2_3_1 from '../../public/tutorial/main_tuto_3_2_3_1.png';
import img_3_2_3_2 from '../../public/tutorial/main_tuto_3_2_3_2.png';
import img_3_2_3_3 from '../../public/tutorial/main_tuto_3_2_3_3.png';
import img_3_2_4 from '../../public/tutorial/main_tuto_3_2_4.png';

// 네번째 섹션
import img_4_1 from '../../public/tutorial/main_tuto_4_1.png';
import img_4_2_1 from '../../public/tutorial/main_tuto_4_2_1.png';
import img_4_2_2 from '../../public/tutorial/main_tuto_4_2_2.png';
import img_4_2_3 from '../../public/tutorial/main_tuto_4_2_3.png';
import img_4_2_4 from '../../public/tutorial/main_tuto_4_2_4.png';
import img_4_2_5 from '../../public/tutorial/main_tuto_4_2_5.png';

// 네번째 섹션
import img_5_1 from '../../public/tutorial/main_tuto_5_1.png';
import img_5_2_1_1 from '../../public/tutorial/main_tuto_5_2_1_1.png';
import img_5_2_1_2 from '../../public/tutorial/main_tuto_5_2_1_2.png';
import img_5_2_1_3 from '../../public/tutorial/main_tuto_5_2_1_3.png';
import img_5_2_2 from '../../public/tutorial/main_tuto_5_2_2.png';
import img_5_2_3 from '../../public/tutorial/main_tuto_5_2_3.png';
import img_5_2_4 from '../../public/tutorial/main_tuto_5_2_4.png';
import img_5_2_5 from '../../public/tutorial/main_tuto_5_2_5.png';
import img_5_2_6 from '../../public/tutorial/main_tuto_5_2_6.png';
import { TestContextProvider } from '../context/TestContext';
import Ani_3_compo from './ani_3_compo';
import Ani_4_compo from './ani_4_compo';
import Excompo_1 from './excompo_1';
import { Navigation } from 'swiper/modules';
import TooltipSlider from './Slider';
import Input from '../components/atoms/Input';

const testMode = true;
// ani 2 ~ 마지막까지는 클래스 추가방식 아래 배열로 딜레이만 관리
const aniTime = [
  {
    section: 1,
    delayTime: [500, 2000, 2000, 1300, 2000, 2000, 4000],
    loopInterval: testMode ? 10000000 : 19000,
    resetDelay: 50,
  },
  {
    section: 2,
    delayTime: [500, 1000, 2000, 2000, 2000, 2000], //step 5
    loopInterval: testMode ? 10000000 : 11000,
    resetDelay: 50,
  },
  {
    section: 3,
    delayTime: [500, 1000, 2000, 2000, 2000, 3000],
    loopInterval: testMode ? 10000000 : 13000,
    resetDelay: 50,
  },
  {
    section: 4,
    delayTime: [500, 1000, 2000, 2500, 2500, 3500],
    loopInterval: testMode ? 10000000 : 15000,
    resetDelay: 50,
  },
  {
    section: 5,
    delayTime: [500, 1000, 2000, 2000, 2000, 2000, 3000],
    loopInterval: testMode ? 10000000 : 15000,
    resetDelay: 50,
  },
];

console.log('scope0', document.readyState);
const Ani = () => {
  console.log('scope1', document.readyState);
  useEffect(() => {
    console.log('scope2', document.readyState);
  }, []);

  const aa = import.meta.env.VITE_TEST;

  console.log('aa1??', aa);

  useEffect(() => {
    console.log('aa2??', aa);
  }, []);

  const [swiperIdx, setSwiperIdx] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Timeout과 Interval 분리 관리
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  // 섹션별 DOM Ref
  const ani1ElRef = useRef<HTMLDivElement | null>(null);
  const ani2ElRef = useRef<HTMLDivElement | null>(null);
  const ani3ElRef = useRef<HTMLDivElement | null>(null);
  const ani4ElRef = useRef<HTMLDivElement | null>(null);
  const ani5ElRef = useRef<HTMLDivElement | null>(null);

  // 모든 애니메이션 초기화
  const resetAllAnimations = useCallback(() => {
    const aniArr = [
      ani1ElRef.current,
      ani2ElRef.current,
      ani3ElRef.current,
      ani4ElRef.current,
      ani5ElRef.current,
    ];
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
  const createLoopAnimation = useCallback(
    (
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
    },
    [startAnimation]
  );

  // 슬라이드 체인지 시
  useEffect(() => {
    resetAllAnimations();

    // 슬라이드 1: css로  처리
    if (swiperIdx === 0) {
      const config = aniTime[0];
      createLoopAnimation(
        ani1ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }
    // 슬라이드 2
    if (swiperIdx === 1) {
      const config = aniTime[1];
      createLoopAnimation(
        ani2ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }
    // 슬라이드 3
    if (swiperIdx === 2) {
      const config = aniTime[2];
      createLoopAnimation(
        ani3ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }
    // 슬라이드 4
    if (swiperIdx === 3) {
      const config = aniTime[3];
      createLoopAnimation(
        ani4ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }
    // 슬라이드 5
    if (swiperIdx === 4) {
      const config = aniTime[4];
      createLoopAnimation(
        ani5ElRef.current,
        config.delayTime,
        config.loopInterval,
        config.resetDelay
      );
    }

    return () => resetAllAnimations();
  }, [swiperIdx, resetAllAnimations, createLoopAnimation]);

  // pnpm view @oqf/shared-biz

  const handleResize = () => {
    // alert(window.visualViewport?.height);
    // console.log('how');
  };




  useEffect(() => {
    // console.log('/???');
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [input, setInput] = useState('')


  // const [allCheck, setAllCheck] = useState(false)



  // 예시 데이터 (서버에서 받아온다고 가정)
  const initialData = [
    { id: 1, title: '첫 번째 항목' },
    { id: 2, title: '두 번째 항목' },
    { id: 3, title: '세 번째 항목' },
  ];

  // 선택된 항목의 ID만 담는 배열
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // 1. 상태 계산 (파생된 상태)
  const isAllChecked = initialData.length > 0 && selectedIds.length === initialData.length;

  // 2. 전체 선택/해제 핸들러
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 모두 선택: 모든 ID를 배열에 넣음
      const allIds = initialData.map(item => item.id);
      setSelectedIds(allIds);
    } else {
      // 모두 해제: 빈 배열로 만듦
      setSelectedIds([]);
    }
  };

  // 3. 개별 선택 핸들러
  const handleCheckChange = (id: number, checked: boolean) => {
    if (checked) {
      // 체크됨: 기존 배열에 ID 추가
      setSelectedIds(prev => [...prev, id]);
    } else {
      // 체크 해제: 해당 ID만 필터링해서 제거
      setSelectedIds(prev => prev.filter(selectedId => selectedId !== id));
    }
  };










  console.log('asdasd1', document.readyState)
  useEffect(() => {
    console.log('asdasd2', document.readyState)
  }, [])



  // window.addEventListener("visibilitychange", () => {
  //   if (document.hidden) {
  //     alert("사용자가 탭을 나갔습니다. (일시정지/보안 처리)");
  //     // 예: 민감한 정보 숨기기, 실시간 차트 업데이트 중지
  //   } else {
  //     alert("사용자가 다시 돌아왔습니다. (데이터 갱신)");
  //     // 예: 최신 금리 정보 다시 불러오기
  //   }
  // });


  return (
    <>

      <div style={{ marginTop: "40px", fontSize: "20px" }}>
        동동이 {selectedIds.length}/{initialData.length}<br />
        <input type="checkbox"

          checked={isAllChecked}
          onChange={(e) => handleAllCheck(e.target.checked)} />

      </div>
      <div style={{ marginTop: '20px' }}>

        {initialData.map((item) => (
          <div key={item.id}>
            <label>
              <input
                type="checkbox"
                // 현재 내 ID가 선택된 배열에 있는지 확인
                checked={selectedIds.includes(item.id)}
                onChange={(e) => handleCheckChange(item.id, e.target.checked)}
              />
              {item.title}
            </label>
          </div>
        ))}
      </div>

      <br /><br /><hr /><br /><br />


      <div style={{ fontSize: '20px' }}>{input}</div>
      <Input type='text' name='hoho' value={input} onChange={(e) => setInput(e.target.value)} />


      <button type="button" disabled aria-label="어케읽어 ?">
        hoho btn ? {aa}
      </button>
      <Excompo_1 as="span">
        <strong style={{ fontSize: '20px' }}>aaa</strong>
      </Excompo_1>



      <TestContextProvider>
        <Ani_3_compo />
        <Ani_4_compo />
      </TestContextProvider>

      <TooltipSlider />

      {/* <TestContextProvider>
        <Ani_4_compo />
      </TestContextProvider> */}

      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>

      <input type="text" style={{ width: '300px', height: '100px' }} />
      <svg width={'20px'} height={'20px'} style={{ border: '1px solid red' }}>
        svg
      </svg>
      <svg
        width={'20px'}
        height={'20px'}
        style={{ border: '1px solid red' }}
        className={style['hoho11']}
      >
        svg
      </svg>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        slidesPerView={1}
        onSlideChange={swi => setSwiperIdx(swi.activeIndex)}
        onSwiper={swi => {
          swiperRef.current = swi;
        }}
        className={style['swiper__wrap']}
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        modules={[Navigation]}
      >
        {/* Slide 1 */}
        <SwiperSlide className={style['swiper__wrap--item']}>
          <div className={clsx(style['ani__wrap'], style['ani_1'])} ref={ani1ElRef}>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_1_1'])}>
              <img src={img_1_1_1} alt="" />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_1_2'])}>
              <img src={img_1_1_2} alt="" />
            </div>
            <div className={clsx(style['ani__wrap--item'], style['ani_1_1_3'])}>
              <img src={img_1_1_3} alt="" />
            </div>

            <div className={clsx(style['ani__wrap--item'], style['ani_1_2'])}>
              {/* <img src={img_1_3_t} alt="" className={style['img_02']} /> */}
              <div className={clsx(style['ani__wrap--item'], style['ani_1_3_tit'])}>
                <img src={img_1_3_tit} alt="" />
              </div>
              <div className={clsx(style['ani__wrap--item'], style['ani_1_2_1'])}>
                <img src={img_1_2} alt="" />
              </div>

              <div className={style['ani_1_3']}>
                <img src={img_1_3_1} alt="" />
                <img src={img_1_3_2} alt="" />
                <img src={img_1_3_3} alt="" />
                <img src={img_1_3_4} alt="" />
                <img src={img_1_3_5} alt="" />
                <img src={img_1_3_6} alt="" />
              </div>
            </div>

            <div className={clsx(style['ani__wrap--item'], style['ani_1_4_tit'])}>
              <img src={img_1_4_tit} alt="" />
            </div>

            {/* 아이콘박스 */}
            <div className={clsx(style['ani__wrap--item'], style['ani_1_4'])}>
              <img src={img_1_4_1} alt="" className={style['img_08']} />
              <div className={style['icon_wrap']}>
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_1'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_2'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_3'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_4'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_5'])}>
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
                <div className={clsx(style['ani__wrap--item'], style['ani_1_4_6'])}>
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
                <div className={style['ani_5_2_1_1']}>
                  <img src={img_5_2_1_1} alt="" />
                </div>
                <div className={style['ani_5_2_1_2']}>
                  <img src={img_5_2_1_2} alt="" />
                </div>
                <div className={style['ani_5_2_1_3']}>
                  <img src={img_5_2_1_3} alt="" />
                </div>
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
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
      <div className="ho">ho</div>
    </>
  );
};

export default Ani;
