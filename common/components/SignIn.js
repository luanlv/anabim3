/* global $ */
import React from 'react'
import axios from 'axios'

const SignIn = ({props}) => {
  return (
    <div id='dang-nhap' className='ui modal'>
      <div className='header' style={{textAlign: 'center'}}>
        Đăng nhập
      </div>
      <div className='ui two column stackable segment grid noBor noSha'>
        <div className='column'>
          <div style={{textAlign: 'center', color: 'red', marginBottom: '5px'}}>
            <span id='loginError' />
          </div>
          <form className='ui large form' action='/auth/login' method='POST'
            onSubmit={(e) => {
              e.preventDefault()
              var $username = $(e.target).find('[name=username]').val()
              var $password = $(e.target).find('[name=password]').val()
              let data = {
                username: $username,
                password: $password
              }
              axios.post(
                '/auth/login',
                data
              ).then((res) => {
                if (res.data) {
                  window.location.reload()
                } else {
                  $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu')
                }
              }).catch((err) => {
                console.log(err)
              })
            }}
          >
            <div className='ui stacked segment'>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input type='text' placeholder='E-mail' id='username' name='username' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' placeholder='Mật khẩu' id='password' name='password' />
                </div>
              </div>
              <button type='submit' className='ui fluid large teal submit button'
                onClick={() => {
                  console.log('on click !')
                }}
              >Đăng nhập</button>
            </div>

            <div className='ui error message' />
          </form>
        </div>
        <div className='column centerInside'>
          <div className='row '>
            <a href='/auth/facebook'>
              <div className='centerInside' >
                <button className='ui facebook button' style={{minWidth: '70%'}} >
                  <i className='facebook icon' />
                  Facebook
                </button>
              </div>
            </a>
          </div>
          <div className='row' style={{marginTop: '10px'}}>
            <a href='/auth/google'>
              <div className='centerInside'>
                <button type='submit' className='ui google plus button' style={{minWidth: '70%'}}>
                  <i className='google plus icon' />
                  Google Plus
                </button>
              </div>
            </a>
          </div>
          <div className='row ' style={{marginTop: '30px'}}>
            <div className='ui centerInside'>
              Quên mật khẩu? <a href='#'> Click vào đây</a>
            </div>
            <div className='ui centerInside' style={{marginTop: '10px'}}>
              Chưa có tài khoản? <a className='dang-ky' href='#'> Đăng ký ngay</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignIn
