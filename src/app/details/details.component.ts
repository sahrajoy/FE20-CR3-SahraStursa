import { Component } from '@angular/core';
import { IDishes } from '../IDishes';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dish } from '../dishes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  dish: IDishes = {} as IDishes;
  id: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Dishes has been added to cart!',
      showConfirmButton: false,
      timer: 1500
    })
    this.CS.addToCart(this.dish);
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param["id"];
      this.dish = dish[this.id];
    }), (error: any) => { console.log(error) };

  }
}
