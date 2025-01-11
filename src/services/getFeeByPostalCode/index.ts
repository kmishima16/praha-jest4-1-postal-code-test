import { REGION_GROUPS, RegionGroup } from './regions';
import { SHIPPING_FEES } from './shipping';
import { fetchPrefectureByPostalCode } from './api';

export async function getFeeByPostalCode(postalCode: string): Promise<number> {
  const prefecture = await getPrefecture(postalCode);
  const region = getRegionGroup(prefecture);
  return getFee(region);
}

async function getPrefecture(postalCode: string): Promise<string> {
    // 郵便番号の形式チェック（7桁の数字のみ）
    if (!/^\d{7}$/.test(postalCode)) {
      throw new Error('郵便番号の形式が正しくありません');
    }
    try {
      const prefecture = await fetchPrefectureByPostalCode(postalCode);
      return prefecture
    } catch (error) {
      throw new Error('郵便番号の検索に失敗しました');
    }
}

function getRegionGroup(prefecture: string): RegionGroup {
  // 各地方グループをループして、該当する都道府県を探す
  const foundRegion = (Object.entries(REGION_GROUPS) as [RegionGroup, readonly string[]][])
    .find(([_, prefectures]) => prefectures.includes(prefecture));
    
  if (!foundRegion) {
    throw new Error(`都道府県「${prefecture}」に対応する地方区分が見つかりません`);
  }
  
  // 地方グループ名を返す（例：KANTO, HOKKAIDOなど）
  return foundRegion[0];
}

function getFee(region: RegionGroup): number {
  switch (region) {
    case 'HOKKAIDO':
      return SHIPPING_FEES.HOKKAIDO;
    case 'OKINAWA':
      return SHIPPING_FEES.OKINAWA;
    case 'KYUSHU':
      return SHIPPING_FEES.KYUSHU;
    case 'KANTO':
    case 'TOHOKU':
    case 'CHUBU':
    case 'CHUGOKU':
      return SHIPPING_FEES.KANTO_TOHOKU_CHUBU_CHUGOKU;
    default:
      throw new Error('不明な地域区分です');
  }
}

