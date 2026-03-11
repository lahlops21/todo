import BotaoConclui from "./componentes/concluiTarefa";
import BotaoDeleta from "./componentes/deletaTarefa";

// Componente de criação de uma nova tarefa
const CriarTarefa = () => {
    // Criação das constantes do HTML
    const lista = document.querySelector("[data-list]"); // Seleciona o elemento da lista onde as tarefas serão inseridas.
    const input = document.querySelector("[data-form-input]"); // Seleciona o campo de texto onde a tarefa foi digitada.
    const valor = input.value; // Armazena o texto digitado pelo usuário.

    const tarefa = document.createElement("li"); // Cria um novo <li> para representar uma tarefa.
    tarefa.classList.add("task"); // Adiciona a classe task na li.
    
    const conteudo = `<p class="content">${valor}</p>` // Monta o html.


    
    // Criação do evento - Evento
    const novaTarefa = (event) => {
        const button = document.querySelector("[data-form-button]");
        // qual => onClick
        // o que vai acontecer => uma nova tarefa vai ser criada
        // botão
    }
}
