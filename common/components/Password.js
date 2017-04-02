/* global $, alert */
import React from 'react'
import axios from 'axios'

const Password = ({props}) => {
  return (
    <div id='doi-mat-khau' className='ui modal'>
      <div className='header' style={{textAlign: 'center'}}>
        Đổi mật khẩu
      </div>
      <div className='ui column stackable segment grid noBor noSha'>
        <div className='column'>
          <div style={{textAlign: 'center', color: 'red', marginBottom: '5px'}}>
            <span id='loginError' />
          </div>
          <div className='ui large form'
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
              <div id='changePassNotify' style={{textAlign: 'center'}} />
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' placeholder='Mật khẩu mới' id='passwordChange1' name='passwordChange1' />
                </div>
              </div>
              <div className='field'>
                <div className='ui left icon input'>
                  <i className='lock icon' />
                  <input type='password' placeholder='Nhập lại mật khẩu mới' id='passwordChange2' name='passwordChange2' />
                </div>
              </div>
              <button className='ui fluid large teal submit button'
                onClick={() => {
                  var pass1 = $('#passwordChange1').val()
                  var pass2 = $('#passwordChange2').val()
                  if (pass1 !== pass2) {
                    alert('Mật khẩu không trùng khớp')
                  } else {
                    axios.post('/api/user/password', {password: pass1})
                      .then((res) => {
                        $('#changePassNotify').text(res.data)
                        $('#passwordChange1').val('')
                        $('#passwordChange2').val('')
                      })
                      .catch((err) => {
                        console.log(err)
                      })
                  }
                }}
              >Đổi mật khẩu</button>
            </div>

            <div className='ui error message' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Password
