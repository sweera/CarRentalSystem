# CarRentalSystem
This is a car rental system. Since it is a console-based application, some functions would be needed to be commented out to be able to run a particular function. 
The app.js file is in a js folder so the command to run the project is: node js/app.js
There are two JSON files i.e. customer.json and car.json which are the local storage areas of the data that is being passed.
•	Car is the base/parent class with attributes like carID, carName, CarCompany, carMileage etc.
•	It has the following functions:
1.	addCar() : The data passed in the object will be stored in the JSON file when you call this function.
2.	listOfCars(): When this function is called, the JSON file is read and all entries are displayed on the console from car.json.
3.	removeCar(): This uses process.argv. So when an object is created and this function is called, you need to send the ID of the car you want to delete. node js/app.js 1003
4.	availableFor() and ableToRent() will check a condition from the passed values and output the appropriate result.
•	FamilyCar inherits Car class and overrides listOfCars() , availableFor () functions.
•	It has the following functions:
1.	rentPrice(): This again uses the process.argv. You need to send the number of days you want the car for, when the function is called and command on terminal is: node js/app.js 5
It accepts this value, checks a condition and outputs the rent you will need to pay.
2.	listOfCars(): This function when called, reads the car.json file and checks if the carType is family and outputs the list of family cars.
3.	bookingDetails(): Will output the booking details like booking time, booking date that was passed while adding/booking that car.
4.	availableFor(): Minimum days the car is available for.
•	MoversCar inherits Car class and overrides listOfCars() and availableFor() functions.
•	It has the following functions:
1.	rentPrice(): This again uses the process.argv. You need to send the number of days you want the car for, when the function is called and command on terminal is: node js/app.js 5
It accepts this value, checks a condition and outputs the rent you will need to pay.
2.	listOfCars(): This function when called, reads the car.json file and checks if the carType is moving and outputs the list of family cars.
3.	bookingDetails(): Will output the booking details like booking time, booking date that was passed while adding/booking that car.
4.	availableFor(): Minimum days the car is available for.
•	Customer Class and its functions are for handling the operations related to the records of the customers. The customer details are stored in customer.json.
•	It has the following functions which can be called when an object of customer class is created and necessary attributes passed.
1.	addCustomer(): The details will be added to the JSON file from the object.
2.	viewCustomers(): Reads the JSON file and outputs the records on console.
3.	removeCustomer(): uses process.argv. you need to send ID of the customer whose record you want to delete. 
node js/app.js 1. It will process it and delete from JSON file.



