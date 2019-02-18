import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { HttpClientModule } from '@angular/common/http';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BusquedaPipe } from './pipes/busqueda.pipe';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    TarjetasComponent,
    CatalogoComponent,
    ProductoComponent,
    BusquedaPipe,
    CarritoComprasComponent
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
