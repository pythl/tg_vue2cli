import Storage from '@/utils/storagehandle'
const state = {
  joinAgency: Storage.getItem('joinAgency') || {
    agencyId: null,
    agencyLogo: null,
    abbreviation: null
  },
  coachId: Storage.getItem('coachId') || '',
  allChoicedCardIds: Storage.getItem('allChoicedCardIds') || []
}

const getters = {
  joinAgency: state => state.joinAgency,
  coachId: state => state.coachId,
  allChoicedCardIds: state => state.allChoicedCardIds
}

const actions = {

}

const mutations = {
  JOIN_CHANGE_AGENCY_INFO (state, data) {
    state.joinAgency = data
    Storage.setItem(`joinAgency`, state.joinAgency)
  },
  JOIN_CHANGE_COACH_ID (state, data) {
    state.coachId = data
    Storage.setItem(`coachId`, state.coachId)
  },
  JOIN_ALL_CHOICED_CARD_IDS (state, data) {
    state.allChoicedCardIds = data
    Storage.setItem(`allChoicedCardIds`, state.allChoicedCardIds)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
