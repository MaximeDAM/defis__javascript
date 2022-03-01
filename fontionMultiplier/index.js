let resultMulti = 1;

function multiplyAll(numbers) {

  for (const i in numbers) {
    resultMulti = resultMulti * numbers[i];
  }
  console.log(resultMulti);
}

multiplyAll([6, 10, 4, 5]);
