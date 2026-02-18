import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { Dashboard } from './pages/dashboard/dashboard';
import { Services } from './pages/services/services';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    App,
    Header,
    Sidebar,
    Dashboard,
    Services
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
