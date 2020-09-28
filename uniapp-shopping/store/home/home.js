import request from "../../utils/request.js";
import indexData from "../../utils/datas/index.json";
import { RECEIVEINDEXDATA } from "../mutation-types.js";
const state = {
  indexData: {},
};

const mutations = {
  [RECEIVEINDEXDATA](state, indexData) {
    state.indexData = indexData;
  },
};

const actions = {
  getIndexData: async function ({ commit }) {
    const result = await request("/getIndexData");
    // 如果是失败的请求先使用虚假数据
    if (!result) {
      result = indexData;
      console.log(false);
    }
    if (result.statusCode === 200) {
      // 成功
      commit(RECEIVEINDEXDATA, result.data);
    }
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
