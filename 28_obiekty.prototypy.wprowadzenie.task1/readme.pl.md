# Zadanie

Część 1
---

Utwórzcie konstruktor dla typu **PhoneNumber**, który przyjmuje parametry **owner**, **phoneNumber** i ustawia je jako atrybuty obiektu:
- **owner** - np. Imię, Nazwisko, do kogo dany numer należy:
- **phoneNumber** - numer telefonu

Przez prototyp dodajcie metodę printDetails wypisującą informacje o tym numerze

```
Owner: Jan Nowak
Phone: +48.333222111
```


Część 2
---

Utwórzcie konstruktor dla typu **CellPhone**, który będzie miał atrybuty:
- **model**
- **brand**
- **receivedCalls** - tablica do przechowywania numerów połączeń przychodzących
- **outgoingCalls** - tablica do przechowywania numerów wychodzących
- **phoneBook** - książka telefoniczna - tablica zawierająca referencje do obiektów typu **PhoneNumber**

W konstruktorze mają być przekazane parametry **model** i **brand**.

Przez prototyp dodajcie do **CellPhone** metody:
- **receiveCall(phoneNumber)** - która dodaje numer do tablicy receivedCalls
- **makeCall(phoneNumber)** - która dodaje numer do tablicy outgoingCalls
- **addPhoneToPhoneBook(owner, phone)** - metoda, która tworzy obiekt typu **PhoneNumber** i dodaje go do tablicy **phoneBook**
- **printPhoneBook()** - metoda wypisująca wszystkie numery w książce telefonicznej tego telefonu

