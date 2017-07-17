var myPokemonRoster = [];

function pokemon(name, type, hp, def, atk, legend){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}

var Bulbasaur =  pokemon["Bulbasaur", "Grass", 45, 50, 50, false];
var Charmander = new pokemon("Charmander", "Fire", 45, 50, 50, false);
var Squirtle = new pokemon("Squirtle", "Water", 45, 50, 50, false);
var Dragonite= new pokemon("Dragonite", "Dragon", 91, 95, 134, false);
var Charizard = new pokemon("Charizard", "Fire", 78, 78, 84, false);
var Pikachu = new pokemon("Pikachu", "Electric", 35, 40, 55, false);

myPokemonRoster.push(Bulbasaur);
myPokemonRoster.push(Dragonite);
myPokemonRoster.push(Squirtle);
myPokemonRoster.push(Charmander);
myPokemonRoster.push(Charizard);
myPokemonRoster.push(Pikachu);

console.log(myPokemonRoster.type[1]);