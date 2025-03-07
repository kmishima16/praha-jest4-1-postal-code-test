// 地方区分の定義

export const REGION_GROUPS = {
    HOKKAIDO: ['北海道'],
    TOHOKU: ['青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県'],
    KANTO: ['茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県'],
    CHUBU: ['新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県'],
    CHUGOKU: ['鳥取県', '島根県', '岡山県', '広島県', '山口県'],
    KYUSHU: ['福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県'],
    OKINAWA: ['沖縄県']
} as const;

export type RegionGroup = keyof typeof REGION_GROUPS;
