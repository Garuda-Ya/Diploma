import {createStore} from "vuex";

export default createStore({
    state: {
        isAuth: false,
        role: 0,
    },
    getters:{

    },
    mutations: {
        login(){
            this.state.isAuthorised = true;
        },
        logout(){
            this.state.isAuthorised = false;
        }
    },
    modules:{

    },
  })