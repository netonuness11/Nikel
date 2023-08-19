const nome = "Neto Nunes"
let nome2 = "";
let pessoaDefault = {
    nome: "Neto Nunes",
    idade: "26",
    trabalho: "Programador"
}

let nomes = ["Neto Nunes", "Maria Silva", "Pedro Silva"];
let pessoas = [
    {
        nome: "Neto Nunes",
        idade: "26",
        trabalho: "Programador"  
    },
    {nome: "Maria Nunes",
    idade: "26",
    trabalho: "UX/UI design"}
]; 


function alterarNome() {
    nome2 = "Maria Silva";
    console.log ("valor alterado");
    console.log (nome2);
}

function recebeEalteraNome (novoNome) {
        nome2 = novoNome;
        console.log ("valor alterado recebendo um nome");
    console.log (nome2);

}

function imprimirPessoa(pessoa) {
    console.log ("Nome:");
console.log(pessoa.nome);

console.log ("Idade:");
console.log(pessoa.idade);

console.log ("Trabalho:");
console.log(pessoa.trabalho);
}



function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}


function imprimirPessoas()



       


imprimirPessoas();

adicionarPessoa ({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"  
});




//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "26",
//    trabalho: "UX/UI Designer"})


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome ()