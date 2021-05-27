let numberStr = prompt("De quel nombre veux-tu calculer la factorielle ?");
  console.log(numberStr);
  if (Number.isNaN(parseInt(numberStr)) || parseInt(numberStr) < 0) {   
  console.log("Vous n'avez pas saisi un nombre positif ou égal à 0.");
  } else {
    let number = parseInt(numberStr);
    let x = 1;
    
    while (number > 0) {
      x *= number; 
      console.log(x);
      number--;
    }
    console.log(`le Résultat est : ${x}`);
  }
