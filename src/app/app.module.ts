import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';


// httpClient
import { HttpClientModule } from '@angular/common/http';

// componentes
import { HomeComponent } from './pages/home/home.component';
import { MsjSentComponent } from './pages/msj-sent/msj-sent.component';
import { MsjDeleteComponent } from './pages/msj-delete/msj-delete.component';
import { MsjNewComponent } from './pages/msj-new/msj-new.component';
import { LeftmenuComponent } from './pages/shared/leftmenu/leftmenu.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MsjSentComponent,
    MsjDeleteComponent,
    MsjNewComponent,
    LeftmenuComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
