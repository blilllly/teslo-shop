import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    // todo: guards
    canMatch: [
      NotAuthenticatedGuard,
      // () => {
      //   console.log('hola mundo');
      // },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./store-front/store-front.routes'),
  },
];
