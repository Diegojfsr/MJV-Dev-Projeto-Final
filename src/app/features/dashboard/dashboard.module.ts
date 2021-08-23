import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [ProductListComponent, ProductCardComponent],

  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule
  ],

  exports: [
    ProductListComponent,
    MatCardModule,
    MatTabsModule
  
  ]
})
export class DashboardModule { }
