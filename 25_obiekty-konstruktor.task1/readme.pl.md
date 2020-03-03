# Zadanie

#### !!!WAŻNE!!!
Wywoływania konstruktorów czy innych metod robimy tylko w pliku app.js

Część 1
---
W tym zadaniu utworzymy konstruktory dla obiektów **Client** i **Order**.

Obiekt **Client** ma przechowywać tablicę ze swoimi zamówieniami.

W pliku **Client.js** utwórzmy konstruktor dla obiektu **Client** przyjmujący argument **name**.

Obiekt ma mieć atrybuty:
- name
- orders - tablica to przechowywania jego zamówień
- addOrder(order) - metoda służąca do dodawania zamówień do tablicy

W pliku **Order.js** utwórzmy konstruktor dla obiektu **Order** przyjmujący argumenty **client** i **number**.

Obiekt ma mieć atrybuty:
- client - powiązany obiekt z zamówieniem
- number - numer zamówienia


Część 2
---
Utworzymy teraz pozostałe konstruktory dla obiektów niezbędnych do utworzenia obsługi zamówień od klienta.

Mamy już przygotowane konstruktory dla **Client** i **Order**, teraz utworzymy konstruktory dla **Product** i **OrderItem**

1) **Product**
    
    - Konstruktor dla **Product** utworzymy w pliku **Product.js**.
    - Konstruktor ma przyjmować argumenty **name** i **price** i ustawiać je atrybutom o tych samych nazwach

2) **OrderItem**
    - Konstruktor dla **OrderItem** utworzymy w pliku **OrderItem.js**.
    - Typ **OrderItem**, będzie nam służył do łączenia produktu z zamówieniem oraz trzymania informacji ile produktów jest zamówionych.
    - Konstruktor ma przyjmować argumenty **order**, **product**, **quantity** i ustawiać je atrybutom o tych samych nazwach.
    - Dodajcie do **OrderItem** metodę **calcValue**, która będzie zwracała wartość pozycji.

    Oczywiście przy wywoływaniu konstruktora pod argumenty **order** i **product** będą przekazywane odpowiednie obiekty.
    
    Zastanówcie się z jakiego polecenia JS moglibyśmy skorzystać, aby upewnić się, że argumenty **order** i **product** są odpowiedniego typu - i nie chodzi tu o polecenie typeof, bo ono zwracałoby tylko Object.
    Poszukajcie odpowiedzi i wpiszcie w komentarzu w konstruktorze **OrderItem**.

3) **Order**

    Dodajcie do konstruktora Order:
    - tablicę **positions** - do przechowywania pozycji zamówień
    - metodę **addPosition(product, quantity)**, która będzie tworzyć obiekt **OrderItem** i dołączać go do tablicy positions

