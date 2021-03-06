/*
通过mutation间接更新state的多个方法的对象
*/

import {RECEIVE_USER_TOKEN,DELETEUSERTOKEN,RECEIVE_USER_LOGINTYPE} from './mutation-types'

export default {
  /**
   * 保存用户登录token
   */
  saveUserToken({commit},data){
    commit(RECEIVE_USER_TOKEN,data)
  },



  /**
   * 删除用户登录token
   */
  deleteUserToken({commit}){
    console.log('---')
    commit(DELETEUSERTOKEN)
  },

  /**
   * 保存用户登录类型
   * @param commit
   * @param data
   */
  saveUserloginType({commit},data){
    commit(RECEIVE_USER_LOGINTYPE,{loginType: data.loginType})
  }
}

