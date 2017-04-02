/* global $,alert */
import React from 'react'
import fn from './Fn'
import axios from 'axios'
import moment from 'moment'

const Membership = ({props, membershipInfo, userInfo}) => {
  let mData = {}
  mData.membership = {
    phone: '',
    month: 1,
    bonusDay: 0,
    info: ''
  }

  const price = props

  const priceByNum = {
    1: price.one,
    3: price.three,
    6: price.six,
    12: price.twelve
  }

  const changeMonth = (value) => {
    mData.membership.month = value
    const text = (value === 12) ? '1 năm' : (value + ' tháng')
    console.log(text)
    $('#month').text(text)
    $('#total').val(fn.numberWithCommas(fn.priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month)) + ' đ')
  }

  return (
    <div className='ui container'>

      <div id='membership-info' className='ui small modal '>
        <div className='header' style={{textAlign: 'center'}}>
          Thông tin membership
        </div>
        <div className='ui' style={{padding: '30px 10px'}}>
          <div id='membership-info-body' style={{minHeight: '200px'}} >
            {(membershipInfo.email) ? (<div>
              Email: <span style={{color: 'red'}}>{membershipInfo.email}</span>
              <br />
              <br />
              Trạng thái: <span style={{color: 'red'}}>{membershipInfo.state === 'pending' ? 'Đang xử lý' : membershipInfo.state}</span>
              <br />
              <br />
              {(userInfo.info) ? (<div>
                  Bắt đầu: <span style={{color: 'red'}}>{moment(userInfo.info.start).format('DD-MM-YYYY')}</span>
                <br />
                <br />
                  Kết thúc: <span style={{color: 'red'}}>{moment(userInfo.info.end).format('DD-MM-YYYY')}</span>
                <br />
                <br />
                <button className='ui primary button'
                  onClick={() => {
                    $('.thanh-vien-1').modal('show')
                  }}
                >Gia hạn thêm</button>
              </div>) : ('')}
              <div>
                Mọi thông tin chi tiết xin vui lòng liên hệ qua số điện thoại <strong style={{color: 'red'}}>098 499 5157</strong>
              </div>
            </div>) : ('')}
          </div>
        </div>
      </div>

      <div className='ui first coupled modal thanh-vien-1'>
        <div className='header' style={{textAlign: 'center'}}>
          Đăng ký thành viên Membership
        </div>
        <div className='ui two column stackable padded grid'>
          <div className='ui  column padded grid noPa'>
            <div className='actions eight wide column' onClick={() => changeMonth(1)} >
              <div className=' button centerInside'>
                <div className='ui huge horizontal statistic'>
                  <div className='value'>
                    1
                  </div>
                  <div className='label'>
                    Tháng
                  </div>
                </div>
              </div>
            </div>
            <div className='actions eight wide column' onClick={() => changeMonth(3)}>
              <div className=' button centerInside'>
                <div className='ui huge horizontal statistic'>
                  <div className='value'>
                    3
                  </div>
                  <div className='label'>
                    Tháng
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='ui  column padded grid noPa'>
            <div className='actions eight wide column' onClick={() => changeMonth(6)}>
              <div className=' button centerInside'>
                <div className='ui huge horizontal statistic'>
                  <div className='value'>
                    6
                  </div>
                  <div className='label'>
                    Tháng
                  </div>
                </div>
              </div>
            </div>
            <div className='actions eight wide column' onClick={() => changeMonth(12)}>

              <div className=' button centerInside'>
                <div className='ui huge horizontal statistic'>
                  <div className='value'>
                    1
                  </div>
                  <div className='label'>
                    Năm
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='ui segment noMa'>
          <div className='ui padded grid'>
            <div className='five wide column '>
              <div className='row centerInside'>
                <i className='huge thumbs outline up icon' />
              </div>
              <div className='row'>
                <h3 style={{textAlign: 'center'}}>Các lợi ích khi đăng ký membership</h3>
              </div>
            </div>

            <div className='eleven wide column'>

              <div className='ui list'>
                <div className='item'>
                  <i className='checkmark icon' />
                  <div className='content'>
                    Được tham gia vào tất cả các khóa học có trên website
                  </div>
                </div>
                <div className='item'>
                  <i className='checkmark icon' />
                  <div className='content'>
                    Được giáo viên có kinh nghiệm hướng dẫn
                  </div>
                </div>
                <div className='item'>
                  <i className='checkmark icon' />
                  <div className='content'>
                    Các khóa học được cập nhập thường xuyên
                  </div>
                </div>
                <div className='item'>
                  <i className='checkmark icon' />
                  <div className='content'>
                    Đăng ký càng lâu giá càng giảm: <br />
                    <span style={{marginLeft: '20px'}}>1 tháng: <span style={{color: 'red'}}>{fn.numberWithCommas(price.one)} đ </span></span><br />
                    <span style={{marginLeft: '20px'}}>3 tháng: <span style={{color: 'red'}}>{fn.numberWithCommas(price.three)} đ</span></span><br />
                    <span style={{marginLeft: '20px'}}>6 tháng: <span style={{color: 'red'}}>{fn.numberWithCommas(price.six)} đ</span></span><br />
                    <span style={{marginLeft: '20px'}}>1 năm: <span style={{color: 'red'}}>{fn.numberWithCommas(price.twelve)} đ</span></span><br />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='ui large second coupled modal'>

        <div className='header noBor' style={{textAlign: 'center'}}>
          Đăng ký thành viên Membership
        </div>
        <div className='ui'>
          <h3 style={{textAlign: 'center'}}>Bạn đang đăng ký gói <span id='month' style={{color: 'red'}}>{(mData.membership.month === 12) ? ('1 năm') : (mData.membership.month + ' tháng')}</span>, hay chọn hình thức thanh toán phía dưới</h3>
        </div>

        <div className='ui top attached tabular menu' style={{marginBottom: '10px'}}>
          <a className='item active' data-tab='first'>Thanh toán trực tiếp</a>
          <a className='item' data-tab='second'>Chuyển khoản ngân hàng</a>
        </div>

        <div className='ui stackable grid'>
          <div className='eight wide column'>
            <div className='ui bottom attached tab segment noBor active' data-tab='first'>
              <h2>Văn phòng ANABIM CO,.LTD</h2>
              <h3>Địa chỉ: 36B ngõ 554, Trường Chinh, Đống Đa, Hà Nội</h3>
              <h3>Điện thoại liên hệ: <span style={{color: 'red'}}>0975 622 789</span> - <span style={{color: 'red'}}>0949 958 898</span></h3>
            </div>
            <div className='ui bottom attached tab segment noBor' data-tab='second'>
              <h2>NGÂN HÀNG TMCP NGOẠI THƯƠNG THĂNG LONG (VIETCOMBANK)</h2>
              <h3>Phòng giao dịch Kim Liên – Ô Chợ Dừa – 390 Xã Đàn – Hà Nội</h3>
              <h3>- Chủ tài khoản: <span style={{color: 'red'}}>PHẠM ĐỨC THỊNH</span></h3>
              <h3>- Số tài khoản: <span style={{color: 'red'}}>0491000064512</span></h3>
            </div>
          </div>
          <div className='eight wide column'>
            <div className='ui form'>
              <div className='field'>
                <label>Số điện thoại (Chúng tôi sẽ liên lạc với số này khi thanh toán thành công)</label>
                <div className='field'>
                  <input type='text' id='inputPhone' name='inputPhone' />
                </div>
              </div>
              <div className='field'>
                <label>Nội dung nhắn gửi</label>
                <textarea id='inputInfo' name='inputInfo' />
              </div>
            </div>
          </div>
        </div>

        <div className='ui segment noBor noMa'>
          <div className='ui' style={{height: '40px'}}>
            <div className='ui form'>
              <div className='inline field actions'>
                <div is class='ui labeled button' tabindex='0'>
                  <input type='text' placeholder='Mã giảm giá' id='inputPromo' name='inputPromo' />
                  <a className='ui basic inverted grey left pointing label'
                    onClick={function () {
                      let promoCode = $('#inputPromo').val()
                      axios.post('/api/coupon', {code: promoCode})
                        .then((res) => {
                          mData.coupon = res.data
                          $('#couponInfo').text(fn.infoCoupon(mData.coupon, mData.membership))
                          $('#total').val(fn.numberWithCommas(fn.priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month)) + ' đ')
                        })
                        .catch((err) => {
                          console.log(err)
                        })
                    }}
                  >
                    <i className='large checkmark icon noMa' />
                  </a>
                </div>
                <span style={{color: 'red'}} id='couponInfo' />
                <button className='ui right floated  green approve button'
                  onClick={function () {
                    let phone = $('#inputPhone').val()
                    if (checkPhoneNumber(phone)) {
                      if (mData.coupon) {
                        mData.membership.coupon = mData.coupon
                        if (mData.coupon.kind === 3) {
                          mData.membership.bonusDay = fn.bonusDay(mData.coupon, mData.membership.month)
                        }
                      }
                      mData.membership.price = fn.priceWithCoupon(mData.coupon, priceByNum[mData.membership.month], mData.membership.month)
                      mData.membership.phone = phone
                      mData.membership.info = $('#inputInfo').val()
                      axios.post(
                        '/api/membership',
                        mData.membership
                      ).then((res) => {
                        console.log(res.data)
                      }).catch((err) => {
                        console.log(err)
                      })
                    } else {
                      $('.second.modal')
                        .modal('show')
                    }
                  }
                  }
                >Xác nhận</button>
                <div is class='ui red labeled right floated button' tabindex='0'>
                  <a className='ui basic inverted grey right pointing label'>
                    Total
                  </a>
                  <input id='total' style={{color: 'red'}} disabled type='text' />
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

Membership.propTypes = {
  membershipInfo: React.PropTypes.object
}

export default Membership

var checkPhoneNumber = function (phone) {
  if (!phone || !phone.match(/\d/g)) {
    alert('Bạn phải nhập số điện thoại')
  } else if (phone.match(/\d/g).length === 10 || phone.match(/\d/g).length === 11) {
    return true
  } else {
    alert('Số điện thoại điền chưa đúng định dạng, ( phải có 10 hoặc 11 số )')
    return false
  }
}
