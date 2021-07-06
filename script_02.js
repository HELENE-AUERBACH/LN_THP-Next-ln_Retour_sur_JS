const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let allBooksTitles = new Array();
let areAllBooksRented = true;
let theMostRentedCount = 0;
let theMostRentedBook = null;
let theLessRentedCount = 10000000000000000000000000000000000;
let theLessRentedBook = null;
let the133712IdBookIndex = -1;
books.map(function(item, index) {
  allBooksTitles.push(item.title);
  if (item.rented <= 0) {
    areAllBooksRented = false;
  }
  if (item.rented < theLessRentedCount) {
    theLessRentedCount = item.rented;
    theLessRentedBook = item;
  }
  if (item.rented > theMostRentedCount) {
    theMostRentedCount = item.rented;
    theMostRentedBook = item;
  }
  if (item.id == 133712) {
    the133712IdBookIndex = index;
  }
});
console.log("Sors-moi la liste des titres des livres du CDI :");
console.log(allBooksTitles);
console.log(`Est-ce que tous les livres ont été empruntés au moins une fois ? : ${areAllBooksRented}`);
console.log("Quel est le livre le plus emprunté ? :");
console.log(theMostRentedBook);
console.log("Quel est le livre le moins emprunté ? :", theLessRentedBook);
console.log("Supprime le livre avec l'ID 133712 :");
books.splice(the133712IdBookIndex, 1); // enlève 1 seul élément à partir de l'indice "the133712IdBookIndex"
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il a déjà été supprimé) :");
let booksByTitleSortedArray = books.sort(function(left, right) {
  var titleOrder = left.title.localeCompare(right.title);
  var idOrder = left.id - right.id;
  return titleOrder || idOrder;
});
console.log(booksByTitleSortedArray);
