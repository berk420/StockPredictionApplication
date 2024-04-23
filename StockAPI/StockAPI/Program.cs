using Dapper;
using StockAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

DefaultTypeMap.MatchNamesWithUnderscores = true;



builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
        });
});

builder.Services.AddControllers();

builder.Services.AddScoped<IStockDbService, StockDbService>();
builder.Services.AddScoped<IStockService, StockService>();


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();

}
else
{

    // Hata sayfas� gibi davranacak middleware ekleyin
    app.UseExceptionHandler("/Home/Error");
    // Hata kodlar�na g�re bir HTTP durum kodu d�nd�r�n
    app.UseStatusCodePagesWithReExecute("/Home/Error", "?statusCode={0}");

}

app.UseHttpsRedirection();

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
