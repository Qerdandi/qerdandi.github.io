> Author: Quentin MAMMA | Tom LAURENT (EF1)

# DM NoSQL

## Pourcentage de participation

## Requêtes

### 1.
#### a) Obtenir toutes les informations sur les livres. (cf. attribut type de valeur Livre)
**Query:**
```
SELECT * 
FROM ouvrages 
WHERE type = "Livre";
```
**Result:**
```
[
  {
    "ouvrages": {
      "annee": 1997,
      "auteurs": [
        "Woody Leonhard",
        "Lee Hudspeth",
        "T. J. Lee"
      ],
      "dossier": "books/daglib/0089879",
      "editeur": "O'Reilly",
      "isbn": [
        "978-1-56592-308-9"
      ],
      "pages": "I",
      "titre": "Word 97 annoyances - taking charge of Word 97.",
      "type": "Livre"
    }
  },
  {
    "ouvrages": {
      "annee": 1995,
      "auteurs": [
        "Richard Raucci"
      ],
      "dossier": "books/daglib/0079467",
      "editeur": "Springer",
      "isbn": [
        "978-0-387-97996-0"
      ],
      "pages": {
        "debut": 1,
        "fin": 177
      },
      "titre": "Mosaic for Windows - a hands-on configuration and set-up guide to popular web browsers.",
      "type": "Livre"
    }
  },
  {
    "ouvrages": {
      "annee": 1988,
      "auteurs": [
        "Hans-Ulrich Heiss"
      ],
      "dossier": "books/sp/Heiss88",
      "editeur": "Springer",
      "isbn": [
        "3-540-18944-0"
      ],
      "section": "Informatik-Fachberichte",
      "titre": "?berlast in Rechensystemen: Modellierung und Verhinderung",
      "type": "Livre",
      "volume": "165"
    }
  }
]
```
**Documents number:**
> 11 074

#### b) Obtenir le titre, l’année et les auteurs des 5 premiers livres.
**Query:**
```
SELECT titre, annee, auteurs 
FROM ouvrages 
WHERE type = "Livre"
LIMIT 5;
```
**Result:**
```
[
  {
    "annee": 1997,
    "auteurs": [
      "Woody Leonhard",
      "Lee Hudspeth",
      "T. J. Lee"
    ],
    "titre": "Word 97 annoyances - taking charge of Word 97."
  },
  {
    "annee": 1995,
    "auteurs": [
      "Richard Raucci"
    ],
    "titre": "Mosaic for Windows - a hands-on configuration and set-up guide to popular web browsers."
  },
  {
    "annee": 1988,
    "auteurs": [
      "Hans-Ulrich Heiss"
    ],
    "titre": "?berlast in Rechensystemen: Modellierung und Verhinderung"
  },
  {
    "annee": 2010,
    "auteurs": [
      "Kristina Chodorow",
      "Michael Dirolf"
    ],
    "titre": "MongoDB - The Definitive Guide: Powerful and Scalable Data Storage."
  },
  {
    "annee": 1998,
    "auteurs": [
      "Ingo Alth?fer"
    ],
    "titre": "13 Jahre 3-Hirn - meine Schach-Experimente mit Mensch-Maschinen-Kombinationen: das 3-Hirn-Prinzip."
  }
]
```
**Documents number:**
> 5

#### c) Obtenir les titres et les identifiants (id) des 5 premiers livres.
**Query:**
```
SELECT META().id, titre 
FROM ouvrages 
WHERE type = "Livre"
LIMIT 5;
```
**Result:**
```
[
  {
    "id": "000604af-57c5-4db8-8e9b-c09023294fba",
    "titre": "Word 97 annoyances - taking charge of Word 97."
  },
  {
    "id": "000646c1-6301-402e-972c-55a3a45f795f",
    "titre": "Mosaic for Windows - a hands-on configuration and set-up guide to popular web browsers."
  },
  {
    "id": "0007efeb-8683-4e7b-ab94-b3a55b4c03f0",
    "titre": "?berlast in Rechensystemen: Modellierung und Verhinderung"
  },
  {
    "id": "00082b3a-c4c1-447d-9aa1-f48afa3af28a",
    "titre": "MongoDB - The Definitive Guide: Powerful and Scalable Data Storage."
  },
  {
    "id": "000935dc-e748-4314-b314-29d20da1ad40",
    "titre": "13 Jahre 3-Hirn - meine Schach-Experimente mit Mensch-Maschinen-Kombinationen: das 3-Hirn-Prinzip."
  }
]
```
**Documents number:**
> 5

