
export async function financial_statement(): Promise<string[]> {
    const toplam_dönen_varlıklar = "_toplam dönen varlıklar";
    const toplam_varlıklar = "_toplam varlıklar";
    const toplam_kısa_vadeli_yükümlülükler = "_toplam kısa vadeli yükümlülükler";
    const toplam_uzun_vadeli_yükümlülükler = "_toplam uzun vadeli yükümlülükler";
    const toplam_özkaynaklar = "_toplam özkaynaklar";
    const toplam_kaynaklar = "_toplam kaynaklar";

    const financial_statement = [toplam_dönen_varlıklar, toplam_varlıklar, toplam_kısa_vadeli_yükümlülükler, toplam_uzun_vadeli_yükümlülükler, toplam_özkaynaklar, toplam_kaynaklar];
    return financial_statement;
}


export async function stock_name(): Promise<string[]> {

    const stock_name = ["DGGYO", "KCHOL", "OYYAT"];

    return stock_name;
}
