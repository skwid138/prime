var user = prompt("You've been chased to a cliffs edge by a pack of wolves. Do you want to jump, fight them, or try to tame them? Please enter 'jump', 'fight' or 'tame'.").toLowerCase();

switch (user) {
    case 'jump':
        var jump = prompt("You jump off the cliff! As you fall towards the rocky bottom you hear a loud shreek above you. A giant eagle swoops down and grabs you. The eagle returns you to it's oversized nest and drops you down to it's massive offspring. Who are eager to devour you. Do you attack the large eagle babies, attemp to ride the young eagles out of the nest or accept your fate? Please enter 'attack', 'ride', or 'accept'.");
        if (jump === 'attack' || jump === 'accept') {
            alert("The huge eagle kiddos are greatful for such a tasty snack.");
        } else if (jump === 'ride' && user === 'jump') {
            alert("Wow, you're crazy, but it worked. You're now soaring around on the back of a gigantic eagle.");
        } else {
            alert("That's not an option! The huge eagle kiddos are greatful for such a tasty snack.");
        }
        break;
    case 'fight':
        var fight = prompt("You scream at the beasts welcoming the challenge. The wolves leap at you. Do you punch or kick? Please enter 'punch' or 'kick'.");
        if (fight === 'punch' || fight === 'kick') {
            alert("You're quickly you're overcome by the pack and they shred you to bits.");
        } else {
            alert("That's not an option! You're quickly you're overcome by the pack and they shred you to bits.");
        }
        break;
    case 'tame':
        var tame = prompt("You gently kneel down palms up showing you mean no harm. The wolves walk toward you slowly. Do you hold still, or move to pet them? Please enter 'hold' or 'pet'.");
        if (tame === 'hold' || tame === 'pet') {
            alert("The wolves tear you to peices.");
        } else {
            alert("That's not an option! The wolves tear you to peices.");
        }
        break;
    default:
        var tryAgain = prompt("Please enter 'jump', 'fight' or 'tame'.");
}
