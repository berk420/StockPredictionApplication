const {Builder,By} = require("selenium-webdriver");

async function CollectData(stock,tableX,tableY) {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`);
  await driver.manage().window().maximize();
  await new Promise(resolve => setTimeout(resolve, 500));
  await driver.navigate().refresh();
  await new Promise(resolve => setTimeout(resolve, 500));
    let arr_time = await [];
  for (let i = 0; i < 3; i++) {// ne kadar geriye gidebileceğini gösteriyor
    try {
      for (let j = 2; j <= 6; j++) {                             //*[@id="DGGYO"]   /div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[1]/thead/tr/th[2]/div/div
        await arr_time.push([await driver.findElement(By.xpath( `//*[@id="${stock}"]/div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[1]/thead/tr/th[${j}]/div/div`)).getText().then(),
                              await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[2]/tbody[${tableX}]/tr[${tableY+1}]/td[${j}]/div/span[2]`)).getText().then().catch(() => "-")
      ]);                                                        //*[@id="DGGYO"]   /div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[2]/tbody[1]/tr[9]/td[2]/div/span[2]


      if(j==6){
          await new Promise(resolve => setTimeout(resolve, 500));
          for (let i = 0; i < 5; i++) {        //*[@id="DGGYO"]   /div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button
            await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[4]/div/div/main/div[1]/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`)).click();
            await new Promise(resolve => setTimeout(resolve, 500));
            console.log("geçişbutonuna tıklanıyor");
  
          }  
        }
      } 
    } catch (error) {
      console.log(error)
      continue;
    }
  }
  await driver.close();
  return arr_time;
}


async function PrepareToClient(stock,FinantialState,X,Y,client){

  for (const item of await CollectData(stock,X,Y)) {
    const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
    await client.query(sql, [stock,FinantialState, item[0], item[1]]);
  }
}

async function dbconnection() {
   const { Client } = require('pg');
  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "0606",
    database: "dbstock"
  });

  try {
    await client.connect(); 

    const toplam_dönen_varlıklar            ="_toplam dönen varlıklar";
    const toplam_varlıklar                  ="_toplam varlıklar";
    const toplam_kısa_vadeli_yükümlülükler  = "_toplam kısa vadeli yükümlülükler";
    const toplam_uzun_vadeli_yükümlülükler  = "_toplam uzun vadeli yükümlülükler";
    const toplam_özkaynaklar                = "_toplam özkaynaklar";
    const toplam_kaynaklar                  ="_toplam kaynaklar";

    //const sql_drop = `DELETE FROM bilanco`;    
    //await client.query(sql_drop);
/*
    var DoğuşHolding="DGGYO";
    await client.query(`DELETE FROM bilanco WHERE hisse_adi = 'DGGYO'`);

    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_dönen_varlıklar            ,1,8,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_varlıklar                  ,2,7,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_kısa_vadeli_yükümlülükler  ,3,8,client); 
    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_uzun_vadeli_yükümlülükler  ,4,5,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_özkaynaklar                ,5,10,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+toplam_kaynaklar                  ,5,11,client);
    

    var KoçHolding="KCHOL";
    await client.query(`DELETE FROM bilanco WHERE hisse_adi = 'KCHOL'`);

    await PrepareToClient(KoçHolding,KoçHolding+toplam_dönen_varlıklar         ,1,11,client);
    await PrepareToClient(KoçHolding,KoçHolding+toplam_varlıklar                   ,2,12,client);
    await PrepareToClient(KoçHolding,KoçHolding+toplam_kısa_vadeli_yükümlülükler,3,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+toplam_uzun_vadeli_yükümlülükler,4,8,client);
    await PrepareToClient(KoçHolding,KoçHolding+toplam_özkaynaklar             ,5,12,client);
    await PrepareToClient(KoçHolding,KoçHolding+toplam_kaynaklar             ,5,13,client)
*/

    var OyakHolding="OYYAT";
    await client.query(`DELETE FROM bilanco WHERE hisse_adi = 'OYYAT'`);

    await PrepareToClient(OyakHolding,OyakHolding+toplam_dönen_varlıklar         ,1,11,client);
    await PrepareToClient(OyakHolding,OyakHolding+toplam_varlıklar                   ,2,14,client);
    await PrepareToClient(OyakHolding,OyakHolding+toplam_kısa_vadeli_yükümlülükler,3,13,client);
    await PrepareToClient(OyakHolding,OyakHolding+toplam_uzun_vadeli_yükümlülükler,4,12,client);
    await PrepareToClient(OyakHolding,OyakHolding+toplam_özkaynaklar             ,5,11,client);
    await PrepareToClient(OyakHolding,OyakHolding+toplam_kaynaklar             ,5,12,client);

    
  } catch (err) {
    console.error("Veri eklenirken hata oluştu:", err.message);
  } finally{
    console.log("finallye düştü")
  }
}

dbconnection();








