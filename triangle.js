function triangle(char, height) {
    let result = "";
  
    for (let i = 1; i <= height; i++) {
      for (let j = 1; j <= i; j++) {
        result += char;
      }
     if (i < height) {
      result += "\n";
     }
   
    }
  
    return result;
  }

