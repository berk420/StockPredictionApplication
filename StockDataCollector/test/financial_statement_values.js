const {By} = require("selenium-webdriver");

async function CollectData(driver,stock,tableX,tableY) {
  await driver.manage().window().maximize();
  await new Promise(resolve => setTimeout(resolve, 500));
  await driver.navigate().refresh();
  await new Promise(resolve => setTimeout(resolve, 500));
   let arr_time = await [];
  for (let i = 0; i < 3; i++) {// ne kadar geriye gidebileceğini gösteriyor
    for (let j = 2; j <= 6; j++) {+
      await arr_time.push([await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[1]/thead/tr/th[${j}]/div/div`)).getText().then(),
                           await driver.findElement(By.xpath(`//*[@id="${stock}"]/div[5]/div[1]/div/main/div/div/div[3]/div[4]/table[2]/tbody[${tableX}]/tr[${tableY}]/td[${j}]/div/span[2]`)).getText().then().catch(() => "-")
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

module.exports = {


  
    //table Current Assets----------------------------------------------------------------

    CurrentAssets_CashAndCashEquivalents:async function(driver,stock) {
    console.log("CashAndCashEquivalents");
    return CollectData(driver,stock,1,2)},
 
    CurrentAssets_FinancialInvestments:async function(driver,stock) {
    console.log("CurrentAssetFinancialInvestments");
    return CollectData(driver,stock,1,3)},

    CurrentAssets_TradeReceivables:async function(driver,stock) {
    console.log("TradeReceivables");
    return CollectData(driver,stock,1,4)},

    CurrentAssets_OtherReceivables:async function(driver,stock) {
    console.log("OtherReceivables");
    return CollectData(driver,stock,1,5)},

    CurrentAssets_DerivativeInstruments:async function(driver,stock) {
    console.log("CurrentAssetsDerivativeInstruments");
    return CollectData(driver,stock,1,6)},

    CurrentAssets_Stocks:async function(driver,stock) {
    console.log("Stocks");
    return CollectData(driver,stock,1,7)},

    CurrentAssets_PrepaidExpenses:async function(driver,stock) {
    console.log("CurrentAssetsPrepaidExpenses");
    return CollectData(driver,stock,1,8)},

    CurrentAssets_OtherCurrentAssets:async function(driver,stock) {
    console.log("OtherCurrentAssets");
    return CollectData(driver,stock,1,10)},

    CurrentAssets_TotalCurrentAssets:async function(driver,stock) {
    console.log("TotalCurrentAssets");
    return CollectData(driver,stock,1,11)},


    //table fixed assets----------------------------------------------------------------
  FixedAsset_FinancialInvestments:async function(driver,stock) {
  console.log("FixedAssetFinancialInvestments");
  return CollectData(driver,stock,2,2)},

  FixedAsset_DerivativeInstruments:async function(driver,stock) {
  console.log("FixedAssetDerivativeInstruments");
  return CollectData(driver,stock,2,3)},

  FixedAsset_InvestmentsValuedbyEquityMethod:async function(driver,stock) {
  console.log("FixedAssetFinancialInvestments");
  return CollectData(driver,stock,2,4)},

  FixedAsset_TangibleFixedAssets:async function(driver,stock) {
  console.log("Tangible Fixed Assets");
  return CollectData(driver,stock,2,6)},
  FixedAsset_RightofUseAssets:async function(driver,stock) {
  console.log("Right-of-Use Assets");
  return CollectData(driver,stock,2,7)},
  FixedAsset_IntangibleAssets:async function(driver,stock) {
  console.log("Intangible Assets");
  return CollectData(driver,stock,2,8)},
  FixedAsset_PrepaidExpenses:async function(driver,stock) {
  console.log("FixedAssetPrepaidExpenses");
  return CollectData(driver,stock,2,8)},
  DeferredTaxAsset:async function(driver,stock) {
  console.log("Deferred Tax Asset");
  return CollectData(driver,stock,2,9)},
OtherFixedAssets:async function(driver,stock) {
  console.log("Other Fixed Assets");
  return CollectData(driver,stock,2,10)},
TotalFixedAssets:async function(driver,stock) {
  console.log("Total Fixed Assets");
  return CollectData(driver,stock,2,11)},
TotalAssets:async function(driver,stock) {
  console.log("Total Assets");
  return CollectData(driver,stock,2,12)},



    //table short-term liabilities----------------------------------------------------------------
    FinancialLiabilities:async function(driver,stock) {
      console.log("CommercialLiabilities");
      return CollectData(driver,stock,3,2)},

  CommercialLiabilities:async function(driver,stock) {
    console.log("CommercialLiabilities");
    return CollectData(driver,stock,3,3)},

  DebtswithintheScopeofEmployeeBenefits:async function(driver,stock) {
    console.log("DebtswithintheScopeofEmployeeBenefits");
    return CollectData(driver,stock,3,4)},

  OtherDebts:async function(driver,stock) {
    console.log("OtherDebts");
    return CollectData(driver,stock,3,5)},

    shorttermLiabilitiesDerivativeInstruments:async function(driver,stock) {
    console.log("shorttermLiabilitiesDerivativeInstruments");
    return CollectData(driver,stock,3,6)},

  DeferredRevenues:async function(driver,stock) {
    console.log("DeferredRevenues");
    return CollectData(driver,stock,3,7)},

  PeriodProfitTaxLiability:async function(driver,stock) {
    console.log("PeriodProfitTaxLiability");
    return CollectData(driver,stock,3,8)},

  ShortTermProvisions:async function(driver,stock) {
    console.log("ShortTermProvisions");
    return CollectData(driver,stock,3,9)},

  OtherShortTermLiabilities:async function(driver,stock) {
    console.log("OtherShortTermLiabilities");
    return CollectData(driver,stock,3,10)},

  TotalShortTermLiabilities:async function(driver,stock) {
    console.log("TotalShortTermLiabilities");
    return CollectData(driver,stock,3,11)},


    //table Equity----------------------------------------------------------------
  ShareholdersEquityofteParentPartnership:async function(driver,stock) {
    console.log("ShareholdersEquityofteParentPartnership");
    return CollectData(driver,stock,4,2)},

  PaidinCapital:async function(driver,stock) {
    console.log("Paid-in Capital");
    return CollectData(driver,stock,4,3)},

  CapitalAdjustmentDifferences:async function(driver,stock) {
    console.log("CapitalAdjustmentDifferences");
    return CollectData(driver,stock,4,4)},

  PremiumsforSharesDiscounts:async function(driver,stock) {
    console.log("Premiums for Shares (Discounts)");
    return CollectData(driver,stock,4,5)},

  OtherAccumulatedComprehensiveIncomeExpensesThatWillNotBeReclassifiedinProfitorLoss:async function(driver,stock) {
    console.log("Other Accumulated Comprehensive Income (Expenses) That Will Not Be Reclassified in Profit or Loss");
    return CollectData(driver,stock,4,6)},

  OtherAccumulatedComprehensiveIncomeExpensestobeReclassifiedinProfitorLoss:async function(driver,stock) {
    console.log("Other Accumulated Comprehensive Income (Expenses) to be Reclassified in Profit or Loss");
    return CollectData(driver,stock,4,7)},

  RestrictedReservesSeparatedfromProfit:async function(driver,stock) {
    console.log("Restricted Reserves Separated from Profit");
    return CollectData(driver,stock,4,8)},

  PreviousYearsProfitsLosses:async function(driver,stock) {
    console.log("Previous Years Profits/Losses");
    return CollectData(driver,stock,4,9)},

  NetProfitLossforthePeriod:async function(driver,stock) {
    console.log("Net Profit/Loss for the Period");
    return CollectData(driver,stock,4,10)},

  MinorityShares:async function(driver,stock) {
    console.log("Minority Shares");
    return CollectData(driver,stock,4,11)},

  TotalShareholdersEquity:async function(driver,stock) {
    console.log("Total Shareholders' Equity");
    return CollectData(driver,stock,4,12)},

  TotalResources:async function(driver,stock) {
    console.log("Total Resources");
    return CollectData(driver,stock,4,13)},

  NetForeignCurrencyPositionIncludingHedge:async function(driver,stock) {
    console.log("Net Foreign Currency Position, Including Hedge");
    return CollectData(driver,stock,4,14)},

};