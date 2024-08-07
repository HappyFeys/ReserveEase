using System.Net.WebSockets;

static public class WebSocket
{
    static public void Initialisation(WebApplication app)
    {
        app.Use(async (context, next) =>
        {
            if (context.Request.Path == "/ws")
            {
                if (context.WebSockets.IsWebSocketRequest)
                {
                    var webSocket = await context.WebSockets.AcceptWebSocketAsync();
                    await Echo(context, webSocket);
                }
                else
                {
                    context.Response.StatusCode = 400;
                    await context.Response.WriteAsync("Bad Request: Not a WebSocket request");
                }
            }
            else
            {
                await next();
            }
        });
    }

    static public async Task Echo(HttpContext context, System.Net.WebSockets.WebSocket webSocket)
    {
        var buffer = new byte[1024 * 4];
        WebSocketReceiveResult result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
        while (!result.CloseStatus.HasValue)
        {
            var serverMsg = "Message reçu par le serveur";
            var serverMsgBytes = System.Text.Encoding.UTF8.GetBytes(serverMsg);
            await webSocket.SendAsync(new ArraySegment<byte>(serverMsgBytes), result.MessageType, result.EndOfMessage, CancellationToken.None);
            result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
        }
        await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
    }
}