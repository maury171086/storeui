import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import {CategoryComponent} from '@app/category/category.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'category', component: CategoryComponent, data: { title: extract('Category') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoryRoutingModule { }
