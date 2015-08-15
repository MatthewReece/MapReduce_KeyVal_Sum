var votes = {A: 'C', B: 'C', C: 'F'};
var voterValues = {A: 5, B: 1, C: 11};

var result = {};

function mapred(input1, input2){
  var val1 = input1;
  var val2 = input2;
  var store1 = [];
  var store2 = [];
//loop through val1 and store keys in array
  for(var x in val1){
    store1[x] = store1.push(val1[x]);
  }
//loop through val2 and store values in array    
  for(var y in val2){
    store2[y] = store2.push(val2[y]);
  }
  
 //matches the keys stored in store1 to values in store2 
  for(var i = 0; i < store1.length && i < store2.length; i++){
      if(result.hasOwnProperty(store1[i])){
        result[store1[i]] += store2[i];
      }else {result[store1[i]] = store2[i];}
  }
 
  return result;
}

mapred(votes,voterValues);
console.log(result);