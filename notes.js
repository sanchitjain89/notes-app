const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    console.log(chalk.inverse("Your Notes\n"))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if (!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note saved"))
    }else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => title !== note.title)
    
    if (notesToKeep.length === notes.length)
        console.log(chalk.red.inverse("No note found!"))
    else
        console.log(chalk.green.inverse("Note Removed"))
    
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note !== undefined){
        console.log(chalk.yellow.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("No note found!"))
    }
}

module.exports = {
    listNotes : listNotes, 
    addNote : addNote,
    removeNote : removeNote,
    readNotes : readNotes
}