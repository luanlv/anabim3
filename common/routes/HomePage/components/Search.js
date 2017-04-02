/* global $ */
import React from 'react'
// import {Link} from 'react-router'

class Search extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    setTimeout(() => {
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
    }, 200)
  }
  componentWillUnmount () {
    $('.ui.search2')
      .search('destroy')
  }
  render () {
    return (
      <div className='item'>
        <div className='ui icon input search search2'>
          <div className='ui icon input'>
            <input
              style={{width: '300px'}}
              className='prompt' type='text' placeholder='PHẦN MỀM BẠN MUỐN HỌC?' />
          </div>
        </div>
      </div>
    )
  }
}

export default Search
