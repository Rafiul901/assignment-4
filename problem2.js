// Problem-2

function validContact( contact ){
    
  if(contact.length === 11  && contact.slice(0,2) === "01")
    {
    return true;}
    if(contact.includes(" ")){
        return false;
    }
    if(typeof contact !== 'string'){
        return 'Invalid'
    }
  return false;
}
