module.exports = {
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    images: {
        domains: ['lotjobs.sgp1.digitaloceanspaces.com']
    }
    // publicRuntimeConfig: {
    //     apiUrl: process.env.NODE_ENV === 'development'
    //         ? 'http://localhost:3000/api' // development api
    //         : 'http://localhost:3000/api' // production api
    // },
    // async redirects() {
    //     return [
    //       {
    //         source: '/',
    //         destination: '/admin/home',
    //         permanent: true,
    //       },
    //     ]
    //   }
}
