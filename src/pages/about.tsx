import { useState } from 'react';
import { useLoaderData } from 'react-router';

export const Meta = `
  hoho: hohohooh
`;

const About = () => {
  const { routesMeta: hehe } = useLoaderData();

  console.log('routesMeta??', hehe);

  const [data, setData] = useState<{ a: string | boolean; b: string | boolean }>({
    a: 'aa',
    b: 'bb',
  });
  const [data11, setData11] = useState([
    { id: 'aa', name: 'aaa' },
    { id: 'bb', name: 'bbb' },
    { id: 'cc', name: 'ccc' },
  ]);

  const handleClick = () => {
    console.log(123);
    // setData(prev => {
    //   console.log('prev?', prev)
    //   for (const a in prev) {
    //     console.log(a)
    //     prev[a] = "true"
    //   }
    //   return prev
    // })

    setData(prev => {
      console.log(Object.keys(prev));

      const newState = Object.keys(prev).reduce(
        (acc, key) => {
          // key를 prev의 키 타입으로 단언하거나 index signature 처리
          acc[key as keyof typeof prev] = 'true';
          console.log('acc?', acc);
          return acc;
        },
        { ...prev }
      );
      console.log('newState??', newState);

      return newState;
    });

    setData11(prev => {
      return prev.filter(item => item.id !== 'aa'); // 빼고
    });
  };

  return (
    <div>
      <div style={{ fontSize: '20px' }}>{data11.map(item => item.id)}</div>
      <div style={{ fontSize: '20px' }}>
        {data.a} || {data.b}
      </div>
      <div onClick={handleClick} style={{ fontSize: '20px' }}>
        click me
      </div>
      About
      <h2>아토믹 패턴 테스트</h2>
      <br />
      atoms (원자): 버튼, 입력창 등 더 이상 분해할 수 없는 기본 UI 요소입니다.
      <br />
      molecules (분자): 여러 원자가 결합하여 검색창, 폼 필드와 같은 특정 기능을 수행하는 단위입니다.
      <br />
      organisms (유기체): 분자와 원자들이 모여 헤더, 푸터, 로그인 폼 등 복잡한 UI 섹션을 구성합니다.
      <br />
      layouts 또는 templates (템플릿): 페이지의 전체 레이아웃 구조를 정의하고, 유기체와 분자를
      배치하는 골격을 만듭니다.
      <br />
      pages (페이지): 최종 사용자 화면으로, 템플릿에 데이터를 주입하고 라우팅을 연결합니다.
      <br />
      기타 최상위 폴더: hooks/ (커스텀 훅), contexts/ (전역 상태), utils/ (유틸리티 함수) 등이
      있습니다.
      <br />
      <br />
      <br />
      src/ ├── components/ │ ├── atoms/ │ ├── molecules/ │ ├── organisms/ │ └── layouts/ (혹은
      templates/) ├── pages/ ├── hooks/ ├── contexts/ ├── utils/ └── styles/
    </div>
  );
};

export default About;
