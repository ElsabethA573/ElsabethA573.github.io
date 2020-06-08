import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class SecondServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Second Test</title><link rel='stylesheet' href='styleme.css'></head><body>");
        out.print("<h1>Please Enter the Information Below</h1>");
        out.print("<form method='POST'>");
        out.print("First Name: <input type='text' name='firstName' /><br /><br />");
        out.print("Last Name: <input type='text' name='lastName' /><br /><br />");
        out.print("password: <input type='password' name='pass' /><br /><br />");
        out.print("<input type='submit' name='submit' value='submit' />");
        out.print("</form><br /><br />");
        out.print("<form method='POST' action='scriptlets_demo.jsp'>");
        out.print("<input type='submit' name='submit2' value='submit' />");
        out.print("</form></body><html>");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String fname = req.getParameter("firstName");
        String lname = req.getParameter("lastName");
        String pass = req.getParameter("pass");

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test2</title></head><body>");
        out.print("<span>User: </span>"+fname+" "+lname);
        out.print("<br /><span>password: </span>"+pass);
        out.print("</body></html>");

    }
}