#### d) Obtenir toutes les informations, y compris les ids, sur les 5 premiers livres.
**Query:**
```
SELECT META().id, ouvrages.* 
FROM ouvrages 
WHERE type = "Livre"
LIMIT 5;
```
**Result:**
```
[
  {
    "annee": 1997,
    "auteurs": [
      "Woody Leonhard",
      "Lee Hudspeth",
      "T. J. Lee"
    ],
    "dossier": "books/daglib/0089879",
    "editeur": "O'Reilly",
    "id": "000604af-57c5-4db8-8e9b-c09023294fba",
    "isbn": [
      "978-1-56592-308-9"
    ],
    "pages": "I",
    "titre": "Word 97 annoyances - taking charge of Word 97.",
    "type": "Livre"
  },
  {
    "annee": 1995,
    "auteurs": [
      "Richard Raucci"
    ],
    "dossier": "books/daglib/0079467",
    "editeur": "Springer",
    "id": "000646c1-6301-402e-972c-55a3a45f795f",
    "isbn": [
      "978-0-387-97996-0"
    ],
    "pages": {
      "debut": 1,
      "fin": 177
    },
    "titre": "Mosaic for Windows - a hands-on configuration and set-up guide to popular web browsers.",
    "type": "Livre"
  },
  {
    "annee": 1988,
    "auteurs": [
      "Hans-Ulrich Heiss"
    ],
    "dossier": "books/sp/Heiss88",
    "editeur": "Springer",
    "id": "0007efeb-8683-4e7b-ab94-b3a55b4c03f0",
    "isbn": [
      "3-540-18944-0"
    ],
    "section": "Informatik-Fachberichte",
    "titre": "?berlast in Rechensystemen: Modellierung und Verhinderung",
    "type": "Livre",
    "volume": "165"
  },
  {
    "annee": 2010,
    "auteurs": [
      "Kristina Chodorow",
      "Michael Dirolf"
    ],
    "dossier": "books/daglib/0025185",
    "editeur": "O'Reilly",
    "id": "00082b3a-c4c1-447d-9aa1-f48afa3af28a",
    "isbn": [
      "978-1-449-38156-1"
    ],
    "pages": "I",
    "titre": "MongoDB - The Definitive Guide: Powerful and Scalable Data Storage.",
    "type": "Livre"
  },
  {
    "annee": 1998,
    "auteurs": [
      "Ingo Alth?fer"
    ],
    "dossier": "books/daglib/0006035",
    "editeur": "Selbstverl.",
    "id": "000935dc-e748-4314-b314-29d20da1ad40",
    "isbn": [
      "978-3-00-003100-7"
    ],
    "pages": {
      "debut": 1,
      "fin": 348
    },
    "titre": "13 Jahre 3-Hirn - meine Schach-Experimente mit Mensch-Maschinen-Kombinationen: das 3-Hirn-Prinzip.",
    "type": "Livre"
  }
]
```
**Documents number:**
> 5

### 2.
#### a) Obtenir tous les livres en 2013. On affichera les ids, titres, années et auteurs.
**Query:**
```
SELECT META().id, titre, annee, auteur 
FROM ouvrages 
WHERE type = 'Livre' AND annee = 2013;
```
**Result:**
```
[
  {
    "annee": 2013,
    "id": "009623ce-3fe4-4730-8930-bdbbd66abce0",
    "titre": "Seminal Contributions to Information Systems Engineering, 25 Years of CAiSE"
  },
  {
    "annee": 2013,
    "id": "01264209-e38a-417d-851a-ef1697cbaca7",
    "titre": "Fault-Tolerant Industrial Wireless Mesh Network Infrastructure."
  },
  {
    "annee": 2013,
    "id": "01476a9d-4c9a-41db-ad81-3db150883542",
    "titre": "A Primer on Mathematical Models in Biology."
  }
]
```
**Documents number:**
> 493

