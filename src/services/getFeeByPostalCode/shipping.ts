export type ShippingFeeMap = {
    readonly HOKKAIDO: number;
    readonly OKINAWA: number;
    readonly KYUSHU: number;
    readonly KANTO_TOHOKU_CHUBU_CHUGOKU: number;
};

// 配送料金の定義
export const SHIPPING_FEES: ShippingFeeMap = {
    KANTO_TOHOKU_CHUBU_CHUGOKU: 600,
    KYUSHU: 1000,
    HOKKAIDO: 1500,
    OKINAWA: 3000
} as const;
