// Classe do herói da aventura
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.nivel = 1;
    this.experiencia = 0;
    this.vida = 100;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "desferiu um ataque desconhecido";
    }

    console.log(`🗡️ O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    this.ganharExperiencia(15);
  }

  ganharExperiencia(valor) {
    this.experiencia += valor;
    if (this.experiencia >= this.nivel * 50) {
      this.nivel++;
      this.vida += 20;
      console.log(`⚡ ${this.nome} evoluiu para o nível ${this.nivel}! Vida agora: ${this.vida}`);
    }
  }

  status() {
    console.log(`🧙‍♂️ Herói: ${this.nome} | Tipo: ${this.tipo} | Idade: ${this.idade} anos`);
    console.log(`💥 Nível: ${this.nivel} | XP: ${this.experiencia} | Vida: ${this.vida}`);
    console.log("—".repeat(40));
  }
}

// Simulação
let heroi1 = new Heroi("Akira", 22, "ninja");
let heroi2 = new Heroi("Thalon", 130, "mago");

// Rodada de batalha
heroi1.status();
heroi2.status();

heroi1.atacar();
heroi2.atacar();
heroi1.atacar();
heroi2.atacar();

heroi1.status();
heroi2.status();

