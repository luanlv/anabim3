 /* eslint-disable */
/* global $ */
import React from 'react'

export default class CourseInfo extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    $('.tabs.menu .item')
      .tab()
  }
  render () {
    return (
      <div className='ui segment'>
        <div id='context2'>
          <div className='tabs ui secondary pointing menu '>
            <a className='item active' data-tab='1'>Giới thiệu</a>
            <a className='item' data-tab='2'>Tài liệu thực hành</a>
            <a className='item' data-tab='3'>Sản phẩm học viên</a>
          </div>

          <div className='ui active tab ' data-tab='1'>
            <div className='ui column stackable grid'>
              <div className='three wide column'>
                <div className='ui tiny header centerInside'>Giảng viên</div>
                <a href='#' className='' style={{textAlign: 'center', color: '#333'}}>
                  <div className='centerInside'>
                    <img className='ui circular image' src='/assets/img/author.jpg' />
                  </div>
                  <div>{this.props.course.author}</div>
                </a>
              </div>
              <div className='ten wide column'>
                <div className='ui tiny header' />
                <div dangerouslySetInnerHTML={{__html: this.props.course.description}} />
              </div>
              <div className='three wide column '>
                <div className='centerInside'>
                  <div className='ui massive star rating' data-rating={this.props.course.level} data-max-rating='3' />
                </div>
                <div className='centerInside'>
                  Cấp độ : {this.props.course.level}
                </div>
                <div className='ui inverted grey segment centerInside ' style={{marginBottom: '0px !important'}}>
                  Đang cập nhập
                </div>
                <div className='noMa centerInside'>Thời lượng học</div>
                <div className='ui inverted grey segment centerInside' style={{marginBottom: '0px !important'}}>
                  1,066,481
                </div>
                <div className='noMa centerInside'>Lượt xem</div>
              </div>
            </div>
          </div>
          <div className='ui  tab ' data-tab='2' style={{padding: '15px'}}>
            {( this.props.user && (this.props.user.member === 'membership' ||  this.props.user.member === 'trial') ) ? (
              this.props.course.documents ? (<div dangerouslySetInnerHTML={{__html: this.props.course.documents}} />) : ('')
            ) : (
              <div>Tài liệu chỉ dành cho thành viên Membership</div>
            )}
          </div>
          <div className='ui tab' data-tab='3' style={{padding: '15px'}}>
            {this.props.course.sanpham ? (<div dangerouslySetInnerHTML={{__html: this.props.course.sanpham}} />) : ('')}
          </div>

        </div>
        <div className='ui four column stackable grid'>
          <div className='column grid ' />
          <div className='column grid ' />
          <div className='column grid ' />
          <div className='column grid ' />
        </div>
      </div>
    )
  }
}
