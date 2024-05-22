const {By, Builder } = require("selenium-webdriver");
require("chromedriver"); 
const { describe, it } = require('mocha');
const addContext = require('mochawesome/addContext');

const {
  toplam_oazkayank,
  Dönem_Net_Kar_Zararı,
  Toplam_Kısa_Vadeli_Yükümlülükler,
  Toplam_Uzun_Vadeli_Yükümlülükler,
  Nakit_ve_Nakit_Benzerleri,
  ticari_alacaklar,
  NakitveNakitBenzerleri_all} 
  = require("./financial_statement_values.js");
const fs = require('fs');

const stocks_petrol = ["TUPRS","KCAER"];

describe("Petrol", async function () {
    stocks_petrol.forEach(stock =>{
      describe(stock,async function() {

        it("dönen varlık", async function(){
          let driver = await new Builder().forBrowser('chrome').build();

          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 


        })
/*
          const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Line Chart Example</title>
          </head>
          <body>
              <canvas id="myChart"></canvas>

              <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
              <script>
                  // JavaScript kodu ile line chart çizimi
                  var ctx = document.getElementById('myChart').getContext('2d');
                  var myChart = new Chart(ctx, {
                      type: 'line',
                      data: {
                          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                          datasets: [{
                              label: 'Example Dataset',
                              data: [12, 19, 3, 5, 2, 3],
                              backgroundColor: 'rgba(255, 99, 132, 0.2)',
                              borderColor: 'rgba(255, 99, 132, 1)',
                              borderWidth: 1
                          }]
                      },
                      options: {
                          scales: {
                              y: {
                                  beginAtZero: true
                              }
                          }
                      }
                  });
              </script>
          </body>
          </html>
          `;

          // HTML dosyasını oluşturuyoruz
          fs.writeFileSync('chart.html', htmlContent);
*/
        })
        it("fiyatKazancOrani", async function(){
          let driver = await new Builder().forBrowser('chrome').build();


          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

          let Dönem_Net_Kar_Zararı_value=parseInt(await Dönem_Net_Kar_Zararı(driver,stock));
          let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
          let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver,stock));
          let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver,stock));

          let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
          console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);
      
          let fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
          console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);
      
          const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
          if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
            addContext(this, `fiyatKazancOrani < fiyatKazancOraniEsik true ${stock}`);


          }
          else{
            fiyatKazancOrani=`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`;
          }
      
        
          await driver.quit();

            
        })

        it("borcOzkaynakOrani", async function(){

          let driver = await new Builder().forBrowser('chrome').build();


            await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

            driver.manage().window().maximize();


            let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver,stock));
            let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
            let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver,stock));

            let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;
        
            const borcOzkaynakOraniEsik = 1;
        
            if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
              console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik true ${stock}`);
            }
            else{
              console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik false ${stock}`);
            }
        
            await driver.quit();
            
        })

        it("likitoran", async function(){

          let driver = await new Builder().forBrowser('chrome').build();


          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

          driver.manage().window().maximize();

          let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
          let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver,stock));
          let ticari_alacaklar_value=parseInt(await ticari_alacaklar(driver,stock));

          const likitOranEsik = 2;
        
          let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;
          
          if(likitOranEsik < likitoran){
            console.log(`likitOranEsik < likitoran true ${stock}`);
          }
          else{
            console.log(`likitOranEsik < likitoran false${stock}`);
          }
          addContext(`Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır`);

          await driver.quit();
            
        })

        
    
      })
  })


describe("demir çelik", async function () {
  stocks_demirçelik.forEach(stock =>{
    describe(stock,async function() {

      it("fiyatKazancOrani", async function(){
        let driver = await new Builder().forBrowser('chrome').build();


        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        let Dönem_Net_Kar_Zararı_value=parseInt(await Dönem_Net_Kar_Zararı(driver,stock));
        let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
        let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver,stock));
        let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver,stock));

        let tüm_borçlar=Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value;
        console.log("Toplam_Kısa_Vadeli_Yükümlülükler_value+Toplam_Uzun_Vadeli_Yükümlülükler_value=tümborçlar:",tüm_borçlar);
    
        let fiyatKazancOrani = Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value;
        console.log(" Nakit_ve_Nakit_Benzerleri_value / Dönem_Net_Kar_Zararı_value=fiyat kazanç oranı:",fiyatKazancOrani);
    
        const fiyatKazancOraniEsik = 15;//bu bence çok yüksek bir oran
        if (fiyatKazancOrani < fiyatKazancOraniEsik) { //düzenlenecek
          addContext(this, `fiyatKazancOrani < fiyatKazancOraniEsik true ${stock}`);


        }
        else{
          fiyatKazancOrani=`fiyatKazancOrani < fiyatKazancOraniEsik false ${stock}`;
        }
    
      
        await driver.quit();

          
      })

      it("borcOzkaynakOrani", async function(){

        let driver = await new Builder().forBrowser('chrome').build();


          await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

          driver.manage().window().maximize();


          let toplam_oazkayank_value=parseInt(await toplam_oazkayank(driver,stock));
          let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
          let Toplam_Uzun_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Uzun_Vadeli_Yükümlülükler(driver,stock));

          let borcOzkaynakOrani = Toplam_Kısa_Vadeli_Yükümlülükler_value + Toplam_Uzun_Vadeli_Yükümlülükler_value / toplam_oazkayank_value;
      
          const borcOzkaynakOraniEsik = 1;
      
          if (borcOzkaynakOrani < borcOzkaynakOraniEsik) {
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik true ${stock}`);
          }
          else{
            console.log(`borcOzkaynakOrani < borcOzkaynakOraniEsik false ${stock}`);
          }
      
          await driver.quit();
          
      })

      it("likitoran", async function(){

        let driver = await new Builder().forBrowser('chrome').build();


        await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`); 

        driver.manage().window().maximize();

        let Toplam_Kısa_Vadeli_Yükümlülükler_value=parseInt(await Toplam_Kısa_Vadeli_Yükümlülükler(driver,stock));
        let Nakit_ve_Nakit_Benzerleri_value=parseInt(await Nakit_ve_Nakit_Benzerleri(driver,stock));
        let ticari_alacaklar_value=parseInt(await ticari_alacaklar(driver,stock));

        const likitOranEsik = 2;
      
        let likitoran=(Nakit_ve_Nakit_Benzerleri_value+ticari_alacaklar_value)/Toplam_Kısa_Vadeli_Yükümlülükler_value;
        
        if(likitOranEsik < likitoran){
          console.log(`likitOranEsik < likitoran true ${stock}`);
        }
        else{
          console.log(`likitOranEsik < likitoran false${stock}`);
        }
        addContext(`Likit oran, bir şirketin kısa vadeli borçlarını ödeme yeteneğini gösteren bir finansal orandır`);

        await driver.quit();
          
      })
    })
  })
})

