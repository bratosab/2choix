import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { metaReducers, reducers } from './reducers';
import { SharedModule } from './shared/shared.module';
import { ChooseComponent } from './choose/choose.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ChooseComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
