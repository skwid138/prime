/*jshint multistr:true */

var text = 'Hey, my name is Hunter, my family calls me Hunter, I am not \
good at big game hunter.' ;
var myName = 'Hunter';
var hits = [

];

for (i = 0; i < text.length; i += 1) {
    if (text[i] === myName[0]) {
        for (var j = i; j < (text.length + myName.length); j += 1) {
            hits.push(myName[j]);
        }
    }
}
