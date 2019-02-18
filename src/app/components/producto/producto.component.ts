import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: any = {};
  constructor(private activatedRoute: ActivatedRoute,
    private data: DataService,
    private router: Router) {
      activatedRoute.params.subscribe(params => {
        this.data.getProductoid(params['_id'])
              .subscribe( res => {
                this.producto = res;
                console.log(this.producto);
              });
      });
     }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['/home/catalogo'] );
  }
}
