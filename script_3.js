let floors = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

function pyramid(number) {
    let f 
    for(i = 1; i <= number; i++)
    {
        f = `${" ".repeat(number - i)}` + `${"#".repeat(i)}`; 
        console.log(f);
    }
}

pyramid(floors);