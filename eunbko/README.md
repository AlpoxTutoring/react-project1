routers: SPA를 라우팅하는 페이지, react-router-dom 을 사용합니다.
pages : 페이지 하나를 담당합니다. 기본적인 Helmet 정보, 초기에 서버에 요청할 서버 데이터, Container를 1:1로 대응합니다.
containers : 컴포넌트의 모음 (1:N) 관계, 데이터를 컴포넌트에게 전달하고 사용자의 행동에 따른 액션 (서버 요청)을 수행합니다.
components : ui의 여러조합, 목록 밑 차트 같은 기능단의 가장 작은 단위입니다.
ui : 디자인단의 가장 작은 단위입니다.
services : REST API를 통해 서버에 요청하는 코드
stores : context api를 이용, services를 데이터를 불러오고 state에 전역으로 state를 저장합니다.