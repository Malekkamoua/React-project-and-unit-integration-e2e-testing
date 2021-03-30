import React from "react";
import PropTypes from "prop-types";
import MyBoostrap from "../../components/mybootstrap";
const ResetPassword = () => {
  return (
    <div>
      <MyBoostrap />
      <section className='section'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
              <div className='login-brand'>
                <img
                  src='../assets/img/stisla-fill.svg'
                  alt='logo'
                  width='100'
                  className='shadow-light rounded-circle'
                />
              </div>

              <div className='card card-primary'>
                <div className='card-header'>
                  <h4>Reset Password</h4>
                </div>

                <div className='card-body'>
                  <p className='text-muted'>
                    We will send a link to reset your password
                  </p>
                  <form method='POST'>
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
                      />
                    </div>

                    <div className='form-group'>
                      <label for='password'>New Password</label>
                      <input
                        id='password'
                        type='password'
                        className='form-control pwstrength'
                        data-indicator='pwindicator'
                        name='password'
                        tabindex='2'
                        required
                      />
                      <div id='pwindicator' className='pwindicator'>
                        <div className='bar'></div>
                        <div className='label'></div>
                      </div>
                    </div>

                    <div className='form-group'>
                      <label for='password-confirm'>Confirm Password</label>
                      <input
                        id='password-confirm'
                        type='password'
                        className='form-control'
                        name='confirm-password'
                        tabindex='2'
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn btn-primary btn-lg btn-block'
                        tabindex='4'
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className='simple-footer'>Copyright &copy; Stisla 2018</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
ResetPassword.propTypes = {};

export default ResetPassword;
