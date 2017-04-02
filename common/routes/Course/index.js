if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'course/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Course'
      ], (require) => {
        let Course = require('./containers/Course').default
        cb(null, Course)
      })
    }
  }
}
