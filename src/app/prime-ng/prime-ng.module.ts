import { NgModule } from '@angular/core';

// Módulos Prime Ng
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [
    MenuModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
