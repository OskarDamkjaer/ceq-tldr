# ceq-tldr
För att lättare välja kurser ville jag ha ett sätt att snabbt kolla upp och jämföra kurser, så jag smällde ihop denna sidan! :)

Jag hittade ca 300 valbara kurser för data och infocom, ~160 av dessa var dubletter, ~50 utan CEQs, ~30 hade inte all data som krävdes. Här finns de ca 70 som blev kvar!

## TODO - Someday
* Använd tredje parts table för att få det fint
* Kurskommentarer och ev. ett gäng andra fält följer inte med som de
* Lägga till de tre första åren
* Markera vilka specialiseringar kurserna hör till? Kanske scrapa andra sidor också
* Automatisera scrapning och hämtning till fullo.
* Spara ner till sqlite

## How to:
* Installera alla programmen som behövs (python och de flesta i pythonRequirements.txt)
* Se till att vara på LUs nätverk (ev. via VPN).
* Testa så du kommer åt http://www.ceq.lth.se/rapporter/2017_HT/LP1/AADA01_2017_HT_LP1_slutrapport_en.html ordentligt
* Kör downloadAllCourseData.py vilket för mig tar 30 min ish.
* Tanken är att man efter detta kan köra dataRefiner.py för att skapa de andra filerna utifrån de nedladdade