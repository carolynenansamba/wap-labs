function printNumbers(from, to){
    let res = setInterval(() => {
          console.log(from);
          if(from === to){
            clearInterval(res);
          }
          from++;

    }, 1000);
}
printNumbers(2, 10); // Testing function