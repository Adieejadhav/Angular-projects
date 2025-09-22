import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home-page/home-page').then(m => m.HomePage),
  },
  {
    path:'about',
    loadComponent: () =>
        import('./about-page/about-page').then((m)=>m.AboutPage),
  },
  {
    path:'contact',
    loadComponent: () =>
        import('./contact-us-page/contact-us-page').then((m)=>m.ContactUsPage)
  }
];