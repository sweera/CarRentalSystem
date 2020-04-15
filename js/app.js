/*************************************************************************************************************************************************/
/************************************************************************************************************************************************/
/**************************************************CAR RENTAL SYSTEM****************************************************************************/
/**********************************************************************************************************************************************/
/*********************************************************************************************************************************************/



/**************************************************************Class Definitions*************************************************************/


const fs = require('fs');
const chalk = require('chalk');
var cars = [];
let customers = [];
let availablefor;
let bookingPrice;
let rentprice;

/********************************************************Parent Class*****************************************************************************/
class Car {

    constructor(carID, carName, carCompany, carNumber, carMileage, carDescription, currentCondition, needsRepair, suitableForJourney, carType) {
        this.carID = carID,
            this.carName = carName,
            this.carCompany = carCompany,
            this.carNumber = carNumber,
            this.carMileage = carMileage,
            this.carDescription = carDescription,
            this.currentCondition = currentCondition,
            this.needsRepair = needsRepair,
            this.suitableForJourney = suitableForJourney,
            this.carType = carType
    }
    addCar() { //will add the object to json file
        console.log(chalk.green.inverse("A new car has been added to the system."));
        if (fs.statSync('car.json').size > 0) {
            let data = JSON.parse(fs.readFileSync('car.json').toString());
            data.forEach(element => cars.push(element));
        }
        cars.push(car1);
        fs.writeFileSync('car.json', JSON.stringify(cars));
    }
    listOfCars() { //reads the json file and outputs the array list on console
        cars = JSON.parse(fs.readFileSync('car.json').toString());
        console.log(chalk.whiteBright.inverse("Here is a list of all the cars !"));
        console.log(cars);
    }
    removeCar() { //compares the id sent in command line with json and deletes the record
        cars = JSON.parse(fs.readFileSync('car.json').toString());
        let count = 0;
        for (var i = 0; i < cars.length; i++) {
            process.argv.forEach((val) => {
                if (`${val}` == cars[i].carID) {
                    cars.splice(i, 1);
                    fs.writeFileSync('car.json', JSON.stringify(cars));
                    console.log(chalk.red.inverse("A car was removed from the records"));
                    count++;
                }

            })

        }
    }
    ableToRent() {
        if (this.currentCondition == 'brand new') {
            console.log(chalk.green.inverse("It is brand new and can be rented out"));
        }
        else {
            console.log(chalk.red.inverse("It is second hand and might need a little polishing"));
        }
    }
    availableFor() {
        console.log(chalk.blue.inverse("The cars are available for a minimum of 3 days. Charges vary according to number of days, type of car and extra wagon."));
    }
}
/********************************************************Child Class 1****************************************************************************/
class FamilyCar extends Car {
    constructor(carID, carName, carCompany, carNumber, carMileage, carDescription, currentCondition, needsRepair, suitableForJourney, carType, numberOfSeats, bookingTime, bookingDate) {
        super(carID, carName, carCompany, carNumber, carMileage, carDescription, currentCondition, needsRepair, suitableForJourney, carType);
        this.numberOfSeats = numberOfSeats,
            this.bookingTime = bookingTime,
            this.bookingDate = bookingDate
    }
    availableFor() {
        console.log(chalk.blue.inverse("Family cars are available for a minimum of 4 days."));
    }
    rentPrice() { //calculates rent by accepting number of days from command line
        process.argv.forEach((val) => {
            if (`${val}` < 5) {
                bookingPrice = 20; //$20 per day
            }
            else {
                bookingPrice = 40; //$40 per day
            }
            rentprice = `${val}` * `${bookingPrice}`;
        })
        console.log(chalk.greenBright.inverse("Price of renting the car:" + " " + "$" + rentprice));
    }
    bookingDetails() {
        console.log(chalk.yellow.inverse("The booking details are:" + "\n" + "Car Number:" + this.carNumber + "\n" + "Booking Time:" + " " + this.bookingTime + "\n" + "Booking Date:" + " " + this.bookingDate));
    }
    listOfCars() {
        cars = JSON.parse(fs.readFileSync('car.json').toString());
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].carType == 'family') {
                console.log(chalk.greenBright.inverse("Here is a list of all the family cars that are available:"))
                console.log(cars[i]);
            }
        }
    }
}
/*****************************************************************Child Class 2********************************************************************/
class MoversCar extends Car {
    constructor(carID, carName, carCompany, carNumber, carMileage, carDescription, currentCondition, needsRepair, suitableForJourney, carType, numberOfSeats, luggageCapacity, extraWagon, bookingTime, bookingDate) {
        super(carID, carName, carCompany, carNumber, carMileage, carDescription, currentCondition, needsRepair, suitableForJourney, carType),
            this.numberOfSeats = numberOfSeats,
            this.luggageCapacity = luggageCapacity,
            this.extraWagon = extraWagon,
            this.bookingTime = bookingTime,
            this.bookingPrice = bookingPrice,
            this.bookingDate = bookingDate
    }
    availableFor() {
        console.log(chalk.blue.inverse("The cars are available for a minimum of 3 days. Charges vary according to number of days, type of car and extra wagon."));
    }
    rentPrice() { //calculates rent by accepting number of days from command line
            process.argv.forEach((val) => {
            if (`${val}` < 5) {
                bookingPrice = 40; //$20 per day
            }
            else {
                bookingPrice = 60; //$40 per day
            }
            rentprice = `${val}` * `${bookingPrice}`;
        })
        console.log(chalk.green.inverse("Price of renting the car:" + " " + "$" + rentprice));
    }
    bookingDetails() {
        console.log(chalk.yellow.inverse("The booking details are:" + "\n" + "Car Number:" + this.carNumber + "\n" + "Booking Time:" + " " + this.bookingTime + "\n" + "Booking Date:" + " " + this.bookingDate));
    }
    listOfCars() {
        cars = JSON.parse(fs.readFileSync('car.json').toString());
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].carType == 'moving') {
                console.log(chalk.greenBright.inverse("Here is a list of all the cars available for movers:"))
                console.log(cars[i]);
            }
        }
    }
}
/******************************************Customer Class for record keeping**********************************************************************/
class Customer {
    constructor(customerID, customerName, customerPhone, customerEmail, customerAddress, customerUsername, customerPassword) {
        this.customerID = customerID,
        this.customerName = customerName,
        this.customerPhone = customerPhone,
        this.customerEmail = customerEmail,
        this.customerAddress = customerAddress,
        this.customerUsername = customerUsername,
        this.customerPassword = customerPassword
    }
    addCustomer() {
        console.log(chalk.green.inverse("A new customer record has been added to the system."));
        if (fs.statSync('customer.json').size > 0) {
            let data = JSON.parse(fs.readFileSync('customer.json').toString());
            data.forEach(element => customers.push(element));
        }
        customers.push(customer1);
        fs.writeFileSync('customer.json', JSON.stringify(customers));
    }
    viewCustomers() {
        console.log(chalk.blueBright.inverse("The records of all the customers are as follows:"))
        customers = JSON.parse(fs.readFileSync('customer.json').toString());
        console.log(customers);
    }
    removeCustomer() { //accepts ID from command line and compares it with Json file, then deletes it 
        customers = JSON.parse(fs.readFileSync('customer.json').toString());
        let count = 0;
        for (var i = 0; i < customers.length; i++) {
            process.argv.forEach((val) => {
                if (`${val}` == customers[i].customerID) {
                    customers.splice(i, 1);
                    fs.writeFileSync('customer.json', JSON.stringify(customers));
                    console.log(chalk.red.inverse("A customer record was removed"));
                    count++;
                }
            })
        }
    }
}

