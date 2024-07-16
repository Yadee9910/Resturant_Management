import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import {createRouter, createWebHistory} from 'vue-router'
import Login from './components/Login.vue';
import Header from './components/Header.vue';
import Add from './components/Add.vue';
import Update from './components/Update.vue';


const routes =[
    {
        name:'Home',
        component:Home,
        path:'/home',
        children: [
            {
              path: 'add',
              name: 'Add',
              component: Add
            },
            {
                name:'Update',
                component:Update,
                path:"/update/:id"
            }
          ]
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/signup'
    },
    {
        name:"Login",
        component:Login,
        path:"/"
    },
    {
        name:'Header',
        component:Header,
        path:'/header'

    }
    
];

const router = createRouter({
    history : createWebHistory(),
    routes, 
})

export default router;