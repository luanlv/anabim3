/* global $ */
import React from 'react'
import axios from 'axios'

const ActiveCode = ({props}) => {
  return (
    <div id='activeCode' className='ui small modal '>
      <div className='header' style={{textAlign: 'center'}}>
        Điền mã kích hoạt
      </div>
      <div className='ui' style={{textAlign: 'center', padding: '30px 10px'}}>
        <div className='ui two column stackable grid'>
          <div className='column'>
            <div className='ui form'>
              <div className='field' >
                <input type='text' id='inputActiveCode' placeholder='VD:3DAYS' />
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='ui form'>
              <div className='field'>
                <button className='ui primary button'
                  onClick={function () {
                    var code = $('#inputActiveCode').val()
                    console.log(code)
                    if (code.length > 0) {
                      axios.get('membership/activebycode/' + code)
                        .then((res) => {
                          console.log(res.data)
                        })
                        .catch((err) => {
                          console.log(err)
                        })
                    }
                  }}
                >Kích hoạt</button>
              </div>
            </div></div>
        </div>

      </div>

    </div>
  )
}

export default ActiveCode

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
