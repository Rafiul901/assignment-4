// Problem -3

function  willSuccess( marks ) {
    if (!Array.isArray(marks)) {
        return 'Invalid';
    }

        
    let passMark = []
 
        for(let i =0; i < marks.length; i++){
            if(marks[i]>= 50){
                passMark.push(marks[i])
            }

        }
        let marksDif = marks.length - passMark.length;

        
     if (passMark.length > marksDif){
        return true;
     }
     else {
        return false;
     }
     

}
