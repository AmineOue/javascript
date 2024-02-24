// String Manipulation Functions:
function reverseString(str){
    var newstring='';
    for(var i=str.length-1;i >=0;i--){
        newstring += str[i];
    }
    return newstring;
}

reverseString("Hello");

function countCharac(str){
   var newstring="";
   var sum=0;
   while(newstring != str){
        newstring+=str[sum];
        sum++;
   }
   return sum;
}

countCharac("amine");

function capitalizeWords(str){
 var myArr = str.split(' ');
  for(var i in myArr){
   
    myArr[i] =  myArr[i][0].charAt(0).toUpperCase() + myArr[i].slice(1);
  }
  return myArr.join(' ');
}

//Array Functions:

function maxmin(arr){
  var min =[];
  var max = [];
  min[0] = max[0] = arr[0]
  for(var i in arr){
    if (arr[i]>max[0]){max[0]=arr[i]}
    if(arr[i]< min[0]){min[0]=arr[i]}
  }
  return"max = " + max + " min = " + min;
} 

function sumArray(arr){
    var sum=0;
    for(var i of arr){
        sum+=i;
    }
    return sum;
}

function filterArray(arr , a){
  var newarr =[];
  var newarr1 =[];
  var result =[]
  for(var i =0 ; i<arr.length;i++){
    if(arr[i][0] === a){
      newarr[i]=arr[i];
    }else{
      newarr1.push(arr[i]);
    }
  }
  result = newarr.concat(newarr1);

  return result;
}

//Mathematical Functions:

function factorial(n){
  
  var result = n;
  if(n == 1 || n==0){
    return 1;
  }
  while(n>1){
    n--;
    result *=n;
  }
  return result; 
}

function primeNumber(n){
  var sum=0;
  for(var i=1; i < n;i++){
    if(n%i === 0){
      sum++;
    }

  }
  if(sum == 1){return "prime"}
  else{return "not prime"}
}

function FibonacciSequence(n){
  var u0=0;
  var u1=1;
  var nextterm=0;
  for(var i=1; i< n; i++ ){
    nextterm = u0 + u1;
    console.log(nextterm)
    u0 = u1;
    u1 = nextterm;
  }
  return nextterm;  
}
