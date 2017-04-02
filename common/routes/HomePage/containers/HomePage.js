/* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'
import Helmet from 'react-helmet'
import {Link} from 'react-router'
import IndexCourse from '../components/IndexCourse'
import Search from '../components/Search'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadData())
}

const mapStateToProps = state => ({
  tree: state
})

class HomePage extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    this.state = {
      tab: 1
    }
    console.log('constructor home Page')
    // console.log(this.props.tree)
  }

  componentDidMount () {
    $('.ui.search2')
      .search({
        apiSettings: {
          url: '/api/search/soft/{query}'
        },
        fields: {
          results: 'data',
          title: 'name',
          url: 'slug'
        },
        minCharacters: 3
      })

    $('.ui.example').dimmer({
      on: 'hover'
    })

    $('.ui.embed').embed()

    $('#video-background').html('<source src="http://video.vnguy.com/video.mp4" type="video/mp4" />')
  }

  render () {
    if (this.props.tree.indexcourse.ok && this.props.tree.software.ok) {
      var button = (Data.user.member === 'membership') ? ('') : ((Data.user.member === 'pending') ? (
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
              >Đăng ký học ngay</button>)
        )

      const indexCourses = this.props.tree.indexcourse.value
      return (
        <div >
          <Helmet title='Trang chủ' />
          <div id='main'>
            <div id='slider'>
              <div className='video-image' />
              <div className='ui container'>
                <div className='ui grid'>
                  <div className='ten wide column'>
                    <div className='ui stackable grid index-1'>
                      <div className='ten wide column'>
                        <h1>Việc tự học sẽ mang lại cho bạn cả một gia tài</h1>
                      </div>
                      <div className='six wide column' />
                    </div>
                  </div>
                  <div className='six wide column index-1'>
                    <div className='index-icon' style={{marginTop: '10px'}}>
                      <a target='_blank' href='https://facebook.com/daotaokientrucxaydung/'><i
                        className='circular facebook icon pull-right' style={{background: 'white !important'}} /></a>
                      <a target='_blank' href='https://plus.google.com/105729788429368018982'><i
                        className='circular google icon pull-right' style={{background: 'white !important'}} /></a>
                    </div>
                  </div>
                </div>

              </div>
              <video autoPlay loop id='video-background' muted />
            </div>

            <div className='main'>
              <div className='ui container segment noBor noSha' style={{margin: '100px auto !important'}}>
                <div className='ui three column stackable grid'>
                  <div className='column '>
                    <div className='centerInside'><i className='huge history icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>XEM KHÔNG GIỚI HẠN
                    </div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Xem không giới hạn tất cả video có trên thư viện.
                    </div>
                  </div>
                  <div className='column'>
                    <div className='centerInside'><i className='huge student icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>GIÁO VIÊN KINH NGHIỆM
                    </div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Học từ giảng viên có nhiều kinh nghiệm trong linh vực.
                    </div>
                  </div>
                  <div className='column'>
                    <div className='centerInside'><i className='huge laptop icon ' /></div>
                    <div className='centerInside' style={{fontSize: '20px', fontWeight: 'bold'}}>HỌC TẬP MỌI NƠI</div>
                    <div className='centerInside' style={{textAlign: 'center'}}>
                      Học tập mọi lúc, mọi nơi, trên mọi thiết bị.
                    </div>
                  </div>
                </div>
              </div>
              <div id='slider2' style={{background: 'url("/assets/img/5.jpg") no-repeat center #eee'}}>
                <div className='hero-img'>
                  <div className='ui container'>
                    <div className='ui stackable grid'>
                      <div className='ui ten wide column index-2'>
                        <div className='ui segment noBor noSha noBa'>
                          <Search />
                          <div className='ui segment' style={{height: '300px', background: 'rgba(255,255,255,0.7)'}}>
                            <div className='ui three column grid'>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {this.props.tree.software.value.map(function (el, index) {
                                    if (index % 3 === 0) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={'/image/get/' + el.cover.path} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    } else {
                                      return ''
                                    }
                                  })
                                  }
                                </div>
                              </div>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {this.props.tree.software.value.map(function (el, index) {
                                    if (index % 3 === 1) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={'/image/get/' + el.cover.path} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    }
                                  })
                                  }
                                </div>
                              </div>
                              <div className='column'>
                                <div className='ui list index-3'>
                                  {this.props.tree.software.value.map(function (el, index) {
                                    if (index % 3 === 2) {
                                      return (
                                        <Link to={'/software/' + el.slug} className='item centerInside' style={{height: '35px'}} key={index}>
                                          <img src={'/image/get/' + el.cover.path} alt='' width={35} height={35} style={{marginRight: '5px', float: 'left'}} />
                                          <span style={{lineHeight: '35px', fontSize: '20px'}}>{el.name}</span>
                                        </Link>
                                      )
                                    } else {
                                      return ''
                                    }
                                  })
                                  }
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div className='ui six wide column index-1' />
                    </div>
                  </div>
                </div>

              </div>

              <div className='ui container segment noBor noSha index-10' >
                <div className='row centerInside'>
                  { button }
                </div>
              </div>
              <IndexCourse indexCourses={indexCourses} />
              <div className='ui container segment noBor noSha index-10' style={{margin: '40px auto !important'}}>
                <div className='row centerInside'>
                  { button }
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='loading' />
      )
    }
  }

  redraw () {
    this.setState({})
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(HomePage))

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
