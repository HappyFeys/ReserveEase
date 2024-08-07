var builder = WebApplication.CreateBuilder(args);

ServiceManager.AddController(builder);

var app = builder.Build();

ServiceManager.UseController(app);

WebSocket.Initialisation(app);

app.Run();