import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { PhotosComponent } from './componets/photos/photos.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
// component
import {ProductsComponent} from './componets/products/products.component';
import {ProductsListComponent} from './componets/products/products-list/products-list.component';
import {ProductComponent} from './componets/products/product/product.component';
import {HomeComponent} from './componets/home/home.component';


// services
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    ProductsComponent,
    ProductsListComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
