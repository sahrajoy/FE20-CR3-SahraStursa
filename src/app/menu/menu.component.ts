import { Component } from '@angular/core';
import { IDishes } from '../IDishes';
import { dish } from '../dishes';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  dishArr: IDishes[] = dish;

  constructor(private route: ActivatedRoute, private CS: CartService){}

  addToCart(obj: IDishes){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Dishes has been added to cart!',
      showConfirmButton: false,
      timer: 1500
    })
    this.CS.addToCart(obj);    
  }
}
