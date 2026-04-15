import { Component, OnInit } from '@angular/core';
import { StajService } from '../../services/staj.service';
import { StajBasvurusu } from '../../interfaces/staj.interface';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  basvurular: StajBasvurusu[] = [];

  toplamBasvuru: number = 0;
  bekleyen: number = 0;
  mulakat: number = 0;
  kabul: number = 0;

  constructor(private stajService: StajService) {}

  ngOnInit(): void {
    this.verileriYukle();
  }

  verileriYukle() {
    this.basvurular = this.stajService.getBasvurular();
    this.istatistikleriHesapla();
  }

  istatistikleriHesapla() {
    this.toplamBasvuru = this.basvurular.length;
    this.bekleyen = this.basvurular.filter(b => b.durum === 'Beklemede').length;
    this.mulakat = this.basvurular.filter(b => b.durum === 'Mülakat').length;
    this.kabul = this.basvurular.filter(b => b.durum === 'Kabul').length;
  }

  basvuruSil(id: string) {
    if (confirm('Bu başvuruyu silmek istediğinize emin misiniz?')) {
      this.stajService.basvuruSil(id);
      this.verileriYukle(); // Listeyi güncelle
    }
  }

  verileriSifirla() {
    const onay = confirm('Tüm verileri silip başlangıç haline döndürmek istediğinize emin misiniz? Sonradan eklediğiniz her şey silinecek!');

    if (onay) {
      this.stajService.verileriSifirla();
      this.verileriYukle();
    }
  }
}
