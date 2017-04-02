/* global $ */
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import Footer from './Footer'
import SignIn from './SignIn'
import SignUp from './SignUp'
import EmailConfirm from './EmailConfirm'
import ActiveCode from './ActiveCode'
import MemberShip from './MemberShip'
import Password from './Password'

const mapStateToProps = state => ({
  tree: state
})

class App extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    this.state = {
      membershipInfo: {}
    }
  }

  componentDidMount () {
    var this2 = this
    $('.dang-nhap').click(function () {
      $('#dang-nhap')
        .modal('show')
    })

    $('.dang-ky').click(function () {
      $('#dang-ky')
        .modal('show')
    })

    $('.coupled.modal')
      .modal({
        allowMultiple: false
      })
    $('.second.modal')
      .modal('attach events', '.first.modal .button')

    if (this.props.tree.user.username) {
      $('#membership-info')
        .modal({
          onShow: function () {
            $.ajax({
              type: 'GET',
              url: '/api/membership',
              dataType: 'text'
            }).done(function (data) {
              this2.setState({
                membershipInfo: JSON.parse(data)
              })
            })
              .fail(function (error) {
                console.log(error)
              })
          }
        })

      // if (this.props.tree.user.member === 'none' || this.props.tree.user.member === 'trialed' || this.props.tree.user.member === 'membershipped') {
      //   $('.first.modal')
      //     .modal('show')
      // }
    }

    $('.ui.checkbox').checkbox()

    if (this.props.params.email !== undefined) {
      $('#email').val(this.props.params.email)
    }
    if (this.props.params.name !== undefined) {
      $('#name').val(this.props.params.name)
    }

    if (this.props.params.exist !== undefined) {
      $('#dang-ky').modal('show')
    }
    if (this.props.params.confirmEmail !== undefined) {
      $('#email-comfirm').modal('show')
    }
  }

  render () {
    // const logged = this.props.tree.user.username
    return (
      <div>
        <Helmet
          titleTemplate='%s - ANABIM EDUCATION'
          meta={[
            {name: 'description', content: 'ANABIM Education cung cấp các chương trình đào tạo phần mềm dành cho các Kiến trúc sư, Kĩ sư cũng như các Chuyên gia xây dựng đến từ nhiều chuyên ngành khác nhau. Với các bộ giáo trình phần mềm phong phú, theo suốt các quá trình hình thành phát triển và hoàn thiện của một dự án, như: Xây dựng ý tưởng, Phân tích năng lượng, Mô hình, Mô phỏng hay các giai đoạn Hậu kì, Sản xuất bản vẽ.'}
          ]}
        />
        <Nav user={this.props.tree.user} />
        {this.props.children}

        <Footer />
        <SignIn props={this.props} />
        <EmailConfirm props={this.props} />
        <SignUp props={this.props} />
        <ActiveCode props={this.props} />
        <MemberShip props={this.props.tree.price.value} membershipInfo={this.state.membershipInfo} userInfo={this.props.tree.user} />
        <Password props={this.props} />
      </div>
    )
  }

}

export default provideHooks()(connect(mapStateToProps)(App))
