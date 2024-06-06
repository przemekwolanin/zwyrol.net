const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');
const dbName = 'zwyrol';

async function main() {
    await client.connect();
    console.log('połączenie udane!');

    const db = client.db(dbName);

    await db
        .collection('zwyrol-jokes')
        .insertMany([
            
        {
            "id": 483,
            "date": "13.03.2024",
            "joke": "Zauważyliście, że na rozmowach kwalifikacyjnych zawsze zadają te same. tendencyjne, głupie pytania? Na przykład \"Czy musi się pan w tej chwili masturbować?\"."
        },
        {
            "id": 492,
            "date": "13.03.2024",
            "joke": "Albania zdobyła pierwszy złoty medal olimpijski w Soczi. Sprzątaczka w hotelu wykorzystała moment nieuwagi pewnego Szweda."
        },
        {
            "id": 491,
            "date": "13.03.2024",
            "joke": "- Co to za dinozaur - miał krótkie nogi i łatwo było go przestraszyć?<br>- Oscarpistorius"
        },
        {
            "id": 490,
            "date": "13.03.2024",
            "joke": "- Ile to jest 60 minut z konkubentem?<br>- Bita godzina"
        },
        {
            "id": 489,
            "date": "13.03.2024",
            "joke": "- Dlaczego rząd uważa, że jest kryzys demograficzny?<br>- Bo liczba beneficjentów 500+ rośnie, a liczba tych, którym można jeszcze coś opodatkować, maleje."
        },
        {
            "id": 488,
            "date": "13.03.2024",
            "joke": "Najlepszy sposób, aby sprawić, żeby facet coś zrobił, to powiedzieć mu, że jest już na to za stary."
        },
        {
            "id": 487,
            "date": "13.03.2024",
            "joke": "Jesteś dziewczyną. Idziesz sobie ulicą. Spostrzegasz, jak obczaja cię jakiś facet ok. 50 lat. Myślisz sobie: \"cholerny pedofil!\", a potem do ciebie dociera, że masz już 35 lat."
        },
        {
            "id": 486,
            "date": "13.03.2024",
            "joke": "- Mam problem...<br>- Nie mów problem tylko wyzwanie.<br>- Mam wyzwanie z alkoholem."
        },
        {
            "id": 485,
            "date": "13.03.2024",
            "joke": "W depresji najgorsza jest świadomość, że 100 lat temu lekarstwem byłaby heroina."
        },
        {
            "id": 484,
            "date": "13.03.2024",
            "joke": "Ej, poprawnie powinno być „zerżnąć cię w dupę” czy „zerżnąć Cię w dupę”? Nienawidzę pisać kartek walentynkowych."
        },
        {
            "id": 483,
            "date": "03.03.2024",
            "joke": "- Jaro ma być pochowany na Wawelu.<br>- Stary, nie wkurwiaj mnie!<br>- Ale pojutrze.<br>- A, to w porzo!"
        },
        {
            "id": 482,
            "date": "03.03.2024",
            "joke": "- Dlaczego Steve Wonder nie czyta?<br>- Bo jest czarny."
        },
        {
            "id": 481,
            "date": "03.03.2024",
            "joke": "- Co robi kubańczyk jak mu pęknie dętka?<br>- Topi się"
        },
        {
            "id": 480,
            "date": "03.03.2024",
            "joke": "- Jaka jest ulubiona pozycja kobiet?<br>- Kobieta z przodu, lekko pochylona, wybiera sobie pierścionek z brylantem. Facet stoi z tyłu, wyjmuje portfel."
        },
        {
            "id": 479,
            "date": "03.03.2024",
            "joke": "- Babciu, czy dziadek jest mechanikiem?<br>- Nie wnusiu.<br>- Dziwne, bo właśnie leży na ulicy pod autobusem..."
        },
        {
            "id": 478,
            "date": "03.03.2024",
            "joke": "- Dlaczego wegetarianki nie krzyczą podczas orgazmu? <br>- Boją się przyznać że kawałek mięsa może sprawić taaaaakąąąą radość!"
        },
        {
            "id": 477,
            "date": "03.03.2024",
            "joke": "Ksiądz i rabin siedzą na ławce w parku i rozmawiają. W pewnej chwili przechodzi obok chłopczyk, który upuszcza zabawkę i próbuje się po nią schylić.<br>Ksiądz:<br>- Ale bym go wyruchał...<br>Rabin:<br>- Z czego?"
        },
        {
            "id": 476,
            "date": "03.03.2024",
            "joke": "My daughter has gotten to the age where she asks me embarrassing questions about sex. Just this morning she asked me \"Is that the best you can do?\""
        },
        {
            "id": 475,
            "date": "03.03.2024",
            "joke": "- Co jest pozytywnego w czarnych?<br>- HIV"
        },
        {
            "id": 474,
            "date": "03.03.2024",
            "joke": "Q: How many Jews can you fit in a Volkswagen?<br>A: Two in the front, two in the back, eleven thousand in the ashtrays."
        },
        {
            "id": 473,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Gdy twoja kobieta zauważy, że gapisz się na inną laskę, to odwróć się do niej i powiedz: \"Cieszę się, że się tak nie  ubierasz.\""
        },
        {
            "id": 472,
            "date": "17.02.2024",
            "joke": "Faceci są jak sznurówki - muszą przejść przez wiele dziur żeby się związać."
        },
        {
            "id": 471,
            "date": "17.02.2024",
            "joke": "Kobiety są jak wino - za granicą są tańsze."
        },
        {
            "id": 470,
            "date": "17.02.2024",
            "joke": "A zwycięzcą plebiscytu \"Pani domu\" w kategorii Samochód Roku został... niebieski!"
        },
        {
            "id": 469,
            "date": "17.02.2024",
            "joke": "- Zapomnij o wszystkim czego nauczyłeś się na studiach. W tej pracy sami wszystkiego cię nauczymy.<br>  - Ale ja nigdy nie byłem na studiach.<br>  - A, to przepraszam, ale nie masz wystarczających kwalifikacji, żeby tu pracować."
        },
        {
            "id": 468,
            "date": "17.02.2024",
            "joke": "- Jezus umarł za nasze grzechy.<br>  - Ale przecież po trzech dniach zmartwychwstał.<br>  - No tak...<br>  - Czyli technicznie za nasze grzechy stracił jeden weekend?"
        },
        {
            "id": 467,
            "date": "17.02.2024",
            "joke": "Cała obsługa mojego banku to kobiety. Oznacza to, że mógłbym obrabować go za pomocą pająka."
        },
        {
            "id": 466,
            "date": "17.02.2024",
            "joke": "Do ostatniego tygodnia byłem przekonany, że Ariana Grande to coś, co kupuje się w Starbucksie."
        },
        {
            "id": 465,
            "date": "17.02.2024",
            "joke": "Obserwując&nbsp;jak Azjaci prowadzą auta można dojść do wniosku, że Pearl Harbor mógł być wypadkiem."
        },
        {
            "id": 464,
            "date": "17.02.2024",
            "joke": "Sowy to bardzo mądre ptaki. Widzieliście kiedyś sowę biorącą kredyt? No właśnie."
        },
        {
            "id": 463,
            "date": "17.02.2024",
            "joke": "- Co robił pani mąż, a co pani robiła?<br>  - Siedział na kanapie i oglądał telewizję, a ja siedziałam przy stoliku i szydełkowałam.<br>  - I kiedy zorientowała się pani, że mąż nie żyje?<br>  - Kiedy w telewizji pokazali Kaczyńskiego, a on nie zaczął pluć na ekran."
        },
        {
            "id": 462,
            "date": "17.02.2024",
            "joke": "Wydajemy na obronność 40 mld zł rocznie, a mamy głównie złom. Za te same pieniądze moglibyśmy raz w roku kupić  wszystkim mieszkańcom Ziemi po pizzy. I nikt by nas nie zaatakował, bo nie atakuje się kogoś, kto kupuje ci pizzę."
        },
        {
            "id": 461,
            "date": "17.02.2024",
            "joke": "Google wypuściło nową wersję Google Earth. W planach kolejno: Google Air, Google Water, Google Fire i Google Mila  Jovovich."
        },
        {
            "id": 460,
            "date": "17.02.2024",
            "joke": "- Halo, Andrzej. Kupiłeś już te kuwety?<br>  - Panie Prezesie, chyba korw... o kurwa..."
        },
        {
            "id": 459,
            "date": "17.02.2024",
            "joke": "Z całego polskiego oręża bronią, która w najwyższym stopniu odstrasza naszych wrogów, są przednie zęby prezesa."
        },
        {
            "id": 458,
            "date": "17.02.2024",
            "joke": "Po angielsku \"I was born\" oznacza \"zostałem urodzony\". Po naszemu mówi się \"urodziłem się\". Jakoś tak od  maleńkości wszystko musimy robić sami."
        },
        {
            "id": 457,
            "date": "17.02.2024",
            "joke": "Nie jestem na tyle głupi, żeby być szczęśliwym."
        },
        {
            "id": 456,
            "date": "17.02.2024",
            "joke": "- Co się stało, kochanie?<br>  - Miałem ciężki dzień w pracy, potrzebuję twojego oralnego wsparcia.<br>  - Chciałeś powiedzieć \"moralnego\"?<br>  - Nie."
        },
        {
            "id": 455,
            "date": "17.02.2024",
            "joke": "Podróż Dudy do Australii to nie jest znów taki niewypał jak twierdzą niektórzy. Co prawda okrętów nie będzie, ale z  przecieków dyplomatycznych wiadomo, że prezydent przywiezie magnes na lodówkę."
        },
        {
            "id": 454,
            "date": "17.02.2024",
            "joke": "je, że żyję w jakiejś pętli czasu. Niekiedy mi się wyda"
        },
        {
            "id": 453,
            "date": "17.02.2024",
            "joke": "Dzięki rządowi wielu Polaków stanęło na nogi - przez ceny benzyny musieli zostawić samochody w garażach."
        },
        {
            "id": 452,
            "date": "17.02.2024",
            "joke": "Pytanie do fanów piłki nożnej, może ktoś będzie wiedział: czy piłkarze naszej reprezentacji golą nogi tylko pod  skarpety, czy całe, aż do cipy?"
        },
        {
            "id": 451,
            "date": "17.02.2024",
            "joke": "Nic tak nie budzi do życia jak poranna kawa rozlana na klawiaturze."
        },
        {
            "id": 450,
            "date": "17.02.2024",
            "joke": "Ja: mam tylko 33 lata, jeszcze całe życie przede mną.<br>  Komentator sportowy w TV: ma 32 lata, jest jednym z najstarszych zawodników. To cud, że się rusza."
        },
        {
            "id": 449,
            "date": "17.02.2024",
            "joke": "Telefoniczna poradnia dla osób zażywających narkotyki: \"jeżeli jesteś uzależniony od marihuany, naciśnij hash\"."
        },
        {
            "id": 448,
            "date": "17.02.2024",
            "joke": "Właśnie dobijało mi się do drzwi jakichś dwóch religijnych fanatyków. Gdy otworzyłem zaczęli coś mamrotać, że spłonę  jeżeli mnie nie uratują. Oczywiście ich olałem, nie kumam tylko, dlaczego byli przebrani za strażaków."
        },
        {
            "id": 447,
            "date": "17.02.2024",
            "joke": "[Pilne] Prezydent Andrzej Duda pobił należący do niego rekord świata w podpisywaniu ustawy od momentu pojawienia się  na biurku. Nowy rekord wynosi od dzisiaj 2,46 sek. i jest lepszy od poprzedniego o 28 setnych."
        },
        {
            "id": 446,
            "date": "17.02.2024",
            "joke": "Lekarz do pacjenta:<br>  - Nie ma się co smucić. Faza depresyjna z pewnością, prędzej czy później, przejdzie w maniakalną."
        },
        {
            "id": 445,
            "date": "17.02.2024",
            "joke": "- Allah akhbar! - głośno zakrzyknęli niemieccy kibice po bramce strzelonej Szwecji w doliczonym czasie.<br>  - Inszallah... - odpowiedzieli westchnieniem szwedzcy kibice."
        },
        {
            "id": 444,
            "date": "17.02.2024",
            "joke": "Daj człowiekowi rybę, a będzie syty jeden dzień.<br>  Daj człowiekowi wędkę, a będzie syty resztę życia.<br>  Daj człowiekowi boga, a zdechnie z głodu, modląc się o rybę."
        },
        {
            "id": 443,
            "date": "17.02.2024",
            "joke": "Po rozwodzie i podziale majątku zacząłem lepiej rozumieć ofiary pożaru, a nawet trochę zazdrościć bezdomnym."
        },
        {
            "id": 442,
            "date": "17.02.2024",
            "joke": "Żul Arek przechodzi koło dwudziestoletniej Corsy w gazie i mruczy pod nosem:<br>  - Skąd ludzie biorą na to kasę? Cały dzień zbieram butelki, puszki i ledwo mam na tanie wino.<br>  Tymczasem student Wiesiek, dorabiający jako pizkurier właściciel dwudziestoletniej Corsy w gazie przechodzi koło  10-letniego Passerati i mruczy:<br>  - Skąd ludzie mają na to kasę? Stypendium, umowa na 5zł/h + napiwki, prawie nie śpię, a ledwo na tę Corsę  uzbierałem...<br>  Tymczasem budowlaniec Janusz, właściciel 10-letniego Passerati w kredycie przechodzi obok 5-letniej Insignii i mruczy  pod nosem:<br>  - Skąd ludzie mają na to kasę? Tyram cały dzień i noc, biorę 500+, a ledwo się udało dostać kredyt na to moje cacko,  jeszcze nie ma za co na gaz przerobić...<br>  Tymczasem Sergiusz, biznesman na dorobku i kierowca 5-letniej Insignii w leasingu jest mijany przez Mercedesa z  przyciemnianymi szybami w asyście policyjnej i mruczy pod nosem:<br>  - Skąd oni biorą na to pieniądze? Przecież od dwóch lat nie mam żadnych zysków, zamówienia siadają, ludzi połowę  musiałem zwolnić, strach inwestować...<br>  Tymczasem minister Morawiecki, jadąc w Mercedesie z przyciemnianymi szybami w asyście policyjnej, mijając Insignie,  Passerati, Corsy i inne stojące w korkach samochody mruczy pod nosem:<br>  - Skąd oni biorą na to pieniądze i do tego na paliwo? Przecież już im tak podatkami dopierdoliłem, że dawno powinni  chodzić pieszo..."
        },
        {
            "id": 441,
            "date": "17.02.2024",
            "joke": "PiS obiecał walczyć z \"Polską dwóch prędkości\" i trzeba przyznać, że słowa dotrzymał. Wrzucając wsteczny."
        },
        {
            "id": 440,
            "date": "17.02.2024",
            "joke": "Poczta Polska przygotowuje do druku znaczki z dupą prezesa. Każdy, liżąc go, będzie mógł poczuć się jak Jacek  Saryusz-Wolski."
        },
        {
            "id": 439,
            "date": "17.02.2024",
            "joke": "Pewien Sycylijczyk na dworcu w Mediolanie długo obserwował mistrzowską pracę pucybuta. W końcu ten rzekł do  niego:<br>  - Dlaczego stoisz tutaj? Czy nie wstydzisz się wejść do miasta w tak brudnych butach? Usiądź tutaj, natychmiast je  wypoleruję .<br>  Pięć minut później buty naprawdę błyszczały. Sycylijczyk nie mógł się nadziwić:<br>  - Niesamowita praca! Powiedz mi, kto za to wszystko płaci?"
        },
        {
            "id": 438,
            "date": "17.02.2024",
            "joke": "Logika Hollywood: seks na ekranie - sztuka, seks poza kadrem - molestowanie."
        },
        {
            "id": 437,
            "date": "17.02.2024",
            "joke": "Rozmowa dwóch przyjaciółek:<br>  - Jadę do Krakowa.<br>  - Po co? Przecież jednego smoka już mają."
        },
        {
            "id": 436,
            "date": "17.02.2024",
            "joke": "Misiewicz sprzedał prawa do filmu o swojej karierze. Nabywcą jest Brazzers."
        },
        {
            "id": 435,
            "date": "17.02.2024",
            "joke": "Z okazji Czarnego Piątku Apple obniży cenę nowego iPhona. Zaoszczędzę aż 4979 zł nie kupując go."
        },
        {
            "id": 434,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Znajdź swoją połówkę jesienią. Zimą wzrasta akcyza na alkohol."
        },
        {
            "id": 433,
            "date": "17.02.2024",
            "joke": "Widziałem jak pewnej kobiecie wypadło 20 zł. Podniosłem, pomyślałem co zrobiłby Jezus na moim miejscu, i zamieniłem  je na wino.&nbsp;"
        },
        {
            "id": 432,
            "date": "17.02.2024",
            "joke": "Polak, Rusek i Niemiec siedzą w celi.<br>  Nagle Rusek podchodzi do Niemca i częstuje go batonikiem.<br>  - Chcesz?<br>  Kurcze, wziąłbym, ale pewnie w zamian będzie chciał mnie przelecieć - pomyślał Niemiec.<br>  - Nie, dzięki.<br>  Podchodzi do Polaka.<br>  - Chcesz?<br>  Kurcze, chętnie, ale pewnie w zamian będzie chciał mnie przelecieć - pomyślał. Ale w sumie jestem silny, obronię  się.<br>  - Tak, dzięki.<br>  Zjedli.<br>  - Smakowało?<br>  - Tak.<br>  - Rosły z Ciebie chłop.<br>  - Fakt.<br>  - Przytrzymasz Niemca?&nbsp;"
        },
        {
            "id": 431,
            "date": "17.02.2024",
            "joke": "Lot Ryan Air. Nagle z głośników płynie komunikat:<br>  - Pasażerowie business class proszeni są o zapięcie pasów. Reszta niech się czymś przywiąże."
        },
        {
            "id": 430,
            "date": "17.02.2024",
            "joke": "Rosja pokonała Hiszpanię. To największe zwycięstwo tego kraju od czasu wyborów w USA."
        },
        {
            "id": 429,
            "date": "17.02.2024",
            "joke": "Woda rozwiąże wszystkie twoje problemy.<br>  Jesteś spragniony? Napij się.<br>  Jesteś brudny? Umyj się.<br>  Ktoś cię wkurwia? Utop go."
        },
        {
            "id": 428,
            "date": "17.02.2024",
            "joke": "Wielu Rosjan nie rozumie, dlaczego kraj świętuje zwycięstwo nad Hiszpanią, jeśli wojska rosyjskie nie dotarły jeszcze  do Madrytu."
        },
        {
            "id": 427,
            "date": "17.02.2024",
            "joke": "Jeżeli firma pisze w ogłoszeniu rekrutacyjnym, że zapewnia \"rodzinną atmosferę\", to znaczy, że zamiast ci płacić,  to cię wyrucha."
        },
        {
            "id": 426,
            "date": "17.02.2024",
            "joke": "Podczas porodu ból jest tak duży, że kobieta niemal może poczuć to, co sfaulowany Neymar."
        },
        {
            "id": 425,
            "date": "17.02.2024",
            "joke": "Wchodzi facet do sklepu motoryzacyjnego i pyta:<br>  - Czy są części zamienne do Łady Niva?<br>  - A czego potrzeba?<br>  - Takie tam... kable, taśma izolacyjna...<br>  - Oczywiście, że mamy. Ale dziwną ma pan Nivę. Żeby części zamienne od UAZ-a pasowały?"
        },
        {
            "id": 424,
            "date": "17.02.2024",
            "joke": "W budynku kurwizji chyba nie ma toalet. Całe gówno jest na antenie."
        },
        {
            "id": 423,
            "date": "17.02.2024",
            "joke": "Codziennie udaję, że lubię ludzi. To się nazywa dorosłość i dlatego wolno nam pić alkohol."
        },
        {
            "id": 422,
            "date": "17.02.2024",
            "joke": "Z czasem człowiek osiąga już ten wiek, że podobają mu się nie tylko młode dziewczyny, ale także ich matki."
        },
        {
            "id": 421,
            "date": "17.02.2024",
            "joke": "Czy ktoś sprawdzał w grobie Schrödingera czy on tam w ogóle jest?"
        },
        {
            "id": 420,
            "date": "17.02.2024",
            "joke": "Jak wygrać kłótnię w dwóch krokach:&nbsp;<br>  1. Zlokalizuj na swoim ciele cipę.<br>  2. Gratulacje, wygrywasz."
        },
        {
            "id": 419,
            "date": "17.02.2024",
            "joke": "- Umrze pan w ubóstwie, sam, otoczony tylko przez ból i cierpienie.<br>  - Przepraszam, co pan powiedział?<br>  - Proszę podpisać tu i kredyt jest pański."
        },
        {
            "id": 418,
            "date": "17.02.2024",
            "joke": "Moja żona świetnie dogaduje się z&nbsp;sąsiadkami. W sumie nie ma w tym nic dziwnego - jeżeli wsadzisz do jednego  pokoju 50 dzieci z zespołem Downa, to będzie tam dużo przytulania."
        },
        {
            "id": 417,
            "date": "17.02.2024",
            "joke": "Znacie to uczucie gdy oglądacie porno i dochodzicie w momencie, w którym pojawia się przed wami goły męski tyłek?  Strasznie irytujące. Na szczęście wyprowadziłem się od rodziców i ojciec mi już nie przeszkadza."
        },
        {
            "id": 416,
            "date": "17.02.2024",
            "joke": "Dobrze, że blizny emocjonalne są niewidoczne. Gdyby były widoczne porno byłoby obrzydliwe."
        },
        {
            "id": 415,
            "date": "17.02.2024",
            "joke": "Facet od pogody obiecał 25 centymetrów śniegu. Zakładam, że będzie najwyżej 15 centymetrów, bo to w końcu obiecał  facet."
        },
        {
            "id": 414,
            "date": "17.02.2024",
            "joke": "To dało mi 30 minut na ucieczkę."
        },
        {
            "id": 413,
            "date": "17.02.2024",
            "joke": "- Ty gnoju, masz kochankę! Znalazłam w naszej sypialni stringi!<br>  - No co ty, kochanie? One muszą być twoje. Przymierz."
        },
        {
            "id": 412,
            "date": "17.02.2024",
            "joke": "Jak nazywa się kobieta, która rodzi dziecko 6 miesięcy po ślubie?<br>  Katoliczka."
        },
        {
            "id": 411,
            "date": "17.02.2024",
            "joke": "Przysiadłem się do dziewczyny w barze:<br>  - Przed tobą siedem kroków do seksu.<br>  - Co? O czym ty mówisz? Nawet cię nie znam...<br>  - Krok pierwszy: zaprzeczanie."
        },
        {
            "id": 410,
            "date": "17.02.2024",
            "joke": "Co to jest: brązowe, lepkie i śmierdzi?<br>  Ofiara Eboli."
        },
        {
            "id": 409,
            "date": "17.02.2024",
            "joke": "- Co robią dzieci na oddziale onkologicznym?<br>  - Raczkują."
        },
        {
            "id": 408,
            "date": "17.02.2024",
            "joke": "Odkąd lekarz przepisał nowe tabletki mojej żonie uprawiamy seks każdej nocy. Dosłownie nic jej po nich nie  obudzi.&nbsp;"
        },
        {
            "id": 407,
            "date": "17.02.2024",
            "joke": "Obleciałem wszystkich bezdomnych w mieście. Żadnemu nie został już ani jeden wóz."
        },
        {
            "id": 406,
            "date": "17.02.2024",
            "joke": "Polak - Rusek, który myśli, że jest Francuzem."
        },
        {
            "id": 405,
            "date": "17.02.2024",
            "joke": "- Synu, przez jakiś czas nie będziemy się tobą zajmować. Tu masz smartfona, posiedzisz sobie trochę w internacie.<br>  - Chyba w Internecie?<br>  - O, wychowawca idzie, wstań i przywitaj się."
        },
        {
            "id": 404,
            "date": "17.02.2024",
            "joke": "Francuska himalaistka zeszła z pomocą Polaków, a Mackiewicz dokonał tego samodzielnie."
        },
        {
            "id": 403,
            "date": "17.02.2024",
            "joke": "Alkoholizm - crossfit wątroby."
        },
        {
            "id": 402,
            "date": "17.02.2024",
            "joke": "Ludzki mózg jest niesamowity. Gdyby tak każdy mógł mieć po jednym..."
        },
        {
            "id": 401,
            "date": "17.02.2024",
            "joke": "Zauważyliście, że wiele chorób przypisanych jest do kolorów? Np. białaczka, żółtaczka, czerwonka, AIDS."
        },
        {
            "id": 400,
            "date": "17.02.2024",
            "joke": "Żarty są jak ludzie - nie wszyscy doceniają czarne."
        },
        {
            "id": 399,
            "date": "17.02.2024",
            "joke": "- Jaka jest różnica między socjalizmem, a kapitalizmem?<br>  - \"Nie dla wszystkich wystarczyło kiełbasy\" vs. \"Nie wszystkim wystarcza pieniędzy na kiełbasę\"."
        },
        {
            "id": 398,
            "date": "17.02.2024",
            "joke": "- Poprosiłem Mikołaja o przyjazną służbę zdrowia.<br>  - Wciąż wierzysz w służbę zdrowia?"
        },
        {
            "id": 397,
            "date": "17.02.2024",
            "joke": "Moja żona wróciła bardzo zestresowana ze spaceru z dwójką dzieci. Stresowała się tym, że wychodziła z trójką."
        },
        {
            "id": 396,
            "date": "17.02.2024",
            "joke": "Nie wszyscy muzułmanie są tacy sami. Tylko radykalni chcą nas zabić i zniszczyć naszą cywilizację. Pozostali chcą, by  to radykalni odwalili za nich robotę."
        },
        {
            "id": 395,
            "date": "17.02.2024",
            "joke": "- Mamo, czy to prawda, że Święty Mikołaj nie istnieje? Tak naprawdę to przebrany&nbsp;tata?<br>  - Tak, córeczko. Skąd to wiesz?<br>  - Bo nie doszedł dopóki nie udałam, że śpię."
        },
        {
            "id": 394,
            "date": "17.02.2024",
            "joke": "Po całym tygodniu bez komputera i Internetu, wreszcie zdałem sobie sprawę z tego, co tak naprawdę jest najważniejsze  w życiu. To komputer i Internet."
        },
        {
            "id": 393,
            "date": "17.02.2024",
            "joke": "Dlaczego&nbsp;do różnego rodzaju eksperymentów medycznych czy farmaceutycznych używamy królików, a nie muzułmanów?  Przecież&nbsp;rozmnażają się równie szybko, unikniemy protestów obrońców praw zwierząt, a ich DNA jest znacznie  bardziej zbliżone do ludzkiego."
        },
        {
            "id": 392,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Nie masz nastroju? Jedz czekoladę. Nie pomaga? Popijaj koniakiem."
        },
        {
            "id": 391,
            "date": "17.02.2024",
            "joke": "Po ostatnich wydarzeniach w ramach protestu postanowiłem podcierać tyłek stronami Koranu. Później zdałem sobie jednak  sprawę, że wycieranie gówna gównem jest bezsensowne."
        },
        {
            "id": 390,
            "date": "17.02.2024",
            "joke": "- Witaj po urlopie. Co dostałeś na gwiazdkę?<br>  - Pierdolca."
        },
        {
            "id": 389,
            "date": "17.02.2024",
            "joke": "Przed prezydentem Francji trudna decyzja: poddać się czy kolaborować."
        },
        {
            "id": 388,
            "date": "17.02.2024",
            "joke": "Jaka jest różnica pomiędzy księdzem a politykiem?<br>  Polityk poczeka do twojej pełnoletności zanim obieca raj i wyrucha."
        },
        {
            "id": 387,
            "date": "17.02.2024",
            "joke": "Aplikacje Facebooka to Świadkowie Jehowy Internetu."
        },
        {
            "id": 386,
            "date": "17.02.2024",
            "joke": "Spędziłem wczoraj upojny&nbsp;wieczór z dwoma seksownymi kociakami. To były zwykłe kociaki zanim wyszli moi rodzice."
        },
        {
            "id": 385,
            "date": "17.02.2024",
            "joke": "- Nasze dziecko nie chce jeść. Co mam zrobić?<br>  - Karmiąc je łyżką udawaj, że to samolot.<br>  - Mam ją schować?"
        },
        {
            "id": 384,
            "date": "17.02.2024",
            "joke": "- Bawimy się w rodzinę?<br>  - Ale jak?<br>  - Normalnie. Najpierw się prześpimy kilka razy, a potem się rozejdziemy ze względu na różnice charakterów."
        },
        {
            "id": 383,
            "date": "17.02.2024",
            "joke": "- Ile rubel stoi?<br>  - 2-3 dni. Potem wiotczeje."
        },
        {
            "id": 382,
            "date": "17.02.2024",
            "joke": "Wyrzucili mnie ze wczasów dla nudystów. Właściwie tylko ja myślałem, że są dla nudystów."
        },
        {
            "id": 381,
            "date": "17.02.2024",
            "joke": "Gdy kreacjoniści zaprzeczają ewolucji - mają rację. Ich ominęła."
        },
        {
            "id": 380,
            "date": "17.02.2024",
            "joke": "Zacznę popierać feministki, parytety i ich inne bzdurne pomysły jeżeli przechodząc koło budowy będę mijał babkę  topless przy betoniarce."
        },
        {
            "id": 379,
            "date": "17.02.2024",
            "joke": "W szkole:<br>  - Drogie dzieci, co daje nam kura?<br>  - Jajka!<br>  - A krowa?<br>  - Mleczko?<br>  - A świnia coś nam daje?<br>  - Pracę domową!"
        },
        {
            "id": 378,
            "date": "17.02.2024",
            "joke": "\"Rupert Murdoch gets a creampie\" - tego z pewnością nie wpiszę w RedTube."
        },
        {
            "id": 377,
            "date": "17.02.2024",
            "joke": "Mam trzy córki:<br>  - Anię - 9<br>  - Jadzię - 8<br>  - Jolę - 6<br>  Jola dostaje 6 dlatego, że nie połyka."
        },
        {
            "id": 376,
            "date": "17.02.2024",
            "joke": "Kupuję strasznie dużo alkoholu. Mam nadzieję, że nie jestem zakupoholikiem."
        },
        {
            "id": 375,
            "date": "17.02.2024",
            "joke": "- Wczoraj dostałem od żony smsa \"Gdzie ty kurwa jesteś?\"<br>  - Pamiętasz kochanie tego jubilera, u którego widziałaś taki piękny naszyjnik ostatnio?<br>  - Tak, tak!<br>  - Pije w barze obok."
        },
        {
            "id": 374,
            "date": "17.02.2024",
            "joke": "Zostałem dziś brutalnie wyruchany na stacji benzynowej za 5,3 zł/litr."
        },
        {
            "id": 373,
            "date": "17.02.2024",
            "joke": "Wiadomość dla głodujących w Afryce: Poświęcajcie więcej czasu na uprawę roli, mniej na opaleniznę."
        },
        {
            "id": 372,
            "date": "17.02.2024",
            "joke": "Muzułmanów przyjmujemy tradycyjnie - schabowym i czystą."
        },
        {
            "id": 371,
            "date": "17.02.2024",
            "joke": "Harry Potter jest trochę nierealistyczny. Nie mówię o czarach ale żeby rudy miał aż dwójkę przyjaciół?"
        },
        {
            "id": 370,
            "date": "17.02.2024",
            "joke": "Skoro muzułmanie nie jedzą wieprzowiny to dlaczego śmierdzą jak świnie?"
        },
        {
            "id": 369,
            "date": "17.02.2024",
            "joke": "Twoje dzieci działają Ci na nerwy, chcesz mieć czas dla siebie?&nbsp;Żaden problem, wyślij je na obóz do Norwegii."
        },
        {
            "id": 368,
            "date": "17.02.2024",
            "joke": "Są w tym kraju ludzie, którzy jeszcze nie wiedzą, że dostaną się na medycynę, a gdzieś indziej jacyś konkretni  pacjenci są już do nich zarejestrowani na określony termin."
        },
        {
            "id": 367,
            "date": "17.02.2024",
            "joke": "Co waży więcej: 50-cio kilogramowa kobieta czy 50 kilogramów ołowiu?<br>  Kobieta, one zawsze zaniżają swoją wagę."
        },
        {
            "id": 366,
            "date": "17.02.2024",
            "joke": "Trzej chirurdzy palą na werandzie szpitala rządowego.<br>  Chirurg brzuszny mówi:<br>  - Rano wycinałem wyrostek - zanim utorowałem sobie drogę przez warstwę tłuszczu, dwa skalpele stępiłem!<br>  Kardiochirurg:<br>  - To pikuś. Robiłem plastykę zastawki deputowanego - otworzyłem klatkę piersiową, dotarłem do serca - a tu kamień!  Zużyłem dwie diamentowe tarcze do szlifierki kątowej.<br>  Neurochirurg:<br>  - Chłopaki, to wszystko nic. Próbowaliście kiedyś przeszczepić mózg polityka w czaszkę kurczaka i tak przymocować, aby  nie grzechotał?"
        },
        {
            "id": 365,
            "date": "17.02.2024",
            "joke": "Nie znalazłeś prawdy w winie? Widocznie schowała się w innej butelce."
        },
        {
            "id": 364,
            "date": "17.02.2024",
            "joke": "- Jak wy w Krakowie możecie oddychać tym powietrzem?<br>  - Po prostu się nie zaciągamy."
        },
        {
            "id": 363,
            "date": "17.02.2024",
            "joke": "- Asystentka już jest, nie widzę kierowcy...<br>  - Tu jestem!<br>  - A, dobra. Jest też ochroniarz, tragarz, sprzątaczka, dostawca karmy dla kota... Czyli wszyscy są?<br>  - Tak!<br>  - Dobra. Otwieram posiedzenie zarządu PiS."
        },
        {
            "id": 362,
            "date": "17.02.2024",
            "joke": "Żona pyta Tomasza Knapika:<br>  - Mówiłeś coś?<br>  - Nie, film oglądam."
        },
        {
            "id": 361,
            "date": "17.02.2024",
            "joke": "W Chinach przyszedł na świat chłopiec, który ważył po urodzeniu 12 kg. W opinii lekarzy zacznie chodzić szybciej niż  jego matka."
        },
        {
            "id": 360,
            "date": "17.02.2024",
            "joke": "18-21 lat to dziwny przedział wiekowy. Jedni się w tym okresie chajtają, inni rodzą dzieci, ktoś z klasy wyląduje w  więzieniu, ktoś rozpocznie karierę, a niektórzy wciąż pytają rodziców czy mogą wrócić po północy."
        },
        {
            "id": 359,
            "date": "17.02.2024",
            "joke": "Na rynku dostępne są biodegradowalne filtry papierosowe z nasionami kwiatów. Korzystając z nich pomagasz Ziemi na dwa  sposoby: sadząc kwiaty i zabijając siebie."
        },
        {
            "id": 358,
            "date": "17.02.2024",
            "joke": "Po co leczyć sklerozę, skoro można o niej zapomnieć?"
        },
        {
            "id": 357,
            "date": "17.02.2024",
            "joke": "Deski do prasowania to tak naprawdę deski surfingowe, które porzuciły swoje marzenia i znalazły normalną pracę."
        },
        {
            "id": 356,
            "date": "17.02.2024",
            "joke": "Peszko intensywnie trenuje przed mundialem. Nie pije trzeci dzień, już zaczyna poznawać trenera."
        },
        {
            "id": 355,
            "date": "17.02.2024",
            "joke": "W upalne dni życie w Korei jest łatwiejsze - rano zostawiasz psa w aucie, po południu masz gotowy obiad."
        },
        {
            "id": 354,
            "date": "17.02.2024",
            "joke": "Czysta historia przeglądarki oznacza brudną historię przeglądania."
        },
        {
            "id": 353,
            "date": "17.02.2024",
            "joke": "Polscy kibice dostali ostrzeżenie: jeśli będą sprawiać problemy podczas trwających Mistrzostw Świata zostaną  deportowani z powrotem do Wielkiej Brytanii."
        },
        {
            "id": 352,
            "date": "17.02.2024",
            "joke": "#000000 #000000 #000000 #000000 #000000<br>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;#FFFFFF"
        },
        {
            "id": 351,
            "date": "17.02.2024",
            "joke": "Jeżeli na twojej drodze pojawia się twoja była to znaczy, że Bóg sprawdza, czy nadal jesteś tak głupi."
        },
        {
            "id": 350,
            "date": "17.02.2024",
            "joke": "Jeżeli wszyscy wokół ciebie są rozdrażnieni, może po prostu wszystkich wkurwiasz?"
        },
        {
            "id": 349,
            "date": "17.02.2024",
            "joke": "- Tato, co to jest \"niuans\"?<br>  - Myśmy strzelili dwie bramki, a Senegalczycy jedną. Ale jest pewien niuans..."
        },
        {
            "id": 348,
            "date": "17.02.2024",
            "joke": "Wygląda na to, że Grecy postanowili spłacić swój dług podpalając kraj i licząc na kasę z ubezpieczenia."
        },
        {
            "id": 347,
            "date": "17.02.2024",
            "joke": "Drugi etap depresji poporodowej matki przypada na 16 rok życia dziecka."
        },
        {
            "id": 346,
            "date": "17.02.2024",
            "joke": "Do gościa, który ukradł moje antydepresanty: mam nadzieję, że jesteś szczęśliwy."
        },
        {
            "id": 345,
            "date": "17.02.2024",
            "joke": "6 największych kłamstw, jakie mówią dziewczyny:<br>  1. Kocham cię.<br>  2. Nic się nie stało.<br>  3. Nie jestem zazdrosna.<br>  4. To już przeszłość.<br>  5. To tylko kolega.<br>  6. Alderaan jest pokojowy. Nie mamy żadnej broni."
        },
        {
            "id": 344,
            "date": "17.02.2024",
            "joke": "Jakim cudem żyrafy istnieją, a jednorożce nie? Co wydaje się bardziej prawdopodobne: koń z rogiem czy  lampartowielbłąd z 7-metrową szyją?"
        },
        {
            "id": 343,
            "date": "17.02.2024",
            "joke": "Nie mogę się pogodzić z faktem, że Magic Johnson zmarnował taki fajny pseudonim z branży porno na karierę sportowca."
        },
        {
            "id": 342,
            "date": "17.02.2024",
            "joke": "- Który język jest najtrudniejszy?<br>  - Ukraiński. Jest tak trudny, że tylko połowa Ukraińców potrafi się nim posługiwać."
        },
        {
            "id": 341,
            "date": "17.02.2024",
            "joke": "- Czy to prawda, że Bóg wyprowadził Żydów z egipskiej niewoli?<br>  - Tak, to prawda.<br>  - A kto Żydów wprowadził w egipską niewolę?<br>  - Wszystko dzieje się z woli Boga."
        },
        {
            "id": 340,
            "date": "17.02.2024",
            "joke": "Noc poślubna Marty:<br>  - Chcesz, żebym zrobiła ci to, czego nie zrobiłam jeszcze żadnemu mężczyźnie?<br>  - Faszerowaną rybę?"
        },
        {
            "id": 339,
            "date": "17.02.2024",
            "joke": "Miałem cudowny sen. Przypadkiem natknąłem się na Jarosława. Kopałem sobie spokojnie w ogródku, a tu nagle łopata  uderzyła o coś twardego..."
        },
        {
            "id": 338,
            "date": "17.02.2024",
            "joke": "USB typu B jest jak żona - nieważne, z której strony wsadzisz, zawsze będzie źle.<br>  USB typu C jest jak kochanka - nieważne, z której strony wsadzisz, zawsze będzie dobrze."
        },
        {
            "id": 337,
            "date": "17.02.2024",
            "joke": "- O, ja też lubię maczać herbatniki w herbacie.<br>  - To jest whisky."
        },
        {
            "id": 336,
            "date": "17.02.2024",
            "joke": "Rząd - to taka instytucja, która zabiera nam pieniądze, część ich rozdziela między siebie, a za to, co zostało,  stwarza nam problemy."
        },
        {
            "id": 335,
            "date": "17.02.2024",
            "joke": "Podczas spotkania w USA Trump z pierwszą damą i Macron ze swoją nauczycielką wyglądali jak swingersi, którzy  postanowili zamienić się żonami."
        },
        {
            "id": 334,
            "date": "17.02.2024",
            "joke": "Kiedy smutne zakończenie choroby milionera nie budziło już wątpliwości, lekarz dyskretnie mówi jego żonie:<br>  - Musi pani być przygotowana na wszystko...<br>  - Nie robię sobie nadziei. W najlepszym przypadku liczę na połowę."
        },
        {
            "id": 333,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Gdy w dyskusji brakuje ci argumentów zawsze możesz&nbsp;użyć dwóch przypadkowych niemieckich nazwisk i nazywać od nich  chorobę. Przykład: \"Twoje zachowanie jest typową manifestacją zespołu Storcha-Weizseckera\"."
        },
        {
            "id": 332,
            "date": "17.02.2024",
            "joke": "Dlaczego kobiety chcą mieć zgaszone światło w trakcie seksu?<br>  Nawet w tym momencie nie są w stanie znieść widoku faceta, któremu jest po prostu dobrze."
        },
        {
            "id": 331,
            "date": "17.02.2024",
            "joke": "- Czym się różni tyłeczek od dupska?<br>  - Tyłeczek jest apetyczny, a dupsko - od apetytu."
        },
        {
            "id": 330,
            "date": "17.02.2024",
            "joke": "Jeśli nos i uszy naprawdę rosną przez całe życie, to rozpoznanie nieśmiertelnego musi być całkiem proste."
        },
        {
            "id": 329,
            "date": "17.02.2024",
            "joke": "- Słuchaj, potrzebuję na wczoraj speca od RODO. Znasz kogoś wartego polecenia?<br>  - Tak.<br>  - Super! Dasz mi na niego namiar?<br>  - Nie."
        },
        {
            "id": 328,
            "date": "17.02.2024",
            "joke": "Sekret długowieczności? Żadne tam witaminy czy ćwiczenia. Trzeba kamienicę w Warszawie kupić. Ci, co kupili, to po  140 lat żyli."
        },
        {
            "id": 327,
            "date": "17.02.2024",
            "joke": "Kiedyś Augusto Pinochet przemówił do ludzi:<br>  - Tajemnica dobrego życia w kraju jest prosta - zaczął Augusto. Tłum spojrzał na niego z zainteresowaniem.<br>  - Ciężka praca...<br>  Kilkaset osób opuściło plac.<br>  - Przestrzeganie prawa...<br>  Kolejne kilkaset osób opuściło plac.<br>  - I zero komunizmu! - zakończył Augusto, spodziewając się, że tym razem jeszcze więcej ludzi wyjdzie. Ale nikt nie  odszedł.<br>  - Dlaczego nikt nie idzie? - zapytał Pinochet. - Właśnie powiedziałem: \"Zero komunizmu!\". Czy wśród was nie ma ani  jednego komunisty?<br>  Z tłumu dobiegł głos:<br>  - Wszyscy komuniści wyszli po słowach o potrzebie ciężkiej pracy i przestrzeganiu prawa!"
        },
        {
            "id": 326,
            "date": "17.02.2024",
            "joke": "Kiedyś uczeni uważali, że im biedniejszy człowiek, tym więcej telewizji ogląda. Dziś uważają odwrotnie. Im więcej  ogląda, tym biedniejszy."
        },
        {
            "id": 325,
            "date": "17.02.2024",
            "joke": "Żona pyta męża:<br>  - Czy ty mnie kochasz?<br>  - Jakby ci to powiedzieć... Kochać, to ja kocham wódkę i dziwki. A między nami to jest poważna sprawa."
        },
        {
            "id": 324,
            "date": "17.02.2024",
            "joke": "Gdyby lenistwo było sportem olimpijskim, zająłbym czwarte miejsce. I nie musiałbym wspiąć się na podium po medal."
        },
        {
            "id": 323,
            "date": "17.02.2024",
            "joke": "Eric Clapton poinformował, że traci słuch. To wyjaśnia jego ostatnie albumy."
        },
        {
            "id": 322,
            "date": "17.02.2024",
            "joke": "Lwy potrafią polować gdy kończą trzy miesiące. Moja trzyletnia córka nie potrafiła znaleźć pudełka ze śniadaniem,  które miała w drugiej ręce. Jak to możliwe, że jesteśmy na szczycie łańcucha pokarmowego?"
        },
        {
            "id": 321,
            "date": "17.02.2024",
            "joke": "Przygoda dla faceta: zostać piratem, walczyć z niedźwiedziem, zdobyć Mount Everest, polecieć w kosmos.<br>  Przygoda dla kobiety: kutas murzyna."
        },
        {
            "id": 320,
            "date": "17.02.2024",
            "joke": "A może jestem zbyt krytyczny wobec tych gnojków z dziecięcego Master Chefa? - pomyślałem wybierając okruchy chipsów z  pępka."
        },
        {
            "id": 319,
            "date": "17.02.2024",
            "joke": "Żonaci faceci żyją dłużej od samotnych, ale chętniej umierają."
        },
        {
            "id": 318,
            "date": "17.02.2024",
            "joke": "Tytuły filmów na PornHubie praktycznie nic nam nie mówią. No dobra, dowiemy się, że młoda studentka uprawia anal  pierwszy raz, ale to wszystko. Ani słowa o tym co studiuje, specjalizacji, jej marzeniach."
        },
        {
            "id": 317,
            "date": "17.02.2024",
            "joke": "Adrian, kurwa, źle usłyszałeś. Krzyczeliśmy \"konstytucja\", nie \"prostytucja\"."
        },
        {
            "id": 316,
            "date": "17.02.2024",
            "joke": "- Też jesteś z Warszawy?<br>  - Tak.<br>  - A co robisz w weekend?<br>  - Jadę do domu na wieś."
        },
        {
            "id": 315,
            "date": "17.02.2024",
            "joke": "Kwantowa opozycja - nic nie może, nic nie umie i ogólnie Ciamajdan, ale jednocześnie trzęsie Unią i mediami na całym  świecie."
        },
        {
            "id": 314,
            "date": "17.02.2024",
            "joke": "Aktorki, które nie były molestowane, rozpoczęły kampanię pod hasłem #metooplease."
        },
        {
            "id": 313,
            "date": "17.02.2024",
            "joke": "Panie, daj mi siłę, by zmienić to, co mogę zmienić, cierpliwość, by zaakceptować to, czego nie mogę zmienić i kilka  dobrych flaszek jako plan awaryjny."
        },
        {
            "id": 312,
            "date": "17.02.2024",
            "joke": "W TVP najgenialniejszy jest Kaczyński, najsprawiedliwszy - Ziobro, najbardziej światowy - Morawiecki, najlepiej  wychowana - Pawłowicz, najbardziej antykomunistyczny - Piotrowicz.<br>  To wszystko, co musisz wiedzieć o TVP."
        },
        {
            "id": 311,
            "date": "17.02.2024",
            "joke": "Wszystko wina Tuska i Sikorskiego. Gdyby nie załatwili tych 300 mld od UE, to nie mielibyśmy czego stracić."
        },
        {
            "id": 310,
            "date": "17.02.2024",
            "joke": "Luksemburg.<br>  - Jacques, co dziś robisz?<br>  - Wybieram się na wycieczkę rowerową po kraju.<br>  - A po obiedzie?"
        },
        {
            "id": 309,
            "date": "17.02.2024",
            "joke": "Po komunikacie, że Unia chce nas ukarać, bo będziemy mieli Centralny Port Lotniczy, mam dwie wiadomości - jedną  dobrą, drugą złą. Dobra jest taka, że mamy zwycięzcę w konkursie \"Debil roku 2017\". Zła, że jest on wiceministrem w  Ministerstwie Sprawiedliwości."
        },
        {
            "id": 308,
            "date": "17.02.2024",
            "joke": "Dziś zabiegamy o bycie najlepszym przyjacielem Węgier."
        },
        {
            "id": 307,
            "date": "17.02.2024",
            "joke": "Wczoraj montowaliśmy koalicję z USA, stawialiśmy się Rosji w sprawie Ukrainy, uczestniczyliśmy w spotkaniach sześciu  największych krajów UE,Buzek został szefem Parlamentu Europejskiego, a Tusk Rady UE."
        },
        {
            "id": 306,
            "date": "17.02.2024",
            "joke": "- Wszyscy faceci to świnie!<br>  - Tak, kochanie, wszyscy.<br>  - I ty też!<br>  - Tak, ja to jestem największą świnią.<br>  - Czemu ja w ogóle za ciebie za mąż wyszłam?!<br>  - I w ten sposób płynnie przeszliśmy do stwierdzenia, że wszystkie baby są durne."
        },
        {
            "id": 305,
            "date": "17.02.2024",
            "joke": "- Ojcze, zgrzeszyłem. Zasługuję na ciężką pokutę.<br>  - U mnie czy u ciebie?"
        },
        {
            "id": 304,
            "date": "17.02.2024",
            "joke": "Ludzie, którzy nie mówią po polsku, mają przerąbane. Bo nie mają pojęcia co powiedzieć kiedy, na przykład, spadnie im  na nogę cegła."
        },
        {
            "id": 303,
            "date": "17.02.2024",
            "joke": "Kurde, wydaje mi się, że mogę mieć zapalenie opon mózgowych. Obudziłem się rano z bólem głowy i nudnościami. Czułem  się zmęczony i zdezorientowany. Raziły mnie światła. Ktoś w moim stanie nie powinien, tak jak ja, chlać wczoraj do  odcięcia."
        },
        {
            "id": 302,
            "date": "17.02.2024",
            "joke": "Święta są jak seks. Na początku cieszę się jak dziecko, ale szybko się kończą i po wszystkim żałuję wydanych  pieniędzy."
        },
        {
            "id": 301,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli zaczniesz oglądać pierwsze nagranie z katastrofy smoleńskiej o 23:59:03 w Sylwestra, to o północy będzie  słychać strzały."
        },
        {
            "id": 300,
            "date": "17.02.2024",
            "joke": "Uliczna ankieta:<br>  - Dzień dobry, co pan woli - seks czy Boże Narodzenie?<br>  - Generalnie to seks, ale Boże Narodzenie jest częściej."
        },
        {
            "id": 299,
            "date": "17.02.2024",
            "joke": "- Dlaczego nie wykonujesz moich rozkazów?! Co ja jestem, twój dowódca, czy jakiś psi chuj?!<br>  - I to, i to, panie sierżancie."
        },
        {
            "id": 298,
            "date": "17.02.2024",
            "joke": "- Doktorze, co pan robił w laboratorium z trzema asystentkami?<br>  - Nic.<br>  - To dlaczego królik patrzy na pana z takim szacunkiem?"
        },
        {
            "id": 297,
            "date": "17.02.2024",
            "joke": "XXI wiek - kasowanie historii jest ważniejsze niż jej tworzenie."
        },
        {
            "id": 296,
            "date": "17.02.2024",
            "joke": "Zmieniam kobiety jak skarpetki - gdy są sztywne."
        },
        {
            "id": 295,
            "date": "17.02.2024",
            "joke": "Jak wkurwić polskiego kierowcę?<br>  Jechać przed nim zgodnie z przepisami."
        },
        {
            "id": 294,
            "date": "17.02.2024",
            "joke": "Pamiętam te czasy, gdy operacje plastyczne były tematem tabu. A teraz? Wszyscy mówią publicznie o botoksie i nawet  brew im nie drgnie."
        },
        {
            "id": 293,
            "date": "17.02.2024",
            "joke": "Instrukcja obsługi Hondy:<br>  Lewy pedał: sprzęgło.<br>  Środkowy pedał: hamulec.<br>  Prawy pedał: głośność."
        },
        {
            "id": 292,
            "date": "17.02.2024",
            "joke": "Są trzy powody, dla których biegacze wybierają czasochłonny trening długodystansowy:<br>  1) Problemy rodzinne.<br>  2) Krótki penis.<br>  3) Problemy rodzinne spowodowane krótkim penisem."
        },
        {
            "id": 291,
            "date": "17.02.2024",
            "joke": "Czym żyją Polacy?<br>  - kolano Kaczyńskiego<br>  - bark Glika<br>  - penis Pięty<br>  - kręgosłup Ziemca"
        },
        {
            "id": 290,
            "date": "17.02.2024",
            "joke": "Nieszczęście naszego kraju polega na tym, że ludzie, którzy powinni przyjmować tabletki, przyjmują ustawy."
        },
        {
            "id": 289,
            "date": "17.02.2024",
            "joke": "Polska w czasach Morawieckiego, jest tak zaawansowana technologicznie, że zaczyna śmieci trzymać w chmurze."
        },
        {
            "id": 288,
            "date": "17.02.2024",
            "joke": "Ośmiokilometrowa przebieżka przedłuża życie o pół godziny. Ale zabiera 40 minut."
        },
        {
            "id": 287,
            "date": "17.02.2024",
            "joke": "Przychodzi baba do lekarza a tam szybka, fachowa i darmowa opieka medyczna."
        },
        {
            "id": 286,
            "date": "17.02.2024",
            "joke": "Amy Winehouse definitywnie rzuciła alkohol i narkotyki."
        },
        {
            "id": 285,
            "date": "17.02.2024",
            "joke": "Amy Winehouse usłyszała od Św. Piotra \"No, no, no\"..."
        },
        {
            "id": 284,
            "date": "17.02.2024",
            "joke": "\"Wiem, że marzenia się nie spełniają. Ale proszę Cię, tak bardzo chciałbym spotkać Amy Winehouse.\"<br>  Hans Janek, lat 14, Oslo&nbsp;"
        },
        {
            "id": 283,
            "date": "17.02.2024",
            "joke": "Amy Winehouse przeżyła więcej strzałów niż cały obóz w Norwegii."
        },
        {
            "id": 282,
            "date": "17.02.2024",
            "joke": "Moja córka została w zeszłym roku brutalnie zgwałcona i zabita. To pozostawiło u mnie bliznę.<br>  Miała naprawdę długie paznokcie."
        },
        {
            "id": 281,
            "date": "17.02.2024",
            "joke": "Wchodzi koń do baru a barman: Kocham Twoją rolę w \"Seks w wielkim mieście\"."
        },
        {
            "id": 280,
            "date": "17.02.2024",
            "joke": "- Jak nazywa się najnowsza płyta Amy Winehouse?<br>  - Nagrobna.&nbsp;"
        },
        {
            "id": 279,
            "date": "17.02.2024",
            "joke": "Spędziłem weekend u mojej dziewczyny ale jej ojciec nie pozwolił nam spać razem. Szkoda, naprawdę go lubię."
        },
        {
            "id": 278,
            "date": "17.02.2024",
            "joke": "Rodzenie dzieci - tak proste, że nawet kobiety to potrafią!"
        },
        {
            "id": 277,
            "date": "17.02.2024",
            "joke": "Wraca żona do domu, wchodzi z torbą zakupów do pokoju, wykłada mężowi piwo, zakąski...<br>  - A ty, kochanie, czemu meczu nie oglądasz? A może goloneczkę ci zrobić?<br>  - Mocno?<br>  - Nie bardzo. Reflektor, zderzak i maska."
        },
        {
            "id": 276,
            "date": "17.02.2024",
            "joke": "Jak odróżnić biednego człowieka od bogatego?<br>  Biedak ogląda koncert Stinga z loży VIP. Bogaty zaprasza Stinga do siebie."
        },
        {
            "id": 275,
            "date": "17.02.2024",
            "joke": "Gdyby te wszystkie internetowe trolle oczerniające rezydentów czy sędziów z taką samą zaciekłością i zaangażowaniem  walczyły o zwrot wraku Tupolewa, to byśmy już ze cztery mieli."
        },
        {
            "id": 274,
            "date": "17.02.2024",
            "joke": "Sex jest jak pizza. Za mniej niż 20 zł nie licz na coś fajnego."
        },
        {
            "id": 273,
            "date": "17.02.2024",
            "joke": "Niemiecki pociąg jadący przez Polskę zatrzymuje się na dłuższą chwilę w polu. Tak sobie stoi i stoi. Jako że było  lato, to w polu byli ludzie. I tak widząc maszynę z wieloma wagonami, dwóch prostych chłopów postanowiło podejść  bliżej. Pochodzą, patrzą przez małe okienko, i nie mogą uwierzyć w to co widzą- w środku upchanych jest mnóstwo żydów.  Wagon wypełniony jest nimi po brzegi: od małych dzieci, aż do wiekowych starców. Ponieważ bardzo dziwiła ich ta  sytuacja, postanowili zapytać się pierwszej osoby z brzegu, o co w tym wszystkim chodzi:<br>  - Paniecku, a czemuż to was tak dużo w tym wagonie jedzie?<br>  - Bo za darmo."
        },
        {
            "id": 272,
            "date": "17.02.2024",
            "joke": "Obawiam się, że ta strona mogła zostać zaatakowana przez rosyjskich hakerów.<br>  Edit: Ta strona nie została zaatakowana. Matka Rosja nie robi takich rzeczy. Miłego dnia."
        },
        {
            "id": 271,
            "date": "17.02.2024",
            "joke": "Kojarzycie te małe domki do ruchania z dziurką na kutasa, co mocuje się na drzewach? No to podobno są dla ptaków..."
        },
        {
            "id": 270,
            "date": "17.02.2024",
            "joke": "- Mam depresję poporodową.<br>  - Przecież pan nie rodził.<br>  - Ale się urodziłem."
        },
        {
            "id": 269,
            "date": "17.02.2024",
            "joke": "Dla faceta porządek jest wtedy, kiedy położył daną rzecz i ona tam sobie spokojnie na swoim miejscu leży.<br>  A jeżeli rzecz się przemieszcza - to już nieporządek."
        },
        {
            "id": 268,
            "date": "17.02.2024",
            "joke": "- Wyjdziesz za mnie?<br>  - A co tam takiego za tobą jest?"
        },
        {
            "id": 267,
            "date": "17.02.2024",
            "joke": "\"Matrix\" oglądany od końca to pouczająca historia chłopaka, który kończy ze swoim problemem narkotykowym i dzięki  pracy w biurze zaczyna stabilne życie."
        },
        {
            "id": 266,
            "date": "17.02.2024",
            "joke": "Jeżeli światło jest szybsze od dźwięki, to jakim cudem słyszałem BMW kolesia obok zanim zaświeciło się zielone?"
        },
        {
            "id": 265,
            "date": "17.02.2024",
            "joke": "Po 20 latach grania na PC wczoraj kupiłem PS4. I wiecie co? To była najlepsza decyzja w moim życiu. Teraz mój  ośmioletni syn ma zajęcie i nie zajmuje mi kompa."
        },
        {
            "id": 264,
            "date": "17.02.2024",
            "joke": "Dlaczego w arabskich szkołach lekcje o ruchu drogowym i wychowaniu seksualnym nigdy nie są tego samego dnia ?<br>  Ponieważ wielbłąd musi trochę odpocząć."
        },
        {
            "id": 263,
            "date": "17.02.2024",
            "joke": "Kiedy rozmawiam z teściową przez telefon mówię najciszej jak tylko się da. Im&nbsp;bliżej ucha trzyma telefon, tym  wyższe prawdopodobieństwo raka."
        },
        {
            "id": 262,
            "date": "17.02.2024",
            "joke": "Chciałem się ubrać jak kobieta, ale nie wyszło. Po prostu nie miałem się w co ubrać."
        },
        {
            "id": 261,
            "date": "17.02.2024",
            "joke": "Seminarium \"Jak nie paść ofiara oszustwa\" zostaje odwołane. Bilety nie podlegają zwrotowi."
        },
        {
            "id": 260,
            "date": "17.02.2024",
            "joke": "Saying \"I'm sorry\" and \"I apologize\" means the same thing. Unless you're at a funeral."
        },
        {
            "id": 259,
            "date": "17.02.2024",
            "joke": "Oscar Pistorius spędzi kolejne cztery lata w areszcie domowym. Karę ma odbywać w domu swojego wuja. Wuj pewnie sra po  gaciach, ale to bezpieczniejsze od chodzenia do toalety."
        },
        {
            "id": 258,
            "date": "17.02.2024",
            "joke": "Skoro już taki nacisk kładziony jest w szkołach na religię, to może stworzymy klasy o profilu religia-WF i zaczniemy  kształcić paladynów?"
        },
        {
            "id": 257,
            "date": "17.02.2024",
            "joke": "Trochę przypał ma teraz ten Kevin przez molestowanie. Jak się wszyscy od niego odwrócą to pewnie na święta będzie sam  w domu."
        },
        {
            "id": 256,
            "date": "17.02.2024",
            "joke": "Złapałem dwóch dzieciaków na jaraniu blanta pod moim biurem. 5 minut później szef złapał mnie i dwóch dzieciaków na  jaraniu blanta pod swoim biurem."
        },
        {
            "id": 255,
            "date": "17.02.2024",
            "joke": "Koleś na wózku ukradł mi z szatni kurtkę moro. Cóż, może się schować, ale i tak nie ucieknie."
        },
        {
            "id": 254,
            "date": "17.02.2024",
            "joke": "- Jest pan płodny?<br>  - Tak, mam bardzo dużą ilość plemników w spermie, doktorze.<br>  - Ma pan przy sobie te badania?<br>  - Nie robiłem badań.<br>  - To skąd pan to wie?<br>  - Ona musi żuć zanim połknie."
        },
        {
            "id": 253,
            "date": "17.02.2024",
            "joke": "- Tato, jak wygląda rasista?<br>  - Jest biały."
        },
        {
            "id": 252,
            "date": "17.02.2024",
            "joke": "\"Mam w lodówce 5000 czekoladek, a mój znajomy ma jedną. Namówiłem go aby ją oddał bezdomnemu.\"<br>  Tak właśnie działają akcje charytatywne celebrytów."
        },
        {
            "id": 251,
            "date": "17.02.2024",
            "joke": "Wiek już nie tan i pamięć mi ostatnio szwankuje, ale jedno zawsze będzie pewne: jeśli pójdę do sklepu po piwo, to nie  wrócę z oranżadą."
        },
        {
            "id": 250,
            "date": "17.02.2024",
            "joke": "- Kiedy dziewczyna staje się kobietą?<br>  - Kiedy ją wołają do kuchni nie po to, by zjadła, lecz po to, by ugotowała."
        },
        {
            "id": 249,
            "date": "17.02.2024",
            "joke": "Kto nie potrafi w życiu znaleźć szczęścia - szuka sensu."
        },
        {
            "id": 248,
            "date": "17.02.2024",
            "joke": "Kumpel namówił mnie na randkę ze swoją kumpelą z pracy. Uczciwie jednak ostrzegł: \"Uważaj, ona spodziewa się  dziecka\". Czułem się jak idiota czekając w knajpie ubrany jedynie w pieluchę."
        },
        {
            "id": 247,
            "date": "17.02.2024",
            "joke": "Zwierzę żyjące w domu po prostu musi być jadalne. A wiadomo, jak się życie ułoży?"
        },
        {
            "id": 246,
            "date": "17.02.2024",
            "joke": "Jeżeli twoje doświadczenie życiowe byłoby coś warte, nie potrzebowałbyś systemu emerytalnego."
        },
        {
            "id": 245,
            "date": "17.02.2024",
            "joke": "Donald Trump i Kim Dzong Un dyskutować będą głównie o respektowaniu praw człowieka, prowokacyjnych zachowaniach na  arenie międzynarodowej oraz o reformie systemu politycznego, tak by władza nie spoczywała w rękach jednej osoby. A  potem zmienią temat, bo ile można gadać o Polsce."
        },
        {
            "id": 244,
            "date": "17.02.2024",
            "joke": "- Za co siedzisz?<br>  - Za lajkowanie.<br>  - Kłamiesz. Za lajkowanie dają 5 lat, a ty dostałeś 8. Musiałeś coś repostować."
        },
        {
            "id": 243,
            "date": "17.02.2024",
            "joke": "Bloger z Magadanu zarzekał się, że to prawda: Pewien człowiek musiał pilnie polecieć z Magadanu do Jakucka. Lot był  jedynie z przesiadka w Moskwie. Nie miał wyjścia i zdecydował się na ten lot z przesiadką. Niestety z powodu złych  warunków pogodowych nad Jakuckiem podjęto decyzję, że samolot wyląduje na lotnisku w Magadanie."
        },
        {
            "id": 242,
            "date": "17.02.2024",
            "joke": "Putin potajemnie rządzi Europą i całym światem. Potajemnie kieruje światową energią i steruje wyborami w Ameryce.  Jedyną rzeczą, która uniemożliwia Amerykanom uznanie go za supermana, jest to, że nie nosi stringów na wierzchu  garnituru."
        },
        {
            "id": 241,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli widzisz płaczącą kobietę podejdź i spytaj, czy to przez fryzurę."
        },
        {
            "id": 240,
            "date": "17.02.2024",
            "joke": "Jestem tak bardzo spłukany, że na obiad planuję wziąć głęboki wdech."
        },
        {
            "id": 239,
            "date": "17.02.2024",
            "joke": "Dlaczego, gdy dom jest nawiedzony, to zawsze przez jakąś babkę z XVII wieku? Wyobraźcie sobie ducha z 2007 roku  krzyczącego „It's Britney, bitch!” o 3 rano."
        },
        {
            "id": 238,
            "date": "17.02.2024",
            "joke": "Ja: Chciałbym podróżować!<br>  Moje konto: Chyba między zakładami pracy."
        },
        {
            "id": 237,
            "date": "17.02.2024",
            "joke": "Najbardziej przerażają mnie rówieśnicy. Czemu oni są tacy starzy?"
        },
        {
            "id": 236,
            "date": "17.02.2024",
            "joke": "- Jak tam weekend?<br>  - Ciemno, jasno, ciemno, jasno, ciemno, poniedziałek."
        },
        {
            "id": 235,
            "date": "17.02.2024",
            "joke": "Ech, ta dzisiejsza młodzież... 16 lat ma, z chłopakiem się prowadza, a matce życzeń z okazji 30 urodzin to zapomniała  złożyć..."
        },
        {
            "id": 234,
            "date": "17.02.2024",
            "joke": "Nigdy nie zapomnę ostatnich słów mojego syna zanim został brutalnie uduszony - \"Tato, jestem gejem\"."
        },
        {
            "id": 233,
            "date": "17.02.2024",
            "joke": "Przechodząc obok samochodu wypełnionego czarnymi gangsterami widziałem jak Ci na mój widok zamykają drzwi i  odjeżdżają. Myślałem, że mam respekt na dzielnicy dopóki nie uświadomiłem sobie, że to było moje auto."
        },
        {
            "id": 232,
            "date": "17.02.2024",
            "joke": "Facebook wchodzi do Chin. Innymi słowy Mark Zuckerberg poślubił Priscille Chan."
        },
        {
            "id": 231,
            "date": "17.02.2024",
            "joke": "- Dzień dobry, dokumenty proszę. Wie pan, dlaczego pana zatrzymuję?<br>  - Bo kiepsko szło panu w szkole?&nbsp;"
        },
        {
            "id": 230,
            "date": "17.02.2024",
            "joke": "Moja żona jest dziennikarką. Żeby sprawdzić czy ludzie faktycznie źle reagują na widok kobiet w burkach sama  postanowiła nosić jedną przez tydzień. Już pierwszego dnia została opluta, pobita, grożono jej śmiercią. A to wszystko  jeszcze przed wyjściem z domu."
        },
        {
            "id": 229,
            "date": "17.02.2024",
            "joke": "Rozmiar nie ma znaczenia. Chyba, że chodzi o guza."
        },
        {
            "id": 228,
            "date": "17.02.2024",
            "joke": "- Dajcie mi kałacha, zapasowy magazynek i uczynię świat lepszym.<br>  - E tam, i dziesięć magazynków by nie wystarczyło.<br>  - Nie powiedziałem \"idealnym\" tylko \"lepszym\"."
        },
        {
            "id": 227,
            "date": "17.02.2024",
            "joke": "Wchodzi komendant Auschwitz do komory:<br>  - Mam dla was dwie wiadomości. Po pierwsze, kończy nam się gaz.<br>  - Huraaaa!<br>  - Po drugie, starczy jeszcze na waszą partię."
        },
        {
            "id": 226,
            "date": "17.02.2024",
            "joke": "W tresurze niewolnika najważniejsze jest, by nauczyć go bać się wolności."
        },
        {
            "id": 225,
            "date": "17.02.2024",
            "joke": "Kiedyś ludzie się nie szczepili, nie brali leków, żyli w zgodzie z naturą. I co? I w wieku 40 lat nie chorowali na  nic. Bo nie żyli."
        },
        {
            "id": 224,
            "date": "17.02.2024",
            "joke": "Urodziłem się zmęczony, żyję żeby odpocząć."
        },
        {
            "id": 223,
            "date": "17.02.2024",
            "joke": "Ja i jogging? Jeżeli zobaczysz jak biegnę to spierdalaj, bo to znaczy, że goni mnie coś strasznego."
        },
        {
            "id": 222,
            "date": "17.02.2024",
            "joke": "Wreszcie wygarnąłem żonie i teściowej jak bardzo mam na nie wyjebane. \"Spodziewałem się ciebie.\" - powiedział  święty Piotr."
        },
        {
            "id": 221,
            "date": "17.02.2024",
            "joke": "Kupiłem książkę z serią krótkich opowiastek o morderstwach, gwałtach, pedofilii, kazirodztwie i niewolnictwie. Co za  pojeb napisał ten Koran?"
        },
        {
            "id": 220,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Nie możesz zasnąć? Włącz budzik. Mózg pomyśli, że pora do roboty i automatycznie zechce jeszcze pospać."
        },
        {
            "id": 219,
            "date": "17.02.2024",
            "joke": "- Kochanie, kup mi nowy telefon...<br>  - A co z twoim starym?<br>  - On już mi futro obiecał."
        },
        {
            "id": 218,
            "date": "17.02.2024",
            "joke": "W poradni małżeńskiej:<br>  - Moja żona i ja coraz bardziej stajemy się sobie obcy. Czy jest jakikolwiek sposób na przyspieszenie tego procesu?"
        },
        {
            "id": 217,
            "date": "17.02.2024",
            "joke": "\"Zobaczyć Paryż i umrzeć\" - motto ISIS."
        },
        {
            "id": 216,
            "date": "17.02.2024",
            "joke": "Kobieto! Dbaj o siebie. Wewnętrzne piękno jest bardzo ważne, ale nie zapewni ci darmowego drinka."
        },
        {
            "id": 215,
            "date": "17.02.2024",
            "joke": "Jeśli jest ładna, powiedz jej, że jest mądra.<br>  Jeśli jest mądra, powiedz jej, że jest ładna.<br>  Jeśli nie jesteś pewny, powiedz jej, że schudła."
        },
        {
            "id": 214,
            "date": "17.02.2024",
            "joke": "O. J. Simpson ma wszystko, o czym marzy każdy mężczyzna. Heisman Trophy i martwą żonę."
        },
        {
            "id": 213,
            "date": "17.02.2024",
            "joke": "Rozwiodłem się z żoną. Ona wzięła dom i dzieciaki, ja swoje życie i duszę."
        },
        {
            "id": 212,
            "date": "17.02.2024",
            "joke": "Pewien koleś pobił rekord Guinessa w kopaniu się w głowę. Udało mu się to 134 razy w ciągu minuty. Poprzedni rekord  wynosił zero."
        },
        {
            "id": 211,
            "date": "17.02.2024",
            "joke": "Czekam na nowe Rainbow Six: Mandalay Bay. Grafika w gameplayu, który pokazywali na CNN, była naprawdę zajebista."
        },
        {
            "id": 210,
            "date": "17.02.2024",
            "joke": "Co zdarzy się w Vegas zostaje w Vegas. No chyba, że zastrzelisz pięćdziesiąt osób - to musi się roznieść."
        },
        {
            "id": 209,
            "date": "17.02.2024",
            "joke": "Dziś wieczorem Jarosław Kaczyński miał poważną operację. Szydło mu z dupy wyciągali."
        },
        {
            "id": 208,
            "date": "17.02.2024",
            "joke": "Kiepscy złodzieje trafiają do pierdla, najlepsi - na listę Forbes."
        },
        {
            "id": 207,
            "date": "17.02.2024",
            "joke": "Prezydent Donald, wiceprezydent Mickey... Ile musiał dać Disney na kampanię prezydencką?"
        },
        {
            "id": 206,
            "date": "17.02.2024",
            "joke": "Czy Polacy śnią o elektrycznych Passatach?"
        },
        {
            "id": 205,
            "date": "17.02.2024",
            "joke": "Gdańska policja zatrzymała starszego mężczyznę z zaburzeniami psychicznymi, który dla własnych potrzeb wykopywał  zwłoki. Ktoś się orientuje, czy chodzi o Kaczyńskiego?"
        },
        {
            "id": 204,
            "date": "17.02.2024",
            "joke": "York - jedyny kot, który szczeka."
        },
        {
            "id": 203,
            "date": "17.02.2024",
            "joke": "W Moskwie płonie archiwum kontrwywiadu. Spłonęło już ponad 150 000 tajnych dokumentów. Podobno nie ma możliwości  szybkiego ugaszenia pożaru - stale dorzucają nowe papiery."
        },
        {
            "id": 202,
            "date": "17.02.2024",
            "joke": "W Polsce jest wiele miejsc, gdzie zatrzymał się czas. Tam swoje sortownie postawiła Poczta Polska."
        },
        {
            "id": 201,
            "date": "17.02.2024",
            "joke": "- Czy zgadzasz się z nią być w zdrowiu i w chorobie, w bogactwie i w biedzie, póki śmierć was nie rozłączy?<br>  - Tak, nie, tak, nie, nie."
        },
        {
            "id": 200,
            "date": "17.02.2024",
            "joke": "Zapamiętaj, żebranie o kasę od swoich rodziców to NIE jest freelancing."
        },
        {
            "id": 199,
            "date": "17.02.2024",
            "joke": "Kilka godzin później obsługa zauważana radarze tą samą awionetkę. Ponownie ląduje ona na pasie, tym razem z dwoma  osobami na pokładzie. Ponownie zostaje otoczona przez wojsko. Wychodzi pilot z rękoma nad głową i mówi: \"Panowie,  zróbcie ze mną co chcecie, ale ktoś musi wytłumaczyć mojej żonie, gdzie spędziłem wczorajszą noc.\""
        },
        {
            "id": 198,
            "date": "17.02.2024",
            "joke": "Strefa 51. Obsługa zauważa na radarze cywilną awionetkę, która chwilę później ląduje na pasie. Oczywiście natychmiast  zostaje ona otoczona przez wojsko. Podczas przesłuchania pilot zeznał, że wracał do domu w Las Vegas, zgubił się nad  pustynią i przez kończące się paliwo musiał lądować na pierwszym dostępnym pasie. Nad ranem, po potwierdzeniu jego  tożsamości, postanowiono faceta zwolnić. Poinstruowano go, że nikomu ma o tej sytuacji nie mówić, nic nie widział,  nigdy tu nie był i nigdy więcej ma nie wracać, po czym zatankowano awionetkę i wskazano drogą."
        },
        {
            "id": 197,
            "date": "17.02.2024",
            "joke": "Ilu Niemców potrzeba, żeby zmienić żarówkę?<br>  Jednego. Nie mają poczucia humoru, ale są efektywni."
        },
        {
            "id": 196,
            "date": "17.02.2024",
            "joke": "Teoretycznie istnieje równoległy wymiar, w którym prawie każdy mieszkaniec ziemi jest sparaliżowany i jeździ na  wózku, a jeden z najgenialniejszych naukowców jest w 100% sprawny i inny piszą o nim dowcipy."
        },
        {
            "id": 195,
            "date": "17.02.2024",
            "joke": "- Czym się różni Polak od Niemca?<br>  - Niemiec trzyma kapuchę w banku, a Polak w beczce."
        },
        {
            "id": 194,
            "date": "17.02.2024",
            "joke": "- Dzień dobry, proszę przepisać na naszą organizację swoje mieszkanie.<br>  - Pojebało cię?<br>  - O, przepraszam, nie od tego zacząłem. No, to jeszcze raz. Czy chce pan porozmawiać o Bogu?"
        },
        {
            "id": 193,
            "date": "17.02.2024",
            "joke": "Trzy słowa - to dwa słowa."
        },
        {
            "id": 192,
            "date": "17.02.2024",
            "joke": "Kobieto, uważaj! Jeżeli zaproponowałaś swojemu facetowi pozycję \"na pieska\", a on się wypiął, to może być członkiem  ONRu."
        },
        {
            "id": 191,
            "date": "17.02.2024",
            "joke": "Maria Curie do męża:<br>  - Idź do piwnicy po słoiki.<br>  - Chodź ze mną, poświecisz mi."
        },
        {
            "id": 190,
            "date": "17.02.2024",
            "joke": "- Czym się różni Adrian od Kermita?<br>  - Nie było oczywiste, czyja ręka jest w dupie Kermita."
        },
        {
            "id": 189,
            "date": "17.02.2024",
            "joke": "Z ostatniej chwili:<br>  Stanisław Piotrowicz zatrzymany. Miał PZPR wypisane na twarzy."
        },
        {
            "id": 188,
            "date": "17.02.2024",
            "joke": "Żyd. Idiota. Pedał. Komuch. Satanista. Kurwa. A ciebie jak nazywają prawdziwi katolicy?"
        },
        {
            "id": 187,
            "date": "17.02.2024",
            "joke": "Urodziłem się w czasach, kiedy Pluton był planetą, a Ziemia była kulista."
        },
        {
            "id": 186,
            "date": "17.02.2024",
            "joke": "- Tato, co to jest poprawność polityczna?<br>  - Wowaczka, co ty masz z oczami?<br>  - Zeza rozbieżnego, tato, ale co to ma do rzeczy?<br>  - Jeżeli ktoś powie, że masz dobre widzenie peryferyjne, to to będzie poprawność polityczna."
        },
        {
            "id": 185,
            "date": "17.02.2024",
            "joke": "Nigdy nie krzycz na zmywarkę. One wszystko pamiętają i przy każdej okazji wypomną."
        },
        {
            "id": 184,
            "date": "17.02.2024",
            "joke": "- Tato, czemu ty masz białą skórę, a ja czarną ?<br>  - Synku, spójrz tylko na mamę...<br>  - Przecież mama też jest biała...<br>  - Tak, ale to kurwa."
        },
        {
            "id": 183,
            "date": "17.02.2024",
            "joke": "Załapałem się na praktyki do kliniki zajmującej się waginoplastyką. Wypieprzyli mnie po tygodniu. Robiłem za długie  przerwy."
        },
        {
            "id": 182,
            "date": "17.02.2024",
            "joke": "Zachodnia Europa walczy z islamskim terroryzmem kredkami i zdjęciami profilowymi na Faceboooku. Co za głupki. Pokażmy  im jak to się robi odmawiając różaniec na granicach."
        },
        {
            "id": 181,
            "date": "17.02.2024",
            "joke": "- Nie wiesz, gdzie można kupić tanie tabletki dla zmywarki?<br>  - O, twoja żona też uzależniona od narkotyków?<br>  - Nie, boję się, żeby nie zaciążyła."
        },
        {
            "id": 180,
            "date": "17.02.2024",
            "joke": "Nie ma sposobu na przekonanie drugiej żony, że nigdy jej nie opuścisz."
        },
        {
            "id": 179,
            "date": "17.02.2024",
            "joke": "Pierwsze pokolenie Polaków od 1612, które się cieszy, że jedzie do Rosji."
        },
        {
            "id": 178,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli zamierzasz coś ukraść w supermarkecie, poczekaj aż przez bramki będzie przechodził jakiś czarny i wyjdź razem z  nim. Jego zatrzymają domyślnie do sprawdzenia, a ty sobie spokojnie pójdziesz."
        },
        {
            "id": 177,
            "date": "17.02.2024",
            "joke": "Mawiają, że gdyby światem rządziły kobiety nie byłoby wojen. To prawda. Prowadzenie działań wojennych wymaga  strategicznego myślenia."
        },
        {
            "id": 176,
            "date": "17.02.2024",
            "joke": "Legendy o smokach jedzących dziewice to propagandowy element średniowiecznej polityki prorodzinnej."
        },
        {
            "id": 175,
            "date": "17.02.2024",
            "joke": "Marszałkowska stoi, Dolina Służewiecka stoi, Most Grota stoi. Wiadomości dla kierowców sponsorował producent leku na  potencję."
        },
        {
            "id": 174,
            "date": "17.02.2024",
            "joke": "Jeżeli Bóg jest przeciwko cudzołóstwu, to dlaczego sam miał dziecko z zamężną kobietą?"
        },
        {
            "id": 173,
            "date": "17.02.2024",
            "joke": "2017 rok:<br>  1) Katalonia ogłasza niepodległość.<br>  2) Łódź idzie w ślady Katalonii.<br>  3) Etiopia nie jest już najbiedniejszym krajem świata."
        },
        {
            "id": 172,
            "date": "17.02.2024",
            "joke": "Oczekiwana długość życia z AIDS to 30-40 lat. Nic dziwnego, że w Afryce tak chętnie to łapią, skoro może wydłużyć im  życie."
        },
        {
            "id": 171,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli jesteś niskiego wzrostu, weź do kina małą butelkę wody i rozlej na siedzeniu przed tobą. Teraz możesz cieszyć  się filmem."
        },
        {
            "id": 170,
            "date": "17.02.2024",
            "joke": "- Panie doktorze, dlaczego przyszył mi pan pierś na czole?!<br>  - Jestem artystą. I tak to widzę."
        },
        {
            "id": 169,
            "date": "17.02.2024",
            "joke": "- Towarzystwo opieki nad zwierzętami, słucham.<br>  - Witam, wokół elektrowni jądrowej w Czarnobylu biega samotny wilk, należy go przenieść do bardziej odpowiedniego  miejsca, najlepiej zoo, gdzie będzie dobrze karmiony.<br>  - Tak, trudna sprawa. Ale teraz nie mamy specjalnego sprzętu do łapania i transportu dzikich zwierząt, a nie możemy  przewozić agresywnego zwierzęcia razem z ludźmi.<br>  - Ale ja jestem absolutnie nie agresywny, przysięgam. Nikogo nie ugryzę. Zabierzcie mnie, proszę."
        },
        {
            "id": 168,
            "date": "17.02.2024",
            "joke": "Bogactwo Arabii Saudyjskiej czy Zjednoczonych Emiratów Arabskich nie wzięło się z ropy. Oni po prostu nie pozwalają  kobietom przepierdalać pieniędzy."
        },
        {
            "id": 167,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Wkurzyły cię dzieciaki hałasujące pod oknami? Rozwieś w okolicy plakaty z ostrzeżeniem przed grasującym pedofilem.  Jakiś czas będzie spokój."
        },
        {
            "id": 166,
            "date": "17.02.2024",
            "joke": "- Cudzołożyłeś? - spytał święty Piotr.<br>  - Klapnij sobie wygodnie, czeka nas dłuższa pogawędka - odpowiedział Hugh Hefner."
        },
        {
            "id": 165,
            "date": "17.02.2024",
            "joke": "Kobieta nie wie, czego jej brakuje, dopóki jej przyjaciółka się tym nie pochwali."
        },
        {
            "id": 164,
            "date": "17.02.2024",
            "joke": "Zamiast zrzucać dzieci z urwiska współcześni Spartanie robiliby \"test fistaszka\" i czekali na reakcję alergiczną."
        },
        {
            "id": 163,
            "date": "17.02.2024",
            "joke": "Myślicie, że Agnieszka Chylińska powiedziała już sobie dość?"
        },
        {
            "id": 162,
            "date": "17.02.2024",
            "joke": "Zawsze zastanawiało mnie, jak żyli i zachowywali się ludzie w średniowieczu. Postanowiłem więc w końcu pojechać do  Sosnowca i samemu się przekonać."
        },
        {
            "id": 161,
            "date": "17.02.2024",
            "joke": "Największym policzkiem dla lekarzy jest udział Suskiego w negocjacjach. On nie jest przygotowany intelektualnie nawet  do obierania marchwi."
        },
        {
            "id": 160,
            "date": "17.02.2024",
            "joke": "Nie można powiedzieć, że uprawiasz seks przedmałżeński, jeżeli nie masz w planach poślubienia tej dziewczyny."
        },
        {
            "id": 159,
            "date": "17.02.2024",
            "joke": "\"Nie kradnij, bo nie pójdziesz do raju.\" - to jest wiara.<br>  \"Nie kradnij, a jeżeli ukradłeś, to zanieś do świątyni pieniądze i wtedy trafisz do raju.\" - to jest religia."
        },
        {
            "id": 158,
            "date": "17.02.2024",
            "joke": "Żeniąc się mężczyzna liczy na to, że pizda to jest to, co wybranka ma między nogami, a nie cała reszta."
        },
        {
            "id": 157,
            "date": "17.02.2024",
            "joke": "Każdy dzień jest przygodą, jeśli jesteś niekompetentny."
        },
        {
            "id": 156,
            "date": "17.02.2024",
            "joke": "Według kościoła oral i anal to zło, a seks najlepiej uprawiać po misjonarsku. A co mam zrobić, jeżeli nie kręci mnie  pranie mózgów tubylcom i ruchanie ich dzieci?"
        },
        {
            "id": 155,
            "date": "17.02.2024",
            "joke": "- Gdybyś mógł być zwierzęciem to jakim?<br>  - Dżdżownicą.<br>  - Dżdżownicą?! Dlaczego?<br>  - Bo może leżeć i chodzić jednocześnie."
        },
        {
            "id": 154,
            "date": "17.02.2024",
            "joke": "Jaka jest najpopularniejsza gra w Niemczech?<br>  Mein Kraft."
        },
        {
            "id": 153,
            "date": "17.02.2024",
            "joke": "Jadłem lunch z koleżanką z pracy kiedy do restauracji weszła moja żona:<br>  - To moja żona, muszę się ukryć!<br>  - Nie bądź głupi, dlaczego miałaby być podejrzliwa o osobę, z którą pracujesz?<br>  - Będzie. Myśli, że nie żyję od 2015 roku."
        },
        {
            "id": 152,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli po powrocie do domu uwalisz się na kanapie i nie będziesz się z niej ruszał aż do pójścia spać, pensji powinno  wystarczyć na cały miesiąc."
        },
        {
            "id": 151,
            "date": "17.02.2024",
            "joke": "Dlaczego przestałeś oglądać Cartoon Network?<br>  Dorosłem: 1%<br>  Puszczają gówna: 99%"
        },
        {
            "id": 150,
            "date": "17.02.2024",
            "joke": "Szpital. Poranny obchód. Pacjent zwraca się do ordynatora:<br>  - Pacjent z lewej umarł przedwczoraj, pacjent z prawej - wczoraj. Nie możecie zrobić osobnej sali dla  dogorywających?<br>  - Panie pacjent, coś panu powiem w sekrecie. Mamy taką salę."
        },
        {
            "id": 149,
            "date": "17.02.2024",
            "joke": "Kobiety dużo mówią, za to faceci więcej myślą. To dlatego, że faceci mają dwie głowy, a kobiety cztery wargi."
        },
        {
            "id": 148,
            "date": "17.02.2024",
            "joke": "Jestem za zakazem handlu w niedziele. Gdzie mogę zgłosić się po rentę dla inwalidy umysłowego?"
        },
        {
            "id": 147,
            "date": "17.02.2024",
            "joke": "Każdy z nas ma dwie twarze. Łatwo to zobaczysz porównując swoje odbicie w lustrze ze zdjęciem profilowym."
        },
        {
            "id": 146,
            "date": "17.02.2024",
            "joke": "- Postanowiłam nazwać moją lewą pierś Banda, a prawą Wanda.<br>  - Bo?<br>  - Bo w latach '80 były całkiem popularne, a teraz zero zainteresowania."
        },
        {
            "id": 145,
            "date": "17.02.2024",
            "joke": "Szczoteczka - włosy na patyku do zębów.<br>  Grzebień - zęby na patyku do włosów.&nbsp;<br>  Jak ludzie coś wymyślą..."
        },
        {
            "id": 144,
            "date": "17.02.2024",
            "joke": "- Poszukuję samowystarczalnego mężczyzny...<br>  - Jeżeli on będzie samowystarczalny, to po co mu ty?"
        },
        {
            "id": 143,
            "date": "17.02.2024",
            "joke": "Miałem świetną młodość, mam co wspominać. Ale jeśli moje dziecko postanowi zachowywać się w ten sam sposób, to nie  wiem, co mu zrobię."
        },
        {
            "id": 142,
            "date": "17.02.2024",
            "joke": "Wkrótce do przegranych, którzy nie zdążyli kupić bitcoinów, dojdą przegrani, którzy nie zdążyli ich sprzedać."
        },
        {
            "id": 141,
            "date": "17.02.2024",
            "joke": "Najlepsze życzenia noworoczne: \"Aby ten rok nie stał się takim, który jest napisany po kresce.\""
        },
        {
            "id": 140,
            "date": "17.02.2024",
            "joke": "- Kim jesteś?<br>  - Mężczyzną z twoich marzeń.<br>  - A dlaczego jesteś tylko jeden?"
        },
        {
            "id": 139,
            "date": "17.02.2024",
            "joke": "Święta to czas, w którym dowiaduje się ile nieznanych mi numerów ma mój numer."
        },
        {
            "id": 138,
            "date": "17.02.2024",
            "joke": "Ciekawostka: Polscy specjaliści potrafią odczytać w rejestratorze TU-154 ślady wybuchów, ale nie potrafią odczytać w  rejestratorze BMW prędkości samochodu."
        },
        {
            "id": 137,
            "date": "17.02.2024",
            "joke": "Uważajcie na drogach. Wielu kierowców się upija i daje żonom prowadzić."
        },
        {
            "id": 136,
            "date": "17.02.2024",
            "joke": "Jestem na diecie rotacyjnej - gdzie się nie obrócę tam coś zjem."
        },
        {
            "id": 135,
            "date": "17.02.2024",
            "joke": "Nie masz planów na wieczór? Pamiętaj, że w dniu dzisiejszym oficjalnie pojawiły się pierwsze gwiazdy porno urodzone w  2000 roku."
        },
        {
            "id": 134,
            "date": "17.02.2024",
            "joke": "W dzisiejszych czasach prawdziwy przyjaciel prędzej poda ci łapę niż rękę."
        },
        {
            "id": 133,
            "date": "17.02.2024",
            "joke": "USA: W ISIS walczy 3200 Rosjan!<br>  Rosja: A skąd wy o tym wiecie?<br>  USA: Bo wypłacamy im pensje..."
        },
        {
            "id": 132,
            "date": "17.02.2024",
            "joke": "Jeżeli w dwa lata udało się cofnąć Polskę do okresu PRL, to po co jeszcze cofać czas o godzinę?"
        },
        {
            "id": 131,
            "date": "17.02.2024",
            "joke": "Komunistyczna Partia Federacji Rosyjskiej obchodzi stulecie rewolucji październikowej w hotelu \"Renaissance Moscow  Monarch Center\". Lenin się w grobie przewraca."
        },
        {
            "id": 130,
            "date": "17.02.2024",
            "joke": "- Dlaczego niektórzy ludzie jeżdżą nowymi samochodami?<br>  - Bo do metra na kredyt nie wpuszczają."
        },
        {
            "id": 129,
            "date": "17.02.2024",
            "joke": "- Mamo, a gdzie ludzie upuszczali smartfony, zanim wynaleziono sedesy?"
        },
        {
            "id": 128,
            "date": "17.02.2024",
            "joke": "- Czym się różni Smoleńsk od Normandii?<br>  - W Normandii udało się wylądować."
        },
        {
            "id": 127,
            "date": "17.02.2024",
            "joke": "Dzieci czasem wydają z siebie straszne dźwięki. Na przykład domagają się pieniędzy."
        },
        {
            "id": 126,
            "date": "17.02.2024",
            "joke": "Obejrzałem \"Harry'ego Pottera\". Najbardziej nierealistyczną rzeczą w filmie jest to, że wszystkie dzieci  wykorzystują wiedzę otrzymaną w szkole."
        },
        {
            "id": 125,
            "date": "17.02.2024",
            "joke": "Kiedy wydaje ci się, że nie może być gorzej, pamiętaj, że zawsze możesz dostać uczulenia na alkohol."
        },
        {
            "id": 124,
            "date": "17.02.2024",
            "joke": "Jeżeli jakiś problem można rozwiązać za pomocą pieniędzy, to nie jest to problem, tylko wydatek."
        },
        {
            "id": 123,
            "date": "17.02.2024",
            "joke": "Od miesiąca jestem na diecie wegetariańskiej. Dziś przypadkiem ugryzłem się w język. Pycha..."
        },
        {
            "id": 122,
            "date": "17.02.2024",
            "joke": "Cena benzyny to ponad 5 zł za litr.<br>  Cena marchwi to mniej niż 1 zł za kilogram.<br>  Czas osiodłać konie."
        },
        {
            "id": 121,
            "date": "17.02.2024",
            "joke": "Logika PiS:<br>  1) My będziemy bezstronni, merytoryczni, fachowi.<br>  2) No dobra, nie jesteśmy, ale oni kradli więcej niż my.<br>  3) No dobra, nie kradli więcej, ale my w słusznym celu.<br>  4) No dobra, w takim samym, ale nie musicie nam o tym przypominać.<br>  5) Mówienie nam tego w twarz jest metodą ubecką."
        },
        {
            "id": 120,
            "date": "17.02.2024",
            "joke": "- Chcę zostać milionerem, jak mój ojciec.<br>  - Twój ojciec jest milionerem?<br>  - Nie, on też chce."
        },
        {
            "id": 119,
            "date": "17.02.2024",
            "joke": "- Wczoraj moja żona uciekła z moim najlepszym przyjacielem, Mariuszem.<br>  - Od kiedy to Mariusz jest twoim najlepszym przyjacielem?<br>  - Od wczoraj."
        },
        {
            "id": 118,
            "date": "17.02.2024",
            "joke": "To, że Niemcy dostali manto w Rosji mnie nie dziwi. Ale żeby w czerwcu?"
        },
        {
            "id": 117,
            "date": "17.02.2024",
            "joke": "Droższe od zdrowia może być tylko leczenie."
        },
        {
            "id": 116,
            "date": "17.02.2024",
            "joke": "W centrum Sosnowca wybiła studzienka kanalizacyjna. Teraz wygląda lepiej."
        },
        {
            "id": 115,
            "date": "17.02.2024",
            "joke": "Dobra impreza? Kiedy nad ranem wracasz do domu metrem, a&nbsp;w twoim mieście nie ma metra..."
        },
        {
            "id": 114,
            "date": "17.02.2024",
            "joke": "Apetyczne dziewczyny zaskakująco często są niestrawne."
        },
        {
            "id": 113,
            "date": "17.02.2024",
            "joke": "Lubię ten listopadowy okres - można się nie przejmować brzdękiem flaszek w reklamówce, inni i tak pomyślą, że to  znicze."
        },
        {
            "id": 112,
            "date": "17.02.2024",
            "joke": "- Na czym polega różnica między dominikanami a jezuitami?<br>  - Dominikanie zostali powołani w XIII wieku w celu walki z herezją albigensów.<br>  - A jezuici?<br>  - Jezuici zostali powołani w XVI wieku w celu walki z herezją protestantyzmu.<br>  - No to na czym polega różnica?<br>  - A widziałeś kiedyś jakiegoś albigensa?"
        },
        {
            "id": 111,
            "date": "17.02.2024",
            "joke": "- Dzień dobry. Ja z działu ofert. Czy to pan szuka pracy?<br>  - Tak. Ja.<br>  - W takim razie jak już pan znajdzie, to proszę do mnie zadzwonić. Mam dla pana specjalną ofertę kredytu na  szczególnie atrakcyjnych warunkach."
        },
        {
            "id": 110,
            "date": "17.02.2024",
            "joke": "Lenin obiecał ziemię chłopom, ale był to żart i chłopi ziemi nie dostali. Chłopi też byli żartownisiami, więc Lenin  też do tej pory ziemi nie widział."
        },
        {
            "id": 109,
            "date": "17.02.2024",
            "joke": "Zasadniczo kobieta obraża się w dwóch przypadkach:<br>  1) Jeśli widzisz w niej kobietę, a nie człowieka.<br>  2) Jeśli widzisz w niej człowieka, a nie kobietę."
        },
        {
            "id": 108,
            "date": "17.02.2024",
            "joke": "Dlaczego Elon Musk powierzył misję wylądowania na Marsie SpaceX?<br>  Bo gdyby wybrał SpaceY wylądowałby na czternastoletnim chłopcu."
        },
        {
            "id": 107,
            "date": "17.02.2024",
            "joke": "Moja dziewczyna została gwiazdą porno. Macie może pomysł jak ją o tym poinformować?"
        },
        {
            "id": 106,
            "date": "17.02.2024",
            "joke": "Nie wydaje wam się, że David Copperfield gdzieś zniknął?"
        },
        {
            "id": 105,
            "date": "17.02.2024",
            "joke": "Dziecko z listonoszem to musi być ciekawe przeżycie: ciąża trwa 12 miesięcy, poród odbywa się w godzinach, w których  nie ma nikogo w domu, a dziecko rodzi się poobijane."
        },
        {
            "id": 104,
            "date": "17.02.2024",
            "joke": "Statystyki policyjne:<br>  Przestępczość wśród nieletnich rośnie.<br>  Pedofilów co raz mniej."
        },
        {
            "id": 103,
            "date": "17.02.2024",
            "joke": "Women's World Cup:&nbsp;22 girls, 1 cup"
        },
        {
            "id": 102,
            "date": "17.02.2024",
            "joke": "Ludzie są jak zęby. Białe są piękne, żółte i czarne po prostu brzydzą."
        },
        {
            "id": 101,
            "date": "17.02.2024",
            "joke": "Moja żona weszła dziś nago do sypialni mówiąc:<br>  - Hej chłopcze, masz dzisiaj szczęście, wiesz...<br>  - Wiem, dzwonił telefon. Twoja mama nie żyje."
        },
        {
            "id": 100,
            "date": "17.02.2024",
            "joke": "Kiedy była epidemia ptasiej grypy zabijaliśmy ptaki.<br>  Kiedy panowała świńska grypa zabijaliśmy świnie.<br>  A ja się kurwa pytam, co jest z czarną ospą?"
        },
        {
            "id": 99,
            "date": "17.02.2024",
            "joke": "Sex turystyka po Polsku: Na dwutygodniowe wakacje wysyła się klientów samolotem opłaconym w jedną stronę do hotelu  opłaconego na 2 doby. I niech się pierdolą..."
        },
        {
            "id": 98,
            "date": "17.02.2024",
            "joke": "- Ilu rudych potrzeba do wkręcenia żarówki?<br>  - Mam nadzieje, że wystarczy jeden. Przecież nikt mu nie pomoże.&nbsp;"
        },
        {
            "id": 97,
            "date": "17.02.2024",
            "joke": "Zastąpienie setki rzymskich bogów jednym chrześcijańskim było ostatnim skutecznym odchudzeniem administracji w  historii ludzkości."
        },
        {
            "id": 96,
            "date": "17.02.2024",
            "joke": "- Piszą, że woda podrożała...&nbsp;<br>  - O, wreszcie i abstynentom się do dupy dobrali!"
        },
        {
            "id": 95,
            "date": "17.02.2024",
            "joke": "- Sylwia, poseksimy się?<br>  - Dawaj!<br>  - No to weź..."
        },
        {
            "id": 94,
            "date": "17.02.2024",
            "joke": "W sejmie jest problem z upośledzonymi, ale przecież ludzie sami ich wybrali..."
        },
        {
            "id": 93,
            "date": "17.02.2024",
            "joke": "Fizycy się mylą. Moja dziewczyna robi coś z niczego przez cały czas."
        },
        {
            "id": 92,
            "date": "17.02.2024",
            "joke": "[ksiadz.teofil] Kawaler Orderu Podwiązki Lecha Kaczyńskiego, dźwiga na swoich barkach obłudę, zachłanność, pazerność  i chciwość władzy. Nie wytrzymałby tego umięśnione nogi sztangisty, a co dopiero małe koślawe nóżki-kaczuszki."
        },
        {
            "id": 91,
            "date": "17.02.2024",
            "joke": "Seks przed ślubem to grzech. Dla wyrównania seks po ślubie to pokuta."
        },
        {
            "id": 90,
            "date": "17.02.2024",
            "joke": "Kobiety twierdzą, że faceci nie potrafią skupić się na kilku rzeczach jednocześnie. Bzdura. Potrafię rozmawiać z moją  żona i myśleć o jej siostrze w tym samy czasie."
        },
        {
            "id": 89,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jesteś zmęczona patrzeniem, jak twój chłopak gra na kompie? Przeszkadza ci, że ciągle wychodzi z kolegami? Znajdź  sobie, kurwa, jakieś zajęcie."
        },
        {
            "id": 88,
            "date": "17.02.2024",
            "joke": "Podczas inauguracji Putin powiedział, że tak jak dotychczas, tak i teraz będzie służył ludziom. Listę tych ludzi  publikuje w swoim rankingu Forbes."
        },
        {
            "id": 87,
            "date": "17.02.2024",
            "joke": "Matura z matematyki to chuj. Zobaczycie jak ciężko będzie złożyć McWrapa w mniej niż minutę..."
        },
        {
            "id": 86,
            "date": "17.02.2024",
            "joke": "Gdy za dzieciaka starsi mówili \"już ja ci dam powód do płaczu\" myślałem, że nie dostanę lodów, a nie zjebanie rynku  nieruchomości i oddanie władzy bandzie debili."
        },
        {
            "id": 85,
            "date": "17.02.2024",
            "joke": "Dorosłość zaczyna się w momencie, w którym \"Dzień Świra\" przestaje być komedią."
        },
        {
            "id": 84,
            "date": "17.02.2024",
            "joke": "Po czym poznać Szkota na wakacjach w Tajlandii?<br>  To ten, który wchodzi do burdelu z własnymi dziećmi."
        },
        {
            "id": 83,
            "date": "17.02.2024",
            "joke": "Kończące się piwo ma tę zaletę, że przybliża nas do kolejnego."
        },
        {
            "id": 82,
            "date": "17.02.2024",
            "joke": "Krysia była prostą dziewczyną. Lubiła spacery za ręce i ostre grzmocenie."
        },
        {
            "id": 81,
            "date": "17.02.2024",
            "joke": "Rodzice traktują mnie jak Boga -&nbsp;z czasem&nbsp;przestali we mnie wierzyć."
        },
        {
            "id": 80,
            "date": "17.02.2024",
            "joke": "Wykładowca zwraca się do studentów:<br>  - Osoba, która odpowie na moje następne pytanie ma zaliczone zajęcia i może iść do domu...<br>  Ktoś z sali rzuca w tym momencie długopis pod nogi prowadzącego.<br>  - Kto to zrobił?!<br>  - Ja. Dziękuję, do widzenia."
        },
        {
            "id": 79,
            "date": "17.02.2024",
            "joke": "Telefon w hotelowej recepcji:<br>  - Dzień dobry, dzwonię z pokoju 303. Moglibyście przysłać kogoś z obsługi? Kłócę się właśnie z żoną i zagroziła, że  wyskoczy przez okno.<br>  - Przepraszam, ale to państwa prywatny problem.<br>  - Tak, zgoda, ale to cholerne okno się nie otwiera, a to już wasz problem."
        },
        {
            "id": 78,
            "date": "17.02.2024",
            "joke": "Jedno trzeba uczciwie&nbsp;PiSowi przyznać - w tej partii wszyscy są równi. Kobieta, mężczyzna, profesor, szeregowy  działacz, poseł, minister czy premier - nieważne. Każdy jeden to szuja."
        },
        {
            "id": 77,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Jeżeli dodasz do wegańskich kotletów z soczewicy odrobinę mleczka kokosowego, nie będą się one tak rozpadały i łatwiej  wyjebiesz je do śmieci."
        },
        {
            "id": 76,
            "date": "17.02.2024",
            "joke": "Powtarzam sobie, że powinienem przestać pić. Ale nie będę przecież słuchał pijaka, który gada sam do siebie."
        },
        {
            "id": 75,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  Gdy twoja kobieta zauważy, że gapisz się na inną laskę, to odwróć się do niej i powiedz: \"Cieszę się, że się tak nie  ubierasz.\""
        },
        {
            "id": 74,
            "date": "17.02.2024",
            "joke": "Daj człowiekowi rybę, a będzie syty jeden dzień.<br>  Daj człowiekowi wędkę, a będzie syty resztę życia.<br>  Daj człowiekowi boga, a zdechnie z głodu, modląc się o rybę."
        },
        {
            "id": 73,
            "date": "17.02.2024",
            "joke": "Lot Ryan Air. Nagle z głośników płynie komunikat:<br>  - Pasażerowie business class proszeni są o zapięcie pasów. Reszta niech się czymś przywiąże."
        },
        {
            "id": 72,
            "date": "17.02.2024",
            "joke": "Rosja pokonała Hiszpanię. To największe zwycięstwo tego kraju od czasu wyborów w USA."
        },
        {
            "id": 71,
            "date": "17.02.2024",
            "joke": "Woda rozwiąże wszystkie twoje problemy.<br>  Jesteś spragniony? Napij się.<br>  Jesteś brudny? Umyj się.<br>  Ktoś cię wkurwia? Utop go."
        },
        {
            "id": 70,
            "date": "17.02.2024",
            "joke": "Wielu Rosjan nie rozumie, dlaczego kraj świętuje zwycięstwo nad Hiszpanią, jeśli wojska rosyjskie nie dotarły jeszcze  do Madrytu."
        },
        {
            "id": 69,
            "date": "17.02.2024",
            "joke": "Jeżeli firma pisze w ogłoszeniu rekrutacyjnym, że zapewnia \"rodzinną atmosferę\", to znaczy, że zamiast ci płacić,  to cię wyrucha."
        },
        {
            "id": 68,
            "date": "17.02.2024",
            "joke": "Podczas porodu ból jest tak duży, że kobieta niemal może poczuć to, co sfaulowany Neymar."
        },
        {
            "id": 67,
            "date": "17.02.2024",
            "joke": "Wchodzi facet do sklepu motoryzacyjnego i pyta:<br>  - Czy są części zamienne do Łady Niva?<br>  - A czego potrzeba?<br>  - Takie tam... kable, taśma izolacyjna...<br>  - Oczywiście, że mamy. Ale dziwną ma pan Nivę. Żeby części zamienne od UAZ-a pasowały?"
        },
        {
            "id": 66,
            "date": "17.02.2024",
            "joke": "W budynku kurwizji chyba nie ma toalet. Całe gówno jest na antenie."
        },
        {
            "id": 65,
            "date": "17.02.2024",
            "joke": "Codziennie udaję, że lubię ludzi. To się nazywa dorosłość i dlatego wolno nam pić alkohol."
        },
        {
            "id": 64,
            "date": "17.02.2024",
            "joke": "Żona weszła naga do sypialni i powiedziała zalotnie \"pokaż mi stare, dobre czasy\". Więc pokazałem jej&nbsp;moje  zdjęcia z przyjaciółmi sprzed naszego ślubu."
        },
        {
            "id": 63,
            "date": "17.02.2024",
            "joke": "Co się stanie&nbsp;gdy Żyd z erekcją wpadnie na ścianę?<br>  Złamie nos."
        },
        {
            "id": 62,
            "date": "17.02.2024",
            "joke": "- Z kim trenujesz?<br>  - Z Chodakowską, już 3 tydzień. A ty?<br>  - A ja dalej z Gessler..."
        },
        {
            "id": 61,
            "date": "17.02.2024",
            "joke": "Sto lat temu niemal wszyscy posiadali&nbsp;konie, a tylko bogacze samochody.&nbsp;Dziś jest odwrotnie."
        },
        {
            "id": 60,
            "date": "17.02.2024",
            "joke": "Prawdziwy Polak nie pójdzie prywatnie do lekarza płacąc stówkę.&nbsp;Prawdziwy Polak kupi koniak za dwie stówki i  pójdzie do państwowego lekarza poza kolejką."
        },
        {
            "id": 59,
            "date": "17.02.2024",
            "joke": "Mam już trzydzieści lat, a starzy nadal mnie traktują jak dziecko. Dzisiaj znowu&nbsp;obudziłem się w \"oknie  życia\"."
        },
        {
            "id": 58,
            "date": "17.02.2024",
            "joke": "Wstrząsy na Śląsku to typowe anomalie czasoprzestrzenne - występują gdy dwunastomiesięczny kalendarz gregoriański  spotyka się z czternastomiesięcznym górniczym."
        },
        {
            "id": 57,
            "date": "17.02.2024",
            "joke": "Rzecz się działa w zapadłej bazie lotniczej gdzieś na Syberii. Generał po przeprowadzeniu inspekcji niecierpliwił  się, czekając w samolocie na start. Tymczasem żołnierz z obsługi naziemnej flegmatycznie przygotowywał opróżnianie  toalet pokładowych. Generał wysłał adiutanta, by ten go pogonił. Adiutant opierdzielił żołnierza, na co ten  flegmatycznie odpowiedział:<br>  - Jestem szeregowcem, tu jest 30 stopni poniżej zera, stacjonuję na Syberii i wypompowuję gówna z samolotów. Niby jak  może mnie pan ukarać?"
        },
        {
            "id": 56,
            "date": "17.02.2024",
            "joke": "Jak manipulować kobietami?<br>  1. Wyciągasz czekoladę.<br>  2. Manipulujesz."
        },
        {
            "id": 55,
            "date": "17.02.2024",
            "joke": "Moda - to, co robi z nas idiotów na starych fotografiach."
        },
        {
            "id": 54,
            "date": "17.02.2024",
            "joke": "Jeśli myślisz, że gorzej być nie może, to znaczy, że masz problemy z wyobraźnią."
        },
        {
            "id": 53,
            "date": "17.02.2024",
            "joke": "\"Tajemnica Brokeback Mountain\" to film o dwóch kowbojach i trzech namiotach."
        },
        {
            "id": 52,
            "date": "17.02.2024",
            "joke": "Kraje Zatoki Perskiej zerwały stosunki dyplomatyczne z Katarem, bo ten wspiera inne organizacje terrorystyczne, niż  tamci."
        },
        {
            "id": 51,
            "date": "17.02.2024",
            "joke": "- Twój stosunek do alkoholu?<br>  - Wieczorem pozytywny, rano negatywny."
        },
        {
            "id": 50,
            "date": "17.02.2024",
            "joke": "Dlaczego Stevie Wonder nie widuje znajomych?<br>  Bo jest żonaty."
        },
        {
            "id": 49,
            "date": "17.02.2024",
            "joke": "Żona poprosiła żebym na dziesiątą rocznicę ślubu napisał dla niej wiersz. Próbowałem, ale trudno znaleźć rym do  \"Spierdoliłaś mi życie\"."
        },
        {
            "id": 48,
            "date": "17.02.2024",
            "joke": "Wybrałem się do szpitala żeby odwiedzić swojego chorego kolegę. Niestety znalazłem go w kostnicy. Walił konia."
        },
        {
            "id": 47,
            "date": "17.02.2024",
            "joke": "Problem z dowcipami matematycznymi jest taki, że jeżeli je&nbsp;nawet rozumiesz i cię śmieszą, to nie masz  przyjaciół, którym mógłbyś&nbsp;je opowiadać."
        },
        {
            "id": 46,
            "date": "17.02.2024",
            "joke": "Dlaczego niektórzy&nbsp;uważają, że nazywanie kogoś islamofobem to obraza? To jakby próbować obrazić kogoś twierdząc,  że ma dobry gust."
        },
        {
            "id": 45,
            "date": "17.02.2024",
            "joke": "Jaka jest różnica pomiędzy Rosją, a rzeczywistością?<br>  Trump&nbsp;ma kontakt z Rosją."
        },
        {
            "id": 44,
            "date": "17.02.2024",
            "joke": "Codziennie udaję, że lubię ludzi. To się nazywa dorosłość i dlatego wolno nam pić alkohol."
        },
        {
            "id": 43,
            "date": "17.02.2024",
            "joke": "Z czasem człowiek osiąga już ten wiek, że podobają mu się nie tylko młode dziewczyny, ale także ich matki."
        },
        {
            "id": 42,
            "date": "17.02.2024",
            "joke": "- Rabi, powiedz mi, jak dostać się do raju, jeśli pięć z siedmiu grzechów głównych jest sposobem na życie?"
        },
        {
            "id": 41,
            "date": "17.02.2024",
            "joke": "Ludzki mózg sam się tak nazwał."
        },
        {
            "id": 40,
            "date": "17.02.2024",
            "joke": "ONR - Ochrona Nabrzeża Rimmini"
        },
        {
            "id": 39,
            "date": "17.02.2024",
            "joke": "Wszyscy myślą, że dziewczyny z dużymi cyckami marzą o spaniu z milionerami. W rzeczywistości dziewczyny z dużymi  cyckami marzą o spaniu na brzuchu."
        },
        {
            "id": 38,
            "date": "17.02.2024",
            "joke": "Silna, niezależna kobieta po 30 wybiera kota podobnego do swojego ojca."
        },
        {
            "id": 37,
            "date": "17.02.2024",
            "joke": "W Tajlandii w wyniku akcji ratunkowej 12 dzieci pozostało bez dachu nad głową."
        },
        {
            "id": 36,
            "date": "17.02.2024",
            "joke": "- Sara, gdybyś ty mnie naprawdę kochała, wyszłabyś za mąż za kogo innego."
        },
        {
            "id": 35,
            "date": "17.02.2024",
            "joke": "Co powinien zrobić Polak, żeby jego reprezentacja wygrała mundial?<br>  Zmienić obywatelstwo."
        },
        {
            "id": 34,
            "date": "17.02.2024",
            "joke": "Eric Clapton poinformował, że traci słuch. To wyjaśnia jego ostatnie albumy."
        },
        {
            "id": 33,
            "date": "17.02.2024",
            "joke": "Lwy potrafią polować gdy kończą trzy miesiące. Moja trzyletnia córka nie potrafiła znaleźć pudełka ze śniadaniem,  które miała w drugiej ręce. Jak to możliwe, że jesteśmy na szczycie łańcucha pokarmowego?"
        },
        {
            "id": 32,
            "date": "17.02.2024",
            "joke": "Przygoda dla faceta: zostać piratem, walczyć z niedźwiedziem, zdobyć Mount Everest, polecieć w kosmos.<br>  Przygoda dla kobiety: kutas murzyna."
        },
        {
            "id": 31,
            "date": "17.02.2024",
            "joke": "A może jestem zbyt krytyczny wobec tych gnojków z dziecięcego Master Chefa? - pomyślałem wybierając okruchy chipsów z  pępka."
        },
        {
            "id": 30,
            "date": "17.02.2024",
            "joke": "Żonaci faceci żyją dłużej od samotnych, ale chętniej umierają."
        },
        {
            "id": 29,
            "date": "17.02.2024",
            "joke": "- Batmanie, batpilot od battelewizora nie działa.<br>  - Sprawdziłeś baterie?<br>  - Co to są erie?"
        },
        {
            "id": 28,
            "date": "17.02.2024",
            "joke": "Chciałbym dożyć tych czasów, kiedy ludzie, niegdyś noszący na sercu legitymację PZPR, będą przed kamerami  telewizyjnymi palić legitymacje partyjne PiS."
        },
        {
            "id": 27,
            "date": "17.02.2024",
            "joke": "Peszko obiecał upić się na sztywno, jeśli Polska wygra Mundial. Lub jeśli nie wygra."
        },
        {
            "id": 26,
            "date": "17.02.2024",
            "joke": "- O co prosić Boga?<br>  - Proś Boga o to, czego nie masz, a jak już wszystko masz, to proś o wybaczenie."
        },
        {
            "id": 25,
            "date": "17.02.2024",
            "joke": "Nigdy nie wiesz, czy jest dobrze, czy źle, dopóki nie zrobi się totalna chujnia."
        },
        {
            "id": 24,
            "date": "17.02.2024",
            "joke": "Dlaczego niektórzy&nbsp;uważają, że nazywanie kogoś islamofobem to obraza? To jakby próbować obrazić kogoś twierdząc,  że ma dobry gust."
        },
        {
            "id": 23,
            "date": "17.02.2024",
            "joke": "Trzy słowa - to dwa słowa."
        },
        {
            "id": 22,
            "date": "17.02.2024",
            "joke": "Kobieto, uważaj! Jeżeli zaproponowałaś swojemu facetowi pozycję \"na pieska\", a on się wypiął, to może być członkiem  ONRu."
        },
        {
            "id": 21,
            "date": "17.02.2024",
            "joke": "Maria Curie do męża:<br>  - Idź do piwnicy po słoiki.<br>  - Chodź ze mną, poświecisz mi."
        },
        {
            "id": 20,
            "date": "17.02.2024",
            "joke": "- Czym się różni Adrian od Kermita?<br>  - Nie było oczywiste, czyja ręka jest w dupie Kermita."
        },
        {
            "id": 19,
            "date": "17.02.2024",
            "joke": "Z ostatniej chwili:<br>  Stanisław Piotrowicz zatrzymany. Miał PZPR wypisane na twarzy."
        },
        {
            "id": 18,
            "date": "17.02.2024",
            "joke": "Żyd. Idiota. Pedał. Komuch. Satanista. Kurwa. A ciebie jak nazywają prawdziwi katolicy?"
        },
        {
            "id": 17,
            "date": "17.02.2024",
            "joke": "Urodziłem się w czasach, kiedy Pluton był planetą, a Ziemia była kulista."
        },
        {
            "id": 16,
            "date": "17.02.2024",
            "joke": "- Tato, co to jest poprawność polityczna?<br>  - Wowaczka, co ty masz z oczami?<br>  - Zeza rozbieżnego, tato, ale co to ma do rzeczy?<br>  - Jeżeli ktoś powie, że masz dobre widzenie peryferyjne, to to będzie poprawność polityczna."
        },
        {
            "id": 15,
            "date": "17.02.2024",
            "joke": "Nigdy nie krzycz na zmywarkę. One wszystko pamiętają i przy każdej okazji wypomną."
        },
        {
            "id": 14,
            "date": "17.02.2024",
            "joke": "Wygląda na to, że Grecy postanowili spłacić swój dług podpalając kraj i licząc na kasę z ubezpieczenia."
        },
        {
            "id": 13,
            "date": "17.02.2024",
            "joke": "Zauważyliście, że wiele chorób przypisanych jest do kolorów? Np. białaczka, żółtaczka, czerwonka, AIDS."
        },
        {
            "id": 12,
            "date": "17.02.2024",
            "joke": "Żarty są jak ludzie - nie wszyscy doceniają czarne."
        },
        {
            "id": 11,
            "date": "17.02.2024",
            "joke": "- Jaka jest różnica między socjalizmem, a kapitalizmem?<br>  - \"Nie dla wszystkich wystarczyło kiełbasy\" vs. \"Nie wszystkim wystarcza pieniędzy na kiełbasę\"."
        },
        {
            "id": 10,
            "date": "17.02.2024",
            "joke": "Złam system! Zadzwoń do mamy i zapytaj, czy nosi czapkę w tę pogodę."
        },
        {
            "id": 9,
            "date": "17.02.2024",
            "joke": "Tinder przed i po zwaleniu konia to dwie różne aplikacje."
        },
        {
            "id": 8,
            "date": "17.02.2024",
            "joke": "[Instruktor pływania] Mocniej! Młóćcie rękami ile się da! I nogami, nie zapominajcie o nogach. Z całej siły!<br>  [Kursant] Dlaczego bijemy tego ratownika?"
        },
        {
            "id": 7,
            "date": "17.02.2024",
            "joke": "Rada dnia:<br>  W lodówce należy zawsze trzymać trochę kostek lodu zrobionych z wody po parówkach, na wypadek gdyby odwiedził nas  ktoś, kogo nie lubimy."
        },
        {
            "id": 6,
            "date": "17.02.2024",
            "joke": "Leci samolot z żołnierzami Legii Cudzoziemskiej do Afganistanu. Na pokładzie sierżant oznajmia:<br>  - Za każdą parę uszu talibów daję 200 euro, za łeb z brodą 500 euro!<br>  Samolot wylądował, żołnierze wybiegli z samolotu. Wracają po godzinie z pełnymi koszami głów i uszu. Sierżant patrzy i  mówi:<br>  - Pojebało was? Przecież wylądowaliśmy tylko na tankowanie w Monachium!"
        },
        {
            "id": 5,
            "date": "17.02.2024",
            "joke": "A co, jeśli tak naprawdę jesteś idiotą, ale jesteś za głupi, by zdawać sobie z tego sprawę?"
        },
        {
            "id": 4,
            "date": "17.02.2024",
            "joke": "Wiesz, że dobrze radzisz sobie w życiu, kiedy zapominasz o dniu, w którym dostajesz wypłatę."
        },
        {
            "id": 3,
            "date": "17.02.2024",
            "joke": "Myślałem, że kobiety są wściekłe, gdy chcesz od nich seksu. Okazało się, że gdy nie chcesz od nich seksu jeszcze  bardziej się wściekają."
        },
        {
            "id": 2,
            "date": "17.02.2024",
            "joke": "To dość ironiczne, że Internet został stworzony, aby zaoszczędzić czas."
        },
        {
            "id": 1,
            "date": "17.02.2024",
            "joke": "- Czy Amerykanie są w stanie wpłynąć na wybory w Rosji? - Nie ma co być naiwnym, nawet Rosjanie nie są w stanie."
        }]
        );

    // const res = await db.collection('companies').findOne({ slug: 'tworcastron' });
    // const res = await db.collection('companies').find({ slug: 'tworcastron' }).toArray();
    // console.log(res);

    // await db.collection('companies').deleteOne({ slug: "tworcastron"});
}

main()
    .finally(() => client.close());