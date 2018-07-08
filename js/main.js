alert("bonjour");
//////////
//Global Data and variables
//////////

//Tableau qui contient tous les utilisateurs
var myUsers = [
 //Tableau utilisateur 0
 [
   "Dussart",
   "Guillaume",
   45,
   false
 ],
 //Tableau utilisateur 1
 [
   "Jonsson",
   "Olle",
   24,
   false
 ],
 //Tableau utilisateur 2
 [
   "Tchekov",
   "Nathalia",
   32,
   true
 ]
];

///////////
//Functions
//////////

function showSexe(user) {
 //Si l'utilisateur est une femme
 if (user[3] === true) {
   console.log("Femme");
 }
 //Sinon c'est un homme
 else {
   console.log("Homme");
 }
}

function loopUsers(users) {
 //Première boucle qui parcours users
 for (var i = 0; i < users.length; i++) {
   //Deuxième boucle qui parcour chaque tableau utilisateur
   for (var j = 0; j < users[i].length; j++) {
     //Si on est au sexe de la personne
     if (j === 3) {
       showSexe(users[i]);
     }
     //Sinon on affiche la valeur de manière classique
     else {
       console.log(users[i][j]);
     }
   }
 }
}

function showUsers(users) {
 console.log("Les utilisateurs sont : ");
   loopUsers(users);
   //Après avoir bouclé sur le tableau d'un utilisateur on ajoute une séparation visuelle
   console.log("--------");
}

///////////
//Program logic
//////////

showUsers(myUsers);
