import axios from '../axios'

// 查询单位
export const findAgency = (data) => {
  return axios({
    url: '/match/matchAgency/findAgency/' + data.programId,
    method: 'get'
  })
}

// 查询带队成员
export const findStaffList = (data) => {
  return axios({
    url: '/match/matchStaff/findStaffList/' + data.matchId + '/' + data.agencyId + '/' + data.programId,
    method: 'get'
  })
}

/**
 * 添加队伍队员信息
 * @param {*} data
 */
export const saveStaff = (data) => {
  return axios({
    url: '/match/matchStaff/saveStaff',
    method: 'post',
    data,
  })
}

// 删除带队成员
export const delStaff = (data) => {
  return axios({
    url: '/match/matchStaff/delStaff/' + data.matchId + '/' + data.agencyId + '/' + data.id,
    method: 'put'
  })
}

// 查询匹配的报名项目
export const findCombatDetailByCard = data => {
  return axios({
    url: '/match/matchPlayer/findCombatDetailByCard/' + data.matchId + '/' + data.birthday + '/' + data.sex + '/' + data.cardId + '/' + data.agencyId,
    method: 'get'
  })
}

/**
 * 报名搜索运动员
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export const queryPlayersByKeyWords = data => {
  return axios({
    url: '/match/matchPlayer/queryPlayersByKeyWords/' + data.agencyId + '/' + data.keyWords,
    method: 'get'
  })
}

/**
 * 重竞技报名提交
 * @param {*} data
 */
export const joinNormal = data => {
  return axios({
    url: '/match/matchJoin/joinNormal',
    method: 'post',
    data
  })
}

/**
 * 查询参赛信息 {matchId}/{agencyId}
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export const joinPlayerList = data => {
  return axios({
    url: '/match/matchJoin/joinPlayerList/' + data.matchId + '/' + data.agencyId,
    method: 'get'
  })
}

/**
 * 查询参赛信息 {agencyId}/{cardId}
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export const findSinglePlayer = data => {
  return axios({
    url: '/match/matchPlayer/findSinglePlayer/' + data.agencyId + '/' + data.cardId,
    method: 'get'
  })
}

/**
 * 上传附件查询
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export const findCardAdditional = data => {
  return axios({
    url: '/match/matchJoinData/findCardAdditional/' + data.matchId + '/' + data.cardId,
    method: 'get'
  })
}

/**
 * 查询项目兼项配置数据
 * @param matchId
 * @returns {Promise | Promise<unknown>}
 */
export const combatTermList = (matchId) => {
  return axios({
    url: '/match/matchCombatTerm/list/' + matchId,
    method: 'GET',
  })
}

/**
 * 删除参赛队员全部信息 {matchId}/{agencyId}/{cardId}
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export const delJoinPlayerAll = data => {
  return axios({
    url: '/match/matchJoin/delJoinPlayerAll/' + data.matchId + '/' + data.agencyId + '/' + data.cardId,
    method: 'delete'
  })
}

/**
 *  下载报名信息
 * @param {*} data
 */
export const exportSignDataExcel = data => {
  return axios({
    url: '/match/matchJoin/exportSignDataExcel/' + data.matchId + '/' + data.agencyId,
    method: 'get',
    responseType: 'blob'
  })
}