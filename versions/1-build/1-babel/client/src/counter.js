export default function Counter(el){
  let count = 0
  el.querySelector('button').addEventListener('click', () => {
    el.querySelector('h3').textContent = count++
  })
}
