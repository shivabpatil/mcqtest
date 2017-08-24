
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes } from "@angular/router";
export const router:Routes = [
    {
        path:'home',component:WelcomeComponent
    },
    {
        path:'',redirectTo:'home',pathMatch:'full'
    }
]