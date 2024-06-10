import {fetchData,Data, FetchError } from '../DataService/pages';

export async function CollectTimeData(response: Data | FetchError, stock_name: string, financial_statement: string): Promise<string[]> {
    if ('error' in response) {
        console.error('Error:', response.error);
        return [];
    }

    return response.data
    .filter((item :any) => item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement)
    .map((item:any) => item.zaman);
}

export async function CollectStockValueData(response: Data | FetchError, stock_name: string, financial_statement: string): Promise<number[]> {
    if ('error' in response) {
        console.error('Error:', response.error);
        return [];
    }

    return response.data
    .filter((item :any) => item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement)
    .map((item :any) => {
        return parseFloat(item.deger.toString().replace(/\./g, '').replace(',', '.'));
    });
}

export function CreateChartData(x_list: string[], y_list: number[],selectedCurrency:string): { x: string, y: number }[] {
    
    const dollar_rates: Record<string, number> = {
        '2024/3': 31.38,
        '2023/12': 28.89,
        '2023/9': 26.69,
        '2023/6': 20.95,
        '2023/3': 18.81,
        '2022/12': 18.63,
        '2022/9': 18.19,
        '2022/6': 16.41,
        '2022/3': 14.18,
        '2021/12': 13.07,
        '2021/9': 8.30,
        '2021/6': 8.61,
        '2021/3': 7.53,
        '2020/12': 7.79,
        '2020/9': 7.43,
        '2020/6': 6.90,
        '2020/3': 6.76,
        '2019/12': 5.80,
        '2019/9': 5.71,
        '2019/6': 5.80,
    };

    const gold_rates: Record<string, number> = {
        '2024/3': 2234,
        '2023/12': 1864,
        '2023/9':1665,
        '2023/6':1313 ,
        '2023/3':1126,
        '2022/12':1070,
        '2022/9': 1000,
        '2022/6': 977,
        '2022/3': 900,
        '2021/12':800,
        '2021/9': 485,
        '2021/6': 521,
        '2021/3': 411,
        '2020/12':460,
        '2020/9': 466,
        '2020/6': 370,
    };

        try {
            if (!Array.isArray(x_list) || !Array.isArray(y_list)) {
                throw new Error("Input lists are not arrays.");
            } else if (x_list.length === 0 || y_list.length === 0) {
                throw  new Error("Input lists are empty.");
            }
    
            x_list.reverse();
            y_list.reverse();

            const chart_data: { x: string, y: number }[] = x_list.map((x, index) => {
                let convertedY: number = 0;


                if (selectedCurrency === "Lira") {
                    convertedY = y_list[index];
                } else if (selectedCurrency === "Dollar") {
                    convertedY = y_list[index] / dollar_rates[x];
                } else if (selectedCurrency === "Gold") {
                    convertedY = y_list[index] / gold_rates[x];
                }
                
                return {
                    x: x,
                    y: convertedY
                };
            });
    
            return chart_data;
        } catch (error) {
            console.error("Error:", error);
            return [];
        }
    }