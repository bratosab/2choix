import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageTitleService } from './page-title.service';

const sharedComponents = [NavbarComponent];
@NgModule({
  imports: [CommonModule, RouterModule, CustomMaterialModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PageTitleService]
    };
  }
}
