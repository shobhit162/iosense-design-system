import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'typography', 
    loadComponent: () => import('./components/typography-demo/typography-demo.component')
      .then(m => m.TypographyDemoComponent) 
  },
  { 
    path: 'borders', 
    loadComponent: () => import('./components/borders-demo/borders-demo.component')
      .then(m => m.BordersDemoComponent) 
  },
  { 
    path: 'elevation', 
    loadComponent: () => import('./components/elevation-demo/elevation-demo.component')
      .then(m => m.ElevationDemoComponent) 
  },
  { 
    path: 'spacing', 
    loadComponent: () => import('./components/spacing-demo/spacing-demo.component')
      .then(m => m.SpacingDemoComponent) 
  },
  {
    path: 'colors',
    loadComponent: () => import('./components/colors-demo/colors-demo.component')
    .then(m => m.ColorsDemoComponent)
  },
  { 
    path: '', 
    redirectTo: 'typography', 
    pathMatch: 'full' 
  }
];