export function posts (data = [], state) {
  if (state.posts.needUpdate || !state.posts.ok) {
    data.push({
      t: 1,
      v: 'p1'
    })
  }
  return data
}

export function indexcourse (data = [], state) {
  if (state.indexcourse.needUpdate || !state.indexcourse.ok) {
    data.push({
      t: 1,
      v: 'i1'
    })
  }
  return data
}

export function price (data = [], state) {
  console.log('prepare price !!!!!!!')
  if (state.price.needUpdate || !state.price.ok) {
    data.push({
      t: 1,
      v: 'p2'
    })
  }
  return data
}

export function software (data = [], state) {
  console.log('prepare software !!!!!!!')
  if (state.software.needUpdate || !state.software.ok) {
    data.push({
      t: 1,
      v: 's1'
    })
  }
  return data
}

export function course (data = [], state, slug) {
  console.log('prepare course !!!!!')
  if (state.course.needUpdate || !state.course.ok) {
    data.push({
      t: 2,
      v: 'c1',
      e: slug
    })
  }
  return data
}

export function videos (data = [], state, slug) {
  console.log('prepare videos !!!!!')
  if (state.videos.needUpdate || !state.videos.ok) {
    data.push({
      t: 2,
      v: 'v1',
      e: slug
    })
  }
  return data
}

export function softInfo (data = [], state, slug) {
  console.log('prepare software info !!!!!')
  if (state.softInfo.needUpdate || !state.softInfo.ok) {
    data.push({
      t: 2,
      v: 's2',
      e: slug
    })
  }
  return data
}

export function categoryInfo (data = [], state, slug) {
  console.log('prepare category info !!!!!')
  if (state.categoryInfo.needUpdate || !state.categoryInfo.ok) {
    data.push({
      t: 2,
      v: 'c4',
      e: slug
    })
  }
  return data
}

export function courseInSoftware (data = [], state, slug) {
  console.log('prepare course in software info !!!!!')
  if (state.courseInSoftware.needUpdate || !state.courseInSoftware.ok) {
    data.push({
      t: 2,
      v: 'c2',
      e: slug
    })
  }
  return data
}

export function courseInCategory (data = [], state, slug) {
  console.log('prepare course in category info !!!!!')
  if (state.courseInCategory.needUpdate || !state.courseInCategory.ok) {
    data.push({
      t: 2,
      v: 'c3',
      e: slug
    })
  }
  return data
}
