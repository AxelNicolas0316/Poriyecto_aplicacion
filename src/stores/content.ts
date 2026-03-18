import { defineStore } from "pinia";
import { ref } from "vue";
import axiosRiksiri from "@/axios/axiosRiksiri";

export const useContentStore = defineStore('content', () => {
    const menu = ref<any[]>([]);
    const content = ref<any>({   
        to: null,
        contenido: {
            contenido: null,
            youtube: '',
        },
    });

    const home = ref<any>({
        url: 'seccion',
        internal_name: 'home',
    });

    const next = ref<any>({
        url: null,
        internal_name: '',
        id: null,
    });

    const loading = ref(false);

    // Cargar datos del localStorage al iniciar
    try {
        const storedMenu = localStorage.getItem('menu');
        if (storedMenu) {
            menu.value = JSON.parse(storedMenu);
        }
        const storedHome = localStorage.getItem('home');
        if (storedHome) {
            home.value = JSON.parse(storedHome);
        }
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }

    function $setMenu(data: any){
        menu.value = data;
        if(menu.value) {
            localStorage.setItem('menu', JSON.stringify(menu.value));
        }
    }

    function $setHome(data: any){
        home.value = data;
        if(home.value) {
            localStorage.setItem('home', JSON.stringify(home.value));
        }
    }

    function $setNext(data: any | null){
        next.value = data || {};
    }

    function $getContenido(name: string){
        loading.value = true;
        return axiosRiksiri.get('contenido/'+name).then( res => {
            content.value = res.data;
            loading.value = false;
            return res.data;
        }).catch((error) => {
            loading.value = false;
            console.error('Error getting contenido:', error);
            throw error;
        }); 
    }

    function $seteaSiguiente(){
        return axiosRiksiri.post('seteasiguiente', next.value);
    }

    function $clear() {
        menu.value = [];
        content.value = {
            to: null,
            contenido: {
                contenido: null,
                youtube: '',
            },
        };
        localStorage.removeItem('menu');
        localStorage.removeItem('home');
    }

    return { 
        content, 
        menu, 
        loading, 
        $setMenu, 
        $getContenido, 
        home, 
        $setHome, 
        next, 
        $setNext, 
        $seteaSiguiente,
        $clear
    };
});
