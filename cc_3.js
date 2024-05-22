//U36432650

//Implement a car class with a constructor that initializes the make (brand of the car) and the speed (curren speed in km/h) properites.

accelerate_kmh = 10
brake_kmh = 5

class Car {
    constructor(make, accelerate_kmh) {
      this.make = make;
      this.current_kmh = Number(this.current_kmh);
    }

    //Implement an accelerate method in the Car class that increases the car's speed by 10 km/h and logs the new speed to the console.

accelerate(){
    this.current_kmh += accelerate_kmh;
    console.log ("The new speed of the " + this.make + " after accelerating " + accelerate_kmh + "KM/h is" + this.current_kmh + "KM/h.");
}

//Implement a brake method that decreases the car's speed by 5 km/h and logs the new speed to the console.

brake(){
    this.current_kmh -= brake_kmh;
    console.log ("The new speed of the " + this.make + "after breaking" + brake_kmh + "KM/h is" + this.current_kmh + "KM/h.");
}


}
  
