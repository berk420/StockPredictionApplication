using Npgsql;
using Dapper;
using System.Data;

namespace StockAPI.Services
{
    public class StockDbService : IStockDbService
    {
        private readonly IDbConnection _connection;
        public StockDbService(IConfiguration configuration)
        {
            _connection = new NpgsqlConnection(configuration.GetConnectionString("StockDb"));
        }
        public async Task<T> GetAsync<T>(string command, object parms)
        {
            T result;

            result = (await _connection.QueryAsync<T>(command, parms).ConfigureAwait(false)).FirstOrDefault();

            return result;

        }

        public async Task<List<T>> GetAll<T>(string command, object parms)
        {

            List<T> result = new List<T>();

            result = (await _connection.QueryAsync<T>(command, parms)).ToList();

            return result;
        }

        public async Task<int> EditData(string command, object parms)
        {
            int result;

            result = await _connection.ExecuteAsync(command, parms);

            return result;
        }
    }
}
