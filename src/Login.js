import React ,{ useState } from 'react';
import { useNavigate } from "react-router-dom"  
import './Login.css';

const Login = () => {
  const [count, setCount] = useState(0);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
		const container = document.getElementById('container');
		container.classList.add("right-panel-active");
	}
	const handleSignin = (event) => {
		const container = document.getElementById('container');
		container.classList.remove("right-panel-active");
	}
	const validateEmail = (email) => {
		// Regular expression for basic email validation
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	  }
	  const validatePassword = (password) => {
		
		const re =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return re.test(password);
	  }
	const handleSubmit = async (event) => {
		event.preventDefault();
		let obj = {
			"Email": email,
			"Password": password
		}
		console.log("obj=>", obj);
		if (email  && password  ) {

		if(validateEmail(email))
			{
				if(validatePassword(password))
					{
						// const response=	await commonAPI('POST','https://joshapp-96816-default-rtdb.firebaseio.com/users.json',obj)
						navigate('/Home', { state: obj });
					}			
				else
				{
					alert('Enter the valid password');
				}
			}
				else
				{
					alert('Enter a valid Mail');
				}
			}
			else
			{
				alert('Enter the mail and password');
			}

	};
  const handleEmailChange = (event) => {
		setEmail(event.target.value);

	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

  return (
    <div className='body-login'>
			
			
			<br></br>

			<div class="container-login" id="container">
			
				<div class="form-container sign-in-container">
					<form className='form-login' action="#">
          <h1>Welcome to .NET team</h1>
          <br></br>
          <br></br>
						{/* <h1>Sign in</h1> */}
						{/* <div class="social-container">
							<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
							<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
							<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
						</div>
						<span>or use your account</span> */}
						<input type="email" placeholder="Email" value={email}
							onChange={handleEmailChange}  required />
						<input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
						<a href="#">Forgot your password?</a>
						<button onClick={handleSubmit}>Sign In</button>
					</form>
				</div>
				
			</div>

			{/* <footer>
				<p>
					Created with <i class="fa fa-heart"></i> by
					<a target="_blank" href="https://florin-pop.com">Florin Pop</a>
					- Read how I created this and how you can join the challenge
					<a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
				</p>
			</footer> */}
		</div>
  )
}

export default Login
