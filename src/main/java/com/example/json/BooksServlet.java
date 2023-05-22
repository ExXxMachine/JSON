package com.example.json;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.*;
import java.util.ArrayList;

@WebServlet(name = "BooksServlet", value = "/BooksServlet")
public class BooksServlet extends HttpServlet {
    private final ArrayList<String> books = new ArrayList<>();
    private BufferedWriter bufferedWriter;
    @Override
    public void init() {
        try {
            String fileName = "Z:\\Работа\\прога\\Java\\JSON\\src\\main\\Books.txt";
            BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName));
            bufferedReader.lines().forEach(books::add);
            bufferedReader.close();
            bufferedWriter = new BufferedWriter(new FileWriter(fileName, true));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter responseWriter = response.getWriter();
        responseWriter.write("[");
        books.forEach(responseWriter::write);
        responseWriter.write("]");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        BufferedReader request_reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
        if (books.size() != 0) {
            books.add(",");
            bufferedWriter.write(",");
        }
        request_reader.lines().forEach(line -> {
            books.add(line);
            try {
                bufferedWriter.write(line);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
        bufferedWriter.write("\n");
    }
}
