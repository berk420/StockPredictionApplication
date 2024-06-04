import { fetchData, Data, Error } from '../DataService/route';


export async function CollectTimeData(response: Data | Error, stock_name: string, financial_statement: string): Promise<string[]> {
    if ('error' in response) {
        console.error('Error:', response.error);
        return [];
    }

    const filteredData = response.data.filter((item :any) => item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement);
    const values = filteredData.map((item:any) => item.zaman);
    return values;
}


export async function CollectStockValueData(response: Data | Error, stock_name: string, financial_statement: string): Promise<number[]> {
    if ('error' in response) {
        console.error('Error:', response.error);
        return [];
    }

    const filteredData = response.data.filter((item :any) => item.hisse_adi === stock_name && item.bilanco_kalemi === stock_name + financial_statement);
    const values = filteredData.map((item :any) => {
        const degerString = item.deger.toString(); // Sayıyı dizeye dönüştür
        return parseFloat(degerString.replace(/\./g, '').replace(',', '.')); // Dizedeki noktaları virgüle dönüştür ve sayıya dönüştür
    });
        return values;
}
  

export function createChartData(xList: string[], yList: number[]): { x: string, y: number }[] {

    if (!Array.isArray(xList) || !Array.isArray(yList)) {
        console.error("not arr.");
        return [];
    } else if (xList.length === 0 || yList.length === 0) {
        console.error("empty arr.");
        return [];
    }

    xList.reverse();
    yList.reverse();

    const chartData = xList.map((x, index) => {
        // Get corresponding value from yList
        const y = yList[index]; // yList is already a number array, no need to parse it
        return {
            x: x,
            y: y
        };
    });

    return chartData;
}