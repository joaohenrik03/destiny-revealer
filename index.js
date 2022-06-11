const responses = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function revealFate() {
    const response = document.querySelector('#response')
    const questionInput = document.querySelector('#questionInput')

    if (questionInput.value === '') {
        return alert('[ERRO] Preencha o campo de perguntas e tente novamente!')
    }

    const newResponsePosition = Math.floor(Math.random() * responses.length)

    response.textContent = responses[newResponsePosition]
}

console.log(response)