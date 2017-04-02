import moment from 'moment'

export default {

  time: function (timestamp) {
    return moment.unix(timestamp / 1000).fromNow()
  },

  secondToMinuteSecond: function (time) {
    function strPadLeft (string, pad, length) {
      return (new Array(length + 1).join(pad) + string).slice(-length)
    }

    let minutes = Math.floor(time / 60)
    let seconds = time - minutes * 60
    let finalTime = strPadLeft(minutes, '0', 2) + ':' + strPadLeft(seconds, '0', 2)
    return finalTime
  },

  numberWithCommas: function (x = 1000000) {
    let parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  },

  findUrlVideoBySlug: function (videos, url) {
    let len = videos.length
    if (url === undefined) {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === 'null') return videos[i].link
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === url) return videos[i].link
      }
    }

    return ''
  },

  findVideoBySlug: function (videos, courseSlug, videoSlug) {
    let len = videos.length
    if (videoSlug === undefined) {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === 'null') return videos[i]
      }
    } else {
      for (let i = 0; i < len; i++) {
        if (videos[i].url === videoSlug) return videos[i]
      }
    }

    return ''
  },

  findById: function (data, id) {
    let len = data.length
    for (let i = 0; i < len; i++) {
      if (data[i].id === id) return data[i]
    }
    return data[0]
  },

  fixVideo: function (video) {
    video = video.replace(/\.mp4/g, '_.m3u8')
    video = video.replace(/\.flv/g, '_.m3u8')
    return video
  },

  infoCoupon: function (coupon, membership) {
    if (!coupon.active) {
      return 'Mã không còn hiệu lực'
    } else if (moment().diff(coupon.endTime, 'days') < 0) {
      return 'Mã đã quá hạn sử dụng'
    } else if (coupon.quantity < 1) {
      return 'Mã đã hết số lượng'
    } else if (coupon.month.indexOf(membership.month) > 0) {
      return 'Mã không áp dụng cho ' + membership.month + ' tháng'
    } else {
      if (coupon.kind === 1) {
        return 'Giảm ' + coupon.percent + '% giá khóa học'
      } else if (coupon.kind === 2) {
        return 'Giảm ' + coupon.price + ' ngàn'
      } else {
        return 'Tăng thêm ' + coupon.day + ' ngày'
      }
    }
  },

  priceWithCoupon: function (coupon, price, month) {
    if (!coupon) {
      return price
    } else if (!coupon.active) {
      return price
    } else if (moment().diff(coupon.endTime, 'days') > 0) {
      return price
    } else if (coupon.quantity < 1) {
      return price
    } else if (coupon.month.indexOf(month) < 0) {
      return price
    } else {
      if (coupon.kind === 1) {
        return parseInt(price * (100 - coupon.percent) / 100)
      } else if (coupon.kind === 2) {
        return parseInt(price - coupon.price)
      } else {
        return price
      }
    }
  },

  bonusDay: function (coupon, month) {
    if (!coupon) {
      return 0
    } else if (!coupon.active) {
      return 0
    } else if (moment().diff(coupon.endTime, 'days') > 0) {
      return 0
    } else if (coupon.quantity < 1) {
      return 0
    } else if (coupon.month.indexOf(month) < 0) {
      return 0
    } else if (coupon.kind !== 3) {
      return 0
    } else {
      return coupon.day
    }
  }

}

