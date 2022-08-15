// target the input field by ID and assign keyup event
$('#card_number').on('keyup', function(e){
    // get value of the input field
    var val = $(this).val();
    var newval = '';
    // write regex to remove any space
    val = val.replace(/\s/g, '');
    // iterate through each numver
    for(var i = 0; i < val.length; i++) {
        // add space if modulus of 4 is 0
        if(i%4 == 0 && i > 0) newval = newval.concat(' ');
        // concatenate the new value
        newval = newval.concat(val[i]);
    }
    // update the final value in the html input
    $(this).val(newval);
});