import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
//import {MatIconRegistry} from '@angular/material/icon';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
   // MatIconRegistry,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
   // MatIconRegistry,
  ]
})
export class MaterialModule { }