/****************************************Object Creation and calling methods**********************************************************************/

//let car1 = new Car('1004','XUV','Chevrolet','BCX88','60','Blue','second-hand','no','just plains','family');
//let car1 = new Car('1003','XUV','Chevrolet','BCT677','70','Red','brand new','no','everywhere-preferably plains','moving');
//car1.removeCar();
//car1.ableToRent();
//car1.addCar();

//let car1 = new FamilyCar('1001', 'Scorpio', 'Toyota', 'BCT66', '50', 'White', 'second hand', 'yes', 'not yet', 'family', '5', '8:30pm', '02-10-2020');
let car1 = new MoversCar('1005','Jazz','Maruti','TCX998','50','Silver','brand new','no','yes','moving','2','100kg','2','2:30 pm','03-14-2020');
//car1.addCar();
car1.bookingDetails();
//car1.removeCar(); //need to send the ID of the car to be removed
//car1.rentPrice(); //need to send the number of days the car is required for
//car1.listOfCars();
//car1.availableFor();

//let customer1 = new Customer('4', 'Harry', '245-556-7796', 'harry56@gmail.com', 'Delta,BC', 'harryy13', '12845');
//customer1.addCustomer();
// customer1.viewCustomers();
//customer1.removeCustomer(); //need to send ID of customer to be deleted.
// customer1.viewCustomers();