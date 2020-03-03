# Zadanie


### !!!WAŻNE!!!
Wywoływania konstruktorów czy innych metod robimy tylko w pliku app.js

---

Rozszerzymy teraz przygotowane już konstruktory **Client**, **Order**, **OrderItem**, **Products** o dodatkowe metody służące m.in. o wyliczanie wartości zamówienia.

1) **Order**

    - Dodajmy atrybut totalValue, który będzie służył do przechowywania całkowitej wartości zamówienia.
    - Do wyliczania tej wartości stwórzcie metodę countTotalValue()        
    - Niech ta metoda będzie zawsze wywoływana przy każdym dodaniu pozycji do zamówienia
    - Dodajmy metodę printOrderSummary() która w konsoli będzie wyświetlać podsumowanie w formie:
    
        ```
        Zamówienie numer: ZO/0001
        Klient: John Doe
        Pozycje:
        Produkt: mouse
        Cena: 20.5
        Ilość: 2
        Wartość: 41
         ---
        Produkt: keybord
        Cena: 30
        Ilość: 4
        Wartość: 120
         ---
        Produkt: printer
        Cena: 279.99
        Ilość: 1
        Wartość: 279.99
        ---
        Wartość całkowita: 642.99
      
        ```
   
2) Konstruktor **Orders**

    Typ **Orders** będzie nam służył do przechowywania informacji o wszystkich zamówieniach w naszej aplikacji.
    
    Dodajmy w pliku **Orders.js** konstruktor, który ma tworzyć:
    - tablicę **orders**
    - metodę **addOrder(order)** - służącą do dodawania zamówienia do tablicy
    - **printAllOrders()** - wyświetla w konsoli informacje o wszystkich zamówieniach
    - **getHighestValueOrder()** - zwraca zamówienie o największej wartości
    
3) Konstruktor **Order**

    Zmodyfikujmy konstruktor **order** tak aby oczekiwał jako ostatni parametr obiektu typu **Orders** i niech wywołuje metodę **addOrder**, 
    dzięki czemu nowe zamówienie zostanie od razu dodane do listy wszystkich zamówień już przy tworzeniu nowego zamówienia.

4) Konstruktor **Client**

    Dodajmy metodę **printOrdersSummary()** do wyświetlania w konsoli wszystkich zamówień klienta