
function iterator(arr){
  
  for (var i = 0; i < arr.length; i++) { 
    (function(index){
      setTimeout(function () {
        console.log('Index: ', index, ', element: ' + arr[index]);
      }, 3000);
    })(i);
  }
}
iterator([10, 12, 15, 21]);
