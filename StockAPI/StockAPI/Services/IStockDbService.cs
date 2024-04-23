namespace StockAPI.Services
{
    public interface IStockDbService
    {
        Task<T> GetAsync<T>(string command, object parms);
        Task<List<T>> GetAll<T>(string command, object parms);
    }
}
