import { NgModule } from '@angular/core';

// Módulos Prime Ng
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  exports: [
    MenuModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
