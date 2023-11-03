class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      mago: "usou magia",
      guerreiro: "usou espada",
      monge: "usou artes marciais",
      ninja: "usou shuriken",
    };

    const ataque = ataques[this.tipo] || "usou um ataque misterioso";

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const meuHeroi1 = new Heroi("Mestre Yoda", 45, "mago");
meuHeroi1.atacar();

const meuHeroi2 = new Heroi("Mulan", 30, "guerreiro");
meuHeroi2.atacar();

const meuHeroi3 = new Heroi("Oogway", 55, "monge");
meuHeroi3.atacar();

const meuHeroi4 = new Heroi("Naruto Uzumaki", 25, "ninja");
meuHeroi4.atacar();
