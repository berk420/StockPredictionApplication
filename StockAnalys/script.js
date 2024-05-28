
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

function stockname_Büyükler(){

    return ["DGGYO","KCHOL","OYYAT"]
}

function finantial_statement(){
    const toplam_dönen_varlıklar            ="_toplam dönen varlıklar";
    const toplam_varlıklar                  ="_toplam varlıklar";
    const toplam_kısa_vadeli_yükümlülükler  = "_toplam kısa vadeli yükümlülükler";
    const toplam_uzun_vadeli_yükümlülükler  = "_toplam uzun vadeli yükümlülükler";
    const toplam_özkaynaklar                = "_toplam özkaynaklar";
    const toplam_kaynaklar                  ="_toplam kaynaklar";
    return [toplam_dönen_varlıklar,toplam_varlıklar,toplam_kısa_vadeli_yükümlülükler,toplam_uzun_vadeli_yükümlülükler,toplam_özkaynaklar,toplam_kaynaklar]
            
}

async function CollectTimeData(data,hisse,stockName) {

    let deger_nakit = [];



    data.forEach(async element => {
        if (element.hisse_adi==hisse && element.bilanco_kalemi==hisse+stockName) { 
            await deger_nakit.push(element.zaman);
        }
    })
    return deger_nakit;
}

async function CollectStockValueData(data,hisse,stockName) {

    let deger_nakit = [];

    data.forEach(async element => {
        if (element.hisse_adi==hisse && element.bilanco_kalemi==hisse+stockName) { 
            await deger_nakit.push(element.deger);
        }
    })
    return deger_nakit;
}

function createChartData(xList,yList) {

    console.log(xList);

    if (!Array.isArray(xList) || !Array.isArray(yList)) {
        console.error("not arr.");
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

         const floatValue = parseFloat(yList[index].replace(/\./g, ''));
         const y = parseInt(Math.round(floatValue)); // Yuvarlayarak tam sayıya dönüştürüyoruz

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


        var heading = document.createElement("h4"); // You can change "h1" to "h2", "h3", etc., as needed

        // Set the text content of the heading
        heading.textContent = hisse;
        
        heading.style.width = "auto";
        heading.style.height = "50px";
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





    
        var hissediv = document.createElement("div");
        hissediv.id = hisse;
    
        hissediv.style.display = "center";
        hissediv.style.flexDirection = "row";
        hissediv.style.alignItems = "center";
        hissediv.style.justifyContent = "center";
        hissediv.style.width = "300px";
        hissediv.style.left = "300px";


        hissediv.style.height = "100%";
    
        hissediv.style.margin = "10";
        hissediv.style.padding = "10";
    
        allContainer.appendChild(hissediv);
        hissediv.appendChild(heading);


     
    }, 100);
    

}

function createfinstatementelement(hisse,stockStatementName){
    setTimeout(function() {

        

        var hisseelement = document.getElementById(hisse);

        var stocknamediv = document.createElement("canvas");

        stocknamediv.id=stockStatementName+hisse;
        stocknamediv.style.width = "100%";
        stocknamediv.style.height = "200px";

        hisseelement.appendChild(stocknamediv);

    }, 100);

}
function drawChart(stockStatementName,chartData,hisse) {

        setTimeout(function() {

            var ctx =  document.getElementById(stockStatementName+hisse);

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
    }, 200);
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
            return $("<div style='width: 50px'>Drawer content</div>");
        },
        height: 250,
        minSize: 50,
        opened: true,
        
    });

    $("#view").load("index.html");

    const drawer = $("#drawer").dxDrawer({  
        // ...
        template: function (e) {
            const $list = $("<div/>").dxList({
                items: [
                    { id: 1, text: "Top 3 şirket", path: "Top" },
                    //{ id: 2, text: "electrik", path: "elect" },
                    //{ id: 3, text: "cam", path: "cam" },
                ],

                width: 100,
                selectionMode: "single",
                revealMode: "expand",
                openedStateMode: "overlap",
                swipeEnabled: false,
                closeOnOutsideClick: false,

                onSelectionChanged: async function (e) {
                    await $("#view").load("./pages/" + e.addedItems[0].path + ".html");
                    if (e.addedItems[0].path == "Top") {

                        stockname_Büyükler().forEach(async hisse => {

                            await cretegeneralhtml(hisse);
                            finantial_statement().forEach(async finantial_statement_name=>{

                                await createfinstatementelement(hisse,finantial_statement_name);


                                let time_data =await CollectTimeData(
                                    await fetch_all_data_db(hisse,hisse+finantial_statement_name),  
                                    hisse,
                                    finantial_statement_name).
                                    then()

                                    console.log(time_data);

                                let value_data= await CollectStockValueData(
                                    await fetch_all_data_db(hisse,hisse+finantial_statement_name),  
                                    hisse,
                                    finantial_statement_name).
                                    then()

                                 drawChart( finantial_statement_name,createChartData(time_data, value_data),hisse);
                            })
                        });
                      //await drawLineChart_example(chartTitle_Büyükler);
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

    /*
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
    */
}
