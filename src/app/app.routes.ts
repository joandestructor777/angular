import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
// debemos importar los componentes aqui home y login por ejemplo, de lo contraria no los encontrará

export const routes: Routes = [
    {path : "home", component : Home},
    {path : "login", component  : Login},
    {path : "", redirectTo : "home", pathMatch : "full"}
];
