const hexaDeci = "0123456789abcdef";


const getRandom=() =>{
  return Math.floor(Math.random()*hexaDeci.length);
}

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let display = document.getElementsByClassName('display-code')[0].firstElementChild

const getHexCode = () =>{
  let color ="#"
  for(let i=0;i<6;i++){
    let r1=hexaDeci[getRandom()];
    color+=r1
  }
  return color
}

const getBackgrnd = ()=>{
  let sty = document.body.style.backgroundImage
  display.innerHTML=`background-image: ${sty}`
}

const changeFirstGrad = ()=>{
  let rgb1 = getHexCode()
  btn1.innerHTML=`${rgb1}`
  document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},rgb(143, 152, 229))`
  getBackgrnd()
  
}


const changeSecondGrad = ()=>{
  let rgb2 =getHexCode()
  btn2.innerHTML=`${rgb2}`
  document.body.style.backgroundImage=`linear-gradient(to right, rgb(230, 100, 101),${rgb2})`
  getBackgrnd()
}



const copyCode = async ()=>{
  let text = display.innerHTML
  try{
    await navigator.clipboard.writeText(text)
    alert('Code copied to clipboard.')
  }
  catch(e){
    console.log(e)
  }
}


btn1.addEventListener('click',changeFirstGrad)
btn2.addEventListener('click',changeSecondGrad)
display.addEventListener('click',copyCode)