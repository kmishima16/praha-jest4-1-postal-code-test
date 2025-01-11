import { getFeeByPostalCode } from '../index';
import { fetchPrefectureByPostalCode } from '../api';
import { SHIPPING_FEES } from '../shipping';

// APIモックの設定
jest.mock('../api');
const mockFetchPrefectureByPostalCode = fetchPrefectureByPostalCode as jest.MockedFunction<typeof fetchPrefectureByPostalCode>;

describe('getFeeByPostalCode', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('関東の郵便番号で正しい配送料が返却される', async () => {
    mockFetchPrefectureByPostalCode.mockResolvedValue('東京都');
    const fee = await getFeeByPostalCode('1000001'); // 東京都千代田区
    expect(fee).toBe(SHIPPING_FEES.KANTO_TOHOKU_CHUBU_CHUGOKU);
  });

  test('北海道の郵便番号で正しい配送料が返却される', async () => {
    mockFetchPrefectureByPostalCode.mockResolvedValue('北海道');
    const fee = await getFeeByPostalCode('0600000'); // 北海道札幌市
    expect(fee).toBe(SHIPPING_FEES.HOKKAIDO);
  });

  test('不正な郵便番号でエラーが発生する', async () => {
    await expect(getFeeByPostalCode('123')).rejects.toThrow('郵便番号の形式が正しくありません');
  });

  test('API呼び出しが失敗した場合にエラーが発生する', async () => {
    mockFetchPrefectureByPostalCode.mockRejectedValue(new Error('API Error'));
    await expect(getFeeByPostalCode('1234567')).rejects.toThrow('郵便番号の検索に失敗しました');
  });
});
