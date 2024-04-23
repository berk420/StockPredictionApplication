using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockAPI.Models;
using StockAPI.Services;

namespace StockAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockAPI : ControllerBase
    {
        private readonly IStockService _service;

        public StockAPI(IStockService service)
        {
            _service = service;
        }

        [HttpGet("alldata")]
        [Produces("application/json")]
        public async Task<IActionResult> GetStocks()
        {
            var stocks = await _service.GetStocks();
            return new JsonResult(stocks);
        }



        [HttpGet("petrol")]
        [Produces("application/json")]
        public async Task<IActionResult> GetStocksByHisseAdi()
        {
            var stocks = await _service.GetStocks();

            var hisseAdiListesi = new List<string> { "TUPRS", "ANOTHER", "YETANOTHER" };

            var filteredStocks = new List<Stock>();

            foreach (var stock in stocks)
            {
                if (hisseAdiListesi.Contains(stock.hisse_adi))
                {
                    filteredStocks.Add(stock);
                }
            }

            return new JsonResult(filteredStocks);
        }

        [HttpGet("petrol/cashandcashequal")]
        [Produces("application/json")]
        public async Task<IActionResult> GetOilCachandacheequal()
        {
            var stocks = await _service.GetStocks();

            var hisseAdiListesi = new List<string> { "TUPRS", "ANOTHER", "YETANOTHER" };

            var filteredStocks = new List<Stock>();

            foreach (var stock in stocks)
            {
                if (hisseAdiListesi.Contains(stock.hisse_adi) && stock.bilanco_kalemi == "Nakit ve Nakit Benzerleri")
                {

                    filteredStocks.Add(stock);
                }
            }

            return new JsonResult(filteredStocks);
        }





    }
}

