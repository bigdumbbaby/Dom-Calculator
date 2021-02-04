const $screen = document.querySelector("#screen")
const $spans = document.querySelectorAll('span')


spanArr = Array.from($spans)

spanArr.map(button => button.addEventListener('click', () => {
  if(button.innerText !== "="){
    if(button.innerText === "x"){
      $screen.innerText += "*"
    } else if(button.innerText === "÷"){
      $screen.innerText += "/"
    }
    else{
      $screen.innerText += button.innerText
    }
  }
  if(button.innerText === "=") {
    if($screen.innerText.includes("0/")){
      $screen.innerText = "ERROR"
    } else{
      $screen.innerText = eval($screen.innerText) 
    }
  }
  if(button.innerText === "C"){
    $screen.innerText = ""
  }
}))