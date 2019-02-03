import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';

const modules = [MatProgressSpinnerModule, MatIconModule, MatButtonModule];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class CustomMaterialModule {}
