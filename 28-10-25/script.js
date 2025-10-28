// Zmienna, w której będziemy zapisywać, ile sekund minęło
let sekund = 0;

// Zmienna, w której będziemy przechowywać "timer" - czyli licznik czasu
let timer = null;

// Funkcja, która uruchamia stoper
function startStoper(){
    // Sprawdzamy, czy timer jest pusty (żeby nie uruchomić dwóch stoperów naraz)
    if(timer == null)
    {
        // Ustawiamy licznik, który co 1s (1000 milisekund) wykona podany kod
        timer = setInterval(() => {
            // Zwiększamy liczbę sekund o 1
            sekund++;
            // Szukamy na stronie elementu o id "czas" i zmianiamy go na wartość sekund
            document.getElementById("czas").textContent = sekund;
        }, 1000); // 1000 milisekund = 1 sekunda
    }
}

// Funkcja, która zatrzymuje stoper
function stopStoper(){
    // Zatrzymujemy stoper, jeśli działa
    clearInterval(timer);
    // Ustawiamy timer z powrotem na null (czyli "pusty")
    timer = null;
}

// Funckja, która reseuje (czyści) stoper
function resetStoper(){
    // Najpierw zatrzymujemy licznik, jeśli działa
    stopStoper();
    // Ustawiamy licznik sekund z powrotem na 0
    sekund = 0;
    // Zmieniamy tekst na stronie na 0
    document.getElementById("czas").textContent = sekund;
}

// Tutaj "nasłuchujemy" kliknięcia przycisku START
document.getElementById("start").addEventListener("click", startStoper);

// Tutaj "nasłuchujemy" kliknięcia przycisku STOP
document.getElementById("stop").addEventListener("click", stopStoper);

// Tutaj "nasłuchujemy" kliknięcia przycisku RESET
document.getElementById("reset").addEventListener("click", resetStoper);