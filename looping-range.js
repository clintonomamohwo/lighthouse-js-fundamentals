function range(start,end,step) {
  
  let array = [];
  let current = start;
  if ((current > end && step > 0) || (current < end && step < 0)){
    return array;
  } else if (start,end,step === undefined){
    return array;
  } else {
    array.push(current);
  }

  if (step > 0) { //positive
    for (let i = start; i < end; i += step){
      if (current + step <=  end){
        current += step;
        array.push(current);
      }
    }
  }
   else if (step < 0) { //negative
    for (let i = start; i > end; i += step){
      if (current + step >=  end){
        current += step;
        array.push(current);
      }
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10,0,-2));
