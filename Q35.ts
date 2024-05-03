//Q35.Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

//array of animals
const  animals:string[] =["Dog","cat","Horse"];

//name of each animal using for aloop
console.log(" names of animal:");
for (const animal of animals){
    console.log(animal);
}

//statement about each animal
console.log("\nstatements  about animal:");
for (const animal of animals){
    switch(animal){
        case "Dog":
            console.log("A dog would make a great pet.");
            break;
            case "cat":
            console.log("A cat can be an independent companion.");
            break ;
            case "Horse":
                console.log("A horse are majestic animals known for their strength, speed, and grace.");
                break;
                default:
                    console.log ("This animal is not recognized.");
                    break;
    }
}
//the common characteristics
console.log("\nAny of these animals would make a great pet!")