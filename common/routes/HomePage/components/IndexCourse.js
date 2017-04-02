/* global $ */
import React from 'react'
import {Link} from 'react-router'

class IndexCourse extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    })

    $('.tabular.menu .item').tab()

    $('#context2 .menu .item')
      .tab({
        context: 'parent'
      })
  }
  render () {
    return (
      <div className='ui container segment noBor noSha'>
        <div className='row'>
          <div id='context2'>
            <div className='ui secondary pointing menu centerInside index-tab'>
              {this.props.indexCourses.map(function (el, index) {
                return (<a className={'item ' + ((index === 0) ? ('active') : (''))} data-tab={index} key={index}>{el.category.name}</a>)
              })}

            </div>
            {this.props.indexCourses.map(function (el, index) {
              return [
                <div className={'ui tab ' + ((index === 0) ? ('active') : (''))} data-tab={index} key={index}>
                  <div className='ui special stackable cards index-card'>
                    {el.courses.map(function (sel, sindex) {
                      return (
                        <div className='card' key={sindex}>
                          <div className='blurring dimmable image'>
                            <div className='ui dimmer'>
                              <div className='content'>
                                <div className='center'>
                                  <Link to={'/course/' + sel.slug} className='ui inverted button'>Xem khóa học</Link>
                                </div>
                              </div>
                            </div>
                            <img src={'/image/get/' + sel.cover.path} />
                          </div>
                          <div className='content'>
                            <Link to={'/course/' + sel.slug} className='header'>{sel.name}</Link>
                            <div className='meta'>
                              <span className='date'>{sel.author}</span>
                            </div>
                          </div>
                          <div className='extra content'>
                            <a>
                              <i className='play icon' />
                              Đang cập nhập
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div style={{height: '40px'}}>
                    <Link to={'/category/' + el.category.slug}>
                      <button className='ui button pull-right' style={{marginTop: '30px', fontSize: '20px !important', lineHeight: '24x !important'}}>
                        Xem tất cả
                      </button>
                    </Link>
                  </div>
                </div>

              ]
            })}
          </div>
          <div className='ui four column stackable grid'>
            <div className='column grid ' />
            <div className='column grid ' />
            <div className='column grid ' />
            <div className='column grid ' />
          </div>
        </div>

      </div>
    )
  }
}

export default IndexCourse
