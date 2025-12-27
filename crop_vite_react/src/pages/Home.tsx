import { useState, useEffect } from "react";
import axiosPlain from "../config/axiosPlain";
const Home = () => {
	const [testWord, setTestWord] = useState<string | undefined>('');
	const [fastapiResponse, setFastapiResponse] = useState<string | undefined>('');
	
	useEffect(() => {
		testFunc();
		testFunc2(); 

	}, []);
	
	const testFunc =() => {
		axiosPlain.get("api/crop/test")
		.then(response => {
			setTestWord(response.data); // "test data" 값을 상태에 저장
		})
		.catch(error => {
			console.error("API 호출 실패:", error);
		});
		console.log("testFunc 실행됨");
	}
	const testFunc2 = () => {
		axiosPlain.get("api/crop/test/fastapi")
		.then(response => {
			console.log("FastAPI 응답 : ", response.data.message);
			setFastapiResponse(response.data.message)
		})
		.catch(error => {
			console.error("FastAPI 호출 실패:", error);
		})
	}


	return (
		<div>
			<p>하이</p>
			<p>응답 : {testWord}</p>
			<p>FAST API : {fastapiResponse}</p>
			<p>Docker + GitActions로 CI/CD 배포 성공했어요.</p>
		</div>
	)
}

export default Home;