function Counter(el){
  var count = 0
  el.querySelector('button').addEventListener('click', function(){
    el.querySelector('h3').textContent = count++
  })
}