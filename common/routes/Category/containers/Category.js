/* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'
// import fn from '../../../components/Fn'
import ListCourse from '../components/ListCourse'

const redial = {
  fetch: ({ dispatch, params: { slug } }) => dispatch(loadData(slug))
}

const mapStateToProps = state => ({
  tree: state
})

class Category extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    console.log('constructor Category Page')
  }

  componentDidMount () {
    console.log('component Did mount')
    $('.special.cards .image').dimmer({
      on: 'hover'
    })

    $('#context2 .menu .item')
      .tab({
        context: 'parent'
      })
    $('.special.cards .image').dimmer({
      on: 'hover'
    })
  }
  render () {
    if (!(this.props.tree.categoryInfo.ok && this.props.tree.courseInCategory.ok)) {
      return <div style={{marginTop: '100px'}} className='loading' />
    } else {
      var button = (Data.user.member === 'pending') ? (
        <button className='ui large orange button'
          onClick={function () {
            $('#membership-info').modal('show')
          }}
        >Thông tin đăng ký</button>
        ) : (
          <button className='ui large orange button '
            onClick={function () {
              if (Data.user.id.length === 0) {
                $('#dang-ky')
                  .modal('show')
              } else {
                if (Data.user.member === 'none' || Data.user.member === 'trialed' || Data.user.member === 'membershiped') {
                  $('.first.modal')
                    .modal('show')
                }
              }
            }}
          >Đăng ký học ngay</button>
        )
      const category = this.props.tree.categoryInfo.value
      const courses = this.props.tree.courseInCategory.value
      return (
        <div id='main'>
          <Helmet title={category.name} />
          <div className='ui segment noBor noRa noSha noPa noMa'>
            <div style={{background: '#1485bd'}}>
              <div className='ui container '>
                <div className='ui two column stackable grid' style={{color: 'white !important', height: '250px'}}>
                  <div className='column'>
                    <div className='ui breadcrumb white' >
                      <Link to='/' className='section' >Trang chủ</Link>
                      <div className='divider' style={{display: 'inline'}}> / </div>
                      Danh mục: [ <Link to={'/category/' + category.slug} className='section' >{category.name}</Link> ]
                    </div>
                    <div style={{color: 'white !important'}} dangerouslySetInnerHTML={{__html: category.description}} />
                    <div className='row ' style={{paddingTop: '10px'}}>
                      {button}
                    </div>
                  </div>
                  <div className='column noPa' style={{backgroundImage: 'url("/image/get/' + category.cover.path + '")'}}>
                    <div style={{background: 'linear-gradient(to right, #1485bd 0%, transparent 30% , transparent 49%, transparent 70%, #1485bd 100%)', width: '100%', height: '100%'}} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='ui container'>
                <div className='ui segment noBor noSha noPa' style={{margin: '30px auto'}}>
                  <div id='context2'>
                    <h2 className='header'>Các video có trong danh mục <span style={{color: 'red'}}> {category.name} </span>:</h2>
                    <hr />
                    <div className='ui active tab ' data-tab='1'>
                      <ListCourse courses={courses} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{background: 'linear-gradient(to right, black , #333)'}}>
              <div className='ui container'>
                <div className='ui stackable grid'>
                  <div className='twelve wide column grid noPa' style={{background: 'url("https://cdn.lynda.com/static/images/category/free-trial.png") no-repeat center black', backgroundSize: '100% 100%', height: '350px', overflow: 'hidden'}}>
                    <div
                      style={{width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0, 0.9) 10%, rgba(0,0,0, 0.4))'}}>
                      <div className='ui header' style={{color: 'white !important', lineHeight: '40px', padding: '20px 50px', fontSize: '24px'}}>
                        Khuyến mãi
                      </div>
                      <div style={{color: 'white !important', lineHeight: '40px', paddingLeft: '50px', fontSize: '18px'}}>
                        Anabim đang trong đợt khuyến mãi, đăng ký càng lâu, giá càng giảm
                      </div>
                      <div style={{color: 'white !important', lineHeight: '40px', paddingLeft: '50px'}}>
                        { button }
                      </div>
                    </div>
                  </div>
                  <div className='four wide column grid'>

                    <div className='ui inverted relaxed divided list' style={{marginTop: '30px'}}>
                      <div className='item'>
                        <i className='huge inverted history middle aligned icon' />
                        <div className='content'>
                          <a className='header'>XEM KHÔNG GIỚI HẠN</a>
                          <div className='description'>Xem không giới hạn  tất cả video có trên thư viện.
                          </div>
                        </div>
                      </div>
                      <div className='item'>
                        <i className='huge inverted student middle aligned icon' />
                        <div className='content'>
                          <a className='header'>GIÁO VIÊN KINH NGHIỆM</a>
                          <div className='description'>Học từ giảng viên có nhiều kinh nghiệm trong linh vực.</div>
                        </div>
                      </div>
                      <div className='item'>
                        <i className='huge inverted laptop middle aligned icon' />
                        <div className='content'>
                          <a className='header'>HỌC TẬP MỌI NƠI</a>
                          <div className='description'>Học tập mọi lúc, mọi nơi, trên mọi thiết bị.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(Category))

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
