function toggleMode() {
   const html = document.documentElement
   html.classList.toggle('light')

   const img = document.querySelector("#perfil img")   

   if(html.classList.contains("light")){
      img.setAttribute('src', './mona-oculos.jpg')

    }
 
     else {
      img.setAttribute('src', "./dall-e-2.webp")
 
    }



}





  // if(html.classList.contains("light")){
   //  html.classList.remove("light") 
    // }

  //  else {
  //   html.classList.add("light")

  //  }

  



