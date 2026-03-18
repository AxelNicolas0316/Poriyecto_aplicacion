import { defineStore } from "pinia";
import { ref } from "vue";
import axiosRiksiri from "@/axios/axiosRiksiri";

export const useUserStore = defineStore('user', () => {
    const token = ref(localStorage.getItem('token') || null);
    const user = ref(JSON.parse(localStorage.getItem('user') || 'null'));
    const isAuthenticated = ref(!!localStorage.getItem('token'));
    
    const login = ref({
        username: '',
        password: ''  
    });

    const registro = ref({
        usuario: '',
        email: '',
        password: '',
    });

    function $registro(){
        return axiosRiksiri.post('register', registro.value).then( res => {
            $setLogin(res.data);
            return res.data;
        });
    }
    
    function $login(){
        return axiosRiksiri.post('login', login.value).then( res => {
            $setLogin(res.data);
            return res.data;
        });
    }

    function $setLogin(data: any | null){
        token.value = data?.token || null;
        isAuthenticated.value = !!token.value;
        
        if(token.value) {
            localStorage.setItem('token', token.value);
            localStorage.setItem('user', JSON.stringify(data.user));
            user.value = data.user;
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('menu');
            localStorage.removeItem('home');
            user.value = null;
        }
    }

    function $logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('menu');
        localStorage.removeItem('home');
        token.value = null;
        user.value = null;
        isAuthenticated.value = false;
    }

    // Login demo para pruebas (sin backend)
    function $loginDemo(username: string, password: string) {
        // Simular login exitoso
        const demoUser = {
            token: 'demo-token-' + Date.now(),
            user: {
                id: 1,
                usuario: username,
                email: username + '@demo.com',
                role: 'student'
            }
        };
        $setLogin(demoUser);
        return Promise.resolve(demoUser);
    }

    return { 
        login, 
        $login, 
        token, 
        $setLogin, 
        registro, 
        $registro, 
        user, 
        $logout,
        isAuthenticated,
        $loginDemo
    };
});
