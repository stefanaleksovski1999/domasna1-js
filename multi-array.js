

temp = [2, 4, 9, 2, 0, 16, 24, 40]

var largest = temp[0];
var smallest = temp[0];

for (var i = 0; i < temp.length; i++) {

  if (temp[i] > largest) {
    largest = temp[i];
  } else if (temp[i] < smallest) {
    smallest = temp[i];
  }


}  console.log(largest);
  console.log(smallest);

  //dokolku prviot indeks i pomal od vtoriot, 
  //vtoriot go zema za pogolem i odi na slednoto
  
  //dokolku vtoriot indeks e pomal od prviot,
  //prviot ostanuva najgolem... taka do kraj