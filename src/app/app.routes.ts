import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'',
                loadComponent:()=>
                    import('./home/home').then(m=>m.Home)
            },
            {
                path:'services',
                loadComponent:()=>
                    import('./services/services').then(m=>m.Services)
            },
            {
                path:'contactos',
                loadComponent:()=>
                    import('./contactos/contactos').then(m=>m.Contactos)
            }
        ]
    }
];