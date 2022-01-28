class pokemon {
    constructor(name,label, image) {
      this.name = name;
      this.label = label;
      this.image = image;
    }
  }

  class listPokemon {
    constructor(nameTop,listPokemon){
      this.nameTop = nameTop;
      this.listPokemon = listPokemon
    }  
  }


var Dialga =  new pokemon("Dialga",
 "Dialga est un Pokémon légendaire de type Acier et Dragon de la quatrième génération. Il est aussi le maître du temps, et le rival de Palkia, maître de l'espace.",
 "Dialga.png");
var Palkia =  new pokemon("Palkia",
 "Palkia de type Eau et Dragon est le Pokémon légendaire emblème de la version Pokémon Perle. Il est le maître de l'espace, et le rival de Dialga, maître du temps.",
 "Palkia.png");
var Regigigas =  new pokemon("Regigigas",
 "Regigigas est un Pokémon légendaire de la quatrième génération de type Normal.À l'instar des autres golems, il fait partie du groupe des colosses légendaires, dont il est également le roi et le créateur. ",
 "Regigigas.png");
var Giratina =  new pokemon("Giratina",
 "Giratina est un Pokémon légendaire de type Spectre et Dragon de la quatrième génération. Il possède deux formes : la classique dite Alternative, connue depuis Pokémon Diamant et Perle, et l'Originelle, forme sous laquelle il apparaît dans Pokémon Platine. ",
 "Giratina.png");
var Cresselia =  new pokemon("Cresselia",
 "Cresselia est un Pokémon légendaire de type Psy apparu dans la quatrième génération. Il fait partie du Duo lunaire avec Darkrai. Ce Pokémon doux est capable de soigner les malades et en particulier ceux sous l’emprise de Darkrai grâce à l’une de ses plumes. Selon la légende, les particules brillantes de ses ailes provoqueraient de beaux rêves.",
 "Cresselia.png");
var Darkrai =  new pokemon("Darkrai",
 "Darkrai est un Pokémon fabuleux de la quatrième génération de type Ténèbres. Il fait partie du Duo lunaire avec Cresselia.Il maîtrise le sommeil de chacun, il peut produire des rêves, mais crée également des cauchemars, qui peuvent conduire à la mort de la victime. ",
 "Darkrai.png");

 const mapPokemon = new Map();
 mapPokemon.set(Dialga.name,Dialga);
 mapPokemon.set(Palkia.name,Palkia);
 mapPokemon.set(Regigigas.name,Regigigas);
 mapPokemon.set(Giratina.name,Giratina);
 mapPokemon.set(Cresselia.name,Cresselia);
 mapPokemon.set(Darkrai.name,Darkrai);

 