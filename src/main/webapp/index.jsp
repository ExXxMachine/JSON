<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP - Hello World</title>
</head>
<body>
    <form>
        <h2>Название</h2>
        <input id="name">
        <h2>Автор</h2>
        <input id="author">
        <h2>Объем</h2>
        <input id="pageSize">
        <h2>Издание</h2>
        <input id="publication">
        <h2>Цена</h2>
        <input id="price">
        <button>+</button>
    </form>
    <div id="bookList" class="container">
    </div>
</body>
<script src="scripts.js"></script>
</html>