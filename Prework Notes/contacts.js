console.log('contacts.js sourced');
var friends = {
    bill : {
        firstName : 'Bill',
        lastName : 'Nye',
        number : "555-555-5555",
        address : ['LA', 'CA']
    },
    steve : {
        firstName : 'Steve',
        lastName : 'Jobs',
        number : '888-888-8888',
        address : ['Somwhere', 'CA']
    },
    todd : {
        firstName : 'Todd',
        lastName : 'Mort',
        number : '123-456-7899',
        address : ['St. Paul', 'MN']
    },
    wyatt : {
        firstName : 'Wyatt',
        lastName : 'Kid-Danger',
        number : '666-666-6666',
        address : ['Seattle', 'WA']
        }
};

function list ( object ) {
    for (var key in object) {
        console.log(key);
    }
}

function search ( name ) {
    for ( var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
}
