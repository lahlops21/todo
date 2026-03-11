import BotaoConclui from "./componentes/concluiTarefa";
import BotaoDeleta from "./componentes/deletaTarefa";

// Componente de criação de uma nova tarefa ( O que vai acontecer)
const CriarTarefa = () => {
    // Criação das constantes do HTML
    const lista = document.querySelector("[data-list]"); // Seleciona o elemento da lista onde as tarefas serão inseridas.
    const input = document.querySelector("[data-form-input]"); // Seleciona o campo de texto onde a tarefa foi digitada.
    const valor = input.value; // Armazena o texto digitado pelo usuário.

    const tarefa = document.createElement("li"); // Cria um novo <li> para representar uma tarefa.
    tarefa.classList.add("task"); // Adiciona a classe task na li.
    
    const conteudo = `<p class="content">${valor}</p>` // Monta o html.
    tarefa.innerHTML = conteudo; // Insere um conteúdo de texto de na tarefa. texto -> tag
    tarefa.appendChild(BotaoConclui()) // Adicione o botão de concluir no li// os cmponentes são chamados e vistos no html através de tags SEMPRE        
    tarefa.appendChild(BotaoDeleta()) // Adiciona botão de concluir no i 
    lista.appendChild(tarefa)
}

// evento ( onde vai acontecer)
const novaTarefa = document.querySelector("[data-form-button]");

// qual o evento (evento)
novaTarefa.addEventListener("click", CriarTarefa );

// 1. Onde vai ser o evento
// 2. Qual evento
// 3. (O que vai acontecer)