import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { BasvuruFormComponent } from './pages/basvuru-form/basvuru-form';

export const routes: Routes = [
  { path: '', component: DashboardComponent }, // Ana sayfa Dashboard olacak
  { path: 'ekle', component: BasvuruFormComponent }, // Ekleme sayfası
  { path: 'duzenle/:id', component: BasvuruFormComponent } // Güncelleme sayfası (ID parametresi alıyor)
];
