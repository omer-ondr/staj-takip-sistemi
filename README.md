#  InternTrack - Staj Takip Sistemi

##  Proje Hakkında

InternTrack, staj başvurularınızı tek bir ekrandan yönetmenizi sağlayan modern ve kullanıcı dostu bir web uygulamasıdır. Başvurularınızın durumunu (Beklemede, Mülakat, Kabul, Red) kolayca takip edebilir, yeni başvurular ekleyebilir, mevcutları güncelleyebilir ve silebilirsiniz. Proje, herhangi bir dış veritabanına ihtiyaç duymadan tamamen yerel tarayıcı hafızası (LocalStorage) kullanılarak geliştirilmiştir.

Bu proje, bir Web Geliştirme eğitim programı yönergelerine sadık kalınarak, modern JavaScript/TypeScript framework'leri kullanılarak hazırlanmıştır.

##  Özellikler

- **Dashboard (Gösterge Paneli):** Toplam, bekleyen, mülakat aşamasındaki ve kabul edilen başvuru sayılarını anlık gösteren dinamik istatistik kartları.
- **Tam CRUD İşlemleri:** Yeni başvuru Ekleme, Listeleme, Güncelleme ve Silme işlemleri.
- **Veri Kalıcılığı:** LocalStorage entegrasyonu sayesinde sayfa yenilense dahi veriler kaybolmaz.
- **Örnek Veri Yükleme:** Sistemi test edebilmek için tek tıkla varsayılan örnek başvuru verilerini (ASELSAN, HAVELSAN vb.) sisteme yükleme özelliği.
- **Modern Tasarım:** Tailwind CSS kullanılarak oluşturulmuş, temiz ve şık arayüz.

##  Kullanılan Teknolojiler

- **Frontend Framework:** Angular (TypeScript)
- **Stil & UI:** Tailwind CSS
- **Durum / Veri Yönetimi:** LocalStorage (Angular Service mimarisi ile)
- **Canlıya Alma:** Netlify

##  Proje Yapısı (Yönerge Uyumlu)

Proje mimarisi, yönergelerde istenen standartlara göre şu şekilde yapılandırılmıştır:

```
src/app/
├── components/    # Uygulama genelinde kullanılabilen UI bileşenleri
├── pages/         # Dashboard ve Form sayfaları (Yönlendirmeli sayfalar)
├── interfaces/    # TypeScript arayüz ve tip tanımlamaları (StajBasvurusu vb.)
└── services/      # LocalStorage ile haberleşen CRUD operasyon servisleri
```

##  Kurulum ve Çalıştırma (Geliştirici Ortamı)

Projeyi bilgisayarınıza indirip çalıştırmak için aşağıdaki adımları izleyebilirsiniz.

### Ön Koşullar

- Sisteminizde Node.js (v18 veya üzeri) yüklü olmalıdır.
- Angular CLI sisteminizde global olarak kurulu olmalıdır:

```bash
npm install -g @angular/cli
```

### Adımlar

**1. Projeyi Klonlayın:**

```bash
git clone https://github.com/omer-ondr/staj-takip-sistemi.git
```


**2. Proje Dizinine Geçiş Yapın:**

```bash
cd staj-takip-sistemi
```

**3. Gerekli Bağımlılıkları (Dependencies) Yükleyin:**

```bash
npm install
```

**4. Uygulamayı Başlatın:**

```bash
ng serve -o
```

Bu komut projeyi derleyecek ve otomatik olarak tarayıcınızda `http://localhost:4200` adresinde açacaktır.

##  Canlı Önizleme

Projenin canlı ve kullanılabilir haline aşağıdaki bağlantıdan ulaşabilirsiniz: https://stajtakipsistemi.netlify.app/
