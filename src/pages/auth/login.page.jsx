import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginPage(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;
    if (!email || !email.match(/^\S+@\S+\.\S+$/)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // Perform login action here
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };


  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header"> <h1>LoginPage</h1></div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="invalid-feedback">{emailError}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default LoginPage;