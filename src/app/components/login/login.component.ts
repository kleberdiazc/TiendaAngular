import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
               private data: DataService ) { }

  ngOnInit() {
  }

  login(email, password) {
    /*console.log(email + password);
    //this.router.navigateByUrl('/home');*/

    this.data.verificalogin( email, password )
          .subscribe( data => {
           console.log(data);
           if (data.toString() === 'Correcto') {
            this.router.navigateByUrl('/home');
           }
          });
  }
}


