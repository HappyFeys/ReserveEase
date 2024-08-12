using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;

public static class Mail
{
    public static void Send(SendTo user, string subject, string body)
    {
        // Envoi de l'email avec le digicode
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("Reserve Ease", "nathanaelamd@gmail.com"));
        message.To.Add(new MailboxAddress(user.Firstname, user.Email));
        message.Subject = subject;
        message.Body = new TextPart("plain")
        {
            Text = body
        };

        using (var client = new SmtpClient())
        {
            client.ServerCertificateValidationCallback = (s, c, h, e) => true;
            client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls );
            client.Authenticate("nathanaelamd@gmail.com", "ehcd mfpe grlq tlqi");
            client.Send(message);
            client.Disconnect(true);
        }
    }
}

public class SendTo
{
    public string Firstname;
    public string Email;

    public SendTo(string firstname, string email)
    {
        Firstname = firstname;
        Email = email;
    }

}