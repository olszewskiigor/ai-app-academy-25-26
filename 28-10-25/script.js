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