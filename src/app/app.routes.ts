import { Route } from '@angular/router';
import { MyLoginComponent } from 'src/signup-dashboard/login/login.component';
import { SignInComponent } from 'src/signup-dashboard/sign-in/sign-in.component';

export const appRoutes: Route[] = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
        path: 'login', component: MyLoginComponent
    },
    {
        path: 'signIn', component: SignInComponent
    }
];
