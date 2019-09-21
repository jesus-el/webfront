import { NgModule } from "@angular/core";
import {Routes,RouterModule, Router} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { UsersComponent } from './pages/administration/users/users.component';
import { RolesComponent } from './pages/administration/roles/roles.component';
import { CategoriesComponent } from './pages/settings/categories/categories.component';
import { AuthorsComponent } from './pages/settings/authors/authors.component';
import { AreasComponent } from './pages/settings/areas/areas.component';
import { SectionsComponent } from './pages/settings/sections/sections.component';
import { BooksComponent } from './pages/settings/books/books.component';

export const routes: Routes=[{
    path  : 'login',    
    component : LoginComponent
},
{
    path: 'pages',
    component: ThemeComponent,// sellama el componente del tema
    children: [
        {
            path: 'dashboard',
            loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
        },{
            path  : 'users',    
            component :  UsersComponent
        },{
            path  : 'roles',    
            component :  RolesComponent
        },{
            path  : 'categories',    
            component :  CategoriesComponent
        },{
            path  : 'authors',    
            component :  AuthorsComponent
        },{
            path  : 'areas',    
            component :  AreasComponent
        },{
            path  : 'sections',    
            component :  SectionsComponent
        },{
            path  : 'books',    
            component : BooksComponent
        }, {
            path: '',
            loadChildren:'./pages/hello-w/hello-w.module#HelloWModule'
        },{
            path: '',
            loadChildren:'./pages/hola/hola.module#HolaModule'
            //se copia y se cambia el path se le cambi ala ruta  la primera parte va la ruta la segunada parte va el conponente del module nuevo
        }
    ]

}
]
@NgModule({
imports:[ RouterModule.forRoot(routes,{useHash:true})
],
exports:[RouterModule],
providers:[]
}) 
export class AppRoutingModule {}
