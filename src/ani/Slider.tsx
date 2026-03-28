import React, { useState, useRef, useEffect } from 'react';
import styles from './slider.module.scss';

const TooltipSlider = () => {
  const [value, setValue] = useState(1500000); // 150만 원 기본값
  const max = 3000000;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // 1. 컨테이너 너비 측정 (반응형 대응)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [containerWidth]); // 너비 변화 추적


  // 너비 400, 툴팁 137이라고 가정하에
  // 2. 위치 계산 로직
  const percent = value / max; // 0.5
  const currentPosPx = containerWidth * percent; // 실제 핸들 위치 400 * 0.5 = 200  

  const tooltipWidth = 137;
  const halfTooltip = tooltipWidth / 2; // 68.5

  // 꼭지가 말풍선 모서리에 걸려 깨지지 않게 하는 여유 공간
  const tailPadding = 12; // 보더까지 더 준값 실제 패딩은 8 

  // [본체 제한] 말풍선이 컨테이너 밖으로 나가지 않게 함
  const tooltipX = Math.max(halfTooltip, Math.min(containerWidth - halfTooltip, currentPosPx)); // (137/2 = 68.5, 0 ~ 331.5)
  // Math.min(containerWidth - halfTooltip, currentPosPx) 이게 툴팁빼고 최대값 구한거 (400 - 68.5, pos..0 ~ 400) = 400넘어가면 331.5고정 
  // 해석. 툴팁의 반인 68.5보다 작아지면 68.5 고정, 총너비-툴팁의 반보다 커지면 전자인 350에 고정함
  // 331.5 + 68.5 = 400


  // [꼭지 제한] 말풍선 본체 안에서만 움직이도록 제한 (Clamp)
  const rawTailX = currentPosPx - tooltipX; // (0 ~ 400) - (68.5 ~ 331.5) 둘 다 가변
  // 왼쪽에서 멈출 때 : 68.5 이하의 값 - 68.5        (최소는 0)
  // 오른쪽에서 멈출 때 : 331.5  이상의 값 - 331.5   (최대는 400)

  const tailX = Math.max(-halfTooltip + tailPadding, Math.min(halfTooltip - tailPadding, rawTailX));
  // max(-68.5 + 12 = -56.5, min(56.5, 56.5보다 커지는 숫자.))  
  // (-56.5보다 더 안내려가게 하기 위해..최소 -68.5, 최대 56.5보다 더 안늘어나기 위해.. 최대 68.5)

  console.log(rawTailX)

  return (
    <div className={styles.container} ref={containerRef}>
      {/* 말풍선 전체 그룹: 계산된 tooltipX 적용 */}
      <div className={styles.tooltipWrapper} style={{ left: `${tooltipX}px` }}>
        <div className={styles.tooltipBody}>{value.toLocaleString()}원</div>
        {/* 꼭지: 본체 내 상대 위치인 tailX 적용 */}
        <div className={styles.tooltipTail} style={{ left: `${tailX}px` }} />
      </div>

      <input
        type="range"
        className={styles.sliderInput}
        min="0"
        max={max}
        value={value}
        step="10000"
        onChange={e => setValue(Number(e.target.value))}
      />
    </div>
  );
};

export default TooltipSlider;
