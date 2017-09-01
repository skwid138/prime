console.log('test.js sourced');

function onReady( ) {
    console.log('onReady called')

    //event Listener
    $('#addCan').on('click', addCan);
    $('main').on('click', '.spam-img', imgClick); // this is more dynamic then selecting img directly
    $('main').on('click', '.deleteCan', removeCan)
}

function imgClick() {
    console.log('imgClick Called');
    console.log($(this));
}

function removeCan () {
    console.log('removeCan called');
    console.log($(this));
    $(this).parent().remove(); // removes the parent of the delete button
}

function addCan( ) {
    console.log('addCan called');
    // this is a cleaner way of coding
    // an alternative way would be putting the 3 lines below between the main.append parentheses
    var $canArticle = $('<article>');
    $canArticle.append($('<h3>', {text: 'SPAM'}));
    $canArticle.append($('<img>', {class: 'spam-img', src: 'http://www.tastyislandhawaii.com/images/spam_musubi/spam_can_open.jpg'}));
    $canArticle.append($('<button>', {text: 'Delete', class: 'deleteCan'}));
    $('main').append($canArticle);
}

$(document).ready(onReady);