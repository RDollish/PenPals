import { fetchLetters, fetchAuthors, fetchTopics, fetchRecipients } from "./dataAccess.js"
import { PenPal } from "./PenPal.js"


const mainContainer = document.querySelector("#container")


const renderLetters = () => {
    fetchLetters().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

const renderAuthors = () => {
    fetchAuthors().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

const renderRecipients = () => {
    fetchRecipients().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}

const renderTopics = () => {
    fetchTopics().then(
        () => {
            mainContainer.innerHTML = PenPal()
        }
    )
}



mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        renderLetters()
        renderAuthors()
        renderRecipients()
        renderTopics()
    }
)
renderLetters()
renderAuthors()
renderRecipients()
renderTopics()