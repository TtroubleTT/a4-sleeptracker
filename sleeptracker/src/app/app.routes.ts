import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'log-sleep',
        loadComponent: () => import('./log-sleep/log-sleep.page').then( m => m.LogSleepPage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];
