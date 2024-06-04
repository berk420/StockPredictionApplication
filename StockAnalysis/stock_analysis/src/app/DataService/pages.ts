// src/lib/fetchData.ts

export type StockData = {
    hisse_adi: string;
    bilanco_kalemi: string;
    zaman: string;
    deger: number;
};

export type Data = {
    data: StockData[];
};

export type Error = {
    error: string;
};

export async function fetchData(stock_name: string, financial_statement: string): Promise<Data | Error> {
    try {
        const response = await fetch('https://berk420.github.io/StockPredictionApplication/stock_endpoint.json');
        const responseData: StockData[] = await response.json();

        if (response.ok) {
            const filteredData = responseData.filter(row => row.hisse_adi === stock_name && row.bilanco_kalemi === financial_statement);
            return { data: filteredData };
        } else {
            return { error: 'Failed to fetch data' };
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Failed to fetch data' };
    }
}
