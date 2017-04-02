export const newStateSuccess = function (state, data = []) {
  var result = Object.assign({}, state, {})

  data.forEach((el) => {
    const key = el.req.v

    if (key === 'p1') {
      result = Object.assign({}, result, {
        posts: {
          needUpdate: result.posts.needUpdate,
          ok: el.ok,
          isLoading: false,
          value: el.value
        }
      })
    } else if (key === 'i1') {
      result = Object.assign({}, result, {
        indexcourse: {
          needUpdate: result.indexcourse.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'p2') {
      result = Object.assign({}, result, {
        price: {
          needUpdate: result.price.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 's1') {
      result = Object.assign({}, result, {
        software: {
          needUpdate: result.software.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c1') {
      result = Object.assign({}, result, {
        course: {
          needUpdate: result.course.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'v1') {
      result = Object.assign({}, result, {
        videos: {
          needUpdate: result.videos.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 's2') {
      result = Object.assign({}, result, {
        softInfo: {
          needUpdate: result.softInfo.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c2') {
      result = Object.assign({}, result, {
        courseInSoftware: {
          needUpdate: result.courseInSoftware.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c3') {
      result = Object.assign({}, result, {
        courseInCategory: {
          needUpdate: result.courseInCategory.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    } else if (key === 'c4') {
      result = Object.assign({}, result, {
        categoryInfo: {
          needUpdate: result.categoryInfo.needUpdate,
          ok: el.ok,
          value: el.value
        }
      })
    }
  })
  return result
}

export const newStateRequest = function (state, requireList = []) {
  var result = Object.assign({}, state, {})
  requireList.forEach((el) => {
    const key = el.v
    if (key === 'p1') {
      result = Object.assign({}, result, {
        posts: {
          needUpdate: result.posts.needUpdate,
          isLoading: true,
          ok: false,
          value: []
        }
      })
    }
  })
  return result
}
