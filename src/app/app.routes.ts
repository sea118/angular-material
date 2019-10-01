import {HomeComponent} from './componets/home/home.component';
import { Routes } from '@angular/router';

import {ProductsComponent} from './componets/products/products.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'productos', component: ProductsComponent }
]