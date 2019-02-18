import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  productos: any = [];
  private productJSON:any;
  private subtotal :number;
  private stock: number;
  private productsQuantity: any = '';
  constructor(private activatedRouter: ActivatedRoute,
    private data: DataService,
   private router: Router) {
    data.getcatalogos()
            .subscribe( res => {
              console.log(res);
              this.productos = res;

            });
   }

  ngOnInit() {
  }

  verMas(_id: number) {
    console.log(_id);
    this.router.navigate(['../producto', _id] );
  }


  addCompras(producto, cantidad) {
    this.productsQuantity = document.getElementById('badge').textContent;
    document.getElementById('badge').innerHTML  = String(Number(this.productsQuantity) + 1);
    this.subtotal = producto.precioUni * cantidad;
    this.stock = producto.unidadesDis - cantidad;
    /*document.getElementById("unidadDisponible-"+product.index).innerHTML = String(Number(this.stock));*/
    this.productJSON = {
      producto : producto,
      cantidad : cantidad,
      subtotal : this.subtotal
    };

    this.data.addProductToShoppingCart(this.productJSON);

  }
}
