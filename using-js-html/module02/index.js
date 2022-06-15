import Spaceship from "./spaceship"
import armaments from "./armaments"
import { laserDefenses, steelDefenses } from "./defenses";
import basicDefense from "./defenses"

const spaceship = new Spaceship("Pink Blue", "Steph Curry", armaments.laser, laserDefenses)
console.log(spaceship);