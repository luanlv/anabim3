import React from 'react'

export default class Video extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
  }
  componentDicMount () {

  }
  render () {
    return (
      <div className='ui'>
        { (this.props.linkVideo.length > 1) ? (
          <iframe width='100%' height='556' id='player-frame' name='player-frame'
            allowFullScreen frameBorder='0'
            src={this.props.linkVideo} />
          ) : (
            <div className='ui segment' style={{height: '556px', background: '#eee'}}>
              <div className='centerInside' style={{marginTop: '150px', marginBottom: '20px'}}>
                Đây là video dành riêng cho thành viên
                <span
                  style={{color: 'red', marginLeft: '5px', marginRight: '5px'}}> Membership
                            </span> của
                <b
                  style={{marginLeft: '5px', marginRight: '5px'}}> Anabim </b>
              </div>
              <div className='centerInside'>
                {this.props.button}
              </div>
            </div>
          )}
      </div>
    )
  }
}
