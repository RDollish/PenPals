import { Letters } from "./letters.js"
import { SendLetter } from "./form.js"


export const PenPal = () => {
    return `
    <center><h1>PenPal Society</h1>
    <section class="serviceForm">
        ${SendLetter()}
    </section>
    <section class="serviceRequests">
        <h2>Letters</h2>
        ${Letters()}
    </section></center>
    `
}
