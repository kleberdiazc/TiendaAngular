import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  prodselec: any = [];
  shoppingCartTotal: Number = 0;
  constructor(private http: HttpClient,private router: Router) {
    console.log('Servicio Listo');
   }
   verificalogin(email, password): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
    .set('email', email)
    .set('password', password);

    return this.http.post<any[]>('http://localhost:3000/login/', body.toString() , {headers})
                  .pipe( map( data => data['message'] ));
   }

   getcatalogos() {

    return this.http.get('http://localhost:3000/productos')
                    .pipe(map(data => data['productos']));

   }

   getProductoid( _id: string ) {
    return this.http.get(`http://localhost:3000/productos/${ _id }`)
    .pipe(map(data => data['producto']));
   }


   addProductToShoppingCart(producto: any) {
    this.prodselec.push(producto);
    this.shoppingCartTotal = this.shoppingCartTotal + producto.subtotal;
   }
   getShoppingCart() {
    return this.prodselec;
  }

  getTotal() {
    return  this.shoppingCartTotal;
  }

  updateProductosStock(listaProductos) {
    console.log(listaProductos);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    for (let i = 0; i < listaProductos.length; i++) {
      let index = listaProductos[i].producto._id;
      let unidadesDis = listaProductos[i].producto.unidadesDis - listaProductos[i].cantidad;

      let body = new HttpParams()
      .set('unidadesDis', String(unidadesDis));

      this.http.put(`http://localhost:3000/productosStock/${ index }`, body.toString(), {headers}).subscribe(() => {
          this.prodselec = [];
          this.shoppingCartTotal = 0;
          document.getElementById('badge').innerHTML  = '';
          this.router.navigate(['/home/catalogo']);
      });
    }
  }


}

