import React,{useState,useEffect} from 'react'
import RootRouter from 'routes/root'

function App() {

	const [accessToken, setAccessToken] = useState(window.localStorage.getItem('accessToken'))


	//null 일때 로그인이랑 회원가입 버튼 / not null 일때 회원정보 및 등등

	return <RootRouter/>
}


export default App;

