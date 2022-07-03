import "./Login.css";
import axios from 'axios'
// import CSRFToken from '../../components/CSRF';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Login() {
	
	const navigate = useNavigate("");
	const [input, setInput] = useState({
		email:"",
		password:"",
	});

	
	const [useEmailError,setUserEmailError] = useState(false)

	const {email, password} = input;

	
	const onChange = (e) =>  {
		const {name , value} = e.target
		setInput({
			...input ,
			[name] : value
		});
	};

	const handleEmailChangeInput = (e) => {
		const userEmailRegex = new RegExp('^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
		if((!e.target.value || (userEmailRegex.test(e.target.value)))){
			setUserEmailError(false);
		}
		else{
			setUserEmailError(true)
		}
		setInput({
			email : e.target.value,
		});
	}
	
	const Login_button = (e)=>{
		e.preventDefault();
		axios.post("http://127.0.0.1:8000/api/accounts/login/", input)
		.then(res =>{
			if (res.data.access_token){
				alert("로그인 성공")
				localStorage.setItem('access_token', res.data.access_token)
				localStorage.setItem('refresh_token', res.data.refresh_token)
				navigate("/");
			}
			}
		)
		console.log(input)
	};

	return (
		<>
		<main class="login_main">
			<form class="form_class" style={{backgroundColor:"white"}}>
			{/* <CSRFToken /> */}
				<div class="form_div">
					<div className="social_login">
						<div className="social_google">
							<img src={`${process.env.PUBLIC_URL}/img/btn_google.png`} />
							<span>Google로 진행하기</span>
						</div>
						<div className="social_naver">
							<img src={`${process.env.PUBLIC_URL}/img/btn_naver.png`} />
							<span>Naver로 진행하기</span>
						</div>
					</div>
					<hr />
					<label>이메일:</label>
					<input name='email' className="field_class" type="text" placeholder="이메일주소를 입력하세요" onChange={handleEmailChangeInput} value={email} />
					{
						useEmailError && 
						<div style={{fontSize:"14px" , marginTop:"-12px" , marginBottom:"10px" , paddingLeft:"0.5rem" , color:"red"}}>올바른 이메일 형식이 아닙니다.</div>
					}
					<label>비밀번호:</label>
					<input name="password" id="pass" className="field_class" type="password" placeholder="비밀번호를 입력하세요" onChange={onChange} value={password} />
					<button className="submit_class" style={{backgroundColor:"2a9f5c"}} onClick={(e) => Login_button(e)}>로그인</button>
				</div>
				<div class="info_div">
					<p>ReSee가 처음이신가요?</p>
					<a href="/sign_up">가입하기</a>
				</div>
			</form>
		</main>
		</>
	);
}

export default Login;
