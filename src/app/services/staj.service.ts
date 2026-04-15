import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { StajBasvurusu } from '../interfaces/staj.interface';

@Injectable({ providedIn: 'root' })
export class StajService {
  private storageKey = 'staj_verileri';
  private isBrowser: boolean;

  private ilkVeriler: StajBasvurusu[] = [

    {
      id: '1',
      sirketAdi: 'Software Persona',
      pozisyon: 'Yazılım Stajyeri',
      durum: 'Kabul',
      basvuruTarihi: '2026-03-15',
      notlar: 'Kabul edildim!!.',
    },
    {
      id: '2',
      sirketAdi: 'ASELSAN',
      pozisyon: 'Yazılım Stajyeri',
      durum: 'Beklemede',
      basvuruTarihi: '2026-03-15',
      notlar: 'Online mülakat planlaması için mail bekleniyor.',
    },
    {
      id: '3',
      sirketAdi: 'HAVELSAN',
      pozisyon: 'Gömülü Sistemler',
      durum: 'Mülakat',
      basvuruTarihi: '2026-04-01',
      notlar: 'İK mülakatı olumlu geçti, teknik mülakat tarihi belli olacak.',
    },
    {
      id: '4',
      sirketAdi: 'TUSAŞ',
      pozisyon: 'Frontend Geliştirici (Angular)',
      durum: 'Mülakat',
      basvuruTarihi: '2026-02-20',
      notlar: 'Mülakat süreci devam ediyor.',
    },
    {
      id: '5',
      sirketAdi: 'ROKETSAN',
      pozisyon: 'Backend Stajyeri (Spring Boot)',
      durum: 'Mülakat',
      basvuruTarihi: '2026-03-10',
      notlar: 'HackerRank üzerinden gönderilen algoritma testi çözüldü, sonuç bekleniyor.',
    },
    {
      id: '6',
      sirketAdi: 'Baykar',
      pozisyon: 'Mobil Uygulama (Flutter)',
      durum: 'Beklemede',
      basvuruTarihi: '2026-04-05',
      notlar: 'Özgeçmiş havuzuna alındı, genel değerlendirme aşamasında.',
    },
    {
      id: '7',
      sirketAdi: 'Tübitak BİLGEM',
      pozisyon: 'Yazılım Geliştirici (.NET)',
      durum: 'Red',
      basvuruTarihi: '2026-01-15',
      notlar: 'Kontenjan doluluğu sebebiyle olumsuz dönüş yapıldı.',
    },
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // 2. ADIM: Constructor sadece bu ortak listeyi kullanıyor
    if (this.isBrowser) {
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify(this.ilkVeriler));
      }
    }
  }

  // Listeleme işlemi
  getBasvurular(): StajBasvurusu[] {
    if (this.isBrowser) {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    }
    return []; // Sunucudayken boş dizi dön
  }

  // Ekleme işlemi
  basvuruEkle(yeni: StajBasvurusu) {
    if (this.isBrowser) {
      const list = this.getBasvurular();
      list.push(yeni);
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    }
  }

  // Silme işlemi
  basvuruSil(id: string) {
    if (this.isBrowser) {
      const list = this.getBasvurular().filter((b) => b.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    }
  }

  // Güncelleme işlemi
  basvuruGuncelle(guncelVeri: StajBasvurusu) {
    if (this.isBrowser) {
      let list = this.getBasvurular();
      const index = list.findIndex((b) => b.id === guncelVeri.id);
      if (index !== -1) {
        list[index] = guncelVeri;
        localStorage.setItem(this.storageKey, JSON.stringify(list));
      }
    }
  }

  verileriSifirla() {
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, JSON.stringify(this.ilkVeriler));
    }
  }
}
