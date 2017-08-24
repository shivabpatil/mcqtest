
import { WelcomeComponent } from '../welcome/welcome.component';
import { ProfileComponent } from '../profile/profile.component';
import { Routes } from "@angular/router";
export const router:Routes = [
    {
        path:'home',component:WelcomeComponent
    },
    {
        path:'callback',component:WelcomeComponent
    },
    {
        path:'profile',component:ProfileComponent
    },
    {
        path:'',redirectTo:'home',pathMatch:'full'
    }
]