import {fetchData,Data, Error } from '../DataService/pages';

export async function CollectTimeData(response: Data | Error, stock_name: string, financial_statement: string): Promise<string[]> {
    if ('error' in response) {
        console.error('Error:', response.error);
        return [];
    }

    return response.data
    .filter((item :any) => item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement)
    .map((item:any) => item.zaman);
}

export async function CollectStockValueData(response: Data | Error, stock_name: string, financial_statement: string): Promise<number[]> {
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

  /*
export function CreateChartData(x_list: string[], y_list: number[]): { x: string, y: number }[] {

    if (!Array.isArray(x_list) || !Array.isArray(y_list)) {
        console.error("not arr.");
        return [];
    } else if (x_list.length === 0 || y_list.length === 0) {
        console.error("empty arr.");
        return [];
    }

    x_list.reverse();
    y_list.reverse();

    const chart_data = x_list.map((x, index) => {
        const y = y_list[index];
        return {
            x: x,
            y: y
        };
    });

    return chart_data;
}
*/

  
export function CreateChartData(x_list: string[], y_list: number[],selectedCurrency:string): { x: string, y: number }[] {
    
    const exchangeRates: Record<string, number> = {
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
        '2021/6': 7.30,
        '2021/3': 7.20,
        '2020/12': 7.10,
        '2020/9': 7.00,
        '2020/6': 6.90,
        '2020/3': 6.80,
        '2019/12': 6.70,
        '2019/9': 6.60,
        '2019/6': 6.50,
        '2019/3': 6.40,
        '2018/12': 6.30,
        '2018/9': 6.20,
        '2018/6': 6.10,
        '2018/3': 6.00,
        '2017/12': 5.90,
        '2017/9': 5.80,
        '2017/6': 5.70,
        '2017/3': 5.60,
        '2016/12': 5.50,
        '2016/9': 5.40,
        '2016/6': 5.30,
        '2016/3': 5.20,
        '2015/12': 5.10,
        '2015/9': 5.00,
        '2015/6': 4.90,
        '2015/3': 4.80,
    };
    
    
        try {
            if (!Array.isArray(x_list) || !Array.isArray(y_list)) {
                //throw new Error("Input lists are not arrays.");
            } else if (x_list.length === 0 || y_list.length === 0) {
                //throw new Error("Input lists are empty.");
            }
    
            x_list.reverse();
            y_list.reverse();
            // x_list'i dolar kurlarına göre bölerek dönüştür
            const chart_data: { x: string, y: number }[] = x_list.map((x, index) => {
                const y = y_list[index];
                const exchangeRate: number | undefined = exchangeRates[x];
                if (exchangeRate === undefined) {
                    //throw new Error(`Exchange rate not found for date: ${x}`);
                }
                let convertedY: number = 0;

                if (selectedCurrency === "Lira") {
                    convertedY = y;
                } else if (selectedCurrency === "Dollar") {
                    convertedY = y / exchangeRate;
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