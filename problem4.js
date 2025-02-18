// Problem -4

function  validProposal( person1 , person2 ) {
    if(typeof person1.name !== 'string' || typeof person2.name !== 'string' || typeof person1.gender !== 'string' || typeof person2.gender !== 'string' || typeof person1.age !== 'number' || typeof person1.age !== 'number'){
        return 'Invalid';
    }


    const genderDif = person1.gender !== person2.gender;
    const ageDif = Math.abs(person1.age - person2.age);
    const age = ageDif <= 7;

    if(genderDif && age){
        return true
    }
    else{
        return false
    }


}
