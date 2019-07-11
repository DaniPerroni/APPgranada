import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// login
import { LoginComponent } from './components/login/login.component';



// "menu"
import { HomeComponent } from './pages/home/home.component';
import { MsjSentComponent } from './pages/msj-sent/msj-sent.component';
import { MsjDeleteComponent } from './pages/msj-delete/msj-delete.component';
import { MsjNewComponent } from './pages/msj-new/msj-new.component';

import { from } from 'rxjs';



const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'inbox', component: HomeComponent},
    {path: 'msjSnt', component: MsjSentComponent},
    {path: 'mjsDel', component: MsjDeleteComponent},
    {path: 'new', component: MsjNewComponent},

    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
