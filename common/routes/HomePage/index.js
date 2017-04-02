if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'posts',
    getComponents (location, cb) {
      require.ensure([
        './containers/HomePage'
      ], (require) => {
        let HomePage = require('./containers/HomePage').default
        cb(null, HomePage)
      })
    }
  }
}
