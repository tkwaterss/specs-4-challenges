const descendingOrder = num => +String(num).split('').sort((a,b) => b-a).join('')

console.log(descendingOrder(12345))