import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
const routes: Routes = [
  // Allow acces to /posts if user has 'catalog.read' permissions
  { path: '',   component: AdminComponent},
  {
    path: 'blogs',
    loadChildren: () =>
      import('./blogs/blogs.module').then((m) => m.BlogsModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}

