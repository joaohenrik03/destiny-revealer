const btn = document.querySelector('#submit')

btn.addEventListener('click', function(e) {
    e.preventDefault()
})

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

const response = document.querySelector('#response')
const questionInput = document.querySelector('#questionInput')

function revealFate() {
    if (questionInput.value === '') {
        return alert('[ERRO] Preencha o campo de perguntas e tente novamente!')
    }

    btn.setAttribute('disabled', true)

    const newResponsePosition = Math.floor(Math.random() * responses.length)

    const question = `
        <div class="question">
            ${questionInput.value}   
        </div>
    `

    response.innerHTML = question + responses[newResponsePosition]

    setTimeout(function() {
        btn.removeAttribute('disabled')
        questionInput.value = ''
        response.style.opacity = 0
    }, 4000)
}