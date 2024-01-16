// classe = abstração
interface IPessoa {
  nome: string;
  idade: number;
  peso: number;

  levantar: () => void;
}

class Pessoa implements IPessoa {
  //atributos//
  nome: string;
  idade: number;
  peso: number;
  private _cpf: string;
  altura: number;

  // metodo construtor
  constructor(
    nome: string,
    idade: number,
    peso: number,
    cpf: string,
    altura: number
  ) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this._cpf = cpf;
    this.altura = altura;
  }

  //metodos = ação = funções do objeto

  levantar() {
    console.log("levantei✌");
  }

  //acessors: getter

  get cpf(): string {
    return this._cpf;
  }

  // acessor: setter

  set cpf(newCpf: string) {
    if (newCpf.length !== 14) {
      throw new Error("numero de cpf invalido");
    }
    this._cpf = newCpf;
  }
}

class Aluno extends Pessoa {
  codigo: string;
  constructor(
    nome: string,
    idade: number,
    peso: number,
    altura: number,
    codigo: string,
    cpf: string
  ) {
    super(nome, idade, peso, cpf, altura);
    this.codigo = codigo;
  }

  dormir() {
    console.log("ensinado👩‍🎓");
  }
}
// instaciando o objeto Pessoa, criando uma nova pessoa
const pessoa1 = new Pessoa("ian", 30, 89, "12345678901", 1.77);

pessoa1.levantar();
console.log(pessoa1.cpf); // só pode ser lido por causa do get

pessoa1.cpf = "010.101.010_20"; // atribuido graças ao setter

console.log(pessoa1.cpf);

const estudante = new Aluno("tamires", 26, 60, 1.5, "12345", "010.123.321_30");
console.log(estudante);
estudante.dormir();
estudante.levantar();
