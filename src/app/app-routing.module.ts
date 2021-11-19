import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutes } from './routing/routing';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:MainRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
