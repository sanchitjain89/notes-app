const notes = require('./notes.js')
const yargs = require('yargs')

yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'List notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'Reading notes',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(notes)
// console.log(yargs.argv)