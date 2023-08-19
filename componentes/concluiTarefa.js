const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui

}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement // retorna o pai do elemento que estou capturando

    tarefaCompleta.classList.toggle('done') // toggle retorna um booleano no caso se cliquei ou não no botão
}

export default BotaoConclui

