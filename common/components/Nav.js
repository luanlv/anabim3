/* global $ */
import React from 'react'
import {Link} from 'react-router'
import Sidebar from './Sidebar'

class Nav extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    $('.ui.search1')
      .search({
        apiSettings: {
          url: '/api/search/{query}'
        },
        fields: {
          results: 'data',
          title: 'name',
          url: 'slug'
        },
        minCharacters: 3
      })

    let $menu = $('#danhmuc')
    let firstMenu = $('#danhmuc').children('.item')[0]
    $menu.menuAim({
      activate: activateSubmenu,
      deactivate: deactivateSubmenu
    })

    $('.ui.dropdown')
      .dropdown({
        on: 'hover',
        onShow: function (text, value) {
          if ($('.maintainHover').length < 1) {
            activateSubmenu(firstMenu)
          }
        }
      })
    function activateSubmenu (row) {
      let $row = $(row)
      let submenuId = $row.data('submenuId')
      let $submenu = $('#' + submenuId)
      let height = $menu.outerHeight()
      let width = $menu.outerWidth()

      let level = parseInt($row.attr('data-submenu-id'))
      $submenu.css({
        display: 'block',
        top: -1 - (level - 1) * 60,
        left: width - 6,  // main should overlay submenu
        height: height  // padding for main dropdown's arrow
      })
      $row.addClass('maintainHover')
    }

    function deactivateSubmenu (row) {
      let $row = $(row)
      let submenuId = $row.data('submenuId')
      let $submenu = $('#' + submenuId)

      $submenu.css('display', 'none')
      $row.removeClass('maintainHover')
    }
  }

  render () {
    const user = this.props.user
    const logged = this.props.user.username
    return (
      <div className='nav'>
        <div className='ui inverted segment nav-top'>
          <div className='ui container'>
            <div className='ui inverted secondary menu'>
              <Sidebar />
              <a id='logo' href='http://anabim.com/' target='_blank' style={{width: '120px !important'}}>
                <img src='/assets/img/logo.jpg' alt='' width={120} height={42} />
              </a>
              <span className='ui top left pointing dropdown item navbar' style={{marginRight: '0px !important'}}>
                DANH MỤC
                <i className='dropdown icon' />
                <ul className='ui blue menu' id='danhmuc'>
                  <li className='item' data-submenu-id='1'>
                    <i className='dashboard icon' />
                    KIẾN TRÚC SƯ
                    <div id='1' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'}>Làm Quen Với Revit (FREE)</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-architecture-nen-tang'}>Revit Arrchitecture Nền Tảng</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-architecture-nang-cao'}>Revit Arrchitecture Nâng Cao</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-conceptual-massing'}>Revit Conceptual Mass</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-co-ban'}>Revit Family Cơ Bản</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-nang-cao'}>Revit Family Nâng Cao</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-addaptive-co-ban'}>Revit Family Adaptive Cơ Bản</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-adaptive-nang-cao'}>Revit Family Adaptive Nâng Cao</Link></li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-dynamo-nang-cao'}>Dynamo Nâng Cao</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-formit-360'}>Autodesk Formit</Link></li>
                            <li><Link to={Data.baseUrl + '/course/sketchup-co-ban'}>Sketchup Cơ Bản</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-sketchup-nang-cao'}>Sketchup Nâng Cao</Link></li>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-autocad-2015-co-ban'}>Autocad 2015 Miễn Phí</Link></li>
                            <li><Link to={Data.baseUrl + '/course/thiet-ke-gach-thong-gio-revit'}>Thiết Kế Gạch Thông Gió</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='2'>
                    <i className='object ungroup icon' />
                    KỸ SƯ MEP
                    <div id='2' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li><Link to={Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'}>Làm Quen Với Revit (FREE)</Link></li>
                            <li>{link('khoa-hoc-revit-mep-co-ban', 'Khóa học Revit MEP cơ bản')}</li>
                            <li>{link('khoa-hoc-revit-mep-nang-cao', 'Khóa Học Revit MEP Nâng Cao')}</li>
                            <li>{link('khoa-hoc-family-mep-phan-1', 'Family MEP')}</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                            <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='3'>
                    <i className='calculator icon' />
                    KỸ SƯ KẾT CẤU
                    <div id='3' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                            <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                            <li>{link('khoa-hoc-revit-structure-co-ban', 'Revit Structure Cơ Bản')}</li>
                            <li>{link('khoa-hoc-robot-structural-co-ban', 'Robot Structural Cơ Bản')}</li>
                            <li>{link('Revit-Structure-Concrete', 'Revit Structure Concrete')}</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-revit-structure-steel', 'Revit Structure Steel')}</li>
                            <li>{link('khoa-hoc-revit-family-structure', 'Family Revit Structure')}</li>
                            <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                            <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='4'>
                    <i className='cubes icon' />
                    MÔ PHỎNG & PHÂN TÍCH NĂNG LƯỢNG
                    <div id='4' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                            <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                            <li>{link('khoa-hoc-ecotec-co-ban', 'Autodesk Ecotec')}</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-vasari', 'Autodesk Vasari')}</li>
                            <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                            <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='5'>
                    <i className='cube icon' />
                    KỸ SƯ CHẾ TẠO
                    <div id='5' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                            <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                            <li>{link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='6'>
                    <i className='cube icon' />
                    KỸ SƯ HẠ TẦNG KỸ THUẬT
                    <div id='6' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                            <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                            <li>{link('khoa-hoc-infrawork-360', 'Khóa Học Infrawork 360')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className='item' data-submenu-id='7'>
                    <i className='cube icon' />
                    ĐÀO TẠO BIM
                    <div id='7' className='popover'>
                      <div className='ui two column grid'>
                        <div className='column'>
                          <ul className='ui list' >
                            <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                            <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                            <li>{link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')}</li>
                            <li>{link('khoa-hoc-bim-glue', 'Khóa Học BIM Glue')}</li>
                            <li>{link('khoa-hoc-naviswork-phan-2', 'Khóa Học Naviswork Phần 2')}</li>
                          </ul>
                        </div>
                        <div className='column'>
                          <ul className='ui list'>
                            <li>{link('khoa-hoc-naviswork-co-ban', 'Khóa Học Naviswork 2016')}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

              </span>
              <div className='item' style={{paddingTop: 7}}>
                <div className='ui icon input search search1'>
                  <div className='ui icon input'>
                    <input
                      style={{width: '400px'}}
                      className='prompt' type='text' placeholder='TÌM KIẾM KHÓA HỌC ...' />
                  </div>
                </div>
              </div>

              {(logged) ? (
                <div className='right menu'>
                  <div className='ui inverted circular item noPa' style={{background: 'black', width: '50px'}}>
                    <div className='ui top right pointing dropdown icon button noPa noMa' style={{background: 'black', width: '50px'}} >
                      <i className='inverted big alarm icon' />
                      <div className='menu'>
                        <div className='item'>Hiện chưa có thông báo nào</div>
                      </div>
                    </div>
                  </div>

                  <div className='ui inverted circular item noPa' style={{background: 'black', width: '50px'}}>
                    <div className='ui top right pointing dropdown ' >
                      <a className='ui item' style={{padding: 0}}>
                        <img src='/assets/img/avatar.png' alt='avatar' />
                      </a>
                      <div className='menu'>
                        <a className='item' style={{color: 'black !important'}} onClick={() => this.changePassword()}
                        >
                          <i className='tags icon' />
                          Đổi mật khẩu
                        </a>
                        <a className='item' style={{color: 'black !important'}} onClick={() => this.membership()}
                        >
                          <i className='tags icon' />
                          Membership
                        </a>
                        <a href='/auth/logout' className='item' style={{color: 'black !important'}}>
                          <div className='ui black empty circular label' />
                          Đăng xuất
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                ) : (<div className='right menu'>
                  <a className='ui item dang-nhap'>
                    Đăng nhập
                  </a>
                  <a className='ui item dang-ky' style={{backgroundColor: '#008cc9'}}>
                    Đăng ký
                  </a>
                </div>)}
            </div>

          </div>
        </div>
        <div className='ui inverted segment nav-bot'>
          <div className='ui inverted  mini secondary pointing menu'>
            <div className='ui container'>
              <Link to='/' className='item'>
                <i className='home icon' />
              </Link>
              <div className='right menu'>

                {(user.member === 'member') ? ('') : (
                  <a className='item'
                    onClick={() => this.activeCode()}
                  >
                    Điền mã kích hoạt
                  </a>
                )}
                <a className='red item' onClick={() => this.membership()} >
                  Membership
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }

  membership () {
    if (!this.props.user.username) {
      $('#dang-ky')
        .modal('show')
    } else {
      if (this.props.user.member === 'none' || this.props.user.member === 'trialed' || this.props.user.member === 'membershiped') {
        $('.first.modal')
          .modal('show')
      } else {
        $('#membership-info').modal('show')
      }
    }
  }

  activeCode () {
    $('#activeCode')
      .modal('show')
  }

  changePassword () {
    $('#doi-mat-khau')
      .modal('show')
  }

}

export default Nav

let Data = {}
Data.baseUrl = ''
Data.user = {
  id: ''
}
let link = function (slug, name) {
  return <Link to={Data.baseUrl + '/course/' + slug}>{name}</Link>
}
