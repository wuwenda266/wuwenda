const date = new Date()
const beijingtimeh = document.querySelector('.beijingtimeh')
const beijingtimem = document.querySelector('.beijingtimem')
const beijingtimes = document.querySelector('.beijingtimes')
let hour1 = date.getHours()
let minute1 = date.getMinutes()
let second1 = date.getSeconds()
if(hour1<10)
{
  hour1 = '0' + hour1
}
if(minute1<10)
{
  minute1 = '0' + minute1
}
if (second1<10) {
  second1 = '0' + second1
}
  beijingtimeh.innerHTML = hour1
  beijingtimem.innerHTML = minute1
  beijingtimes.innerHTML = second1
setInterval (function (){
  const date = new Date()
  const beijingtimeh = document.querySelector('.beijingtimeh')
  const beijingtimem = document.querySelector('.beijingtimem')
  const beijingtimes = document.querySelector('.beijingtimes')
  let hour1 = date.getHours()
  let minute1 = date.getMinutes()
  let second1 = date.getSeconds()
  if(hour1<10)
  {
    hour1 = '0' + hour1
  }
  if(minute1<10)
  {
    minute1 = '0' + minute1
  }
  if (second1<10) {
    second1 = '0' + second1
  }
  beijingtimeh.innerHTML = hour1
  beijingtimem.innerHTML = minute1
  beijingtimes.innerHTML = second1
},1000)