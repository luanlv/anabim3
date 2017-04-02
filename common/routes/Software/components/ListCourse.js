/* global $ */
import React from 'react'
import {Link} from 'react-router'

class ListCourse extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    $('.special.cards .image').dimmer({
      on: 'hover'
    })
  }
  render () {
    return (
      <div className='ui special stackable cards index-card' >
        {this.props.courses.map(function (el, index) {
          return (
            <div className='card' key={index}>
              <div className='blurring dimmable image'>
                <div className='ui dimmer'>
                  <div className='content'>
                    <div className='center'>
                      <Link to={'/course/' + el.slug} className='ui inverted button'>Xem khóa học</Link>
                    </div>
                  </div>
                </div>
                <img src={'/image/get/' + el.cover.path} />
              </div>
              <div className='content'>
                <Link to={'/course/' + el.slug} className='header'>{el.name}</Link>
                <div className='meta'>
                  <span className='date'>{el.author}</span>
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
    )
  }
}

export default ListCourse
