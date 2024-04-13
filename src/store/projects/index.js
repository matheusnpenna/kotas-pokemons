import { defineStore } from 'pinia'
import state from "./state";
import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations";

export const useProjectsStore = defineStore('projects', {
  state,
  actions,
  getters,
  mutations
})