
import { CollectTimeData,CollectStockValueData,createChartData} from '../ChartDataPrepare/pages';
import Chart from 'chart.js/auto'; // Chart.js kütüphanesini import edin
import { fetchData, Data, Error } from '../DataService/pages';

export async function drawLineChart(data: Data | Error, stock_name: string, financial_statement: string, element :string) {
    if ('error' in data) {
        console.error('Error:', data.error);
        return;
    }

    const chartData = createChartData(
        await CollectTimeData(data, stock_name, financial_statement),
        await CollectStockValueData(data, stock_name, financial_statement)); // Örnek xList

    const ctx = document.getElementById(element) as HTMLCanvasElement;

    const existingChart = Chart.getChart(element);
    if (existingChart) {
        existingChart.destroy();
    }

    new Chart(ctx, {
        type: 'line',
        data: {
            
            datasets: [{
                label: financial_statement,
                data: chartData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Value'
                    }
                }
            }
        }
    });

    
}
export async function createGeneralHtml(hisse: string): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const allContainer = document.getElementById("allelement");

            if (!allContainer) {
                console.error("Container element not found.");
                resolve();
                return;
            }

            const heading = document.createElement("h4");

            // Set the text content of the heading
            heading.textContent = hisse;
            heading.style.width = "auto";
            heading.style.height = "50px";
            
            heading.style.margin = "0 auto"; // Center horizontally
            heading.style.marginBottom = "-20px"; // Add margin at the bottom
            heading.style.marginTop = "20px"; // Add margin at the top
            heading.style.marginLeft = "auto"; // Center horizontally
            heading.style.marginRight = "auto"; // Center horizontally
            heading.style.fontFamily = "Arial, sans-serif"; // Set font to Arial
            heading.style.textAlign = "center";
            heading.style.color = "Grey"; // Change font color to blue (or any other color you want)


            const hissediv = document.createElement("div");
            hissediv.id = hisse;

            hissediv.style.display = "center";
            hissediv.style.flexDirection = "row";
            hissediv.style.alignItems = "center";
            hissediv.style.justifyContent = "center";

            hissediv.style.width = "100%";
            hissediv.style.height = "100%";

            hissediv.style.left = "300px";


            hissediv.style.margin = "10";
            hissediv.style.padding = "10";


            allContainer.appendChild(hissediv);
            hissediv.appendChild(heading);

            resolve();
        }, 500);
    });
}


 export async function financialStatementGraph(stock_name: string, financial_statement: string): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            const hisseelement = document.getElementById(stock_name);

            if (!hisseelement) {
                console.error("Hisse element not found.");
                resolve();
                return;
            }

            const stocknamediv = document.createElement("canvas");

            stocknamediv.id = stock_name +financial_statement ;
            stocknamediv.style.width = "100%";
            stocknamediv.style.height = "200px";

            hisseelement.appendChild(stocknamediv);

            resolve();
        }, 1000);
    });
}




