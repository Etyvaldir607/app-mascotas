import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelinosComponent } from './components/felinos/felinos.component';
import { GaleryComponent } from './components/galery/galery.component';
import { StoreComponent } from './components/store/store.component';



const routes: Routes = [
  { path: 'felinos-component', component: FelinosComponent },
  { path: 'galery-component', component: GaleryComponent },
  { path: 'store-component', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
