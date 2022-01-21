import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';
//import app from './modules/app';


export const store = createStore({
    modules: {
        auth,
        //app
    },
    plugins: [createPersistedState()]
})

