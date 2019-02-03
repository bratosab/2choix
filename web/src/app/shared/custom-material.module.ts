import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const modules = [MatProgressSpinnerModule];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class CustomMaterialModule {}
