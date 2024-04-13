import { getToken } from "../../setup/api";

export default {
  user: null,
  fullScreenLoading: false,
  logged: !!getToken(),
};