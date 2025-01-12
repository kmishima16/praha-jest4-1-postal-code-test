import axios from 'axios';

export type PostalCodeResponse = {
  address1: string; // 都道府県
}

export type PostalCodeApi = (postalCode: string) => Promise<string>;

export const fetchPrefectureByPostalCode: PostalCodeApi = async (postalCode) => {
  try {
    const response = await axios.get<PostalCodeResponse>(
      `https://api.zipaddress.net/?zipcode=${postalCode}`
    );
    const prefecture = response.data.address1;
    return prefecture;
  } catch (error) {
    throw new Error('郵便番号の検索に失敗しました');
  }
};
