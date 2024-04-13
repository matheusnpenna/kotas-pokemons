import { defineStore } from 'pinia'
import state from "./state";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations";

export const useUserStore = defineStore('user', {
  state: () => state,
  actions,
  getters,
  mutations
})