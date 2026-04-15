import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { StajService } from '../../services/staj.service';
import { StajBasvurusu } from '../../interfaces/staj.interface';

@Component({
  selector: 'app-basvuru-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './basvuru-form.html'
})
export class BasvuruFormComponent implements OnInit {
  basvuruForm!: FormGroup;
  duzenlenecekId: string | null = null;
  sayfaBasligi: string = 'Yeni Başvuru Ekle';

  constructor(
    private fb: FormBuilder,
    private stajService: StajService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.basvuruForm = this.fb.group({
      sirketAdi: ['', Validators.required],
      pozisyon: ['', Validators.required],
      durum: ['Beklemede', Validators.required],
      basvuruTarihi: ['', Validators.required],
      notlar: ['']
    });

    this.duzenlenecekId = this.route.snapshot.paramMap.get('id');

    if (this.duzenlenecekId) {
      this.sayfaBasligi = 'Başvuruyu Güncelle';
      this.veriyiFormaDoldur(this.duzenlenecekId);
    }
  }

  veriyiFormaDoldur(id: string) {
    const mevcutBasvurular = this.stajService.getBasvurular();
    const basvuru = mevcutBasvurular.find(b => b.id === id);
    if (basvuru) {
      this.basvuruForm.patchValue(basvuru);
    }
  }

  kaydet() {
    if (this.basvuruForm.invalid) {
      alert('Lütfen zorunlu alanları doldurun!');
      return;
    }

    const formVerisi = this.basvuruForm.value;

    if (this.duzenlenecekId) {
      formVerisi.id = this.duzenlenecekId;
      this.stajService.basvuruGuncelle(formVerisi);
    } else {
      formVerisi.id = Math.random().toString(36).substring(2, 9);
      this.stajService.basvuruEkle(formVerisi);
    }

    this.router.navigate(['/']);
  }
}
