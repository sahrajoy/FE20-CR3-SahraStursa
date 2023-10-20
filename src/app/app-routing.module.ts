import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  }, {
    path: "home", component: HomeComponent
  }, {
    path: "menu/:id", component: DetailsComponent
  }, {
    path: "menu", component: MenuComponent
  }, {
    path: "cart", component: CartComponent
  }, {
    path: "about", component: AboutComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
