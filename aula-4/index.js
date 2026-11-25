let alunos = ["carlos", "maria", "antonio", "luiza"];
let alunos2 = ["Brunos", "Rodolfo"];

let alunosDados = [
  { nome: "carlos", idade: 15 },
  { nome: "maria", idade: 18 },
  { nome: "antonio", idade: 17 },
  { nome: "luiza", idade: 19 },
  { nome: "maria", idade: 20 },
];

console.log(alunosDados.filter((aluno) => aluno.idade >= 17));

// console.log[alunosDados.find((aluno) => aluno.nome === "maria")];

// console.log(alunosDados.filter((aluno) => aluno.nome === "maria"));

// console.log(alunosDados.filter((aluno) => aluno.idade > 17));

// console.log(alunos.filter((aluno) => aluno.includes("r")));

// console.log(alunos.includes("carlos")); // retorna true ou false para array de string

// console.log(alunosDados.some((aluno) => alunos.nome === "Eduarda")); //retorna true ou false para array de objetos

// const indexAluno = alunos.indexOf("Maria"); encontra index de array de string

// const indexCarlosObjeto = alunosDados.findIndex(
// (aluno) => aluno.nome === "maria",
// ) encontra index dentro de um array de objetos

// const mariaAntonio = alunos.slice(1, 3); corta o array de um indix ate o outro

// alunos.splice(1, 2, "Bruno", "Rodolfo"); recorta a array com um inicio e quantos elementos vão ser utilizados

// console.log(indexAluno);

// console.log(alunos);

//console.log(alunos);
//console.log(alunoDados);
// const nome = "carlos";

// console.log(nome.length); //contar quantos itens tem

// console.log(alunos.lenght);

// alunos.push("Derick");

// alunos.unshift("Eduardo");

// ultimoAlunoRemovido = alunos.pop(); //remove e retorna o ultimo elemento da lista

// const primeiroAlunoRemovido = alunos.shift(); //remove e retorna o primeiro elemento da lista

// console.log(ultimoAlunoRemovido);
