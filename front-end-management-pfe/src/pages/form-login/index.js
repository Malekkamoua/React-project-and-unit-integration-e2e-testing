import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../assets/css/style.css";
import MyBoostrap from "../../components/mybootstrap";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  console.log("email:", email);
  console.log("password:", password);
  const connect = (email, password) => {
    if (email === "s" && password === "s") {
      setLogged(true);
    }
  };
  if (logged) {
    return <Redirect to='/register' />;
  }
  return (
    <div>
      <MyBoostrap />
      <section className='section'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
              <div className='login-brand'>
                {/* <img
                  src={require("../../assets/img/stisla-fill.svg")}
                  alt='logo'
                  width='100'
                  className='shadow-light rounded-circle'
                /> */}
              </div>

              <div className='card card-primary'>
                <div className='card-header'>
                  <h4>Login</h4>
                </div>

                <div className='card-body'>
                  <div className='form-group'>
                    <label for='email'>Email</label>
                    <input
                      id='email'
                      type='email'
                      className='form-control'
                      name='email'
                      tabindex='1'
                      required
                      autofocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='invalid-feedback'>
                      Please fill in your email
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='d-block'>
                      <label for='password' className='control-label'>
                        Password
                      </label>
                      <div className='float-right'>
                        <a
                          href='auth-forgot-password.html'
                          className='text-small'
                        >
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    <input
                      id='password'
                      type='password'
                      className='form-control'
                      name='password'
                      tabindex='2'
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='invalid-feedback'>
                      please fill in your password
                    </div>
                  </div>

                  <div className='form-group'>
                    <div className='custom-control custom-checkbox'>
                      <input
                        type='checkbox'
                        name='remember'
                        className='custom-control-input'
                        tabindex='3'
                        id='remember-me'
                      />
                      <label className='custom-control-label' for='remember-me'>
                        Remember Me
                      </label>
                    </div>
                  </div>

                  <div className='form-group'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-lg btn-block'
                      tabindex='4'
                      onClick={() => connect(email, password)}
                    >
                      Login {email}
                      {password}
                    </button>
                  </div>

                  <div className='text-center mt-4 mb-3'>
                    <div className='text-job text-muted'>Login With Social</div>
                  </div>
                  <div className='row sm-gutters'>
                    <div className='col-6'>
                      <a className='btn btn-block btn-social btn-facebook'>
                        <span className='fab fa-facebook'></span> Facebook
                      </a>
                    </div>
                    <div className='col-6'>
                      <a className='btn btn-block btn-social btn-twitter'>
                        <span className='fab fa-twitter'></span> Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-5 text-muted text-center'>
                Don't have an account?{" "}
                <a href='auth-register.html'>Create One</a>
              </div>
              <div className='simple-footer'>Copyright &copy; Stisla 2018</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Login.propTypes = {};

export default Login;
