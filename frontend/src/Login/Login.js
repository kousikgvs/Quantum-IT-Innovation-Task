import React from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='Loginpage'>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card border-0 shadow rounded-3 my-5">
              <div class="card-body p-4 p-sm-5">
                <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                    <label class="form-check-label" for="rememberPasswordCheck">
                      Remember password
                    </label>
                  </div>
                  <div class="d-grid">
                    <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign in</button>
                  </div>
                  <div class="text-center mt-3">
                    <a href="/forgot-password">Forgot Password?</a>
                  </div>
                  <div class="text-center mt-3">
                    Don't have an account? <a href="/signup" onClick={() => navigate("/signup")}>Signup Here</a>
                  </div>
                  <hr class="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;