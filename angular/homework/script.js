var newApp2 = angular.module('MyApp', []);


newApp2.controller('checkedCrtl', ['$scope', '$element', function(S, E) {}]);

newApp2.controller('roboListCtrl', ['items', function(nameofservece) {
    this.items = nameofservece.myFunc();
    this.remove = nameofservece.remove();
}]);

newApp2.service('items', function() {

    this.remove = function() {
        return function(item) {
            var index = this.items.indexOf(item)
            this.items.splice(index, 1);
        };
    }

    this.myFunc = function() {
        return [{ "image": "https://robohash.org/nonrepellendusrecusandae.jpg?size=150x150&set=set1", "fname": "Fedora", "lname": "Mulcaster", "Phone": "46-(560)800-6649" },
            { "image": "https://robohash.org/vitaeperferendisquo.png?size=150x150&set=set1", "fname": "Maxim", "lname": "Offin", "Phone": "385-(632)543-6562" },
            { "image": "https://robohash.org/asperioresdignissimosdoloribus.bmp?size=150x150&set=set1", "fname": "Wenda", "lname": "Allery", "Phone": "967-(394)413-3352" },
            { "image": "https://robohash.org/officiavoluptasrerum.jpg?size=150x150&set=set1", "fname": "Stacia", "lname": "Sibbons", "Phone": "232-(908)176-0923" },
            { "image": "https://robohash.org/debitisvitaequi.jpg?size=150x150&set=set1", "fname": "Davin", "lname": "Strewther", "Phone": "995-(434)694-3021" },
            { "image": "https://robohash.org/possimusnontenetur.jpg?size=150x150&set=set1", "fname": "Jewel", "lname": "Strand", "Phone": "66-(560)880-2865" },
            { "image": "https://robohash.org/molestiaecorporistempora.jpg?size=150x150&set=set1", "fname": "Meredeth", "lname": "Petegrew", "Phone": "351-(847)162-5959" },
            { "image": "https://robohash.org/assumendavitaesuscipit.jpg?size=150x150&set=set1", "fname": "Olimpia", "lname": "Jiggen", "Phone": "351-(594)252-8200" },
            { "image": "https://robohash.org/doloremharumut.png?size=150x150&set=set1", "fname": "Peder", "lname": "Cahey", "Phone": "63-(654)120-5694" },
            { "image": "https://robohash.org/eaipsumquos.bmp?size=150x150&set=set1", "fname": "Worden", "lname": "Brandone", "Phone": "420-(720)754-7952" },
            { "image": "https://robohash.org/doloresinventorepossimus.bmp?size=150x150&set=set1", "fname": "Edie", "lname": "Alleyn", "Phone": "48-(519)841-3686" },
            { "image": "https://robohash.org/eveniethicaccusantium.png?size=150x150&set=set1", "fname": "Marve", "lname": "Gillopp", "Phone": "7-(511)781-2777" },
            { "image": "https://robohash.org/eaqueidnon.bmp?size=150x150&set=set1", "fname": "Adrien", "lname": "Zannutti", "Phone": "84-(581)401-7650" },
            { "image": "https://robohash.org/quisquamexpeditacumque.png?size=150x150&set=set1", "fname": "Mavra", "lname": "Gudeman", "Phone": "63-(281)770-2936" },
            { "image": "https://robohash.org/doloribusquaeratvoluptatibus.png?size=150x150&set=set1", "fname": "Olav", "lname": "Ghiroldi", "Phone": "353-(396)733-1550" },
            { "image": "https://robohash.org/etametsed.jpg?size=150x150&set=set1", "fname": "Katerina", "lname": "Skeleton", "Phone": "62-(571)354-8457" },
            { "image": "https://robohash.org/errorquisquamvoluptate.jpg?size=150x150&set=set1", "fname": "Nealy", "lname": "Leggott", "Phone": "370-(357)122-0445" },
            { "image": "https://robohash.org/saepevelnecessitatibus.jpg?size=150x150&set=set1", "fname": "Adriena", "lname": "Sholem", "Phone": "62-(266)311-5888" },
            { "image": "https://robohash.org/nobislaborumsapiente.png?size=150x150&set=set1", "fname": "Rosalynd", "lname": "Thulborn", "Phone": "57-(521)791-5953" },
            { "image": "https://robohash.org/dignissimostemporeearum.png?size=150x150&set=set1", "fname": "Maribel", "lname": "Mollon", "Phone": "86-(907)290-6671" },
            { "image": "https://robohash.org/liberoveniamquidem.jpg?size=150x150&set=set1", "fname": "Clare", "lname": "Hellin", "Phone": "48-(277)979-3896" },
            { "image": "https://robohash.org/utnamconsequatur.bmp?size=150x150&set=set1", "fname": "Betti", "lname": "Hinksen", "Phone": "63-(304)320-9829" },
            { "image": "https://robohash.org/delenitirerumminima.bmp?size=150x150&set=set1", "fname": "Melinde", "lname": "Andrzej", "Phone": "86-(968)545-8985" },
            { "image": "https://robohash.org/saepevelitvoluptates.bmp?size=150x150&set=set1", "fname": "Cesar", "lname": "Rudge", "Phone": "57-(954)247-8201" },
            { "image": "https://robohash.org/magniiustoullam.bmp?size=150x150&set=set1", "fname": "Merill", "lname": "Deerr", "Phone": "351-(147)911-8897" },
            { "image": "https://robohash.org/cumqueerrorquia.bmp?size=150x150&set=set1", "fname": "Alameda", "lname": "Kapiloff", "Phone": "63-(256)624-6106" },
            { "image": "https://robohash.org/sedveromagnam.bmp?size=150x150&set=set1", "fname": "Ellerey", "lname": "Hortop", "Phone": "86-(516)884-7858" },
            { "image": "https://robohash.org/etaccusantiumveniam.bmp?size=150x150&set=set1", "fname": "Gloriane", "lname": "Ranaghan", "Phone": "86-(853)286-9907" },
            { "image": "https://robohash.org/aliasetvitae.png?size=150x150&set=set1", "fname": "Susi", "lname": "Schreiner", "Phone": "54-(582)129-2935" },
            { "image": "https://robohash.org/estsuntperferendis.bmp?size=150x150&set=set1", "fname": "Sansone", "lname": "Balas", "Phone": "86-(290)163-9542" },
            { "image": "https://robohash.org/velitidquia.jpg?size=150x150&set=set1", "fname": "Ave", "lname": "Ciobutaro", "Phone": "86-(621)633-7293" },
            { "image": "https://robohash.org/vitaeullamvel.png?size=150x150&set=set1", "fname": "Dana", "lname": "Eighteen", "Phone": "86-(456)173-5313" },
            { "image": "https://robohash.org/autplaceatlibero.png?size=150x150&set=set1", "fname": "Cate", "lname": "Unwins", "Phone": "249-(738)640-6674" },
            { "image": "https://robohash.org/sitnonnatus.bmp?size=150x150&set=set1", "fname": "Hazel", "lname": "Ewebank", "Phone": "84-(547)990-6604" },
            { "image": "https://robohash.org/facilisducimusnostrum.png?size=150x150&set=set1", "fname": "Jessi", "lname": "Pennells", "Phone": "353-(487)728-2408" },
            { "image": "https://robohash.org/quodaliquamconsectetur.png?size=150x150&set=set1", "fname": "Si", "lname": "Rayhill", "Phone": "55-(580)668-4015" },
            { "image": "https://robohash.org/accusamusaccusantiumrecusandae.png?size=150x150&set=set1", "fname": "Rancell", "lname": "O'Regan", "Phone": "63-(372)131-9921" },
            { "image": "https://robohash.org/quasomnisducimus.bmp?size=150x150&set=set1", "fname": "Thedrick", "lname": "Saxton", "Phone": "63-(379)154-0039" },
            { "image": "https://robohash.org/consequaturenimest.bmp?size=150x150&set=set1", "fname": "Delia", "lname": "Merrifield", "Phone": "212-(351)296-5780" },
            { "image": "https://robohash.org/utadolor.png?size=150x150&set=set1", "fname": "Kenn", "lname": "Mote", "Phone": "216-(326)514-4935" },
            { "image": "https://robohash.org/vitaevoluptatibusquod.bmp?size=150x150&set=set1", "fname": "Giavani", "lname": "Male", "Phone": "351-(389)481-2337" },
            { "image": "https://robohash.org/rerumdoloremquenam.png?size=150x150&set=set1", "fname": "Faustina", "lname": "Tebb", "Phone": "86-(690)185-7686" },
            { "image": "https://robohash.org/porroearumenim.jpg?size=150x150&set=set1", "fname": "Cal", "lname": "Rycroft", "Phone": "420-(443)111-1571" },
            { "image": "https://robohash.org/animiexculpa.jpg?size=150x150&set=set1", "fname": "Kristy", "lname": "Dilnot", "Phone": "86-(212)741-7248" },
            { "image": "https://robohash.org/quiavoluptasminus.bmp?size=150x150&set=set1", "fname": "Virge", "lname": "Jorn", "Phone": "249-(802)476-9723" },
            { "image": "https://robohash.org/odioquiimpedit.bmp?size=150x150&set=set1", "fname": "Cosette", "lname": "Dysart", "Phone": "7-(227)210-5682" },
            { "image": "https://robohash.org/quasireprehenderitautem.png?size=150x150&set=set1", "fname": "Elie", "lname": "Halmkin", "Phone": "57-(228)189-6170" },
            { "image": "https://robohash.org/quaesaepeet.jpg?size=150x150&set=set1", "fname": "Dorette", "lname": "Wilfing", "Phone": "62-(571)170-6175" },
            { "image": "https://robohash.org/delenitieoset.jpg?size=150x150&set=set1", "fname": "Brigg", "lname": "Charity", "Phone": "86-(994)928-6709" },
            { "image": "https://robohash.org/iureeaqueut.bmp?size=150x150&set=set1", "fname": "Carmine", "lname": "Birden", "Phone": "52-(837)304-4252" },
            { "image": "https://robohash.org/doloremsaepecum.png?size=150x150&set=set1", "fname": "Pablo", "lname": "Whitechurch", "Phone": "86-(196)698-4739" },
            { "image": "https://robohash.org/fugiatdoloresullam.bmp?size=150x150&set=set1", "fname": "Lief", "lname": "Poile", "Phone": "92-(357)772-9946" },
            { "image": "https://robohash.org/voluptatibusquaevel.bmp?size=150x150&set=set1", "fname": "Reinhold", "lname": "Weall", "Phone": "420-(477)537-2275" },
            { "image": "https://robohash.org/omnisautquo.png?size=150x150&set=set1", "fname": "Ernest", "lname": "Nind", "Phone": "1-(518)858-2521" },
            { "image": "https://robohash.org/delenitimagnamquia.png?size=150x150&set=set1", "fname": "Bran", "lname": "Windrass", "Phone": "86-(677)107-0148" },
            { "image": "https://robohash.org/estcumqueeaque.bmp?size=150x150&set=set1", "fname": "Camila", "lname": "McPartlin", "Phone": "95-(324)558-6678" },
            { "image": "https://robohash.org/possimusnatusrepellendus.png?size=150x150&set=set1", "fname": "Toma", "lname": "Stear", "Phone": "62-(838)963-3336" },
            { "image": "https://robohash.org/eumvoluptatemrepudiandae.bmp?size=150x150&set=set1", "fname": "Shayla", "lname": "Cawte", "Phone": "351-(640)893-0086" },
            { "image": "https://robohash.org/sapientesimiliqueexplicabo.png?size=150x150&set=set1", "fname": "Tiebout", "lname": "Craske", "Phone": "675-(471)901-0348" },
            { "image": "https://robohash.org/dolorquiaillum.jpg?size=150x150&set=set1", "fname": "Veriee", "lname": "Brookfield", "Phone": "81-(566)843-4932" },
            { "image": "https://robohash.org/itaquenihilaliquid.jpg?size=150x150&set=set1", "fname": "De witt", "lname": "Olver", "Phone": "81-(466)401-7082" },
            { "image": "https://robohash.org/molestiaereiciendisqui.png?size=150x150&set=set1", "fname": "Neda", "lname": "Bondar", "Phone": "86-(221)483-6788" },
            { "image": "https://robohash.org/culpamodirepellat.png?size=150x150&set=set1", "fname": "Clive", "lname": "Darragon", "Phone": "86-(683)503-5116" },
            { "image": "https://robohash.org/maioresnostrumvoluptatem.png?size=150x150&set=set1", "fname": "Nataline", "lname": "Trusler", "Phone": "66-(579)137-3796" },
            { "image": "https://robohash.org/etmolestiaeearum.jpg?size=150x150&set=set1", "fname": "Charlie", "lname": "Izakson", "Phone": "62-(995)300-1774" },
            { "image": "https://robohash.org/nullanecessitatibusfuga.jpg?size=150x150&set=set1", "fname": "Ferdy", "lname": "Napolione", "Phone": "33-(840)194-7418" },
            { "image": "https://robohash.org/quiavoluptatemearum.png?size=150x150&set=set1", "fname": "Shara", "lname": "Ailward", "Phone": "380-(632)782-1003" },
            { "image": "https://robohash.org/estnonsint.jpg?size=150x150&set=set1", "fname": "Willem", "lname": "Allibon", "Phone": "62-(562)845-6377" },
            { "image": "https://robohash.org/quitemporequia.jpg?size=150x150&set=set1", "fname": "Fair", "lname": "Ditty", "Phone": "62-(829)193-6159" },
            { "image": "https://robohash.org/sintaperiamquasi.png?size=150x150&set=set1", "fname": "Vidovic", "lname": "Fullom", "Phone": "81-(883)227-7016" },
            { "image": "https://robohash.org/quodaliquidquis.png?size=150x150&set=set1", "fname": "Guenna", "lname": "Housegoe", "Phone": "420-(836)961-1118" },
            { "image": "https://robohash.org/praesentiumodiovoluptates.png?size=150x150&set=set1", "fname": "Belle", "lname": "Robbe", "Phone": "66-(499)922-6112" },
            { "image": "https://robohash.org/mollitiaexcepturiea.png?size=150x150&set=set1", "fname": "Marlowe", "lname": "Tenaunt", "Phone": "7-(184)316-2231" },
            { "image": "https://robohash.org/nonnesciuntsapiente.png?size=150x150&set=set1", "fname": "Beverie", "lname": "Zellick", "Phone": "353-(969)337-5166" },
            { "image": "https://robohash.org/aliquamsapientedeleniti.jpg?size=150x150&set=set1", "fname": "Terencio", "lname": "Gingell", "Phone": "51-(451)816-4591" },
            { "image": "https://robohash.org/utrecusandaeenim.png?size=150x150&set=set1", "fname": "Mozes", "lname": "Lowy", "Phone": "7-(266)548-4500" },
            { "image": "https://robohash.org/omnisestconsequatur.bmp?size=150x150&set=set1", "fname": "Lise", "lname": "Wiggam", "Phone": "48-(430)884-9941" },
            { "image": "https://robohash.org/numquamdolorsed.jpg?size=150x150&set=set1", "fname": "Kevina", "lname": "Gooly", "Phone": "92-(364)612-4084" },
            { "image": "https://robohash.org/dignissimosminusducimus.png?size=150x150&set=set1", "fname": "Cathee", "lname": "Mokes", "Phone": "233-(125)878-3094" },
            { "image": "https://robohash.org/evenietodiout.jpg?size=150x150&set=set1", "fname": "Gavan", "lname": "Haucke", "Phone": "351-(142)630-1641" },
            { "image": "https://robohash.org/similiqueetporro.jpg?size=150x150&set=set1", "fname": "Ragnar", "lname": "Turley", "Phone": "374-(118)544-2737" },
            { "image": "https://robohash.org/nonautquia.bmp?size=150x150&set=set1", "fname": "Tammy", "lname": "Crosse", "Phone": "86-(518)617-1651" },
            { "image": "https://robohash.org/vitaeabut.jpg?size=150x150&set=set1", "fname": "Durward", "lname": "Spatarul", "Phone": "351-(148)351-1457" },
            { "image": "https://robohash.org/sedperspiciatisdicta.png?size=150x150&set=set1", "fname": "Daveen", "lname": "Gealle", "Phone": "216-(492)487-3279" },
            { "image": "https://robohash.org/sinteatotam.jpg?size=150x150&set=set1", "fname": "Stephen", "lname": "Castell", "Phone": "66-(677)511-5259" },
            { "image": "https://robohash.org/evenietsitquas.bmp?size=150x150&set=set1", "fname": "Jami", "lname": "Dondon", "Phone": "62-(373)212-4744" },
            { "image": "https://robohash.org/facilisveroassumenda.jpg?size=150x150&set=set1", "fname": "Dyana", "lname": "Huyge", "Phone": "93-(100)444-0013" },
            { "image": "https://robohash.org/velvoluptatesquia.png?size=150x150&set=set1", "fname": "Dermot", "lname": "Hazart", "Phone": "55-(972)812-9477" },
            { "image": "https://robohash.org/etcumdolore.png?size=150x150&set=set1", "fname": "Karlotte", "lname": "Arkin", "Phone": "63-(200)231-0627" },
            { "image": "https://robohash.org/exercitationemsimiliquequam.jpg?size=150x150&set=set1", "fname": "Tobias", "lname": "Fould", "Phone": "30-(316)571-0387" },
            { "image": "https://robohash.org/temporamodivel.png?size=150x150&set=set1", "fname": "Kanya", "lname": "Beckinsall", "Phone": "55-(638)512-6768" },
            { "image": "https://robohash.org/temporesitveniam.jpg?size=150x150&set=set1", "fname": "Geralda", "lname": "Bonham", "Phone": "7-(800)423-6393" },
            { "image": "https://robohash.org/omnisetperferendis.png?size=150x150&set=set1", "fname": "Mikkel", "lname": "Clementson", "Phone": "63-(107)582-7796" },
            { "image": "https://robohash.org/velomnissequi.bmp?size=150x150&set=set1", "fname": "Tann", "lname": "Twinbourne", "Phone": "62-(931)884-2534" },
            { "image": "https://robohash.org/estvelodit.bmp?size=150x150&set=set1", "fname": "Thibaut", "lname": "Fruish", "Phone": "591-(493)237-6129" },
            { "image": "https://robohash.org/perspiciatisdoloremdolorum.png?size=150x150&set=set1", "fname": "Bjorn", "lname": "Fuentez", "Phone": "33-(425)875-9721" },
            { "image": "https://robohash.org/nihildelectusimpedit.jpg?size=150x150&set=set1", "fname": "Andeee", "lname": "Halpin", "Phone": "998-(427)113-5725" },
            { "image": "https://robohash.org/temporanamaccusantium.jpg?size=150x150&set=set1", "fname": "Tommy", "lname": "Bratcher", "Phone": "33-(853)101-0418" },
            { "image": "https://robohash.org/etinventorequi.bmp?size=150x150&set=set1", "fname": "Tiphanie", "lname": "Van den Velden", "Phone": "49-(886)689-9131" },
            { "image": "https://robohash.org/dignissimoseoset.bmp?size=150x150&set=set1", "fname": "Reggy", "lname": "Duiged", "Phone": "62-(677)765-7863" }
        ];
        return items;
    }
});