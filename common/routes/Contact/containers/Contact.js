// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
// import Helmet from 'react-helmet'
// import {Link} from 'react-router'

const redial = {
}

const mapStateToProps = state => ({
  tree: state
})

class About extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    console.log('constructor About Page')
    // console.log(this.props.tree)
  }

  componentDidMount () {
  }

  render () {
    return (<div id='main'>
      <div className='ui container'>
        <div className='ui stackable two column grid'>
          <div className='column'>
            <div className='post-content'>
              <p><strong><span style={{fontFamily: 'georgia, palatino, serif'}}>CÔNG TY CỔ PHẦN TƯ VẤN THIẾT KẾ &amp; CHUYỂN GIAO CÔNG NGHỆ&nbsp;ANABIM</span></strong></p> <p><span style={{fontFamily: 'georgia, palatino, serif'}}><strong>Địa chỉ</strong>:&nbsp;36/554&nbsp;Trường Chinh&nbsp;– Đống Đa – Hà Nội – Việt Nam</span><br /> <span style={{fontFamily: 'georgia, palatino, serif'}}><strong>Website</strong>:&nbsp;<a href='http://anabim.com/' target='_blank'>anabim.com</a>&nbsp;– edu.anabim.com<br /> <strong>Mail</strong>:&nbsp;revithanoi@gmail.com</span><br /> <span style={{fontFamily: 'georgia, palatino, serif'}}><strong>Di động</strong>: 0975 622 789 –&nbsp;0978542680</span></p> <p><span style={{color: '#000000'}}><strong>THÔNG TIN CHUYỂN KHOẢN THANH TOÁN KHÓA HỌC:</strong></span><br /> <span style={{fontSize: '15px; color: #ff0000'}}><strong>NGÂN HÀNG TMCP NGOẠI THƯƠNG THĂNG LONG (VIETCOMBANK)</strong></span><br /> <span style={{fontSize: '15px', color: '#ff0000'}}><strong>Phòng giao dịch Kim Liên – Ô Chợ Dừa – 390 Xã Đàn – Hà Nội</strong></span><br /> <span style={{fontSize: '15px', color: '#ff0000'}}><strong>– Chủ tài khoản: PHẠM ĐỨC THỊNH</strong></span><br /> <span style={{fontSize: '15px', color: '#ff0000'}}><strong>– Số tài khoản: 0491000064512</strong></span></p>
            </div>
          </div>
          <div className='column'>
            <iframe width='600' height='450' frameBorder='0' style={{border: 0}}
              src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJuXtq4oarNTERv8VdXIWBXa4&key=AIzaSyAKFv2ylCaZgWqvWCyDmXRBzPSjZN3_Auc' allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>)
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(About))
