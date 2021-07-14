module.exports = {
  async redirects() {
    return [
      {
        source: '/0',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tags/:tag*',
        destination: '/knihy/:tag*',
        permanent: true,
      },
    ]
  },
}
