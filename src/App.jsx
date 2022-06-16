import { useState } from 'react'
import './App.css'

export function App() {
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

  const [questionInput, setQuestionInput] = useState('')
  const [response, setResponse] = useState()

  function revealFate() {
    if (questionInput.trim() === '') {
      return window.alert("[ERRO] Preencha o campo de perguntas e tente novamente!");
    }

    const h3Response = document.querySelector('.response')
    const btn = document.querySelector('.form__button')

    h3Response.style.opacity = 0.9
    btn.setAttribute('disabled', true)

    setResponse(responses[Math.floor(Math.random() * responses.length)])

    setQuestionInput('')
    
    setTimeout(function() {
      h3Response.style.opacity = 0
      btn.removeAttribute('disabled')
      document.querySelector('.form__input').value = ''
    }, 4000)
  }

  return (
    <div className="container">
      <img
        src="https://raw.githubusercontent.com/joaohenrik03/destiny-revealer/6771e296aa287b528ca64910dcedc0df2feb2fca/assets/crystal-ball.svg"
        alt="Imagem de uma bola de cristal"
      />
      <h1>
        Vou revelar seu destino!
      </h1>
      <p>
        Clique em fazer pergunta para que seu destino seja revelado
      </p>

      <div className="form">
        <label htmlFor="questionRoBeRevealed" className='sr-only'>
          Digite sua pergunta:
        </label>
        <input 
          type="text"
          placeholder="Digite sua pergunta" 
          className="form__input" 
          id='questionRoBeRevealed'
          onChange={event => setQuestionInput(event.target.value)}
        />
        <button 
          id="submit" 
          onClick={revealFate} 
          className="form__button"
        >
          Fazer pergunta
        </button>
      </div>

      <h3 className="response">
        {response}
      </h3>
    </div>
  )
}