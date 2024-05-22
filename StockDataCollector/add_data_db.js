const {Builder,By} = require("selenium-webdriver");
const {
  CashAndCashEquivalents,
  CurrentAssetFinancialInvestments,
  TradeReceivables,
  OtherReceivables,
  CurrentAssetsDerivativeInstruments,
  Stocks,
  CurrentAssetsPrepaidExpenses,
  OtherCurrentAssets,
  TotalCurrentAssets,

  FixedAssetFinancialInvestments,
  FixedAssetDerivativeInstruments,
  InvestmentsValuedbyEquityMethod,
  TangibleFixedAssets,
  RightofUseAssets,
  IntangibleAssets,
  FixedAssetPrepaidExpenses,
  DeferredTaxAsset,
  OtherFixedAssets,
  TotalFixedAssets,
  TotalAssets,


  FinancialLiabilities,
  CommercialLiabilities,
  DebtswithintheScopeofEmployeeBenefits,
  OtherDebts,
  shorttermLiabilitiesDerivativeInstruments,
  DeferredRevenues,
  PeriodProfitTaxLiability,
  ShortTermProvisions,
  OtherShortTermLiabilities,
  TotalShortTermLiabilities,

  ShareholdersEquityofteParentPartnership,
  PaidinCapital,
    CapitalAdjustmentDifferences,
  PremiumsforSharesDiscounts,
  OtherAccumulatedComprehensiveIncomeExpensesThatWillNotBeReclassifiedinProfitorLoss,
  OtherAccumulatedComprehensiveIncomeExpensestobeReclassifiedinProfitorLoss,
  RestrictedReservesSeparatedfromProfit,
  PreviousYearsProfitsLosses,
  NetProfitLossforthePeriod,
  MinorityShares,
  TotalShareholdersEquity,
  TotalResources,
  NetForeignCurrencyPositionIncludingHedge  
  } 
  = require("./test/financial_statement_values.js");


