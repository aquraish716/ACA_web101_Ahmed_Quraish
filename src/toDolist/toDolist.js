/*window.onload= function (){

$(function() {

    let $list = $('ul');
    let $newItemForm = $('#newItemForm');

$newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
});

$list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
});

});

}
*/



//document.write("I told the computer to write this with document.write and it wrote it on the screen, pretty cool!");
function funky() {
    alert("Don't touch me blease!");
}

function addNumbers(a,b) {
    var c = a+b;
    return c;
}

addNumbers (8,12);

document.write(addNumbers (8,12));