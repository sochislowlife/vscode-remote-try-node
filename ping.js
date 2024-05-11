// Функція для копіювання таблиці з сервера у файл ping.html
function copyTableToHTML() {
    try {
        const serverHTML = fs.readFileSync('server.js', 'utf8'); // Зчитуємо HTML з сервера
        fs.writeFileSync('ping.html', serverHTML); // Записуємо HTML у файл ping.html
        console.log("Таблицю скопійовано в файл ping.html");
    } catch (error) {
        console.error("Помилка під час копіювання таблиці:", error);
    }
}