import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/contact.vue";
import Services from "../views/services.vue";
import Northern from "../views/north.vue";
import Southern from "../views/south.vue";
import Eastern from "../views/east.vue";
import Western from "../views/west.vue";
import Kigali from "../views/kigali.vue";


const routes= [
    {
    path:"/",
    name:"Home",
    component: Home
    },

    {
       path: "/about",
       name: "About",
       component: About
    },
    {
       path: "/contact",
       name: "Contact",
       component: Contact
    },
    {
       path: "/services",
       name: "Services",
       component: Services
    },
    {
       path: "/north",
       name: "Northern",
       component: Northern
    },
    {
       path: "/south",
       name: "Southern",
       component: Southern
    },
    {
       path: "/east",
       name: "Eastern",
       component: Eastern
    },
    {
       path: "/west",
       name: "Western",
       component: Western
    },
    {
       path: "/kigali",
       name: "Kigali",
       component: Kigali
    }
  
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router; 
