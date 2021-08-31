const yesButton = document.getElementById("si-button")
const noButton = document.getElementById("no-button")
const myContent = document.getElementById("contenido")

const myTextContentsYes = [
  "Quisiera saber si me darías la oportunidad de estar nuevamente a tu lado, siendo el uno para el otro",
  "Eso significa que serías de nuevo mi novia, ¿lo sabes? n.n",
  "Pues ya que lo entendiste c: Me gustaría saber si, ¿Quieres ser mi novia de nuevo? :'3 ",
  "Te juro que no te arepentiras jamas mi niña preciosa, y esta vez me prometi a mi y solo a mi que todo lo malo que me hace falta cambiar lo cambiaré, pero estás solo son palabras, poco a poco lo verás <3"
]

const myTextContentsNo = [
  "Entiendo que tomes esa decisión, aunque fui yo quien termino con todo, realmente no estaba del todo seguro, sin embargo lo hice y aceptaré las consecuencias, gracias por haber estado en mi vida como una de las personas más especiales que habré tenido y muchas gracias por todo lo que me diste cuando estuve a tu lado, espero que seas muy feliz, y si algún día podemos ser amigos de nuevo, creeme que estaré encantado, te quiero mucho, hasta luego, cuidate demasiado c':",
  "Entiendo que tomes esa decisión, aunque fui yo quien termino con todo, realmente no estaba del todo seguro, sin embargo lo hice y aceptaré las consecuencias, gracias por haber estado en mi vida como una de las personas más especiales que habré tenido y muchas gracias por todo lo que me diste cuando estuve a tu lado, espero que seas muy feliz, y si algún día podemos ser amigos de nuevo, creeme que estaré encantado, te quiero mucho, hasta luego, cuidate demasiado c':",
  "Pues así es preciosa, lo serías de nuevo y realmente estoy muy contento por ser tuyo de nuevo, verás que esta vez serán más acciones uqe palabras :'3 me esforzare siempre en hacerte feliz y que lo nuestro funcione <3",
]

let count = 0

yesButton.addEventListener("click", changeYesText)
noButton.addEventListener("click", changeNoText)

function changeYesText(event) {
  myContent.innerText = myTextContentsYes[count]
  count += 1
}

function changeNoText(event) {
  myContent.innerText = myTextContentsNo[count]
  count += 1
}
