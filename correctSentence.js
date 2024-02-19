export const correctSentence = sentence => {
    let trimmedSentence
    if (sentence == "") {
         return sentence
    } else {
        trimmedSentence = sentence.trim().replace(/ +/g, " ")
    }
    const disallowedList = ['!', '?', ',', ':', ';']
    const endsWithDisallowed = disallowedList.includes(trimmedSentence[trimmedSentence.length - 1])

    if (trimmedSentence.endsWith('.') || endsWithDisallowed) {
        return trimmedSentence[0].toUpperCase() +  trimmedSentence.slice(1, trimmedSentence.length)
    } else 
    return trimmedSentence[0].toUpperCase() + trimmedSentence.slice(1, trimmedSentence.length) + '.' 
}