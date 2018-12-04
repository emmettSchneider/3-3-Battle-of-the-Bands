let bandNumber = 0

const takeNumber = function(bandName) {
    bandNumber ++;
    return `${bandNumber}. ${bandName}`
};
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */


const scum = takeNumber("Galactic Scum");  
console.log(scum);  // This should print "1. Galactic Scum" in the console.

const under = takeNumber("Underdogs");
console.log(under);  // This should print "2. Underdogs" in the console.

const puppetShow = takeNumber("Puppet Show");
console.log(puppetShow); // This should print "3. Puppet Show" in the console.

const spinalTap = takeNumber("Spinal Tap"); 
console.log(spinalTap); // This should print "4. Spinal Tap" in the console.

const nickelback = takeNumber("Nickelback"); 
console.log(nickelback); // This should print "5. Nickelback" in the console.