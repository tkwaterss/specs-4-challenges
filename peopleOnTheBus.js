let test1 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]

const number = array => array.reduce((acc, cur) => acc + (cur[0] - cur[1]), 0)

    // let count = 0;
    // for (let i = 0; i < array.length; i++) {
    //     count += (array[i][0] - array[i][1])
    // }
    // return count;


console.log(number(test1));