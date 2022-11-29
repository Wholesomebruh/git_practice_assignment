for(let i=0;i<N;i++){
    if(arr[i]==arr[N-1-i]){
        console.log("Palindrome");
        break;
    }else{
        console.log("No");
    }
}