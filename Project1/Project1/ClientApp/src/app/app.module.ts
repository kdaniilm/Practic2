import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { MenagerPrivateDataComponent } from './menager-private-data/menager-private-data.component';
import { EditorPrivateDataComponent } from './editor-private-data/editor-private-data.component';
import { JwtInterseptor } from './interseptors/jwt-interseptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    MenagerPrivateDataComponent,
    EditorPrivateDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent }, 
      { path: 'login', component: LoginComponent }, 
      { path: 'manager-private-data', component: MenagerPrivateDataComponent },
      { path: 'editor-private-data', component: EditorPrivateDataComponent }
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterseptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
