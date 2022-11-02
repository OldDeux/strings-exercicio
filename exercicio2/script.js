const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const tamanhoString = minhaString.length

console.log("tamanho da string original é " + tamanhoString)

const stringCortada = minhaString.trim().length

console.log("tamanho da string cortada é " + stringCortada)

const stringModi = minhaString.replace("________","sticioso")

console.log("string modificada: " + stringModi)