#### b) Combien y a-t-il de livres depuis 2013 (inclus) ?
**Query:**
```
SELECT count(*)
FROM ouvrages 
WHERE type = 'Livre' AND annee >= 2013;
```
**Result:**
```
[
  {
    "$1": 781
  }
]
```
**Documents number:**
> 781

#### c) Combien y a-t-il de livres entre 2012 et 2014 (bornes incluses) ? Fournir 3 solutions différentes.
**Query:**
```
SELECT count(*)
FROM ouvrages 
WHERE type = 'Livre' AND annee BETWEEN 2012 AND 2014;
```
```
SELECT count(*)
FROM ouvrages 
WHERE type = 'Livre' AND (ABS(annee - 2013) <= 1);
```
```
SELECT count(*)
FROM ouvrages 
WHERE type = 'Livre' AND annee >= 2012 AND annee <= 2014;
```
**Result:**
```
[
  {
    "$1": 1273
  }
]
```
**Documents number:**
> 1273

#### d) Combien y a-t-il de livres en 2012 ou en 2014 ? On veillera à ce que cette valeur possède nb comme clé associée.
**Query:**
```
SELECT count(*) as nb
FROM ouvrages 
WHERE type = 'Livre' AND (annee = 2012 OR annee = 2014);
```
**Result:**
```
[
  {
    "nb": 780
  }
]
```
**Documents number:**
> 780

### 3.
#### a) Obtenir les différents types parmi les ouvrages, triés par ordre alphabétique ?
**Query:**
```
SELECT distinct type
FROM ouvrages
ORDER BY type ASC;
```
**Result:**
```
[
  {
    "type": "Article"
  },
  {
    "type": "Livre"
  },
  {
    "type": "These"
  }
]
```
**Documents number:**
> 3

#### b) Idem, mais dont le résultat est un simple tableau d’entiers (et non un tableau de documents Json)
**Query:**
```
SELECT DISTINCT RAW type
FROM ouvrages
ORDER BY type ASC;
```
**Result:**
```
[
  "Article",
  "Livre",
  "These"
]
```
**Documents number:**
> 3

#### c) Combien y a-t-il d'années distinctes parmi les ouvrages ?
**Query:**
```
SELECT RAW COUNT(DISTINCT annee)
FROM ouvrages
```
**Result:**
```
[
  65
]
```
**Documents number:**
> 65


