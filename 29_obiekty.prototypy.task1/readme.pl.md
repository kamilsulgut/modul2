# Zadanie

Część 1 (z wykładowcą)
---
Plik do zadania: **String.js**

Rozszerzmy wbudowany w JS typ String i dodajmy metodę **upperLower**, 
która będzie zwracać zmodyfikowany tekst wg zasady:
- litery nieparzyste mają być z dużych liter
- litery parzyste mają być z małych liter
- przy obliczaniu pozycji litery nie są brane pod uwagę spacje

Przykładowe wywołanie:
```
let text = "JavaScript rules";
let modified = text.upperLower();
console.log(modified); // wyświetli: JaVaScRiPt RuLeS
```

Część 2 (z wykładowcą)
---
Plik do zadania: **Array.js**

Dopiszmy do prototypu Array metodę **printValues**, która będzie wypisywać
w konsoli kolejne wartości z tablicy.


---
---

Część 3  
---

W tym zadaniu zbudujemy prostą implementację aplikacji do rejestracji spędzonego czasu nad danym zadaniem, i w tym celu będziemy potrzebować kilka nowych typów:
- Employee - typ, przechowujący informacje o osobie wykonującej daną czynność i jaką ma stawkę godzinową
- Task - ogólna informacja jakie zadanie ma być wykonane, w Task bodziemy przechowywać informacje jakie operacje/czynności zostały wykonane, przez kogo i w jakim czasie
- TaskOperation - element podrzędny, przynależący do zadania, przechowujący informacje o danej operacji/czynności.

**Co chcemy osiągnąć?**
Chcemy mieć możliwość tworzenia wielu zadań (Task-ów) i przypinać do nich wykonanie operacje (TaskOperation),  w których będziemy mieli informacje kto, co i w jakim czasie (minutach) wykonał.
Dodatkowo chcemy aby dane zadanie (Task) mogło przyjmować jeden z trzech statusów - "not started", "in progress", "finished".
Jeżeli zadanie jest w statusie "not started" i dodajemy operację to zadanie otrzymuje status "in progress".
Jeżeli ręcznie zmienimy status zadania na "finished" to już nie możemy dodawać żadnych operacji do niego.

Mając tak zebrane informacje o danym zadaniu, będziemy mogli wyliczyć ile trwało wykonanie danego zadania i ile nas ono kosztowało.

---
> **WAŻNE** - Wszystkie wywołania / testy wykonujemy w pliku app.js
---


# Kroki do wykonania

## 1) Typ Employee
**Atrybuty**
- name
- surname
- sallary

**Konstruktor**
- otrzymuje parametry name, surname, sallary i je ustawia

## 2) Typ Task
**Atrybuty**
- subject - opis zadania
- status - "not started" / "in progress" / "finished"
- operations - tablica do przechowywania informacji o operacjach

**Konstruktor**
- otrzymuje tylko parametr subject.
- parametr status jest domyślnie ustawiany na "not started"

## 3) Typ TaskOperation
**Atrybuty**
- task - referencja do zadania, którego dotyczy 
- description - opis wykonanej czynności
- employee - referencja do pracownika, który wykonał daną czynność
- minutes - czas spędzony na wykonywaniu danej czynności przez pracownika

**Konstruktor**
- otrzymuje wszystkie parametry w kolejności jak wyżej.

# 4) Typ Task - rozszerzamy
Dodajemy do typu Task metody:
- addOperation(description, employee, minutes) - która tworzy obiekty typu TaskOperation i dodaje do tablicy operations. 

    Utworzenie i dodanie operacji jest możliwe jeżeli zadanie ma inny status aniżeli "finished" jak jest "finished" to metoda zwraca false.
    
    Jeżeli taks ma status "not started" to po dodaniu zmieniamy status na "in progress"

- getTotalTime() - metoda zwraca czas całkowity (w minutach), który został poświęcony na zadanie

- calcCost() - metoda oblicza całkowity koszt dla danego zadania w oparciu o czas operacji i stawki godzinowe pracowników


Rozbudujmy naszą aplikację
---
Dodajmy możliwość przypisywania klientów do zadań. W tym celu utwórzmy typ **Client**

## 5) Typ Client

**Atrybuty**
- shortcut - skrót nazwy klienta
- fullName - pełna nazwa klienta
- tasks - tablica przechowująca zadania wykonywane dla tego klienta

**Metody**
- addTask(task) - metoda dodaje zadanie do tablicy tasks
- printTasks() - metoda wypisująca listę zadań wraz z podsumowaniem czasu i kosztu (do tego wykorzystamy metodę toString, którą zdefiniujemy za chwilę w typie Task)


## 6) Rozbudujmy typ Task
- Dodajmy dodatkowy atrybut **client**, który będzie wskazywał na klienta, dla którego jest tworzone to zadanie, i dlatego też musimy sprawić aby konstruktor otrzymywał dodatkowy parametr **client**, abyśmy mogli tworzyć zadanie w następujący sposób:
```js
let task = new Task("Opis zadania", client);
```
Dodatkowo w konstruktorze wywołajmy metodę addTask z obiektu **client**.

- dodajmy metodę toString(), która będzie zwracała tekstową reprezentacje obiektu w formie:
```
Task: <Treść zadania>, Time: <Czas łączny z operacji>, Cost: <Koszt całkowity>
```



















