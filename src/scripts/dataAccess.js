const applicationState = {
    authors: [

    ],
    topics: [

    ],
    recipients: [

    ],
    letters: [

    ]

}


export const transientState = {

}

export const setAuthor = (authorId) => {
    transientState.selectedAuthor = authorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setTopic = (topicId) => {
    if (transientState.selectedTopic){
        transientState.selectedTopic += topicId

    }
    else {
    transientState.selectedTopic = topicId}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setRecipient = (recipientId) => {
    transientState.selectedRecipient = recipientId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setAuthorEmail = (email) => {
    transientState.AuthorEmail = email
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setRecipientEmail = (email) => {
    transientState.RecipientEmail = email
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchAuthors = () => {
    return fetch(`${API}/Authors`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.authors = serviceRequests
            }
        )
}

export const fetchTopics = () => {
    return fetch(`${API}/Topics`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
            // Store the external state in application state
                applicationState.topics = serviceRequests
            }
        )
}

export const fetchRecipients = () => {
    return fetch(`${API}/Recipients`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.recipients = serviceRequests
            }
        )
}
export const fetchLetters = () => {
    return fetch(`${API}/Letters`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.letters = serviceRequests
            }
        )
}

export const sendLetter = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/Letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// export const deleteRequest = (id) => {
//     return fetch(`${API}/Letters/${id}`, { method: "DELETE" })
//         .then(
//             () => {
//                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
//             }
//         )
// }

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}