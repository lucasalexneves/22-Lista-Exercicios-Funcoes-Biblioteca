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
            console.log("Os livros desse ano são: " + ano)
        }        
    }
}


