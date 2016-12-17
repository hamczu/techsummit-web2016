import Counter from './Counter'

window.onload = () => {
  new Counter(document.getElementById('counter'))
  new Counter(document.getElementById('counter2'))
}