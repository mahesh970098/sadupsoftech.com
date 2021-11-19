export const MainRoutes=[
  {
    path: '',
    loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
  },

    {
      path: 'home',
      loadChildren: () => import('../website/home/home.module').then(m => m.HomeModule)
  },




]