### 4.
#### a) Obtenir les ouvrages dont le nombre d’auteurs est strictement supérieur à 50. On affichera les ids, titres, années et auteurs, en les triant par ordre décroissant sur le nombre d’auteurs.
**Query:**
```
SELECT META().id, titre, annee, auteurs
FROM ouvrages
WHERE array_length(auteurs) > 50
ORDER BY array_length(auteurs) DESC
```
**Result:**
```
[
  {
    "annee": 2009,
    "auteurs": [
      "Cuong Trinh",
      "Noboru Shibata",
      "Takeshi Nakano",
      "Mikio Ogawa",
      "Jumpei Sato",
      "Yoshikazu Takeyama",
      "Katsuaki Isobe",
      "Binh Le",
      "Farookh Moogat",
      "Nima Mokhlesi",
      "Kenji Kozakai",
      "Patrick Hong",
      "Teruhiko Kamei",
      "Kiyoaki Iwasa",
      "J. Nakai",
      "Takahiro Shimizu",
      "Mitsuaki Honma",
      "Shintaro Sakai",
      "Toshimasa Kawaai",
      "Satoru Hoshi",
      "Jonghak Yuh",
      "Cynthia Hsu",
      "Taiyuan Tseng",
      "Jason Li",
      "Jayson Hu",
      "M. Liu",
      "Shahzad Khalid",
      "J. Chen",
      "Mitsuyuki Watanabe",
      "Hung-Szu Lin",
      "Junhui Yang",
      "K. McKay",
      "Khanh Nguyen",
      "Tuan Pham",
      "Y. Matsuda",
      "K. Nakamura",
      "K. Kanebako",
      "S. Yoshikawa",
      "W. Igarashi",
      "A. Inoue",
      "T. Takahashi",
      "Y. Komatsu",
      "C. Suzuki",
      "K. Kanazawa",
      "Masaaki Higashitani",
      "Seungpil Lee",
      "T. Murai",
      "K. Nguyen",
      "James Lan",
      "Sharon Huynh",
      "M. Murin",
      "M. Shlick",
      "M. Lasser",
      "Raul Cernea",
      "Mehrdad Mofidi",
      "K. Schuegraf",
      "Khandker Quader"
    ],
    "id": "775b726f-ed69-4e69-84a3-0c84561fb046",
    "titre": "A 5.6MB/s 64Gb 4b/Cell NAND Flash memory in 43nm CMOS."
  },
  {
    "annee": 2012,
    "auteurs": [
      "Yan Li",
      "Seungpil Lee",
      "Ken Oowada",
      "Hao Nguyen",
      "Qui Nguyen",
      "Nima Mokhlesi",
      "Cynthia Hsu",
      "Jason Li",
      "Venky Ramachandra",
      "Teruhiko Kamei",
      "Masaaki Higashitani",
      "Tuan Pham",
      "Mitsuaki Honma",
      "Yoshihisa Watanabe",
      "Kazumi Ino",
      "Binh Le",
      "Byungki Woo",
      "Khin Htoo",
      "Taiyuan Tseng",
      "Long Pham",
      "Frank Tsai",
      "Kwang-ho Kim",
      "Yi-Chieh Chen",
      "Min She",
      "Jonghak Yuh",
      "Alex Chu",
      "Chen Chen",
      "Ruchi Puri",
      "Hung-Szu Lin",
      "Yi-Fang Chen",
      "William Mak",
      "Jonathan Huynh",
      "Jim Chan",
      "Mitsuyuki Watanabe",
      "Daniel Yang",
      "Grishma Shah",
      "Pavithra Souriraj",
      "Dinesh Tadepalli",
      "Tenugu Suman",
      "Ray Gao",
      "Viski Popuri",
      "Behdad Azarbayjani",
      "Ravindra Madpur",
      "James Lan",
      "Emilio Yero",
      "Feng Pan",
      "Patrick Hong",
      "Jang Yong Kang",
      "Farookh Moogat",
      "Yupin Fong",
      "Raul Cernea",
      "Sharon Huynh",
      "Cuong Trinh",
      "Mehrdad Mofidi",
      "Ritu Shrivastava",
      "Khandker Quader"
    ],
    "id": "425fe7e8-85b7-491f-a4fd-ca65bb4a9827",
    "titre": "128Gb 3b/cell NAND flash memory in 19nm technology with 18MB/s write rate and 400Mb/s toggle mode."
  },
  {
    "annee": 2012,
    "auteurs": [
      "Noboru Shibata",
      "Kazushige Kanda",
      "Toshiki Hisada",
      "Katsuaki Isobe",
      "Manabu Sato",
      "Yui Shimizu",
      "Takahiro Shimizu",
      "Takahiro Sugimoto",
      "Tomohiro Kobayashi",
      "K. Inuzuka",
      "Naoaki Kanagawa",
      "Yasuyuki Kajitani",
      "Takeshi Ogawa",
      "J. Nakai",
      "Kiyoaki Iwasa",
      "Masatsugu Kojima",
      "Toshihiro Suzuki",
      "Yuya Suzuki",
      "Shintaro Sakai",
      "Tomofumi Fujimura",
      "Yuko Utsunomiya",
      "Toshifumi Hashimoto",
      "M. Miakashi",
      "Naoki Kobayashi 0004",
      "M. Inagaki",
      "Yuuki Matsumoto",
      "Satoshi Inoue",
      "Yoshinao Suzuki",
      "D. He",
      "Yasuhiko Honda",
      "Junji Musha",
      "Masaki Nakagawa",
      "Mitsuaki Honma",
      "Naofumi Abiko",
      "Mitsumasa Koyanagi",
      "Masahiro Yoshihara",
      "Kazumi Ino",
      "Mitsuhiro Noguchi",
      "Teruhiko Kamei",
      "Yosuke Kato",
      "Shingo Zaitsu",
      "Hiroaki Nasu",
      "T. Ariki",
      "Hardwell Chibvongodze",
      "Mitsuyuki Watanabe",
      "Hong Ding",
      "Naoki Ookuma",
      "Ryuji Yamashita",
      "G. Liang",
      "Gertjan Hemink",
      "Farookh Moogat",
      "Cuong Trinh",
      "Masaaki Higashitani",
      "Tuan Pham",
      "K. Kanazawa"
    ],
    "id": "6461d93e-7eba-4b2b-825e-ba74e284582e",
    "titre": "2 64Gb multi-level flash memory with 400Mb/s/pin 1.8V Toggle Mode interface."
  }
]
```
**Documents number:**
> 3

