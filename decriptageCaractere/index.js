
var chaine = "&éæù¨€´b&œ'´&œ)´\\{¡ˇð ̵}…œ&àçr)àçæù¨…}…€a\\¿††µ{©þß®}…(-)vþß®à_-o";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
var word = "";

    for (let i = 0; i < chaine.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (chaine[i] === alphabet[j]) {
                word += chaine[i];
            }
        }
    }

    console.log(word);
