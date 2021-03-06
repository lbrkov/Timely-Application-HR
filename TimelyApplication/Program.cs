using Microsoft.EntityFrameworkCore;
using TimelyApplication.DatabaseContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<TimelyDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("LocalDatabase")));
builder.Services.AddCors(o => o.AddPolicy("CorsPolicy", builder =>
{
  builder.AllowAnyOrigin()
  .AllowAnyHeader()
  .AllowAnyMethod();
}));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");
app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
