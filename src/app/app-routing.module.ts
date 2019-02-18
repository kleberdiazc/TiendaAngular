import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';



const routes: Routes = [  { path: 'home', component: HomeComponent, children: [
  {path: '', redirectTo: 'catalogo', pathMatch: 'full'},
  {path: 'catalogo', component: CatalogoComponent},
  {path: 'producto/:_id', component: ProductoComponent},
  {path: 'carro-compras', component: CarritoComprasComponent}]},
{ path: 'login', component: LoginComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: '**', pathMatch: 'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
