import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpCacheComponent } from './http-cache/http-cache.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from './admin/admin.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { authGuard } from './service/auth.guard';
import { roleGuard } from './service/role.guard';
import { AddAboutComponent } from './about/add-about/add-about.component';
import { notCompleteGuard } from './service/not-complete.guard';
import { moduleGuard } from './service/module.guard';
import { resolveGuard } from './service/resolve.guard';
import { CustomSpinnerComponent } from './custom-spinner/custom-spinner.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "httpcache",
        component: HttpCacheComponent
    },
    // {
    //     path: "products/:id",
    //     component: ProductComponent
    // },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "product",
        component: ProductComponent,
        // resolve: {data: resolveGuard}
    },
    {
        path: "about",
        component: AboutComponent,
        canActivateChild: [roleGuard],
        children: [{
            path: "add-about",
            component: AddAboutComponent
        }]
    },
    {
        path: "contact",
        component: ContactComponent,
        canDeactivate: [notCompleteGuard]
    },
    {
        path: "offer",
        component: OffersComponent,
        canMatch: [moduleGuard]
    },
    {
        path: "admin",
        component: AdminComponent,
        canActivate: [authGuard]
    },
    {
        path: "access-denied",
        component: AccessDeniedComponent
    },
    {
        path: "spinner",
        component: CustomSpinnerComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
    },
];
