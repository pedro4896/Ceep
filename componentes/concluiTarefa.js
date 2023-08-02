const BotaoConclui = () => {
    const botao_conclui = document.createElement('button');
    botao_conclui.classList.add('check-button');
    botao_conclui.innerText = 'concluir';

    botao_conclui.addEventListener('click', concluirTarefa)

    return botao_conclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;
    
    const tarefaCompleta = botaoConclui.parentElement // retorna o pai do elemento que estou capturando

    tarefaCompleta.classList.toggle('done'); // toggle retorna um booleano no caso se cliquei ou não no botão
}

export default BotaoConclui;