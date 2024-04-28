
document.addEventListener("DOMContentLoaded", async function () {
    await setdrawer();
});

async function fetch_all_data_db(stockName,finantionalStatement) {
    try {
        const response = await fetch('https://localhost:7098/api/StockAPI/alldata');
        let data = await response.json();
        const filteredData = await data.filter(row => row.hisse_adi ===stockName && row.bilanco_kalemi === finantionalStatement);        
        return filteredData;
        
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
}

function stockname_petrol(){

    return ["TUPRS","ACSEL"]
}

function finantial_statement(){
    
    return ["CashAndCashEquivalents","FinancialLiabilities"]
            
}

async function CollectTimeData(data,hisse,stockName) {

    let deger_nakit = [];

    data.forEach(async element => {
        if (element.hisse_adi==hisse && element.bilanco_kalemi==stockName) { 
            await deger_nakit.push(element.zaman);
        }
    })
    return deger_nakit;
}

async function CollectStockValueData(data,hisse,stockName) {

    let deger_nakit = [];

    data.forEach(async element => {
        if (element.hisse_adi==hisse && element.bilanco_kalemi==stockName) { 
            await deger_nakit.push(element.deger);
        }
    })
    return deger_nakit;
}

function createChartData(xList,yList) {
    if (!Array.isArray(xList) || !Array.isArray(yList)) {
        console.error("not arr.");
        console.log(typeof(xList));
        return []; // veya başka bir değer döndürün
    }
    else if(xList.length === 0 || yList.length === 0){
        console.error(" empty arr.");
        return []; // veya başka bir değer döndürün
    }
    
     xList.reverse();
     yList.reverse();
    const chartData = xList.map((x, index) => {
        // yList'ten karşılık gelen değeri almak için index'i kullanıyoruz
        const y = parseFloat(yList[index].replace(/[^\d.-]/g, ''));
        return {
            x: x,
            y: y
        };
    });

    // Oluşturulan chartData dizisini return olarak döndürün
    return chartData;
}


function cretegeneralhtml(hisse){



    setTimeout(function() {
        var allContainer = document.getElementById("allelement");

        console.log("almaya çalıştı ")
    
        console.log(allContainer);
    
    
        var hissediv = document.createElement("div");
        hissediv.id = hisse;
    
        hissediv.style.display = "stretch";
        hissediv.style.flexDirection = "row";
        hissediv.style.alignItems = "start";
        hissediv.style.justifyContent = "start";
        hissediv.style.width = "300px";
        hissediv.style.height = "100%";
    
        hissediv.style.margin = "10";
        hissediv.style.padding = "10";
        hissediv.style.backgroundColor = "gold";
        hissediv.style.border = "2px solid black";
    
        allContainer.appendChild(hissediv);
     
    }, 1000);
    

}

function createfinstatementelement(hisse,stockStatementName){
    setTimeout(function() {

        var hisseelement = document.getElementById(hisse);
        console.log(hisseelement)

        var stocknamediv = document.createElement("canvas");

        stocknamediv.id=stockStatementName+hisse;
        stocknamediv.style.width = "100%";
        stocknamediv.style.height = "200px";
        stocknamediv.style.border = "2px solid black";
        hisseelement.appendChild(stocknamediv);

    }, 1000);

}
function drawChart(stockStatementName,chartData,stockStatementNameplshisse,hisse) {



        setTimeout(function() {

            console.log(stockStatementName+"+"+hisse);

            var ctx =  document.getElementById(stockStatementName+hisse);

            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        label: stockStatementName+hisse,
                        data: chartData,
                        borderColor: 'rgb(75, 192, 192)',
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'month'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Zaman'
                            },
                            reverse: true // Bu satır x eksenini tersine çevirir

                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Deger'
                            }
                        }]
                    }
                }
            });
    }, 2000);


}

async function createRandomChartData() {
    const labels = ['2023/01', '2023/02', '2023/03', '2023/04', '2023/05']; // Örnek zaman etiketleri
    const data = Array.from({ length: 5 }, () => Math.random() * 100); // 0 ile 100 arasında rastgele 5 veri noktası

    const chartData = labels.map((label, index) => {
        return {
            x: label,
            y: data[index]
        };
    });

    return chartData;
}

async function setdrawer() {
    $("#drawer").dxDrawer({
        template: function (e) {
            return $("<div style='width: 150px'>Drawer content</div>");
        },
        height: 250,
        minSize: 37,
        opened: true,

    });
    $("#view").load("index.html");

    const drawer = $("#drawer").dxDrawer({  
        // ...
        template: function (e) {
            const $list = $("<div/>").dxList({
                items: [
                    { id: 1, text: "electrik", path: "elect" },
                    { id: 2, text: "petrol", path: "petrol" },
                    { id: 3, text: "cam", path: "cam" },
                ],
                width: 200,
                selectionMode: "single",
                revealMode: "expand",
                openedStateMode: "overlap",

                onSelectionChanged: async function (e) {
                    await $("#view").load("./pages/" + e.addedItems[0].path + ".html");
                    if (e.addedItems[0].path == "petrol") {

                        stockname_petrol().forEach(async hisse => {
                            console.log("giriyor ")

                            await cretegeneralhtml(hisse);
                            finantial_statement().forEach(async finantial_statement_name=>{

                                await createfinstatementelement(hisse,finantial_statement_name);


                                 drawChart( finantial_statement_name, createChartData
                                    (await CollectTimeData(
                                        await fetch_all_data_db(hisse,finantial_statement_name),hisse,finantial_statement_name).then(),
                                        await CollectStockValueData(await fetch_all_data_db(hisse,finantial_statement_name),hisse,finantial_statement_name).then()),
                                         finantial_statement_name+hisse,hisse);

                            })
                        });
                


                      //await drawLineChart_example(chartTitle_petrol);
                  } else if (e.addedItems[0].path == "cam") {
                      // Cam sayfasına özel bir değer ekle
                      $("#camValue").text("Cam Değeri: 200");
                      await drawLineChart_example(chartTitle_cam);
                  } else if (e.addedItems[0].path == "elect") {
                      // Elektrik sayfasına özel bir değer ekle
                      $("#electValue").text("Elektrik Değeri: 300");
                      await drawLineChart_example(chartTitle_yapi);
                  }

                    //drawer.hide();
                }
            });

            return $list;
        }

    }).dxDrawer("instance");

    $("#toolbar").dxToolbar({
        items: [{
            widget: "dxButton",
            location: "before",
            options: {
                icon: "menu",
                onClick: function () {
                    drawer.toggle();
                }
            }
        }]
    });
}
