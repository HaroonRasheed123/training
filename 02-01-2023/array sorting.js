const arr = [3, 1, 5, 2];
let t = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] > arr[j])
        {
          t = arr[i];
          arr[i] = arr[j];
          arr[j] = t
        }
        
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}