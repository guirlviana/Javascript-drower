let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 10
}

const velocityAfterTwoSeconds = (velocity, acceleration) => {
    new Promise(function(resolve, reject){
        setTimeout(() => {
            if (acceleration > 0){
                velocity += acceleration * 2
                console.log(`New velocity: ${velocity}`);
                resolve(velocity)
            } else {
                reject("Não possui aceleração")
            }
        }, 1000)
    })
}

velocityAfterTwoSeconds(komodoShip.velocity, komodoShip.acceleration)
console.log("Executing Promises");