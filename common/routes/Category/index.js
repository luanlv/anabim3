if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'category/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Category'
      ], (require) => {
        let Category = require('./containers/Category').default
        cb(null, Category)
      })
    }
  }
}
