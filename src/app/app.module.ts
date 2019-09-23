import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { SettingsComponent } from './pages/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,LoginComponent, ThemeComponent, AdministrationComponent, SettingsComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
