// Oblicza sumę trzech liczb wprowadzonych przez użytkownika, a następnie wyświetli ją na ekranie.
 
const a = Number(prompt('Podaj liczbę a: '))
const b = Number(prompt('Podaj liczbę b: '))
const c = Number(prompt('Podaj liczbę c: '))
 
alert(`Suma liczb a+b+c=${(a+b+c)}`)
 
// Oblicza Średnią trzech liczb wprowadzonych przez użytkownika, a następnie wyświetli ją na ekranie.
 
alert(`Średnia z tych liczb to:${(a+b+c)/3}`)

// Wczytuje wartość dwóch liczb. Wypisuje wynik sumy, różnicy oraz iloczynu w trzech kolejnych liniach na ekranie.
const d = Number(prompt('Podaj liczbę d: '))
const e = Number(prompt('Podaj liczbę e: '))

alert(`D+E=${(d+e)} \n D-E=${(d-e)} \n  D*E=${(d*e)}`)

// Oblicza pierwiastek z wprowadzonej liczby. Wynik wyświetli na ekranie.
const f = Number(prompt('Podaj liczbę f: '))

alert(`Pierwiastek z F to:${Math.sqrt(f)}`)

// Oblicza pole kwadratu o długości boku wprowadzonej przez użytkownika. Wynik wyświetli na ekranie.
const dlugoscKwadratu = Number(prompt('Podaj długość boku kwadratu: '))

alert(`Pole kwadratu o długości boku ${(dlugoscKwadratu)} to:  ${(Math.pow(dlugoscKwadratu, 2))}`)

// Oblicza pole prostopadłościanu, którego długości boków podane będą w czasie działania programu. Wynik wyświetli na ekranie
const dlugoscPierszaProstopadloscianu = Number(prompt('Podaj długość pierwszego boku prostopadłoscianu: '))
const dlugoscDrugaProstopadloscianu = Number(prompt('Podaj długość drugiego boku prostopadłoscianu: '))
const dlugoscTrzeciaProstopadloscianu = Number(prompt('Podaj długość trzeciego boku prostopadłoscianu: '))

alert(`Pole kwadratu o długości boków ${(dlugoscPierszaProstopadloscianu)}, ${dlugoscDrugaProstopadloscianu}, ${dlugoscTrzeciaProstopadloscianu} to: ${(2*(dlugoscPierszaProstopadloscianu*dlugoscDrugaProstopadloscianu+dlugoscPierszaProstopadloscianu*dlugoscDrugaProstopadloscianu+dlugoscDrugaProstopadloscianu*dlugoscTrzeciaProstopadloscianu))}`)

// Oblicza pole i obwód koła. Wynik wyświetli na ekranie.
const promienKola = Number(prompt("Podaj promień koła: "))

alert(`Pole koła o promieniu ${(promienKola)} = ${(3.1415*promienKola)} \n Obwód koła o promieniu ${(promienKola)} = ${(2*3.1415*promienKola)}`)

// Wczytuje obecną cenę benzyny. Oblicza w 2.
const cenaBeny = Number(prompt("Podaj obecną cene benzyny: "))

alert(`Koszt przejazdu z Gdańska do Szczecina 360 km, przy założeniu, że samochód spala 8 litrów benzyny na 100 km to: ${((360/100*8)*cenaBeny)}zł`)


// Wczytuje cenę benzyny, długość trasy oraz wartość spalania samochodu. Oblicza koszt przejazdu i wypisuje go na ekran.
const cenaBenyX = Number(prompt("Podaj obecną cene benzyny: "))
const dlugoscTrasy = Number(prompt("Podaj długość trasy: "))
const spalanieBeny = Number(prompt("Podaj spalanie benzyny na 100km: "))

alert(`Koszt przejazdu z Gdańska do Szczecina 360 km, przy założeniu, że samochód spala 8 litrów benzyny na 100 km to: ${((dlugoscTrasy/100*spalanieBeny)*cenaBenyX)}zł`)

// Oblicza zysk z lokaty dla dowolnej kwoty wprowadzonej przez użytkownika i wypisuje ją na ekran. Aktualna oferta lokaty wynosi 8% rocznie. Uwzględnij „podatek Belki”.
const depo = Number(prompt("Podaj zdeponowaną kwote: "))

alert(`Zysk roczny z lokaty: ${((depo*(1+0.08))-((depo*(1+0.08)-depo)*0.19))}`)