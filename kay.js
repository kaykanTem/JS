//hard code values

let k = 17

let cards= [10,15,3,7]

function x(){
	

	for(let i = 0 ; i < cards.length; i ++){
	  for(let j = 0; j < cards.length; j++){
	    if(i !== j && (cards[i] + cards[j]) === k){
	        return true;
	      }
	    }
	  }
	  return false
	}
	

	console.log(x())
