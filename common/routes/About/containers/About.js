// /* global $ */
import { provideHooks } from 'redial'
import React from 'react'
import { connect } from 'react-redux'
// import Helmet from 'react-helmet'
// import {Link} from 'react-router'

const redial = {
}

const mapStateToProps = state => ({
  tree: state
})

class About extends React.Component {
  // eslint-disable-next-line
  constructor (props) {
    super(props)
    console.log('constructor About Page')
    // console.log(this.props.tree)
  }

  componentDidMount () {
  }

  render () {
    return (<div id='main'>
      <div className='ui container'>
        <article id='post-4229' className='post-4229 page type-page status-publish hentry'> <h1 className='entry-title'>Về chúng tôi</h1> <div className='entry-content'> <p>ANABIM&nbsp;– tiền thân Revit Master – Revit Hà Nội, là đơn vị giáo dục, chuyển giao công nghệ Revit và BIM tại Việt Nam. Thành lập vào 20/04/2010, trải qua 5 năm hoạt động, chúng tôi đã tham gia đào tạo nguồn nhân lực chất lượng cao cho cộng đồng Xây dựng Việt Nam với lượng học viên tốt nghiệp hơn 1100 người, bao gồm: sinh viên, người đi làm và các doanh nghiệp.</p> <p>Song hành với lĩnh vực đào tạo, ANABIM cũng là đơn vị đã có nhiều chương trình nghiên cứu, ứng dụng BIM trong Thiết kế Kiến trúc và Xây dựng. Với đội ngũ thành viên trẻ và nhiệt huyết, lấy việc nghiên cứu và phát triển (R&amp;D) là chiến lược trọng yếu, ANABIM luôn cố gắng để trở thành những người đi đầu trong nghiên cứu và áp dụng công nghệ mới, hiện đại, phục vụ và đóng góp vào sự phát triển chung của ngành Kiến trúc Xây dựng Việt Nam. Website:&nbsp;<u><a href='http://www.anabim.com/'>www.anabim.com</a></u>&nbsp; –&nbsp;<u><a href='http://www.edu.anabim.com/'>www.edu.anabim.com</a></u>&nbsp;của chúng tôi là hai website tin cậy về chia sẻ tri thức BIM và nhiều thông tin bổ ích khác được cộng đồng ghi nhận.</p> <p>Lĩnh vực hoạt động của ANABIM:</p> <ol> <li>Đào tạo, chuyển giao công nghệ.</li> <li>Thiết kế Kiến trúc Xây dựng.</li> <li>Tư vấn dự án.</li> </ol> <p>Một số đơn vị mà ANABIM đã hợp tác:</p> <ol> <li>Group8Asia</li> <li>Công ty TNHH Kiến trúc Xây dựng Thăng Long (TAC).</li> <li>Công ty Cổ phần EBROS C&amp;T Việt Nam</li> <li>Công ty BIMVN AEC Services</li> <li>AlphaNam E&amp;C</li> </ol> <p>Hiện nay, HỌC ONLINE (E-learning) đang trở thành xu hướng đào tạo nổi bật trên toàn thế giới. Với sự trợ giúp đắc lực từ công nghệ, việc học trực tuyến trở nên dễ dàng và hiệu quả hơn bao giờ hết.&nbsp;Nắm bắt được xu hướng thời đại này, ANABIM đã dành 1 năm nghiên cứu và xây dựng, tự hào khi là đơn vị đầu tiên xây dựng thành công website đào tạo trực tuyến đầu tiên cho cộng đồng Xây dựng Kiến trúc tại Việt Nam:&nbsp;<u><a href='http://www.edu.anabim.com/'>www.edu.anabim.com</a></u>. Với website này, ANABIM đã mang tới các khóa đào tạo từ xa với nhiều&nbsp;khóa học,&nbsp;hơn một&nbsp;ngàn video chất lượng, được biên soạn kĩ lưỡng, dành cho đông đảo học viên ở xa, không có điều kiện theo học trực tiếp tại ANABIM.</p> <p>Chúng tôi cũng là đơn vị có thời gian nghiên cứu và ứng dụng BIM vào đào tạo giáo dục và các dự án thiết kế kiến trúc xây dựng ở Việt Nam và quốc tế. Với đội ngũ trẻ trung năng động, luôn tư duy thay đổi và học hỏi nghiên cứu áp dụng công nghệ mới, cùng đó là kinh nghiệm lâu năm trong ngành Thiết kế Xây dựng, ANABIM tự tin là đơn vị có thể mang đến quý công ty chương trình đào tạo, hợp tác chất lượng, mang lợi ích và sự hài lòng tối đa cho khách hàng.</p> <p>&nbsp;</p> </div></article>
      </div>
    </div>)
  }
}

export default provideHooks(redial)(connect(mapStateToProps)(About))
