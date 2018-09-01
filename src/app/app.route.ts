import {Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';

export const AppRoute:Routes = [
    {
        path: '',
        component: ContentComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

