import { Component } from '@angular/core';
import { IDishes } from '../IDishes';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dish } from '../dishes';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.scss']
})
export class SpecialsComponent {
  dishArr: IDishes[] = dish;
  id: number = 0;

  constructor(private route: ActivatedRoute) { }

}
