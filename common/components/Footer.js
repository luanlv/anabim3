import React from 'react'

const Footer = ({props}) => {
  return (
    <div id='footer'>
      <div className='ui inverted segment noBor noSha noRa noMa footer-top'>
        <div className='ui container'>
          <div className='ui stackable grid'>
            <div className=' twelve wide column'>
              <div className='ui three column grid'>
                <div className='column '>
                  <h3>ANABIM EDUCATION</h3>
                  <a>Khóa học online</a>
                  <a>Khoác học offline</a>
                  <a>Hướng dẫn thanh toán khóa học</a>
                  <a>Hình ảnh</a>
                  <a>Cộng đồng</a>
                  <a>Về chúng tôi</a>
                  <a>Liên hệ</a>
                </div>

                <div className='column'>
                  <h3>VĂN PHÒNG ANABIM</h3>
                  <span>ANABIM CO,.LTD
                    <br />36B ngõ 554 đường Trường Chinh, Đống Đa, Hà Nội.</span>
                  <div>0975 622 789</div>
                  <div>revithanoi@gmail.com</div>
                  <div> www.anabim.com</div>
                </div>

                <div className='column '>
                  <h3>HỖ TRỢ</h3>
                  <div>
                    Mr. Thùy - Kiến trúc
                    <br />
                    01669053063
                  </div>
                  <div>
                    Mr. Chiến - MEP
                    <br />
                    0979 269 448
                  </div>
                  <div>
                    Mr. Huy - Kết cấu
                    <br />
                    0978 542 680
                  </div>

                  <div>
                    Mr. Vượng - Doanh nghiệp
                    <br />
                    0975 622 789
                  </div>
                </div>
              </div>
            </div>

            <div className='four wide column '>
              <h3 className='centerInside'>Connect</h3>
              <div className='row centerInside'>
                <a target='_blank' href='https://facebook.com/daotaokientrucxaydung/'><i className='huge facebook square icon' /></a>
                <a target='_blank' href='https://plus.google.com/105729788429368018982'><i className='huge google plus square icon' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ui inverted segment noBor noSha noRa noMa footer-bot'>
        <div className='ui container'>
          <div className='ui secondary  menu'>
            <a className='active item'>
              © 2017 Anabim.com, Inc.
            </a>
            <a className='item'>
              Site Map
            </a>
            <a className='item'>
              Privacy policy
            </a>
            <a className='item'>
              Web Use Policy
            </a>
            <div className='right menu'>
              <a className='ui item'>
                ANABIM
                <i className='icons'>
                  <i className='angle double up icon' />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
