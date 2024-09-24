// Code your solution in this file!
function distanceFromHqInBlocks(somevalue){
    const location = 42
    return Math.abs(somevalue - location)
}
function distanceFromHqInFeet(value){
    const  feetBlock =264
    const distBlock = distanceFromHqInBlocks( value);
    return distBlock * feetBlock;
}
function distanceTravelledInFeet(startPart,stopPart){
    const blockFeet = 264
    const newDistance = Math.abs(startPart - stopPart)
    return newDistance*blockFeet;
}
function  calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if ( distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <=2000){
        return (distance - 400)*0.02
    }
    else if (distance > 2000 && distance <=2500){
        return 25;
    } 
    else {
        return "cannot travel that far"
    }
}