async function CollectData(stock,tableX,tableY) {
  let driver = await new Builder().forBrowser('chrome').build();
  await driver.get(`https://fintables.com/sirketler/${stock}/finansal-tablolar/bilanco`);
  await driver.manage().window().maximize();
  await new Promise(resolve => setTimeout(resolve, 500));
  await driver.navigate().refresh();
  await new Promise(resolve => setTimeout(resolve, 500));
    let arr_time = await [];
  for (let i = 0; i < 4; i++) {// ne kadar geriye gidebileceğini gösteriyor
    for (let j = 2; j <= 6; j++) {
      await arr_time.push([await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[${j}]/div/div`)).getText().then(),
                            await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[${tableX}]/tr[${tableY+1}]/td[${j}]/div/span[2]`)).getText().then().catch(() => "-")
    ]);


      if(j==6){
        await new Promise(resolve => setTimeout(resolve, 500));
        for (let i = 0; i < 5; i++) {
          await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[6]/div/button`)).click();
          await new Promise(resolve => setTimeout(resolve, 500));
          console.log("geçişbutonuna tıklanıyor")

        }  
      }
    }
  }
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

    const sql_drop = `DELETE FROM bilanco`;    
    await client.query(sql_drop);





    var DoğuşHolding="DGGYO";
    await PrepareToClient(DoğuşHolding,DoğuşHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+"_toplam varlık"                   ,2,12,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+"_toplam kısa vadeli yükümlülüklrt",3,10,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+"_toplam dönen varlık"             ,4,7,client);
    await PrepareToClient(DoğuşHolding,DoğuşHolding+"_toplam dönen varlık"             ,5,14,client);

/*
    var KoçHolding="KCHOL";
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam varlık"                   ,1,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam kısa vadeli yükümlülüklrt",1,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(KoçHolding,KoçHolding+"_toplam dönen varlık"             ,1,10,client);

    var OyakHolding="OYYAT";
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam varlık"                   ,1,10,client);
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam kısa vadeli yükümlülüklrt",1,10,client);
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam dönen varlık"             ,1,10,client);
    await PrepareToClient(OyakHolding,OyakHolding+"_toplam dönen varlık"             ,1,10,client);
*/




/*
    for (const hisse of stockNames) {
      
      

      for (const item of await CashAndCashEquivalents(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CashAndCashEquivalents', item[0], item[1]]);
      }
  

      for (const item of await FinancialLiabilities(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'FinancialLiabilities', item[0], item[1]]);
      }
      console.log("stockname",hisse)

          //table Current Assets----------------------------------------------------------------
      for (const item of await CashAndCashEquivalents(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CashAndCashEquivalents', item[0], item[1]]);
      }

      for (const item of await CurrentAssetFinancialInvestments(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CurrentAssetFinancialInvestments', item[0], item[1]]);
      }

      for (const item of await TradeReceivables(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TradeReceivables', item[0], item[1]]);
      }

      for (const item of await OtherReceivables(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'OtherReceivables', item[0], item[1]]);

      }

      for (const item of await CurrentAssetsDerivativeInstruments(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CurrentAssetsDerivativeInstruments', item[0], item[1]]);

      }
      for (const item of await Stocks(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'Stocks', item[0], item[1]]);
      }

      for (const item of await CurrentAssetsPrepaidExpenses(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CurrentAssetsPrepaidExpenses', item[0], item[1]]);
      }

      for (const item of await OtherCurrentAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'OtherCurrentAssets', item[0], item[1]]);
      }
      for (const item of await TotalCurrentAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TotalCurrentAssets', item[0], item[1]]);
      }


      //table fixed assets----------------------------------------------------------------


      for (const item of await FixedAssetFinancialInvestments(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'FixedAssetFinancialInvestments', item[0], item[1]]);
      }
      for (const item of await FixedAssetDerivativeInstruments(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'FixedAssetDerivativeInstruments', item[0], item[1]]);
      }
      for (const item of await InvestmentsValuedbyEquityMethod(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'InvestmentsValuedbyEquityMethod', item[0], item[1]]);
      }
      for (const item of await TangibleFixedAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TangibleFixedAssets', item[0], item[1]]);
      }
      for (const item of await RightofUseAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'RightofUseAssets', item[0], item[1]]);
      }
      for (const item of await IntangibleAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'IntangibleAssets', item[0], item[1]]);
      }
      for (const item of await FixedAssetPrepaidExpenses(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'FixedAssetPrepaidExpenses', item[0], item[1]]);
      }
      for (const item of await DeferredTaxAsset(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'DeferredTaxAsset', item[0], item[1]]);
      }
      for (const item of await OtherFixedAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'OtherFixedAssets', item[0], item[1]]);
      }
      for (const item of await TotalFixedAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TotalFixedAssets', item[0], item[1]]);
      }
      for (const item of await TotalAssets(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TotalAssets', item[0], item[1]]);
      }
      //table short-term liabilities----------------------------------------------------------------

      for (const item of await FinancialLiabilities(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'FinancialLiabilities', item[0], item[1]]);
      }

      for (const item of await CommercialLiabilities(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'CommercialLiabilities', item[0], item[1]]);
      }
      for (const item of await DebtswithintheScopeofEmployeeBenefits(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'DebtswithintheScopeofEmployeeBenefits', item[0], item[1]]);
      }
      for (const item of await OtherDebts(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'OtherDebts', item[0], item[1]]);
      }
      for (const item of await shorttermLiabilitiesDerivativeInstruments(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'shorttermLiabilitiesDerivativeInstruments', item[0], item[1]]);
      }
      for (const item of await DeferredRevenues(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'DeferredRevenues', item[0], item[1]]);
      }
      for (const item of await PeriodProfitTaxLiability(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'PeriodProfitTaxLiability', item[0], item[1]]);
      }
      for (const item of await ShortTermProvisions(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'ShortTermProvisions', item[0], item[1]]);
      }
      for (const item of await OtherShortTermLiabilities(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'OtherShortTermLiabilities', item[0], item[1]]);
      }
      for (const item of await TotalShortTermLiabilities(driver,hisse)) {
        const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
        await client.query(sql, [hisse,'TotalShortTermLiabilities', item[0], item[1]]);
      }
    //table Equity----------------------------------------------------------------

    for (const item of await ShareholdersEquityofteParentPartnership(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'ShareholdersEquityofteParentPartnership', item[0], item[1]]);
    }

    for (const item of await PaidinCapital(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'PaidinCapital', item[0], item[1]]);
    }

    for (const item of await CapitalAdjustmentDifferences(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'CapitalAdjustmentDifferences', item[0], item[1]]);
    }
    for (const item of await PremiumsforSharesDiscounts(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'PremiumsforSharesDiscounts', item[0], item[1]]);
    }

    for (const item of await OtherAccumulatedComprehensiveIncomeExpensesThatWillNotBeReclassifiedinProfitorLoss(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'OtherAccumulatedComprehensiveIncomeExpensesThatWillNotBeReclassifiedinProfitorLoss', item[0], item[1]]);
    }
    for (const item of await OtherAccumulatedComprehensiveIncomeExpensestobeReclassifiedinProfitorLoss(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'OtherAccumulatedComprehensiveIncomeExpensestobeReclassifiedinProfitorLoss', item[0], item[1]]);
    }
    for (const item of await RestrictedReservesSeparatedfromProfit(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'RestrictedReservesSeparatedfromProfit', item[0], item[1]]);
    }
    for (const item of await PreviousYearsProfitsLosses(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'PreviousYearsProfitsLosses', item[0], item[1]]);
    }
    for (const item of await NetProfitLossforthePeriod(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'NetProfitLossforthePeriod', item[0], item[1]]);
    }
    for (const item of await MinorityShares(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'MinorityShares', item[0], item[1]]);
    }
    for (const item of await TotalShareholdersEquity(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'TotalShareholdersEquity', item[0], item[1]]);
    }
    for (const item of await TotalResources(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'TotalResources', item[0], item[1]]);
    }
    for (const item of await NetForeignCurrencyPositionIncludingHedge(driver,hisse)) {
      const sql = `INSERT INTO bilanco (hisse_adi, bilanco_kalemi, zaman, deger) VALUES ($1, $2, $3, $4)`;
      await client.query(sql, [hisse,'NetForeignCurrencyPositionIncludingHedge', item[0], item[1]]);
    }
    


    }   
    */
    
  } catch (err) {
    console.error("Veri eklenirken hata oluştu:", err.message);
  } finally{
    console.log("finallye düştü")
  }
}

dbconnection();








