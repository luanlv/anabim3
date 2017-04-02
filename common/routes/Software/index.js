if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'software/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/Software'
      ], (require) => {
        let Software = require('./containers/Software').default
        cb(null, Software)
      })
    }
  }
}
