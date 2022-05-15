class Spaceship {
    constructor(name, amount) {
      this.name = name;
      this.amount = amount;
      this.isHitched = false;
      this.entraceDoorsOpen = false;
    }
  
    hitch(){
      this.isHitched = true
      this.entraceDoorsOpen = true
    }
  }
  
  function showMenu(){
    const options = ['1', '2', '3', '4']
    let chosenOption
    while(!options.includes(chosenOption)){
      chosenOption = prompt( "O que deseja fazer?\n" +
                            "1- Engatar nave\n" +
                            "2- Imprimir naves\n" +
                            "3- Excluir uma nave\n" +
                            "4- Sair do programa")
    }
    return chosenOption
  }

function createSpaceship() {
    let spaceshipName = prompt("Nome da nave")
    let crewQuantity = prompt("Quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
    }
function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index +  1) + "- " + 
                    spaceship.name + " ("  +
                    spaceship.amount + ") tripulantes\n"
    })
    alert(spaceshipList)
}

function deleteSpaceShip(hitchedSpaceships){
    let spaceshipName = prompt("Nome da nave")
    let spaceshipIndex = hitchedSpaceships.indexOf(spaceshipName)
    hitchedSpaceships.splice(spaceshipIndex, 1)
    return hitchedSpaceships
    
}
    
let hitchedSpaceships = []
let chosenOption

while(chosenOption != "4") {
    chosenOption = showMenu()
    switch(chosenOption){
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
        case "3":
            hitchedSpaceships = deleteSpaceShip(hitchedSpaceships)
    }
}