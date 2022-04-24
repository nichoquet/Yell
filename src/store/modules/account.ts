import axios from "axios";
import { Module } from "vuex";
import LoginCredentialsRequest from "@/modelsInterfaces/HttpRequests/LoginCredentialsRequest";
import RegisterUserRequest from "@/modelsInterfaces/HttpRequests/RegisterUserRequest";
import { User } from "@/types/User";
const account: Module<any, any> = {
  namespaced: true,
  state: {
    loggedInUser: {}
  },
  getters: {
    getLoginToken (): string | undefined {
      return localStorage.getItem('loginToken') as string;
    },
    isLoggedIn (): boolean {
      return localStorage.getItem('loginToken') !== null;
    },
    getLoggedInUser (state): User {
      console.log(state)
      return state.loggedInUser
    }
  },
  actions: {
    login ({ commit }, credentials: LoginCredentialsRequest): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const url = process.env.VUE_APP_BACK_URL + '/user/login'
        axios.post<string>(url, credentials).then((logResp) => {
          commit('setLoginToken', logResp.data);
          resolve();
        }).catch((err) => {
          reject(err);
        })
      })
    },
    logout ({ commit }): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        commit('logout');
        resolve();
      })
    },
    registerUser (ctx, userInfo: RegisterUserRequest): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const url = process.env.VUE_APP_BACK_URL + '/user';
        axios.post(url, userInfo).then(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        })
      })
    },
    fetchLoggedInUser ({ commit, getters }): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const url = process.env.VUE_APP_BACK_URL + '/user';
        axios.get<User>(url, {
          headers: {
            Authorization: 'Bearer ' + getters.getLoginToken
          }
        }).then((user) => {
          commit('setLoggedInUserInfo', user.data)
          resolve();
        }).catch((err) => {
          reject(err);
        })
      })
    }
  },
  mutations: {
    setLoginToken (state, token: string) {
      localStorage.setItem('loginToken', token);
    },
    setLoggedInUserInfo (state, user: User) {
      state.loggedInUser = user
    },
    logout () {
      localStorage.removeItem('loginToken');
    }
  }
}
export default account;
