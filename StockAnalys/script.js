
document.addEventListener("DOMContentLoaded", async function () {
    let hisse_adi = ["TUPRS"];

    await setdrawer();
});

async function fetch_petrol_data() {
    try {
        // API'den veriyi çekin
        const response = await fetch('https://localhost:7098/api/Stocks/petrol');
        
        // Ağ yanıtını kontrol edin
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Veriyi JSON formatında alın
        const data = await response.json();
        
        // Burada veriyi manipüle edin (eğer gerekiyorsa)
        // Örneğin, belirli bir alanı değiştirme veya filtreleme işlemi
        
        // Manipüle edilmiş veriyi döndürün
        return data;
        
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
    }
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

function stockname_petrol(){

    return ["TUPRS"]
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


async function drawChart(graphid,chartData,stockStatementName) {

    var ctx = document.getElementById(graphid);
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: stockStatementName,
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

                        stockname_petrol().forEach(hisse => {
            
                            fetch_petrol_data().then(async data => {

                                
                                let  zaman= await CollectTimeData(data,hisse,"OtherReceivables").then();

                                 let deger= await CollectStockValueData(data,hisse,"OtherReceivables").then();


                                   console.log(zaman);
                                   console.log(zaman);


                                drawChart("petrolChart_nakit",createChartData(zaman,deger),"nakit ve nakit benzerleri");
                
                            }).catch(error => {
                                console.error('Hata:', error);
                            });
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
