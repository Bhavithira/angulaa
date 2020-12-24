import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';

/**
 * configure router with following routes
 * cats => CatsComponent
 * dogs => DogsComponent
 */
const routes: Routes = [
  {  },
  {  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
