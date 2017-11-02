var readline = require('readline');

var input = []
var size = 0
var counter = 0
var answer = []
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (cmd) {
  input = cmd.split(' ').map(Number)

});
rl.on('close', function (cmd) {

  input.unshift(null)
  size = input.length
  BuildHeap()
})

 function BuildHeap(){
   //Siftdown all parent nodes

   for(var i = Math.ceil(input.length/2); i >= 1; i--){
      SiftDown(i)
    } // for

    if(counter !== 0){
      console.log(counter)
      for(var x = 0; x < answer.length; x++){
        console.log(answer[x].join(' '))
      }


    } else{
      console.log(0)
    }




}


function SiftDown(i){
  var minIndex = i

  var l = LeftChild(i)
  if(l < size && input[l] < input[minIndex])
    minIndex = l


  var r = RightChild(i)
  if( r < size && input[r] < input[minIndex])
    minIndex = r

  //found smaller child.
  if(i !== minIndex){
    //swap nodes

    var temp = input[i]
    input[i] = input[minIndex]
    input[minIndex] = temp
    answer.push([i-1,minIndex-1])
    counter += 1
    //percolate down

    SiftDown(minIndex)

  }


}

 function Parent(i){
   return i/2
 }

 function LeftChild(i){
   return (2*i)

 }

function RightChild(i){
  return (2*i) + 1
}
