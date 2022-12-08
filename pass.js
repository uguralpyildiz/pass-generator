
    const lengthSlider = document.querySelector(".range");
    const inputText = document.querySelector(".pass")
    const lengthNumber = document.querySelector(".number");
    const passText = document.querySelector(".pass-text");
    const checkbox = document.querySelectorAll(".checkbox")
    const button = document.querySelector(".button")
    const label = document.querySelectorAll("label")
    const lpradio = document.querySelectorAll(".lp-radio")
   
    
   

    const characters = {
      Lowercase:"abcdefghjklmnoprstuvwxyz",
      Uppercase:"ABCDEFGHJKLMNOPRSTUVWXYZ",
      Numbers:"0123456789",
      Symbols:"><>┬Б#${[]-*/+}!'^%+^&%/()@="
      
    }


    function elseifs() {
      //coming
    }

      
   

      const generatePass = () => {
        const checkedBoxes = document.querySelectorAll('input[name=cbox]:checked');    
      let staticPassword = "",
      randomPassword = "",
      passLength = lengthSlider.value;

      checkbox.forEach(checkbox => {
        if (checkbox.checked) {
          staticPassword += characters[checkbox.id];
        }
        
      })

      

      for (let i = 0; i < passLength; i++) {
          
          randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)]
        }

       
   
        inputText.value = randomPassword;
     

       
       
        if (checkedBoxes.length === 0) { 
          lengthNumber.style.opacity = "0.50" 
          lengthNumber.style.pointerEvents = "none" 
          lengthSlider.style.opacity = "0.50"      
          lengthSlider.style.pointerEvents = "none"      
          inputText.value = "";
          passText.style.opacity = "0"
        }else{
          passText.style.opacity = "1"
          lengthSlider.style.opacity = "1"      
          lengthSlider.style.pointerEvents = "auto"  
          lengthNumber.style.opacity = "1"      
          lengthNumber.style.pointerEvents = "auto"  
        }

      //else if p*rn
      checkbox.forEach(checkbox => {
        if (checkbox.checked) {
        

             //Uppercase and Lowercase
          if (inputText.value.length < 5) {        
            if (checkbox.id === "Uppercase" && "Lowercase") {
            passText.style.width = "10%"
            }
          }

          if (inputText.value.length > 7) {        
            if (checkbox.id === "Uppercase" && "Lowercase") {
            passText.style.width = "20%"
            }
          }

          if (inputText.value.length > 10) {        
            if (checkbox.id === "Uppercase" && "Lowercase") {
            passText.style.width = "30%"
            }
          }

          if (inputText.value.length > 13) {        
            if (checkbox.id === "Uppercase" && "Lowercase") {
            passText.style.width = "60%"
            }
          }

          if (inputText.value.length < 16) {        
            if (checkbox.id === "Lowercase") {
              passText.style.width = "60%"
            }
          }

          if (inputText.value.length < 12) {        
            if (checkbox.id === "Lowercase") {
              passText.style.width = "30%"
            }
          }

          if (inputText.value.length < 8) {        
            if (checkbox.id === "Lowercase") {
              passText.style.width = "20%"
            }
          }

          if (inputText.value.length < 5) {        
            if (checkbox.id === "Lowercase") {
              passText.style.width = "10%"
            }
          }

          if (inputText.value.length <=3) {        
            if (checkbox.id === "Lowercase") {
              passText.style.width = "5%"
            }
          }

          //Numbers and Symbols

          if (inputText.value.length < 3) {        
            if (checkbox.id === "Numbers" && "Symbols" || "Uppercase" && "Lowercase") {
            passText.style.opacity = "0"
            }
          }

          if (inputText.value.length < 5) {        
            if (checkbox.id === "Numbers" && "Symbols") {
            passText.style.width = "20%"
            }
          }

          if (inputText.value.length > 7) {        
            if (checkbox.id === "Numbers" && "Symbols") {
            passText.style.width = "40%"
            }
          }

          if (inputText.value.length > 10) {        
            if (checkbox.id === "Numbers" && "Symbols") {
            passText.style.width = "60%"
            }
          }

          if (inputText.value.length > 13) {        
            if (checkbox.id === "Numbers" && "Symbols") {
            passText.style.width = "80%"
            }
          }

          if (inputText.value.length >= 16) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "100%"
            }
          }

          if (inputText.value.length < 16) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "80%"
            }
          }

          if (inputText.value.length < 12) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "60%"
            }
          }

          if (inputText.value.length < 8) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "40%"
            }
          }

          if (inputText.value.length < 5) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "20%"
            }
          }

          if (inputText.value.length <=3) {        
            if (checkbox.id === "Symbols") {
              passText.style.width = "10%"
            }
          }
        }
      });
    
    }
  //else if p*rn end

   
   
    inputText.addEventListener("keydown", ()=>{
      button.innerHTML = '<i class="copybtn fa-regular fa-copy"></i>Copy Password'
    })
   
    const updateSlider = () => {
    
      lengthNumber.value = lengthSlider.value;
      elseifs()
      generatePass()
      button.innerHTML = '<i class="copybtn fa-regular fa-copy"></i>Copy Password'
    }

    const updateValue = () => {
      lengthSlider.value = lengthNumber.value;
      elseifs()
      generatePass()
      button.innerHTML = '<i class="copybtn fa-regular fa-copy"></i>Copy Password'
    }

    lengthSlider.addEventListener("input", updateSlider)
    lengthNumber.addEventListener("input", updateValue)

  

    generatePass()
    //checkbox for
   for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", ()=>{
      button.innerHTML = '<i class="copybtn fa-regular fa-copy"></i>Copy Password'
      generatePass()
      elseifs()
    })
    
   }

    const copyBtn = document.querySelector(".copy-btn")
    const restartBtn = document.querySelector(".restart-btn")

    restartBtn.addEventListener("click", ()=>{
      generatePass()
      button.innerHTML = '<i class="copybtn fa-regular fa-copy"></i>Copy Password'
    })

    function copythat() {
      navigator.clipboard.writeText(inputText.value)
      if (inputText.value.trim().length === 0) {
       alert("the rock eyebrow! ­Ъце")
      }
      button.innerHTML = "Copied!"
    }
  
    button.addEventListener("click", ()=>{
      copythat()
    })

    copyBtn.addEventListener("click", ()=>{
      inputText.select();
      copythat()
      
    })
   
