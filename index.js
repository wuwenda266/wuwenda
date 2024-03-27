const date = new Date()
const timeblock = document.querySelector('.tb')
const nowdate = document.querySelector('.nowdate')
nowdate.innerHTML = `今天是${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
const hour = document.querySelector('.timblock1')
const minute = document.querySelector('.timblock2')
const second = document.querySelector('.timblock3')
const nowmicrosecond = Date.now()
    const latemicrosecond = +new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} 12:00:00`)
    const need = latemicrosecond - nowmicrosecond
    const needsecond = need/1000
    let h1 = parseInt(needsecond/60/60%24)
    let m1 = parseInt(needsecond/60%60)
    let s1 = parseInt(needsecond%60)
    if(need<0)
    {
      hour.innerHTML = `00`
      minute.innerHTML = `00`
      second.innerHTML = `00`
    }
    if(m1<10)
    {
      m1 = '0' + m1
    }
    if(s1<10)
    {
      s1 = '0' + s1
    }
    if(h1<10)
    {
      h1 = '0' + h1
    }
    if(need>0)
    {
    hour.innerHTML = h1
    minute.innerHTML = m1
    second.innerHTML = s1
   }
    setInterval (function(){
      const nowmicrosecond = Date.now()
    const latemicrosecond = +new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} 12:00:00`)
    const need = latemicrosecond - nowmicrosecond
    const needsecond = need/1000
    let h1 = parseInt(needsecond/60/60%24)
    let m1 = parseInt(needsecond/60%60)
    let s1 = parseInt(needsecond%60)
    if(need<0)
    {
      hour.innerHTML = `00`
      minute.innerHTML = `00`
      second.innerHTML = `00`
    }
    if(m1<10)
    {
      m1 = '0' + m1
    }
    if(s1<10)
    {
      s1 = '0' + s1
    }
    if(h1<10)
    {
      h1 = '0' + h1
    }
    if(need>0)
    {
    hour.innerHTML = h1
    minute.innerHTML = m1
    second.innerHTML = s1
   }
  },1000)
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
  console.log(hour1);
  const position = document.querySelectorAll('.looplist .position')
  const rightlistcontent = document.querySelectorAll('.rightlistcontent .loop')
  for(let i=0;i<position.length;i++)
  {
    position[i].addEventListener('mouseenter',function(){
      document.querySelector('.looplist .positionhiden').classList.remove('positionhiden')
      this.classList.add('positionhiden')
      document.querySelector('.rightlistcontent .loopnohiden').classList.remove('loopnohiden')
      rightlistcontent[i].classList.add('loopnohiden')
    })
  }
  const sliderData = [
    { url: './image/loopimg1.jpg'},
    { url: './image/loopimg2.jpg'},
    { url: './image/loopimg3.jpg'},
    { url: './image/loopimg4.jpg'},
    { url: './image/loopimg5.jpg'}
  ]
  const rightbutton = document.querySelector('.rightbutton')
  const loopimg = document.querySelector('.loopimg img')
  let i = 0 
  rightbutton.addEventListener('click',function(){
    i++
    if(i>=5)
    {
      i=0
    }
    toggle()
  })
  const leftbutton = document.querySelector('.leftbutton')
  leftbutton.addEventListener('click',function(){
    if(i<=0)
    {
      i=5
    }
    i--
   toggle()
  })
  function toggle(){
    loopimg.src = sliderData[i].url
    document.querySelector('.Allredpoint .bottomredpointloop').classList.remove('bottomredpointloop')
    document.querySelector(`.Allredpoint .bottomredpoint:nth-child(${i+1})`).classList.add('bottomredpointloop')
  }
  let timeset = setInterval(function(){
    rightbutton.click()
  },1000)
  const loopimage = document.querySelector('.loopimage')
  loopimage.addEventListener('mouseenter',function(){
    clearInterval(timeset)
  })
  loopimage.addEventListener('mouseleave',function(){
    clearInterval(timeset)
    timeset = setInterval(function(){
      rightbutton.click()
    },1000)
  })
  const tx = document.querySelector('#tx')
  const text = document.querySelector('.text') 
  const give = document.querySelector('.give')
  tx.addEventListener('input',function(){
    text.innerHTML = `${tx.value.length}`
  })
  give.addEventListener('click',function(){
   
    if(text.innerHTML === '0')
    {
      alert('您不能向我们发送空的内容!')
    }
    if(text.innerHTML != '0')
    {
    alert(`您的反馈我们我们已经收到,感谢您的理解与支持!`)
    tx.value = ''
    text.innerHTML = '0'
     }
  })