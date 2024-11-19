class Cinderella{
    constructor(name,age,footSize) {
        this.name = name;
        this.age= age;
        this.footSize=footSize;
    }
}
const Cinderellas=[
    new Cinderella ('Anna',30,38),
    new Cinderella ('Maria',20,35),
    new Cinderella ('Sophia',27,40),
    new Cinderella ('Catherine',18,37),
    new Cinderella ('Victoria',45,39),
    new Cinderella ('Alexandra',60,41),
    new Cinderella ('Eva',15,24),
    new Cinderella ('Diana',24,39),
    new Cinderella ('Natasha',27,38),
    new Cinderella ('Ariel',20,36),
]
class Prince{
    constructor(name,age,shoe){
        this.name = name;
        this.age = age;
        this.shoe=shoe;
    };
}
const prince = new Prince('Oliver',25,36);

for (const Cinderella  of Cinderellas) {
    if (Cinderella.footSize === Prince.shoe) {
        prince.width=Cinderella;
    };
}

const cinderellaPrince = Cinderellas.find(Cinderella=>Cinderella.footSize ===prince.shoe);

prince.width = cinderellaPrince;

console.log(cinderellaPrince);

