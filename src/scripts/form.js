import { setAuthor, setTopic, setRecipient, setAuthorEmail, setRecipientEmail, transientState, getAuthors, getTopics, getRecipients, sendLetter } from "./dataAccess.js"

export const SendLetter = () => {
    const authors = getAuthors()
    const topics = getTopics()
    const recipients = getRecipients()
    let html = `
    <center><div class="field">
            <label class="label" for="author">Author</label>
            <select class="author" name="author">
            <option value="author">Choose Author</option>`
                authors.map(
                    author => {
                        html += `<option value="${author.email}--${author.name}">${author.name}</option>`
                    }
                ).join("")
            html+=`
            </select>
        </div>
        <div class="field">
            <label class="label" for="letter">Letter</label>
            <textarea name="letter" class="letter" id="letter" /></textarea>
        </div>
        <div class="field">
            <label class="label" for="topic">Topics</label>`
                topics.map(
                    topic => {
                        html+= `<li>
                        <input type="checkbox" name="topic" value="${topic.topic}"/>${topic.topic}
                        </li>`
                    }
                ).join("")
            html+=`
        </div>
        <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select class="recipient" name="recipient">
            <option value="recipient">Choose Recipient</option>`
                recipients.map(
                    recipient => {
                        html+= `<option value="${recipient.email}--${recipient.name}">${recipient.name}</option>`
                    }
                ).join("")
            html+= `</select>
        </div>
        <div class="field">
        <label class="label" for="dateSent">Date Sent</label>
        <input type="date" name="dateSent" class="input" />
    </div>
        <div class="field">
        <button class="button" id="submitRequest">Send Letter</button></center>
    `

    return html
}


const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const author = transientState.selectedAuthor
        const letter = document.getElementById("letter").value;
        const topic = transientState.selectedTopic
        let allTopicsSplit = topic.split(/(?=[A-Z])/)
        let allTopicsJoin = allTopicsSplit.join(", ")
        const recipient = transientState.selectedRecipient
        const dateSent = document.querySelector("input[name='dateSent']").value
        const AuthorEmailAddress = transientState.AuthorEmail
        const RecipientEmailAddress = transientState.RecipientEmail

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: author,
            recipient: recipient,
            dateSent: dateSent,
            authorEmail: AuthorEmailAddress,
            recipientEmail: RecipientEmailAddress,
            topic: allTopicsJoin,
            letter: letter
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})

document.addEventListener(
    "click",
    (event) => {

        if (event.target.name === "author") {
            const AuthorID = event.target.value
            const [AuthorEmail,AuthorName] = AuthorID.split("--")
            setAuthor(AuthorName)
            setAuthorEmail(AuthorEmail)
        }
    })

document.addEventListener(
        "click",
        (event) => {
            if (event.target.name === "topic") {
                const topicID = event.target.value
                setTopic(topicID)
            }
            }
        )

document.addEventListener(
            "click",
            (event) => {
                if (event.target.name === "recipient") {
                    const RecipientID = event.target.value
                    const [RecipientEmail,RecipientName] = RecipientID.split("--")
                    setRecipient(RecipientName)
                    setRecipientEmail(RecipientEmail)
    
                }
            })
        