const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((notes)=> notes.title === title)
    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note added!"))
    } else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () =>{
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch(e) {
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const delNode = notes.find((notes) => notes.title === title)
    console.log(delNode)
    if(delNode){
        notes.pop({
            title: title,
            body: delNode.body
        })
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJSON)
        console.log(chalk.green.inverse("title removed successfully"))
    } else {
        console.log(chalk.red.inverse("title not found"))
    }
}

const listNote = () => {
    const list = loadNotes()
    list.forEach((element) => {
        console.log(chalk.yellow(element.title))
        console.log(chalk.blue(element.body))
    })
}

const readNote = (title) => {
    const list = loadNotes()
    const note = list.find((list) => (list.title === title))
    if(note){
        console.log(chalk.yellow(note.title))
        console.log(chalk.blue(note.body))
    }
    else{
        console.log("Not found")
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}