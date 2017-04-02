if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'lien-he-anabim',
    getComponents (location, cb) {
      require.ensure([
        './containers/Contact'
      ], (require) => {
        let Contact = require('./containers/Contact').default
        cb(null, Contact)
      })
    }
  }
}
