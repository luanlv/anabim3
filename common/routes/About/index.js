if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'about-anabim',
    getComponents (location, cb) {
      require.ensure([
        './containers/About'
      ], (require) => {
        let About = require('./containers/About').default
        cb(null, About)
      })
    }
  }
}
