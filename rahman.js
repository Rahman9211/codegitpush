// // q1- decimalto any base convert
// function decimaltoanybase(num,base){
//     let ans=0;
//     let pow=1; 
//     while (num>0) {
//         let rem=num%base;
//         num=Math.floor(num/base);
//         rem=rem*pow;
//         ans=ans+rem;
//         pow=pow*10;
//     }
//     return ans;
// }
// let rv=decimaltoanybase(100,2)
// console.log(rv);



// q2 - anybase to decimal

// function anyBaseToDecimal(num, base) {
//     let ans = 0;
//     let pow = 1;
    
//     while (num > 0) {
//         let rem = num % 10;  // Get the last digit
//         num = Math.floor(num / 10);  // Remove the last digit
        
//         ans = rem * pow;  // Convert to decimal
//         pow = pow * base;  // Increase the power of the base
//     }
    
//     return ans;
// }

// // Example usage
// let rv = anyBaseToDecimal(343, 8);
// console.log(rv);  // Output: 100





// function decimal(num,bas){
//     let ans=0;
//     let pow=1;
//     while
// }

// hello worldgit 




for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === j) continue;
      console.log(i + j);
    }
  }
  