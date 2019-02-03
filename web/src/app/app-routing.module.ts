import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ChooseComponent } from './choose/choose.component';

const routes: Routes = [
  { path: '', redirectTo: '/choose', pathMatch: 'full' },
  {
    path: 'choose',
    component: ChooseComponent,
    data: { title: 'Faites un choix!' }
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
