import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpCacheComponent } from './http-cache/http-cache.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "httpcache",
        component: HttpCacheComponent
    },
    {
        path: "products/:id",
        component: ProductComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    }
];
