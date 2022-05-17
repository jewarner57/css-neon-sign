const targetAdj = document.getElementById("descriptor")



const mAdjectives = adjectives.reduce((acc, adjective) => {
    if (adjective.substring(0, 1).toLocaleLowerCase() === "m") {
        return [...acc, adjective]
    }
    return acc
}, [])

setAdj()

document.getElementById("reload").addEventListener('click', (elem) => {
    setAdj()
})

function setAdj() {
    let newAdj = mAdjectives[Math.floor(Math.random() * mAdjectives.length)];
    newAdj = newAdj.substring(0, 1).toUpperCase() + newAdj.substring(1)
    targetAdj.innerHTML = newAdj
}