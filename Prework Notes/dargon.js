var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log('Whoa! You actually hit the dragon! Nice work!');
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("Congrats! You've vanquished the dragon!");
            slaying = false;
        } else {
            console.log("Keep fighting! The dragon's hit points are at " + totalDamage + '/4');
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log('No surprise, the dragon has burned you to  crisp.');
        slaying = false;
    }
}
