import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbCarousel, NgbModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { MenuSuperior } from './menu-superior/menu-superior';
import { Destaque } from './destaque/destaque';
import { Noticia } from './noticia/noticia';
import { Home } from './home/home';
import { Cliente } from './cliente/cliente';
import { Paginanaoencontrada } from './paginanaoencontrada/paginanaoencontrada';

@NgModule({
  declarations: [App, MenuSuperior, Destaque, Noticia, Home, Cliente, Paginanaoencontrada],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbCarousel, NgbSlide],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
