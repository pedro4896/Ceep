
const BotaoDeleta = () =>{
    const botao_deleta = document.createElement('button');
    botao_deleta.innerText = 'deletar';

    botao_deleta.addEventListener('click', deletarTarefa)

    return botao_deleta;
}

const deletarTarefa = (evento) =>{
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
}

export default BotaoDeleta;