#### b) Obtenir les ouvrages de Nikolaos Dimakis. Fournir les ids, titres, années et auteurs.
**Query:**
```
SELECT META().id, titre, annee, auteurs
FROM ouvrages
WHERE "Nikolaos Dimakis" in auteurs
```
**Result:**
```
[
  {
    "annee": 2009,
    "auteurs": [
      "Nikolaos Dimakis",
      "John Soldatos",
      "Lazaros Polymenakos"
    ],
    "id": "1460e339-74ee-4f64-9d4b-92b3724ee9ee",
    "titre": "Introduction."
  },
  {
    "annee": 2009,
    "auteurs": [
      "Nikolaos Dimakis",
      "John Soldatos",
      "Lazaros Polymenakos",
      "Jan Cur?",
      "Jan Kleindienst"
    ],
    "id": "612ad2eb-2a59-4d9e-a7b9-6ca60c6faabe",
    "titre": "Perceptual Component Data Models and APIs."
  }
  ...
]
```
**Documents number:**
> 6

#### c) Même question en les triant par ordre décroissant sur les années puis par ordre croissant sur les titres
**Query:**
```
SELECT META().id, titre, annee, auteurs
FROM ouvrages
WHERE "Nikolaos Dimakis" in auteurs
ORDER BY annee DESC, titre ASC;
```
**Result:**
```
[
  {
    "annee": 2009,
    "auteurs": [
      "Axel B?",
      "Nikolaos Dimakis",
      "Ruth Karl",
      "Wilmuth M?",
      "Uwe Pfirrmann",
      "Manfred Schenk",
      "Gerhard Sutschet"
    ],
    "id": "b4ead10c-a503-46bd-b2a6-148874181b0f",
    "titre": "Building Scalable Services: The CHIL Agent Framework."
  },
  {
    "annee": 2009,
    "auteurs": [
      "Nikolaos Dimakis",
      "John Soldatos",
      "Lazaros Polymenakos"
    ],
    "id": "1460e339-74ee-4f64-9d4b-92b3724ee9ee",
    "titre": "Introduction."
  }
  ...
]
```
**Documents number:**
> 6

#### d) Combien y a-t-il d’ouvrages de Nikolaos Dimakis ?
**Query:**
```
SELECT COUNT(*) as nb_ouvrages_de_nd
FROM ouvrages
WHERE "Nikolaos Dimakis" in auteurs;
```
**Result:**
```
[
  {
    "nb_ouvrages_de_nd": 6
  }
]
```
**Documents number:**
> 6

