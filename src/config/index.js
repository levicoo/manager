/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/1505e3955bdb44ff6fd322da9046cc12/m1'
    },
    test: {
        baseApi: '/test',
        mockApi: 'https://www.fastmock.site/mock/1505e3955bdb44ff6fd322da9046cc12/m1'
    },
    prod: {
        baseApi: '/true',
        mockApi: 'https://www.fastmock.site/mock/1505e3955bdb44ff6fd322da9046cc12/m1'
    }
}
export default {
    env: env,
    mock: true,
    ...EnvConfig[env]
}