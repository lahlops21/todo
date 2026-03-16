// Componente de lógica
const DeletaTarefa = () => {

    const botaoDeleta = document.createElement("button"); // Cria um elemento html, tag botao
    botaoDeleta.innerText = "deletar"; // Define o texto visível do botão.
}

// Componente do evento - Qual evento, o que vai 
// acontecer(DeletaTarefa), onde
const BotaoDeleta = (evento) => {
    const deletaEvento = evento.target; // obtem o botão que foi clicado 

    // vou chamar o DeletaTarefa que é a lógica
}

export default BotaoDeleta // Exporta a função para que ela possa ser importada em outros arquivos.