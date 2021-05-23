export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const redirectList = {
      '/': '/en/',
      '/brand/': '/en/brand/',
      '/coding/': '/en/coding/',
      '/connect/': '/en/connect/',
      '/legal/': '/en/legal/',
      '/platform/': '/en/platform/',
      '/widgets/': '/en/widgets/',
    }
    const redirect = redirectList[to.path]

    if (redirect) {
      next({ path: redirect })
    } else next()
  })
}