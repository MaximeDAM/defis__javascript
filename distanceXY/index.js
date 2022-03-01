const calculateDistance = (numbers) => {
return Math.max(...numbers) - Math.min(...numbers)
}

console.log(calculateDistance([4,15,80,22,54,200]));



 /*  for (const numberStart of numbers) {
    for (const numberEnd of numbers) {
      if (result < Math.abs(numberStart - numberEnd)) {
        result = Math.abs(numberStart - numberEnd); 
      }
    }
  } */