### 5. Obtenir la liste de tous les ouvrages dont le titre contient le mot « ontology » ou au pluriel « ontologies » (non sensible à la casse). Fournir l’id en plus des autres attributs.
**Query:**
```
SELECT META().id, ouvrages.*
FROM ouvrages
WHERE REGEXP_CONTAINS(titre, ".*(?i)ontolog.*");
```
**Result:**
```
[
  {
    "annee": 2009,
    "auteurs": [],
    "dossier": "series/lncs/5445",
    "editeur": "Springer",
    "id": "0019a70a-026e-4695-907f-5437d40dbe48",
    "isbn": [
      "978-3-642-01906-7"
    ],
    "redacteur": "Stefano Spaccapietra",
    "section": "Lecture Notes in Computer Science",
    "titre": "Modular Ontologies: Concepts, Theories and Techniques for Knowledge Modularization",
    "titrelivre": "Modular Ontologies",
    "type": "Livre",
    "url": "db/series/lncs/lncs5445.html",
    "volume": "5445"
  },
  {
    "annee": 2012,
    "auteurs": [
      "Erica F. Souza",
      "Leandro E. Oliveira",
      "Ricardo de Almeida Falbo",
      "N. L. Vijaykumar"
    ],
    "dossier": "conf/ontobras/SouzaOFV12",
    "id": "002c3399-90c6-41e4-89bb-d8f8280c7e08",
    "pages": {
      "debut": 200,
      "fin": 205
    },
    "titre": "Using Ontologies to Build a Database to Obtain Strategic Information in Decision Making.",
    "titrelivre": "ONTOBRAS-MOST",
    "type": "Article",
    "url": "db/conf/ontobras/ontobras2012.html#SouzaOFV12"
  }
  ...
]
```
**Documents number:**
> 1145

### 6.
#### a) Combien y a-t-il d'ouvrages dont la page de fin vaut 0 ?
**Query:**
```
SELECT COUNT(*) as nb
FROM ouvrages
WHERE pages.fin = 0;
```
**Result:**
```
[
  {
    "nb": 679
  }
]
```
**Documents number:**
> 679

#### b) Combien y a-t-il d'ouvrages dont la page de fin est plus petite que la page de début, sans considéré lorsque la page de fin vaut 0 ?
**Query:**
```
SELECT COUNT(*) as nb
FROM ouvrages
WHERE pages.debut > pages.fin AND pages.fin != 0;
```
**Result:**
```
[
  {
    "nb": 39
  }
]
```
**Documents number:**
> 39

#### c) Combien y a-t-il d'ouvrages dont les pages ne sont pas renseignées ?
**Query:**
```
SELECT COUNT(*) as nb
FROM ouvrages
WHERE pages IS MISSING OR pages IS NULL;
```
**Result:**
```
[
  {
    "nb": 8045
  }
]
```
**Documents number:**
> 8045

#### d) Afficher les 5 premiers ouvrages triés par titre dont l’attribut pages est renseigné mais pas la page de début. On affichera les ids, les titres, les pages.
**Query:**
```
SELECT META().id, titre, pages
FROM ouvrages
WHERE pages.debut IS MISSING AND pages IS NOT MISSING
ORDER BY titre ASC
LIMIT 5;
```
**Result:**
```
[
  {
    "id": "bce8befd-7881-4230-946c-38c7744283cd",
    "pages": "I",
    "titre": "#tweetsmart - 25 Twitter Projects to Help You Build Your Community."
  },
  {
    "id": "0b2e48a2-f184-4bb0-be67-058d2072932d",
    "pages": "257",
    "titre": "'A minicomputer-based logic-fault simulator'."
  },
  {
    "id": "52acaed5-4250-4097-bc6a-a45c01d34f4b",
    "pages": "91",
    "titre": "'A partitioning technique for LSI chips including a bunching algorithm'."
  },
  {
    "id": "ed1d3674-3ead-46b1-95da-7f8f81323b7e",
    "pages": "60",
    "titre": "'An interactive system for semi-automatic artwork generation of printed circuit boards'."
  },
  {
    "id": "d8a5f0a8-b050-4830-b1de-87e1218eacc0",
    "pages": "34",
    "titre": "'An interactive, graphical system for the design of photomasks'."
  }
]
```
**Documents number:**
> 5
