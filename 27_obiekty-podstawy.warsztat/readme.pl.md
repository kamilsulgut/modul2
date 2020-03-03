# Warsztat

Stwórzmy podstawę pod grę Pokemony
---
Na tym warsztacie zrobimy prostą implementację gry Pokemony.

W tym celu musimy utworzyć trzy typy (konstruktory):
- Pokemon
- Power
- PokemonOwner

Typ Pokemon
---
**Atrybuty:**

- name - np. Pikaczu
- powers - tablica przechowująca obiekty typu Power
- owner - referencja do obiektu PokemonOwner

**Konstruktor:**

Otrzymuje dwa parametry parametry:
- name
- powers - tablica z mocami pokemona

Jak widzimy nie ustawiamy właściciela pokemona - więc na starcie jest dziki i będzie trzeba go pokonać w walce aby dany właściciel go zdobył.

**Metody:**

- fight(oponent) - metoda będzie zwracać "win/lose/draw" w zależności czy obiekt, na którym został wywołany wygrał bądź przegrał (sposób obliczania wyniku walki został opisany w dalszej części). Parametr oponent to obiekt Pokemon.
- totalAttackPoint() - wylicza w oparciu o posiadane moce łączną liczbę punktów ataku
- totalDefencePoint() - wylicza w oparciu o posiadane moce łączną liczbę punktów obrony

Typ Powers
---
**Atrybuty:**

- name - np. water, fire, wind etc.
- attackPoints - ilość punktów ataku (od 0 - 100)
- defencePoints - ilość punktów obrony (od 0 - 100)

**Konstruktor:**

Otrzymuje wszystkie trzy parametry zgodnie z nazwami atrybutów


Typ PokemonOwners
---
**Atrybuty:**
- name
- surname
- pokemons - tablica z referencjami do pokemonów, które należą do tego właściciela

**Konstruktor:**

Otrzymuje trzy parametry:
- name
- surname
- pokemon - obiekt typu Pokemon - jest to jego pierwszy pokemon, którego dostaje w szkole trenerów Pokemon - ten pokemon ma być dodany do tablicy pokemons

**Metody:**
  - addPokemon(pokemon) - metoda wykonuje:
    - usuwa pokemona z tablicy poprzedniego właściciela (pokemon.owner)
    - dodaje pokemona do tablicy aktualnego właściciela (this)
    - ustawia pokemonowi pole owner na aktualnego właściciela
  - printDetails() - wyświetla informacje o właścicielu wraz z informacjami o pokemonach, które posiada
  
  
Zasady walki
---
W metodzie fight porównujemy całkowite punkty obrony i ataku obu walczących pokemonów.

Do jednego dostajemy się przez this (atakujący) a do drugiego przez parametr przekazany do metody (broniący się).

Aby ustalić, który pokemon wygrywa musimy obliczyć różnicę między atakiem atakującego a obroną broniącego się.

Jeżeli wartość jest dodatnia to wygrywa atakujący, a jeżeli ujemna to dochodzi do drugiej rundy i role się odwracają. 

Jeżeli wynik drugiej rundy jest dodatni do wygrywa atakujący, ujemny to broniący.

Aby to lepiej zobrazować zobaczmy na taki przykład:

**Przykład 1**
```js
pokemon1 
- totalAttackPoints() -> 80
- totalDefencePoints() -> 70

pokemon2
- totalAttackPoints() -> 90
- totalDefencePoints() -> 60


pokemon1.fight(pokemon2):
- pokemon1.totalAttackPoints() - pokemon2.totalDefencePoints() -> (80 - 90 = -10) //runda przegrana przez pokemon1
- pokemon2.totalAttackPoints() - pokemon1.totalDefencePoints() -> (90 - 70 = 20) //runda przegrana przez pokemon1

//Walkę wygrał pokemon 2
```


**Przykład 2**
```js
pokemon1 
- totalAttackPoints() -> 90
- totalDefencePoints() -> 70

pokemon2
- totalAttackPoints() -> 30
- totalDefencePoints() -> 60


pokemon1.fight(pokemon2):
- pokemon1.totalAttackPoints() - pokemon2.totalDefencePoints() -> (90 - 30 = 60) //runda wygrana przez pokemon1

//Walkę wygrał pokemon 1
```

**Przykład 3**
```js
pokemon1 
- totalAttackPoints() -> 50
- totalDefencePoints() -> 70

pokemon2
- totalAttackPoints() -> 60
- totalDefencePoints() -> 60


pokemon1.fight(pokemon2):
- pokemon1.totalAttackPoints() - pokemon2.totalDefencePoints() -> (50 - 60 = -10) //runda wygrana przez pokemon2
- pokemon2.totalAttackPoints() - pokemon1.totalDefencePoints() -> (60 - 70 = 10) //runda wygrana przez pokemon1

//Walkę wygrał pokemon 1
```

Patrząc na powyższe przykłady to jeżeli np. 
- pokemon1 wygrał z pokemon2 to właścicielem pokemona2 staje się właściciel pokemona1
- pokemon2 wygrał z pokemon1 to właścicielem pokemona1 staje się właściciel pokemona2

---

W pliku app.js stwórzmy kilka pokemonów z mocami oraz kilku właścicieli oraz stoczmy kilka walk i zobaczcie jak zmieniają się właściciele pokemonów.















