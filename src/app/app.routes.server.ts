import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'duzenle/:id',
    renderMode: RenderMode.Client 
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
