import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'shop',
        loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
