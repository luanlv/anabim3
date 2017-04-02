/* global $ */
import React from 'react'
import axios from 'axios'

const SignUp = ({props}) => {
  return (
    <div id='dang-ky' className='ui modal'>
      <div className='header' style={{textAlign: 'center'}}>
        {(props.params.exist !== undefined) ? ('Email đã tồn tại, hãy chọn email khác') : ('Đăng ký')}
      </div>
      <div className='ui two column stackable segment grid noBor noSha'>
        <div className='column'>

          <div style={{textAlign: 'center', color: 'red'}}>
            <span id='signupError' />
          </div>

          <form className='ui large form' action='/auth/signup' method='POST'
            onSubmit={(e) => {
              e.preventDefault()
              var $username = $(e.target).find('[name=username]').val()
              var $password = $(e.target).find('[name=password]').val()
              var $name = $(e.target).find('[name=name]').val()
              let data = {
                username: $username,
                password: $password,
                name: $name
              }
              console.log(data)
              axios.post(
                '/auth/signup',
                data
              ).then((res) => {
                console.log(res.data)
                if (res.data.status) {
                  console.log(res.data.m)
                } else {
                  $('#signupError').text(res.data.m)
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
                  <input type='text' name='username' id='username' placeholder='E-mail' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' name='password' id='password' placeholder='Mật khẩu' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='user icon' />
                  <input type='text' name='name' id='name' placeholder='Họ tên' />
                </div>
              </div>
              <button type='submit' className='ui fluid large teal submit button'>Đăng ký</button>
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
              <div action='/authenticate/google' method='post' className='centerInside'>
                <button type='submit' className='ui google plus button' style={{minWidth: '70%'}}>
                  <i className='google plus icon' />
                  Google Plus
                </button>
              </div>
            </a>
          </div>
          <div className='row ' style={{marginTop: '30px'}}>
            <div className='ui centerInside'>
              Đã có tài khoản?<a className='dang-nhap' href='#'> Đăng nhập </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUp
