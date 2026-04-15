export interface StajBasvurusu {
  id: string;
  sirketAdi: string;
  pozisyon: string;
  durum: 'Beklemede' | 'Mülakat' | 'Kabul' | 'Red';
  basvuruTarihi: string;
  notlar?: string;
}
