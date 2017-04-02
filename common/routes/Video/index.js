if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'course/:slug/:videoSlug',
    getComponents (location, cb) {
      require.ensure([
        '../Course/containers/Course'
      ], (require) => {
        let Video = require('../Course/containers/Course').default
        cb(null, Video)
      })
    }
  }
}
