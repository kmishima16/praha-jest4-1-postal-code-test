# 配送料計算サービス

## 概要
郵便番号から配送料を算出するサービスです。郵便番号から都道府県を特定し、その都道府県が属する地域に基づいて配送料を計算します。

## 主な機能
- 郵便番号から都道府県の取得
- 都道府県から地域区分の判定
- 地域区分に基づく配送料の計算

## テスト要件

### getFeeByPostalCode関数
メイン部分の関数については、既に`src/services/getFeeByPostalCode/__tests__/index.test.ts`へテスト実装をしています。

### テスト実装が必要な関数
以下の内部関数について、単体テストを追加してください：

1. `getPrefecture(postalCode: string): Promise<string>`
   - 郵便番号から都道府県を取得する関数

2. `getRegionGroup(prefecture: string): Region`
   - 都道府県から地域区分を判定する関数

3. `getFee(region: Region): number`
   - 地域区分から配送料を算出する関数

これらの内部関数は、`getFeeByPostalCode`のテストが通過する限り、実装の詳細やロジックを変更することができます。

## 注意事項
- 内部関数の変更を行う場合は、`getFeeByPostalCode`の既存のテストケースが全て通過することを確認してください
