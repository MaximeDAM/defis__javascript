

let chaine = "sdfERTwERTdfgERTeERTdfgERTlRTYdfgERTlRTYdfgERT ERTdfgERTdZERdfgERToERTdfgERTnERTdfgERTeERTsdf";

let newChaine = chaine.replace(/[a-z]{3}|[A-Z]{3}/g, "");

console.log(newChaine);