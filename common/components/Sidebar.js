/* global $ */
import React from 'react'
import {Link} from 'react-router'

class Sidebar extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    $('#dl-menu').dlmenu({
      animationClasses: { classin: 'dl-animate-in-5', classout: 'dl-animate-out-5' }
    })
  }

  render () {
    let Data = {}
    Data.baseUrl = ''
    Data.user = {
      id: ''
    }
    let link = function (slug, name) {
      return <Link to={Data.baseUrl + '/course/' + slug}>{name}</Link>
    }
    return (
      <div id='sidebar' >
        <div className='demo-4'>
          <div id='dl-menu' className='dl-menuwrapper'>
            <button className='dl-trigger'>Open Menu</button>
            <ul className='dl-menu'>
              <li>
                <Link to='/'>TRANG CHỦ</Link>
              </li>
              <li>
                <a href='#'>KHÓA HỌC ONLINE</a>
                <ul className='dl-submenu'>
                  <li>
                    <a href='#'>KIẾN TRÚC SƯ</a>
                    <ul className='dl-submenu'>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'}>Làm Quen Với Revit (FREE)</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-architecture-nen-tang'}>Revit Arrchitecture Nền Tảng</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-architecture-nang-cao'}>Revit Arrchitecture Nâng Cao</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-conceptual-massing'}>Revit Conceptual Mass</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-co-ban'}>Revit Family Cơ Bản</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-nang-cao'}>Revit Family Nâng Cao</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-addaptive-co-ban'}>Revit Family Adaptive Cơ Bản</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-revit-family-adaptive-nang-cao'}>Revit Family Adaptive Nâng Cao</Link></li>
                      <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-dynamo-nang-cao'}>Dynamo Nâng Cao</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-formit-360'}>Autodesk Formit</Link></li>
                      <li><Link to={Data.baseUrl + '/course/sketchup-co-ban'}>Sketchup Cơ Bản</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-sketchup-nang-cao'}>Sketchup Nâng Cao</Link></li>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-autocad-2015-co-ban'}>Autocad 2015 Miễn Phí</Link></li>
                      <li><Link to={Data.baseUrl + '/course/thiet-ke-gach-thong-gio-revit'}>Thiết Kế Gạch Thông Gió</Link></li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>KỸ SƯ MEP</a>
                    <ul className='dl-submenu'>
                      <li><Link to={Data.baseUrl + '/course/khoa-hoc-lam-quen-voi-revit'}>Làm Quen Với Revit (FREE)</Link></li>
                      <li>{link('khoa-hoc-revit-mep-co-ban', 'Khóa học Revit MEP cơ bản')}</li>
                      <li>{link('khoa-hoc-revit-mep-nang-cao', 'Khóa Học Revit MEP Nâng Cao')}</li>
                      <li>{link('khoa-hoc-family-mep-phan-1', 'Family MEP')}</li>
                      <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                      <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>KỸ SƯ KẾT CẤU</a>
                    <ul className='dl-submenu'>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                      <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                      <li>{link('khoa-hoc-revit-structure-co-ban', 'Revit Structure Cơ Bản')}</li>
                      <li>{link('khoa-hoc-robot-structural-co-ban', 'Robot Structural Cơ Bản')}</li>
                      <li>{link('Revit-Structure-Concrete', 'Revit Structure Concrete')}</li>
                      <li>{link('khoa-hoc-revit-structure-steel', 'Revit Structure Steel')}</li>
                      <li>{link('khoa-hoc-revit-family-structure', 'Family Revit Structure')}</li>
                      <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                      <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>MÔ PHỎNG & PHÂN TÍCH NĂNG LƯỢNG</a>
                    <ul className='dl-submenu'>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                      <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                      <li>{link('khoa-hoc-ecotec-co-ban', 'Autodesk Ecotec')}</li>
                      <li>{link('khoa-hoc-vasari', 'Autodesk Vasari')}</li>
                      <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                      <li>{link('khoa-hoc-dynamo-nang-cao', 'Khóa học Dynamo nâng cao')}</li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'> KỸ SƯ CHẾ TẠO</a>
                    <ul className='dl-submenu'>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                      <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                      <li>{link('khoa-hoc-dynamo-co-ban', 'Autodesk Dynamo 2016')}</li>
                      <li>{link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')}</li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>KỸ SƯ HẠ TẦNG KỸ THUẬT</a>
                    <ul className='dl-submenu'>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                      <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                      <li>{link('khoa-hoc-infrawork-360', 'Khóa Học Infrawork 360')}</li>
                      <li>{link('khoa-hoc-autocad-2015-co-ban', 'Autocad 2015 Miễn Phí')}</li>
                      <li>{link('khoa-hoc-lam-quen-voi-revit', 'Làm Quen Với Revit (FREE)')}</li>
                      <li>{link('khoa-hoc-dynamo-nang-cao', 'Dynamo Nâng Cao')}</li>
                      <li>{link('khoa-hoc-bim-glue', 'Khóa Học BIM Glue')}</li>
                      <li>{link('khoa-hoc-naviswork-phan-2', 'Khóa Học Naviswork Phần 2')}</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href='#'>KHÓA HỌC OFFLINE</a>
                <ul className='dl-submenu'>
                  <li><a href='#'>ĐÀO TẠO DOANH NGHIỆP</a></li>
                  <li><a href='#'>KỸ SƯ KẾT CẤU</a></li>
                  <li><a href='#'>Khóa học Revit MEP</a></li>
                  <li><a href='#'>KIẾN TRÚC SƯ</a></li>
                  <li><a href='#'>KỸ SƯ MEP</a></li>
                </ul>
              </li>
              <li>
                <Link to='/about-anabim'>VỀ CHÚNG TÔI</Link>
              </li>
              <li>
                <Link to='/lien-he-anabim'>LIÊN HỆ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Sidebar
