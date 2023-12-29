import Storage from '@/utils/storagehandle'
import apis from '@/http/api.js'
const user = {
    namespaced: true,
    state: {
        userInfo: Storage.getItem('userInfo')||null, //  登录的账户信息
        accountId: Storage.getItem('accountId')||null,
        nickName: Storage.getItem('nickName')||null,
        accessToken: Storage.getItem('accessToken')||'',
        refreshToken: Storage.getItem('refreshToken')||'',
        expiresIn: Storage.getItem('expiresIn')||0,
        timeStamp: Storage.getItem('timeStamp')||0
    },
    mutations: {
        ['USER_CHANGE_USER_INFO'] (state, userInfo) {
            state.userInfo = userInfo
            Storage.setItem(`userInfo`, state.userInfo)
        },
        ['USER_CHANGE_ACCOUNT_ID'] (state, accountId) {
            state.accountId = accountId
            Storage.setItem(`accountId`, state.accountId)
        },
        ['USER_CHANGE_NICK_NAME'] (state, nickName) {
            state.nickName = nickName
            Storage.setItem(`nickName`, state.nickName)
        },
        ['USER_CHANGE_ACCESS_TOKEN'] (state, accessToken) {
            state.accessToken = accessToken
            Storage.setItem(`accessToken`, state.accessToken)
        },
        ['USER_CHANGE_REFRESH_TOKEN'] (state, refreshToken) {
            state.refreshToken = refreshToken
            Storage.setItem(`refreshToken`, state.refreshToken)
        },
        ['USER_CHANGE_EXPIRES_IN'] (state, expiresIn) {
            state.expiresIn = expiresIn
            Storage.setItem(`expiresIn`, state.expiresIn)
        },
        ['USER_CHANGE_TIME_STAMP'] (state, timeStamp) {
            state.timeStamp = timeStamp
            Storage.setItem(`timeStamp`, state.timeStamp)
        }
    },
    actions: {
        /**
         * 用户登录
         * @param {*} param0 , context 状态管理上下文对象,{commit,state,dispatch}
         * @param {*} userInfo
         */
        Login ({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                apis.user.oauthToken(userInfo).then(response => {
                    if (response.status > 0) {
                        reject(response.msg)
                        return
                    }
                    commit('USER_CHANGE_ACCOUNT_ID', response.data.userId)
                    commit('USER_CHANGE_NICK_NAME', response.data.nickname)
                    commit('USER_CHANGE_ACCESS_TOKEN', response.data.access_token)
                    commit('USER_CHANGE_REFRESH_TOKEN', response.data.refresh_token)
                    commit('USER_CHANGE_EXPIRES_IN', response.data.expires_in)
                    // 记录一个当前时间戳
                    commit('USER_CHANGE_TIME_STAMP', Date.parse(new Date()))
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        /**
         * 退出登录
         * @param {*} param0 , context 状态管理上下文对象,{commit,state,dispatch}
         */
        Logout ({ commit }) {
            return new Promise((resolve) => {
                apis.user.oauthLogout({}).then(() => {
                    commit('USER_CHANGE_ACCESS_TOKEN', '')
                    commit('USER_CHANGE_USER_INFO', null)
                    commit('USER_CHANGE_ACCOUNT_ID', null)
                    commit('USER_CHANGE_NICK_NAME', null)
                    commit('USER_CHANGE_REFRESH_TOKEN', '')
                    commit('USER_CHANGE_EXPIRES_IN', '')
                    // 记录一个当前时间戳
                    commit('USER_CHANGE_TIME_STAMP', 0)
                    resolve()
                }).catch(() => {
                    resolve()
                })
            })
        }
    },
    getters: {
        userInfo: state => state.userInfo,
        accountId: state => state.accountId,
        nickName: state => state.nickName,
        accessToken: state => state.accessToken,
        refreshToken: state => state.refreshToken,
        expiresIn: state => state.expiresIn,
        timeStamp: state => state.timeStamp
    }
}
export default user
