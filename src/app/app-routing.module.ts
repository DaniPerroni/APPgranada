import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// login
import { LoginComponent } from './components/login/login.component';

// guard
import { AuthGuard } from '../app/auth/auth.guard';


// "menu"
import { HomeComponent } from './pages/home/home.component';
import { MsjSentComponent } from './pages/msj-sent/msj-sent.component';
import { MsjDeleteComponent } from './pages/msj-delete/msj-delete.component';
import { MsjNewComponent } from './pages/msj-new/msj-new.component';

import { from } from 'rxjs';
import { DraftComponent } from './pages/draft/draft.component';



const ROUTES: Routes = [
    { path: 'login', component: LoginComponent},

    { path: 'inbox', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'msjSnt', component: MsjSentComponent, canActivate: [AuthGuard]},
    { path: 'mjsDel', component: MsjDeleteComponent, canActivate: [AuthGuard] },
    { path: 'new', component: MsjNewComponent, canActivate: [AuthGuard] },
    { path: 'draft', component: DraftComponent, canActivate: [AuthGuard]},

    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
