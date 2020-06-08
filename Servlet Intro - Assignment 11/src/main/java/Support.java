import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

public class Support extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CStechSupport</title>");
        out.print("<link rel='stylesheet' href='styleme.css' /><head/");
        out.print("<body><h1>WelCome to the CSTech Support, Please fill the form below.</h1>");
        out.print("<form method='POST'><br />");
        out.print("<input type='text' placeholder='your name here' name='name' /><br />");
        out.print("<input type='email' placeholder='your email here' name='email' /><br />");
        out.print("<input type='text' placeholder='problem here' name='problem' /><br />");
        out.print("<textarea name='description' placeholder='problem description' rows='5' cols='30'></textarea><br /><br />");
        out.print("<input type='submit' value='submit' />");
        out.print("</form></body></htm>");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String problem = req.getParameter("problem");

        ServletContext context = this.getServletContext();
        String contxt = context.getInitParameter("support-email");

        String support_ticket_id = "CSTECH"+Integer.toString(generateReferenceNum());

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CStechSupport</title>");
        out.print("<link rel='stylesheet' href='styleme.css' /><head/");
        out.print("<body><p>Thank you! "+name+" for contacting us. You should receive reply from us with in 24 hrs in your email address ");
        out.print(email+". Let us know in our support email "+contxt);
        out.print("if you don’t receive reply within 24 hrs. Please be sure to attach your reference ");
        out.print(support_ticket_id+" in your email.");
        out.print("</p></body></html");

    }

    public int generateReferenceNum(){
        int ref=0;
        Random rand = new Random();
        for(int i=0;i<10;i++){
            ref=rand.nextInt();
        }
        return ref;
    }
}
