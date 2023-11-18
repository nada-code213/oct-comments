//selectionner le bouton par class
let submitButton = document.querySelector(".submit-button");
//selectionner la zone du texte par class
let textInput = document.querySelector(".text-input");
//selectionner la zone ou on va injecter les p a l'interieur
let comments = document.querySelector(".comments");
//ajouter un event listener pour le bouton (event : click)
submitButton.addEventListener("click", () => {
  //declarer une variable qui va contenir la chaine de caractere ecrite dans la zone du texte
  let writtenValue = textInput.value;
  //declarer une variable qui contiendra le code html du p qui contient le commentaire ecrit dans la zone du texte
  let commentHTML = `<p>${writtenValue}</p>`;
  //ajouter le commentHTML dans le innerHTML du comments
  comments.innerHTML += commentHTML;
  textInput.value = "";
});
