// Problem -1

function calculateVAT( price ){
if(typeof price !== 'number' || price < 0){
    return "Invalid";
}

    const amount = price*7.5/100
    return amount;

}


