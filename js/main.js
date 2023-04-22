function opposite(number) {
  
    if(number > 0){
      number = number - (number * 2)
    }
    else if (number < 0){
      number = number + (number * 2)
    }
     console.log(number) 
  }

  opposite(-5)