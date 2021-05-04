// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
cats.push(name)
}

function appendCat(name) {
    return [...cats, name]
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function prependCat(name) {
    return [name, ...cats]
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function removeLastCat() {
    const copyCats = [... cats]
    copyCats.pop()
    return copyCats
}

function destructivelyRemoveFirstCat() {
cats.shift()
}

function removeFirstCat () {
const copyCats = [... cats]
copyCats.shift()
return copyCats
}