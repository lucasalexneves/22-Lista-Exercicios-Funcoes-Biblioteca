/* 
Uma biblioteca precisa de um sistema para consultas em seu acervo digital. Sabe-se
que um livro possui: título, autor, ano, idioma. O sistema deve ter as seguintes
funcionalidades:
1. Buscar e exibir os livros de um autor;
2. Buscar e exibir os livros de determinado ano;
3. Buscar e exibir os livros de um autor a partir de determinado ano;
4. Buscar um livro pelo nome e trazer todos as suas versões em diferentes idiomas;
5. Exibir os livros de determinado idioma; 
6. Exibir os livros ordenados pelo ano; 
*/

let ids = []
let titulos = []
let autores = []
let ano = []
let idioma = []
let index = 0
let indexId = 0

let continuar = true

while(continuar){
    let opcao = prompt("Insira uma opção que deseja executar: 1- Cadastrar livro, 2 - Exibir livros de um autor, 3 - Exibir livros de um ano, 4 - Exibir livros de um autor a partir de um determinado ano, 5 - Bucar livro e trazer em outros idiomas, 6 - Exibir livros de determinado idioma, 7 - Exibir livros ordenados por ano, 8 - Encerrar")

    if(opcao == "1"){
        CadastrarLivro()
        console.log("Livro cadastrado com sucesso!")
    } else if (opcao == "2"){
        let autor = prompt("Digite o nome do autor que deseja buscar")
        BuscarPorAutor(autor)
    } else if (opcao == "3"){
        let DeterminadoAno = prompt("Digite o ano que deseja exibir os livros")
        BuscarPorAno(DeterminadoAno)
    } else if(opcao == "4"){

    } else if(opcao == "5"){

    } else if(opcao == "6"){

    } else if(opcao == "7"){

    } else if(opcao == "8"){
        continuar = false
    }
}

function CadastrarLivro() {
    ids[index] = indexId + 1
    titulos[index] = prompt("Insira o Título do livro:")
    autores[index] = prompt("Insira o Autor do livro:")
    ano[index] = prompt("Insira o Ano do livro:")
    idioma[index] = prompt("Insira o Idioma do livro:")
    index++
    indexId++
}

function BuscarPorAutor(autor){
    for (let index = 0; index < autores.length; index++) {
        if(autor = autores[index]){
            console.log("Os livros desse autor são: " + titulos)
        }
    }    
}

function BuscarPorAno(DeterminadoAno){
    for (let index = 0; index < ano.length; index++) {
        if(DeterminadoAno == ano[index]){
            console.log("Os livros desse ano são: " + titulos)
        }        
    }
}

function BuscarTodosLivrosAutor(autor2, anoAutor2){
    for (let index = 0; index < autores.length; index++) {
        if(autor2 == autores[index] && anoAutor2 < 2022){
            console.log("Os livros do autor " + autor2 + " desde o ano " + anoAutor2 + " são: "  + titulos) 
        }
        
    }
}





