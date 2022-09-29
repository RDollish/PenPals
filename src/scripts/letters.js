import {getLetters} from "./dataAccess.js"

export const convertRequestToListElement = (letter) => {
    let HTMLString = ""
    if( letter.id % 2 !== 0) {
    HTMLString += `<center><li class="hammer">
        Dear ${letter.recipient} (${letter.recipientEmail}),
        <div>"${letter.letter}"</div>
        <div>Sincerely, ${letter.author} (${letter.authorEmail})</div>
        <div><button>${letter.topic}</button></div>
        <div>Sent on ${letter.dateSent}</div>
    </li></center>
    `}
    else {HTMLString += `<center><li class="hammer2">
    Dear ${letter.recipient} (${letter.recipientEmail}),
    <div>"${letter.letter}"</div>
    <div>Sincerely, ${letter.author} (${letter.authorEmail})</div>
    <div><button>${letter.topic}</button></div>
    <div>Sent on ${letter.dateSent}</div>
</li>
`

    }
    return HTMLString
}

export const Letters = () => {
    const letters = getLetters()

    let html = `
        <ul class="list_item">
            ${letters.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}