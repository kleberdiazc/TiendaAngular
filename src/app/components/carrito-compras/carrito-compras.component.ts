import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  listcompras: any = [];
  total: Number = 0;
  constructor(private data: DataService) {
     this.listcompras = this.data.getShoppingCart();
     this.total = this.data.getTotal();

  }

  ngOnInit() {
  }

  updateStock() {
    this.data.updateProductosStock(this.listcompras);
  }

}
