window.onload = function(){
  var count = 0
  var count2 = 0
  document.getElementById('button').addEventListener('click', function(){
    document.getElementById('counter').textContent = count++
  })
  document.getElementById('button2').addEventListener('click', function(){
    document.getElementById('counter2').textContent = count2++
  })
}