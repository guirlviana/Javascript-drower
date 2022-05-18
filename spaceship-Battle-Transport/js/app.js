class App {
    constructor() {
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    printAndExit(){
        let finalMessage = `Name: ${this.spaceship.name}\nCrewQuantity: ${this.spaceship.crewQuantity}\nCurrentVelocity: ${this.spaceship.currentVelocity}`
        alert(finalMessage)
    }
    enrollSpaceship() {
        let spaceshipName = prompt("Name")
        let spaceshipCrewQuantity = prompt("CrewQuantity")
        let spaceshipKind = this.askForSpaceshipKing()
        if (spaceshipKind == "1") {
            let weaponsQuantity = prompt("Weapons quantity")
            this.spaceship = new BattleSpaceship(spaceshipName, spaceshipCrewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("Sits quantity")
            this.spaceship = new TransportSpaceship(spaceshipName, spaceshipCrewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKing(){
        let chosenOption
        while(!["1", "2"].includes(chosenOption)){
            chosenOption = prompt("Kind spaceship\n1- Battle\n2- Transport")
        }
        return chosenOption
    }

    showInitialMenu(){
        const promptMessage = "What do you want to do?\n" +
                                "1- Accelerate\n" +
                                "2- Change spaceship\n" +
                                "3- see and exit\n"
        
        let chosenOption = prompt(promptMessage)
       
        while(!["1", "2", "3"].includes(chosenOption)){
            chosenOption = prompt(promptMessage)
        }

        return chosenOption
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("How many accelerate"))
        this.spaceship.speedUp(acceleration)
    }

    redirectFeature(chosenOption) {
        switch(chosenOption){
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }
}