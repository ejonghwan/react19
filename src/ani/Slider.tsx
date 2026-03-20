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

  // 2. 위치 계산 로직
  const percent = value / max;
  const currentPosPx = containerWidth * percent; // 실제 핸들 위치

  const tooltipWidth = 137;
  const halfTooltip = tooltipWidth / 2;

  // 꼭지가 말풍선 모서리에 걸려 깨지지 않게 하는 여유 공간
  const tailPadding = 12;

  // [본체 제한] 말풍선이 컨테이너 밖으로 나가지 않게 함
    const tooltipX = Math.max(halfTooltip, Math.min(containerWidth - halfTooltip, currentPosPx));
    
    

  // [꼭지 제한] 말풍선 본체 안에서만 움직이도록 제한 (Clamp)
  const rawTailX = currentPosPx - tooltipX;
  const tailX = Math.max(-halfTooltip + tailPadding, Math.min(halfTooltip - tailPadding, rawTailX));

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
