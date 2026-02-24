const form = document.querySelector('.form');
const btnAddAluno = document.querySelector('#btnAdicionar');
const lista = document.querySelector('#listaAlunos');
let aluno;

btnAddAluno.addEventListener('click', (evento) => {
    evento.preventDefault();
    
    const inputNome = document.querySelector('#nome');
    const inputNota = document.querySelector('#nota');

    if(camposVazios(inputNome.value, inputNota.value))
        alert(`Erro!!! Campo 'Nome' ou 'Nota' está Vazio`);

    else if(notaValida(inputNota.value))
        alert(`Erro!!! Campo 'Nota' Inválido`);

    else aluno = new Alunos(inputNome.value, Number(inputNota.value));

    addAlunos(aluno);

    inputNome.value = '';
    inputNota.value = '';
})

function addAlunos(aluno){
    const li = criaLista();

    const texto = criaTexto(aluno);
    li.innerHTML = texto;

    if (foiAprovado(aluno.nota)) li.classList.add('aprovado');
    else li.classList.add('reprovado');
    
    lista.appendChild(li);
}

function criaTexto(aluno){
    if(foiAprovado(aluno.nota)) return `${aluno.nome} - Nota: ${aluno.nota} - Aprovado`
    else return `${aluno.nome} - Nota: ${aluno.nota} - Reprovado`
}

function foiAprovado(nota){
    return nota >= 7;   
}

function criaLista(){
    return document.createElement('li');
}

function camposVazios(nome, nota){
    return nome.trim() === '' || nota.trim() === '';    
}

function notaValida(nota){
    return nota < 0 || nota > 10;
}

function Alunos(nome, nota){
    this.nome = nome;
    this.nota = nota; 
}