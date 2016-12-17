window.onload = function(){
  var count = 0
  document.getElementById('button').addEventListener('click', function(){
    document.getElementById('counter').textContent = count++
  })
}