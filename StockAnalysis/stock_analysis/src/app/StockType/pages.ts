export enum Financial_Statement_Db_Name {
    TOPLAM_DONEN_VARLIKLAR = "_toplam dönen varlıklar",
    TOPLAM_VARLIKLAR = "_toplam varlıklar",
    TOPLAM_KISA_VADELI_YUKUMLULUKLER = "_toplam kısa vadeli yükümlülükler",
    TOPLAM_UZUN_VADELI_YUKUMLULUKLER = "_toplam uzun vadeli yükümlülükler",
    TOPLAM_OZKAYNAKLAR = "_toplam özkaynaklar",
    TOPLAM_KAYNAKLAR = "_toplam kaynaklar"
}

export enum Financial_Statement_Name {
    TOPLAM_DONEN_VARLIKLAR = "toplam dönen varlıklar",
    TOPLAM_VARLIKLAR = "toplam varlıklar",
    TOPLAM_KISA_VADELI_YUKUMLULUKLER = "toplam kısa vadeli yükümlülükler",
    TOPLAM_UZUN_VADELI_YUKUMLULUKLER = "toplam uzun vadeli yükümlülükler",
    TOPLAM_OZKAYNAKLAR = "toplam özkaynaklar",
    TOPLAM_KAYNAKLAR = "toplam kaynaklar"
}

export async function financial_statement(): Promise<string[]> {
    const financial_statement = [
        Financial_Statement_Db_Name.TOPLAM_DONEN_VARLIKLAR,
        Financial_Statement_Db_Name.TOPLAM_VARLIKLAR,
        Financial_Statement_Db_Name.TOPLAM_KISA_VADELI_YUKUMLULUKLER,
        Financial_Statement_Db_Name.TOPLAM_UZUN_VADELI_YUKUMLULUKLER,
        Financial_Statement_Db_Name.TOPLAM_OZKAYNAKLAR,
        Financial_Statement_Db_Name.TOPLAM_KAYNAKLAR
    ];
    return financial_statement;
}

export async function financial_statement_Name(statement: string): Promise<string> {
    switch (statement) {
        case Financial_Statement_Db_Name.TOPLAM_DONEN_VARLIKLAR:
            return Financial_Statement_Name.TOPLAM_DONEN_VARLIKLAR;
        case Financial_Statement_Db_Name.TOPLAM_VARLIKLAR:
            return Financial_Statement_Name.TOPLAM_VARLIKLAR;
        case Financial_Statement_Db_Name.TOPLAM_KISA_VADELI_YUKUMLULUKLER:
            return Financial_Statement_Name.TOPLAM_KISA_VADELI_YUKUMLULUKLER;
        case Financial_Statement_Db_Name.TOPLAM_UZUN_VADELI_YUKUMLULUKLER:
            return Financial_Statement_Name.TOPLAM_UZUN_VADELI_YUKUMLULUKLER;
        case Financial_Statement_Db_Name.TOPLAM_OZKAYNAKLAR:
            return Financial_Statement_Name.TOPLAM_OZKAYNAKLAR;
        case Financial_Statement_Db_Name.TOPLAM_KAYNAKLAR:
            return Financial_Statement_Name.TOPLAM_KAYNAKLAR;
        default:
            return "error";
    }
}




export async function stock_name(): Promise<string[]> {

    const stock_name = [Stock_short.DGGYO,Stock_short.KCHOL,Stock_short.OYYAT];

    return stock_name;
}


enum Stock_short {
    DGGYO = "DGGYO",
    KCHOL = "KCHOL",
    OYYAT = "OYYAT"

}

enum Stock_long {
    DGGYO = "Doğuş holding",
    KCHOL = "Koç holding",
    OYYAT = "Oyak holding"

}



export async function stock_long_name(stock:String):Promise<string>{

    switch (stock) {
        case "DGGYO":
            return Stock_long.DGGYO;
        case "KCHOL":
            return Stock_long.KCHOL;
        case "OYYAT":
            return Stock_long.OYYAT;
        default:
            return "error"
    }
    return "error";
}
