const { on } = require('events');
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
    console.log(`data receieved ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other receieved`)
})

customEmitter.emit('response', 'john', 23)