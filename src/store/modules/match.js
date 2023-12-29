import Storage from '@/utils/storagehandle'
const match = {
    namespaced: true,
    state: {
        matchInfo: Storage.getItem('matchInfo') || null,
    },
    mutations: {
        MATCH_CHANGE_MATCH_INFO (state, data) {
            state.matchInfo = data
            Storage.setItem('matchInfo', state.matchInfo)
        },
    },
    actions: {},
    getters: {
        matchInfo: state => state.matchInfo,
    }
}
export default match
