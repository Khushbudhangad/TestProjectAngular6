import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarMenuComponent } from './common/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
     {
        path: '',
        component: HomeComponent
     },
     {
      path: 'login',
      component: LoginComponent
   },
   {
    path: 'admin',
    component: AdminComponent
 },
 {
  path: 'welcome',
  component: WelcomeComponent
}

    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
