// function Subsequences(s,t){
//     let count=0;
//     let j=0;

//     for(let i=0;i<s.length;i++){
//         while(j<t.length){
//             if(s[i]==t[j]){
//                 count++;
//                 j++;
//                 break;
//             }
//             j++;
//         }
//     }return count==s.length
//     ;


// }

// console.log(Subsequences("abc","afcclbgdfefdsjbfgfrgkfmlc"));















// function Pivot(nums){
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//     sum+=nums[i];
    
//     }
//     let leftone=0;
//     let rightone=sum;
//     for(let i=0;i<nums.length;i++){
//        rightone=rightone-nums[i];
        
//         if(leftone==rightone){
//           return nums[i];
//         }else{
//             leftone+=nums[i];
// }
        
     
//     }return -1;

// }


// console.log(Pivot([1,7,3,6,5,6]));

























// class linkedList{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null
//         }
//         this.tail=this.head;
//         this.length=1;
//     }
// Append(data){
//     const App={
//         value:data,
//         next:null
//     }
//     this.tail.next=App;
//     this.tail=App;
//     this.length++;
// }

// Prepend(data){
//     const Pre={
//         value:data,
//         next:null
//     }
//     Pre.next=this.head;
//     this.head=Pre;
//     this.length++;
// }
// }


// let Linked= new linkedList(1);
// Linked.Append(2);
// Linked.Append(3);
// Linked.Append(4);
// Linked.Append(5);
// Linked.Prepend(0);
// Linked.Prepend(-1);

// console.log(Linked);





















// function IsPrime(no){
//     let flag=false;
//     for(let i=2;i*i<=n;i++){
//        if(no%i==0){
//         flag=true;
//         break;
//        }
//     }
//     if(!flag){
//         return "Its a prime no";
//     }else{
//         return "Not a prime no";
//     }

// }

// console.log(IsPrime(17));










// function MinValue(arr){
//     let min=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//           min=arr[i];
//         }
//     }
//     return min;

// }


// console.log(MinValue([7,5,3,5,2,8,0]));















// function MaxValue(arr){
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//    return max;
// }


// console.log(MaxValue([2,10,9,56,3]))






















                      











// function Anagram(s,t){
//     if(s.length!=t.length){
//         return "Length is not equal";
//     }
//     let counter={};
//     for(let letter1 of s){
//         counter[letter1]=(counter[letter1]||0)+1;

//     }

//     for(let letter2 of t){
//         if(!counter[letter2]){
//             return "Characters are not eqaul";
//         }
//         counter[letter2]=counter[letter2]-1;
//     }
//     return true;

// }

// console.log(Anagram("rohit","hitor"));










// function Palindrome(str){
//     let store="";
//     for(let i=str.length-1;i>=0;i--){
//         store+=str[i];
//     }

//     if(str==store){
//         return true;
//     }else{
//         return false;
//     }



// }

// console.log(Palindrome("aabbbbaa"));















// function FactorialNo(no){
//     let store=1;
//     if(no==null){
//         return "Please enter no";
//     }else{
        
//         for(let i=1;i<=no;i++){
//             store*=i;
//         }
//     }return store;

// }

// console.log(FactorialNo(5));













// function PartVowelsAndConsonants(s){
//     for(let i=0;i<s.length;i++)
//           if(s[i]=="a"||s[i]=="e"||s[i]=="i"||s[i]=="o"||s[i]=="u"){
//             console.log(s[i]);
//     }
//     for(let j=0;j<s.length;j++){
//           if(s[j]!="a"&&s[j]!="e"&&s[j]!="i"&&s[j]!="o"&&s[j]!="u"){
//             console.log(s[j]);
//     }
    
// }
// }


// PartVowelsAndConsonants("javascriptloops");














// function LeftRotation(arr,n,k){
//    let store=[];
//    let mod=k%n;

//    for(let i=0;i<n;i++){
//     store.push(arr[(mod+i)%n]);
//    }
//    return store;
// }

// console.log(LeftRotation([1,2,3,4,5],5,2));




















// function IsomorphicString(s,t){
// if(s.length!=t.length){
//   return false;
// }
// let smap={};
// let tmap={};
// for(let i=0;i<s.length;i++){
//   let schar=s[i];
//   let tchar=t[i];
//   if(smap[schar]==undefined){
//     smap[schar]=tchar;
//   }
//   if(tmap[tchar]==undefined){
//     tmap[tchar]=schar;
//   }


//   if(smap[schar]!=tchar || tmap[tchar]!=schar){
//     return false;
//   }
// }return true;

// }


// console.log(IsomorphicString("egg","add"));



























// function 2Sum(arr,no){
// let min=0;
// let max=arr.length;
// let sum=0;
// while(min<max){
//     sum=arr[min]+arr[max];
//     if(sum==no){
//         return [arr[min],arr[max]];
//     }else if(sum<no){
//         min++;
//     }else{
//         max--;
//     }
    
// }


// }


// console.log(2Sum([1,2,3,4,5,6,7],9));

















// function NextGreaterElement(arr,n){
//     let s=[];
//     let res=[];
//     for(let i=n-1;i>=0;i--){
//         if(s.length!=0){
//             while(s.length!=0 && s[s.length-1]<=arr[i]){
//                 s.pop();
//             }
//         }
//         res[i]=s.length==0? -1 : s[s.length-1];
//         s.push(arr[i]);
//     }
//     return res;                 

// }


// console.log(NextGreaterElement([1,3,2,4],4));








// function SpiralMatrix(matrix){
// let res=[];
// if(matrix.length==0){
//     return res;
// }
// let top=0;
// let left=0;
// let bottom=matrix.length-1;
// let right=matrix[0].length-1;

// while(left<=right && top<=bottom){

//     for(let i=left;i<=right;i++){
//         res.push(matrix[top][i]);
//     }
//     top++;


//     for(let i=top;i<=bottom;i++){
//         res.push(matrix[i][right]);
//     }
//     right--;


//     if(top<=bottom){

//         for(let i=right;i>=left;i--){
//             res.push(matrix[bottom][i]);
//         }
//     }
//     bottom--;


//     if(left<=right){

//         for(let i=bottom;i>=top;i--){
//             res.push(matrix[i][left]);
//         }

//     }
//     left++;
// }
// return res;
// }

// console.log(SpiralMatrix([
// [1,2,3,4,5],
// [6,7,8,9,10],
// [11,12,13,14,15],
// [16,17,18,19,20],
// [21,22,23,24,25],
// ]));








// function Sum3(arr,no){ 
//     let j,k; 
//     for(let i=0;i<arr.length-2;i++){
//         j=i+1;
//         k=arr.length-1;
//         while(j<k){
//             if(arr[i]+arr[j]+arr[k]==no){
//                 return [arr[i],arr[j],arr[k]];

//             }else if(arr[i]+arr[j]+arr[k]<no){
//                   j++;
//             }else{
//                 k--;
//             }
//         }
//     }
//     return -1;

// }


// console.log(Sum3([1,2,3,4,5,6,7,8,9],24));
















// function ElementRotateInSortedArray(arr,target){
//     let min=0;
//     let max=arr.length-1;
//     let mid;
//     while(min<=max){
//         mid=Math.floor((min+max)/2);
//         if(arr[mid]==target){
//             return mid;
//         }
//         if(arr[min]<=arr[mid]){
//             if(target>=arr[min] && target<=arr[mid]){
//                 max=mid-1;
//             }else{
//                 min=mid+1;
//             }
//         }else{
//             if(target>=arr[mid] && target<=arr[max]){
//                 min=mid+1;
//             }else{
//                 max=mid-1;
//             }
//         }
//     }
// return -1;
// }

// console.log(ElementRotateInSortedArray([4,5,6,7,1,2,3],2));





















// function RomanToInterger(rn){
//     let codes= new Map();
//     codes.set("I",1);
//     codes.set("V",5);
//     codes.set("X",10);
//     codes.set("L",50);
//     codes.set("C",100);
//     codes.set("D",500);
//     codes.set("M",1000);
//     let n=rn.length;
//     let result=0;

//   for(let i=0;i<n;i++){
//     if(i!=n-1 && codes.get(rn[i])<codes.get(rn[i+1])){
//         result+=codes.get(rn[i+1])-codes.get(rn[i]);
//         i++;
//     }else{                                         
//         result+=codes.get(rn[i]);
//     }
//   }
//   return result;


// }

// console.log(RomanToInterger("MCMIV"));

























// function ContainerWithMostWater(height){
//   let left=0;
//   let right=height.length-1;
//   let area=0;
//   while(left<right){
//     area=Math.max(area,Math.min(height[left],height[right])*(right-left));
//                                      left=0,1,2,3,4,5,6,7           right=8
//                                     area=8,49,36,10,20,12,14,3      min=(1)*8,(7)*7,(6)*6,(2)*5,(5)*4,(4)*3,(7)*2,(3)*1
//     if(height[left]<height[right]){
//       left++;
//     }else{
//       right--;
//     }
//   }
// return area;
// }

// console.log(ContainerWithMostWater([1,8,6,2,5,4,8,3,7]));










// function TwoSumLessThanK(arr,k){
//    let left=0;
//    let right=arr.length-1;
//    let sum=0;
//    let store=0;
//    arr.sort((a,b)=>a-b);          
//   while(left<right){
//    sum=arr[left]+arr[right];                      [1, 8, 23, 24, 33, 34, 54, 75]
//                                        left=0,1,2,3,4     right= 7,6,5    sum=1+75=76,1+54=55,
//                                                                         8+54=62,8+34=42,
//                                                                         23+34=57,24+34=58
//                                                                         33+34=67


                                                                        
                                           
//                                        store=55,57,58,
//    if(sum<k){
//       store=Math.max(store,sum);
//       left++;
//    }else{
//       right--;
//    }
//   }
//   return store;
// }

// console.log(TwoSumLessThanK([34,23,1,24,75,33,54,8],60));






















    













// class TwoStacks {
//     // Constructor
//     constructor(n) {
//         this.arr = Array(n).fill(0);
//         this.size = n;
//         this.top1 = -1;
//         this.top2 = this.size;
//     }
   
  
//     // Method to push an element x to stack1
//     push1(x) {
//         // There is at least one empty space for
//         // new element
//         if (this.top1 < this.top2 - 1) {
//             this.top1++;
//             this.arr[this.top1] = x;
//         } else {
//             document.write("Stack Overflow");
//             System.exit(1);
//         }
//     }
  
//     // Method to push an element x to stack2
//      push2(x) {
//         // There is at least one empty space for
//         // new element
//         if (this.top1 < this.top2 - 1) {
//             this.top2--;
//             this.arr[this.top2] = x;
//         } else {
//             document.write("Stack Overflow");
//             System.exit(1);
//         }
//     }
  
//     // Method to pop an element from first stack
//      pop1() {
//         if (this.top1 >= 0) {
//             var x = this.arr[this.top1];
//             this.top1--;
//             return x;
//         } else {
//             document.write("Stack Underflow");
//             System.exit(1);
//         }
//         return 0;
//     }
  
//     // Method to pop an element from second stack
//      pop2() {
//         if (this.top2 < this.size) {
//             var x = this.arr[this.top2];
//             this.top2++;
//             return x;
//         } else {
//             document.write("Stack Underflow");
//             System.exit(1);
//         }
//         return 0;
//     }
  
//     // Driver program to test twoStack class
//     }



//     let stack=new TwoStacks(5);


//     stack.push1(1);
//     stack.push1(2);
//     stack.push1(3);
//     stack.push2(4);
//     stack.push2(5);
//     stack.pop1();

//     stack.push2(9);



//     console.log(stack);





























// function ValidParenthesis(str){
//     let stack=[];
    

//     for(let lett of str){
//         let char=stack[stack.length-1];
//         if(stack.length==0){
//             stack.push(lett);
//         }else if((char=='(' && lett==')' && stack.length!==0) || (char=='{' && lett=='}' && stack.length!==0)  || (char=='[' && lett==']' && stack.length!==0)){
//             stack.pop();
//         }else{
//             stack.push(lett);
//         }
//     }
//     console.log(stack);

// return stack.length==0;    
// }



// console.log(ValidParenthesis("({[]})"));



















// let map=new Map();


// function SayDigit(str,map){
//     map.set(0,'Zero');
//     map.set(1,'One');
//     map.set(2,'Two');
//     map.set(3,'Three');
//     map.set(4,'Four');
//     map.set(5,'Five');
//     map.set(6,'Six');
//     map.set(7,'Seven');
//     map.set(8,'Eight');
//     map.set(9,'Nine');

//     if(str==0){
//         return;
//     }

//     let no=str%10;
//     str=Math.floor(str/10);

//     SayDigit(str,map);

//     document.write(map.get(no)+" ");





// }

    
// SayDigit('143',map);




















// function FindSubsetInArrayFromAnotherArray(a1,a2,n,m){

// let map={};

// for(let lett of a1){
//     map[lett]=(map[lett]||0)+1;    
// }
// {22: 2, 33: 1, 43: 1, 44: 1, 54: 1, 56: 1, 65: 1}
// {22: 1, 33: 0, 43: 1, 44: 1, 54: 0, 56: 1, 65: 0}   
// [33,54,65,22]

// console.log(map);

// for(let lett2 of a2){
//     if(!map[lett2]){
//         return false;
//     }
//     map[lett2]-=1;
//     console.log(map);
// }
// return true;

  

// }


// console.log(FindSubsetInArrayFromAnotherArray([22,33,44,54,65,43,56,22],[33,54,65,22],7,4));
























// function Max1InMatrix(arr,n,m){
    
//     let j=m-1;
//     let maxIndex=0;

//     for(let i=0;i<n;i++){
//         let flag=false;
//         while(j>=0 && arr[i][j]==1){
//             j=j-1;
//             flag=true;   

//         }
//         if(flag){
//             maxIndex=i;
//         }

//         i=0,j=3,2   0=flag=false,true;
//          i=0,j=3,2,1   1=flag=false,true,true;
//          i=0,j=3,2,1,0   2=flag=false,true,true,true;
//         i=0,j=3,2,1   3=flag=false,true,true;
//         [0,0,0,1],
//         [0,0,1,1],
//         [1,1,1,1],
//         [0,1,1,1],


//     }
//     if(maxIndex==0 && arr[0][m-1]==0){
//         return -1;
//     }
//     return maxIndex;

// }


// console.log(Max1InMatrix([
//     [0,0,0,1],
//     [0,0,1,1],
//     [1,1,1,1],
//     [0,1,1,1],
// ],4,4));




















// function FindDuplicates(arr){
//  let max=arr[0];
//  for(let i=1;i<arr.length;i++){
//     max=Math.max(max,arr[i]);
//  }

//  let store=new Array(max+1).fill(0);
//  for(let i=0;i<arr.length;i++){
//     store[arr[i]]++;
//  }
//  let res=[];
//  for(let i=0;i<store.length;i++){
//     if(store[i]!=1 && store[i]!=0){
//         res.push(i);
//     }
//  }
// return res;
// }


// console.log(FindDuplicates([1,2,3,4,2,3,4]));











// function ReverseSubstring(arr,k){
//     for(let i=0;i<arr.length;i=i+k){
//         let left=i;
//         let right=Math.min(i+k-1,arr.length-1);
//                                                 i=0,4
//                                                 left=0,1,   3
//                                                 right=2,1,  5
//                                                 temp=1,     4
//        arr[0]=3   arr[2]=1           arr[3]=6    arr[5]=4                                 


        
//         while(left<right){ 
//             let temp=arr[left];             
//             arr[left]=temp;
//             arr[left]=arr[right];
//             arr[right]=temp;
//             left+=1;
//             right-=1;
//         }
//     }
//     return arr;

// }
// console.log(ReverseSubstring([1,2,3,4,5,6],3));




















// function RemoveDuplicates(arr,n){

//     let j=0;
//     for(let i=0;i<n-1;i++){
//         if(arr[i]!=arr[i+1]){
//             arr[j]=arr[i];
//             j++;
//         }
//     }
//     arr[j]=arr[n-1];
//     j++;
//     return j;
// }


// console.log(RemoveDuplicates([1,1,2,2,3,3,4,4],8));


















// class MinElementInStack{
//     constructor(){
//         this.stack=[];
//         this.min=0;
//     }

//     push(x){
//         if(this.stack.length==0){
//             this.stack.push(x);
//             this.min=x;
//         }else if(this.min<=x){
//             this.stack.push(x);                                         no=34,54,43,3
//                                                                 stack=0,34,54,43,-28,1        min=0,34,3,2
//         }else{
//             this.stack.push(2*x-this.min);
//             this.min=x;
//         }
        
//     }
//     pop(){
//         if(this.stack.length==0){
//             return -1;
//         }else if(this.stack[this.stack.length-1]<this.min){
//             let res=this.min;
//             this.min=2*this.min-this.stack[this.stack.length-1];
//             this.stack.pop();
//             return res;
//         }else if(this.stack[this.stack.length-1]>=this.min){
//             let res=this.stack[this.stack.length-1];
//             this.stack.pop();
//             return res;
//         }

//     }
//     getmin(){
//         if(this.stack.length==0){
//             return -1;
//         }else{
//             return this.min;
//         }
//     }
// }


// let min= new MinElementInStack();

// min.push(34);
// min.push(54);
// min.push(43);
// min.push(3);
// min.pop();




// console.log(min);











// class GetMinAtTop{
//     constructor(){
//         this.s=[];
//     }

//     push(arr,n){
//         let min=arr[0];
//         for(let i=0;i<n;i++){
//             min=Math.min(min,arr[i]);
//             this.s.push(min);
//         } 
//         return this.s;
//     }

//     Pop(){
//         while(this.s.length!==0){
//             document.write(this.s.pop()+" ");
//         }

//     }
// }


// let get= new GetMinAtTop();

// get.push([1,2,3,4,5],5);
// get.Pop();

// console.log(get.Pop());







// class SpecialStack{
//     constructor(){
//         this.stack=[];
//         this.min=0;
//         this.size=0;
//     }


//     push(x){
//         if(this.stack.length==0){
//             this.stack.push(x);
//             this.size++;
//             this.min=x;
//         }else if(this.min<=x){
//             this.stack.push(x);
//             this.size++;

//         }else{
//             this.stack.push(2*x-this.min);
//             this.size++;
//             this.min=x;
//         }
//     }
//     pop(){
//         if(this.stack.length==0){
//             return -1;
//         }else if(this.stack[this.stack.length-1]< this.min){
//             let x=this.min;
//             this.min=2*this.min-this.stack[this.stack.length-1];
//             this.stack.pop();
//             this.size--;
//             return x;
//         }else if(this.stack[this.stack.length-1]>=this.min){
//             let x=this.stack[this.stack.length-1];
//             this.stack.pop();
//             this.size--;
//             return x;
//         }
//     }

//     IsEmpty(){
//         if(this.stack.length==0){
//             return "Empty";
//         }else{
//             return "Not Enpty";
//         }
//     }

//     IsFull(){
//         if(this.stack.length==0){
//             return "Stack Full";
//         }else{
//             return "Stack is not Full";
//         }
//     }

//     GetMin(){
//         if(this.stack.length==0){
//             return -1;
//         }
//         return this.min;
//     }
// }


// let special= new SpecialStack();

// special.push(34);
// special.push(54);
// special.push(9);
// special.push(43);
// special.push(23);
// special.pop();


// console.log(special);























// class Stack{
//     constructor(){
//         this.stack=[];
//         this.top=-1;
//         this.size=0;
//     }

//     push(x){
//         this.top++;
//         this.stack[this.top]=x;
//         this.size++;
        
//     }

//     pop(){
//         let x=this.stack[this.top];
//         this.size--;
//         this.stack.pop3();
//         this.top--;
//         return x;
//     }
// }



// let stack= new Stack();

// stack.push(54);
// stack.push(43);

// console.log(stack.pop());

// console.log(stack.size);












// function SubarrayWithGivenSum(arr,n,k){
// let j=0;
// let sum=0;

// if(k==0){
//     return [-1];
// }

// for(let i=0;i<n;i++){                                j=0
//                                                      i=0,1,2,3,4
//                                                      sum=0+1+2+31+41+51

//     if(sum<k){
//         sum+=arr[i];
//     }

//     while(sum>k){
//         sum-=arr[j];
//         j++;
//     }

//     if(sum==k){
//         return [j+1,i+1];
//     }
// }

// return [-1];

// }

// console.log(SubarrayWithGivenSum([1,2,31,41,51,6,7],7,123));































// function Sort0s1s2s(arr,n){
//     let l=0;
//     let m=0;
//     let h=n-1;

//     while(m<=h){
//         let x=arr[m];

//         if(x==0){
//             [arr[l],arr[m]]=[arr[m],arr[l]];      m=0,1,2,3,4,5
//                                                   l=0,1,2
//                                                   h=7,6,5,4
//                                                   arr=0,0,1,1,1,2,2,2
//             l++;
//             m++;
//         }else if(x==1){
//             m++;
//         }else{
//             [arr[h],arr[m]]=[arr[m],arr[h]];
//             h--;
//         }
//     }
// return arr;
// }



// console.log(Sort0s1s2s([1,2,0,2,1,0,2,1],8));






















// class Queue{
//     constructor(n){
//         this.queue= new Array(n).fill(0);
//         this.rear=-1;
//         this.size=this.queue.length;

//     }
//     push(x){
//         if(this.rear==this.size-1){
//             return -1;
//         }
//         this.rear++;
//         this.queue[this.rear]=x;
//     }

//     pop(){
//         if(this.rear==-1){
//             return -1;                       rear=-1,0,1,2,3,4
//                                              que=54,65,76,65,43
//                                              size=5
//         }
//         let x=this.queue[0];

//         for(let i=0;i<this.rear;i++){
//             this.queue[i]=this.queue[i+1];
//         }
//         this.rear--;
//         return x;
//     }
// }

// let queue= new Queue(5);

// queue.push(54);
// queue.push(65);
// queue.push(76);
// queue.push(65);
// queue.push(43);


// console.log(queue.pop());

// console.log(queue);
























// class CircularQueue{
//     constructor(n){
//         this.queue= new Array(n).fill(0);
//         this.front=-1;
//         this.rear=-1;
//         this.n=this.queue.length;
//     }
//     push(x){
//         if(this.rear+1%this.n==this.front || this.front==0 && this.rear==this.n-1){
//             return -1;
//         }
//         if(this.front==-1){
//             this.front=0;
//         }
//         this.rear=(this.rear+1)%this.n;
//         this.queue[this.rear]=x;
//     }         

//                                                                         //  [32,43,57,76,p,p,p,100,40,30,50,23] 
//                                                                         //  l=5
//                                                                         //  f=0,1,2,3
//                                                                         //  r=0,1,2,3,4,0,1,2
//                                                                         //  s=40,30,50,76,100,
                                                                 

//     pop(){
//         if(this.front==-1){
//             return -1;
//         }
//         let x=this.queue[this.front];

//         if(this.front==this.rear){
//             this.front=-1;
//                this.rear=-1;
//         }else{
//             this.front=(this.front+1)%this.n;
//         }
        
//         return x;
//     }
  
//     getFront(){
//         if(this.front==-1){
//          return -1;
//         }else{
//             return this.queue[this.front];
//         }
//     }

//     getRear(){
//           if(this.front==-1){
//             return -1;
//           }else{
//             return this.queue[this.rear];
//           }
//     }

// }

// let queue= new CircularQueue(5);

// queue.push(32);     
// queue.push(43);
// queue.push(57);
// queue.push(76);                   
// console.log(queue.pop());
// console.log(queue.pop());

// console.log(queue.pop());
// queue.push(100);
// queue.push(40);
// queue.push(30);
// queue.push(50);
// queue.push(23);


// console.log(queue);

// console.log(queue.getFront());
// console.log(queue.getRear());

















// function GreaterToRightSide(arr,n){
//     let gtr=-1;

//     for(let i=n-1;i>=0;i--){   i=5=2 , 4=5, 3=3 , 2=4 1=17 , 0=16
//                                temp=2, 5 , 3 , 4 ,17 , 16
//                                5=-1 , 4=2 , 3=5 , 2=5 , 1=5 ,0=17
//                                gtr=2,5,5,5,17,17
//                                arr=[-1,2,5,5,5,17]
//         let temp=arr[i];
//         arr[i]=gtr;
//         gtr=Math.max(gtr,temp);

//     }
// return arr;
// }

// console.log(GreaterToRightSide([16, 17, 4, 3, 5, 2],6));


 




// function PeekElement(arr,n){
//     let min=0;
//     let max=n-1;
//     let mid=0;

//     while(min<=max){
//       mid=Math.floor((min+max)/2);

//       if(mid>0 && mid<n-1){
//         if(arr[mid]>arr[mid-1] && arr[mid]>arr[mid+1]){
//             return mid;
//         }else if(arr[mid-1]>arr[mid]){
//             max=mid-1;
//         }else{
//             min=mid+1;
//         }
//       }else if(mid==0){
//         if(arr[0]>arr[1]){
//             return 0;
//         }else{
//             return 1;
//         }
//       }else if(mid==n-1){
//         if(arr[n-1]>arr[n-2]){
//             return n-1;
//         }else{
//             return n-2;
//         }
//       }
//     }
//     return 0;

// }


// console.log(PeekElement([23,32,45,67,54,45,1000,34],4));



















// class Deque{
//     constructor(n){
//         this.data= new Array(n).fill(0);
//         this.front=-1;
//         this.rear=-1;
//         this.n=n;
//     }

//     pushFront(x){
//         if(this.front==0 && this.rear==this.n-1 || this.rear+1==this.front){
//             System.exit(1);
//         }
//         if(this.front==-1 && this.rear==-1){
//             this.front=0;
//             this.rear=0;
//         }else if(this.front==0){
//             this.front=this.n-1;
//         }else{
//             this.front=this.front-1;
//         }
//         this.data[this.front]=x;
//     }

//     pushRear(x){
//         if(this.front==0 && this.rear==this.n-1 || this.rear+1==this.front){
//             System.exit(1);
//         }
//         if(this.front==-1 && this.rear==-1){
//             this.front=0;
//             this.rear=0;
//         }else if(this.rear==this.n-1){
//             this.rear=0
//         }else{
//             this.rear=this.rear+1;
//         }
//         this.data[this.rear]=x;
//     }

//     popFront(){
//         if(this.front==-1){
//             System.exit(1);
//         }
//         let x=this.data[this.front];

//         if(this.front==this.rear){
//             this.front=-1;
//             this.rear=-1;
//         }else if(this.front==this.n-1){
//             this.front=0;
//         }else{
//             this.front=this.front+1;
//         }
//         return x;
//     }


//     popRear(){
//         if(this.front==-1){
//             System.exit(1);
//         }
//         let x=this.data[this.rear];

//         if(this.front==this.rear){
//             this.front=-1;
//             this.rear=-1;
//         }else if(this.rear==0){
//             this.rear=this.n-1;
//         }else{
//             this.rear=this.rear-1;
//         }
//         return x;
//     }

//     getFront(){
//         if(this.front==-1){
//             System.exit(1);
//         }else{
//             return this.data[this.front];
//         }
//     }

//     getRear(){
//         if(this.front==-1){
//             System.exit(1);
//         }else{
//             return this.data[this.rear];
//         }
//     }
// }


// let queue= new Deque(6);

// queue.pushFront(43);
// queue.pushFront(53);
// queue.pushFront(64);

// queue.pushRear(78);
// queue.pushRear(97);
// queue.pushRear(45);
// queue.pushRear(80);

// console.log(queue.popFront());
// console.log(queue.popFront());
// console.log(queue.popRear());

// console.log(queue.getFront());
// console.log(queue.getRear());

// console.log(queue);



























// class QueueUsingTwoStack{
//     constructor(){
//         this.s1= [];
//         this.s2= [];

// }

// push(x){
//     this.s1.push(x);
// }



// pop(){
//     while(!this.s1.length==0){
//         this.s2.push(this.s1[this.s1.length-1]);
//         this.s1.pop();
//     }

//     let ans=0;

//     if(!this.s2.length==0){
//         ans=this.s2[this.s2.length-1];
//         this.s2.pop();
//     }

//     while(!this.s2.length==0){
//         this.s1.push(this.s2[this.s2.length-1]);
//         this.s2.pop();
//     }
//     return ans;
// }



// }




// let queue= new QueueUsingTwoStack();

// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);


// console.log(queue.pop());
// console.log(queue);

















// class StackUsingQueue{
//   constructor(){
//     this.q1=[];
//     this.q2=[];

//   }

//   push(x){
//     this.q1.push(x);

//   }

//   pop(){
//    if(this.q1.length==0){
//     return -1;
//    }
//    while(this.q1.length>1){
//     this.q2.push(this.q1.shift());
//    }
//    let top=this.q1.shift();
//    [this.q1,this.q2]=[this.q2,this.q1];
//    return top;
//   }
// }



// let stack= new StackUsingQueue();

// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// stack.push(4);
// console.log(stack.pop());


// console.log(stack);





















// function CountPairsOfGivenSum(arr,n,k){
//    let map= new Map();
//    let count=0;

//  for(let i=0;i<n;i++){
//     let store=k-arr[i];

//     if(map.has(store)){
//         count+=map.get(store);
//     }
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }else{
//         map.set(arr[i],1);
//     }
//  }

   
//    return count;
// }


// console.log(CountPairsOfGivenSum([1,5,7,1],4,6));























// function RotateArray(arr,n,k){
//   let take=(arr,start,end)=>{

//     while(start<end){
//         [arr[start],arr[end]]=[arr[end],arr[start]];
//         start++;
//         end--;
//     }
//   }

//    take(arr,0,k-1);
//    take(arr,k,n-1);
//    take(arr,0,n-1);
//     return arr;

// }


// console.log(RotateArray([1,2,3,4,5],5,2));





















// function StockSpan(arr,n){

//     let res=[];
//     let stack=[];

//     for(let i=0;i<n;i++){
//         if(stack.length!=0){
//             while(arr[stack[stack.length-1]]<=arr[i]){
//                 stack.pop();
//             }
//         }

//         res[i]=stack.length==0 ? i+1 : i-stack[stack.length-1];
//         stack.push(i);
//     }

//     return res;



// }


// console.log(StockSpan([100,80,60,70,60,75,85],7));



















// function RainTrapping(arr,n){

//     let leftmax=[];
//     leftmax[0]=arr[0];
//     let rigthmax=[];
//     rigthmax[n-1]=arr[n-1];


  

//     for(let i=1;i<n;i++){
//         leftmax[i]=Math.max(leftmax[i-1],arr[i]);
//     }

//     for(let i=n-2;i>=0;i--){
//        rigthmax[i]=Math.max(rigthmax[i+1],arr[i]);
//     }
//     let water=[];

//     for(let i=0;i<n;i++){
//    water[i]=Math.min(leftmax[i],rigthmax[i])-arr[i];
//     }

//     console.log(water);

//     let sum=0;

//     for(let i=0;i<n;i++){
//         sum+=water[i];
//     }

//     return sum;




// }


// console.log(RainTrapping([3,0,0,2,0,4],6));

















// function MaxHistogram(arr,n){
//     let stack=[];
//     stack.push(-1);
//     let area=arr[0];
//     let i=0;
//     let left= new Array(n).fill(-1);
//     let right= new Array(n).fill(n);

//     while(i<n){
//         while(stack.length!=0 && stack[stack.length-1]!=-1 && arr[stack[stack.length-1]]>arr[i]){
//             right[stack[stack.length-1]]=i;
//             stack.pop();
//         }
//         if(i>0 && arr[i]==arr[i-1]){
//             left[i]=left[i-1];
//         }else{
//             left[i]=stack[stack.length-1];
//         }
//         stack.push(i);
//         i++;
//     }

    
// // 1,-1,2,2,-1,-1         1,6,4,4,6,6

// // -1,-1,1,5,1,2       -1,-1,1,2,1,4
//     console.log(right);
//     console.log(left);

//     for(let j=0;j<n;j++){
//         area=Math.max(area,arr[j]*(right[j]-left[j]-1));
//     }
//     return area;

// }


// console.log(MaxHistogram([2,1,5,6,2,3],6));













// function TransposeMatrix(arr,n){
// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]];
//     }
// }
// return arr;
// }



// console.log(TransposeMatrix([
//     [1,1,1],
//     [2,2,2],
//     [3,3,3]
// ],3))










// function SortStack(arr){
// let stack=[];

// while(arr.length!=0){
//     let temp=arr.pop();

//     while(stack.length!=0 && stack[stack.length-1]>temp){
//         arr.push(stack[stack.length-1]);
//         stack.pop();
//     }

//     stack.push(temp);
// }
// return stack;


// }

// console.log(SortStack([98, 23 ,31 ,34 ,94, 3 ]));














// function RotateMatrix(arr,n){

//     for(let i=0;i<n;i++){
//         for(let j=0;j<=i;j++){
//             [arr[i][j],arr[j][i]]=[arr[j][i],arr[i][j]];
//         }
//     }

//     for(let i=0;i<(n/2);i++){
//         for(let j=0;j<n;j++){
//             [arr[i][j],arr[n-1-i][j]]=[arr[n-1-i][j],arr[i][j]];
//         } 
//     }
// return arr;
//       i=0
//       j=0,1,2
//       n=3


//  [3, 6, ]
//  [2, 5, 8]
//  [1, 4, 9]




// }

// console.log(RotateMatrix([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ],3));










// class Deque{
//   constructor(n){
//     this.queue= new Array(n).fill(0);
//     this.rear=-1;
//     this.front=-1;
//     this.n=n;

//   }
//   pushFront(x){
//     if(this.front==0 && this.rear==this.n-1 || this.rear+1==this.front){
//       throw new Error("No space");
//     }
//     if(this.front==-1 && this.rear==-1){
//       this.front=0;
//       this.rear=0;
//     }else if(this.front==0){
//       this.front=this.n-1;
//     }else{
//       this.front=this.front-1;
//     }
//     this.queue[this.front]=x;
//   }

//   pushRear(x){
//     if(this.front==0 && this.rear==this.n-1 || this.rear+1==this.front){
//       throw new Error("No space");
//     }
//     if(this.front==-1 && this.rear==-1){
//       this.front=0;
//       this.rear=0;
//     }
//     else if(this.rear==this.n-1){
//       this.rear=0;
//     }else{
//       this.rear=this.rear+1;
//     }
//     this.queue[this.rear]=x;
//   }

//   popFront(){
//     if(this.front==-1){
//       throw new Error("No space");
//     }
//     let x=this.queue[this.front];
//     if(this.rear==this.front){
//       this.rear=-1;
//       this.front=-1;
//     }else if(this.front==this.n-1){
//       this.front=0;
//     }else{
//       this.front=this.front+1;
//     }
//     return x;
//   }

//   popRear(){
//     if(this.front==-1){
//       throw new Error("No space");
//     }
//     let x=this.queue[this.rear];
//     if(this.rear==this.front){
//       this.rear=-1;
//       this.front=-1;
//     }else if(this.rear==0){
//       this.rear=this.n-1;
//     }else{
//       this.rear=this.rear-1;
//     }
//     return x;
//   }
//   getFront(){
//     return this.queue[this.front];
//   }

//   getRear(){
//     return this.queue[this.rear];
//   }
// }



// let take= new Deque(6);

// take.pushFront(23);
// take.pushFront(43);
// take.pushRear(54);
// take.pushRear(80);
// console.log(take.popFront());
// // console.log(take.popRear());
// console.log(take.getFront())

// console.log(take);






















// function Celebrity(arr,n){
// let stack=[];

// let know=(arr,a,b)=>{                    
//     if(arr[a][b]==1){
//         return true;
//     }else{
//         return false;
//     }
// }

// for(let i=0;i<n;i++){
//     stack.push(i);
// }

// while(stack.length>1){
//     let a=stack.pop();
//     let b=stack.pop();
//     if(know(arr,a,b)){
//         stack.push(b);
//     }else{
//         stack.push(a);
//     }
// }
// let can=stack[stack.length-1];
// let row=false;
// let zero=0;

// for(let i=0;i<n;i++){
//     if(arr[can][i]==0){
//         zero++;
//     }
// }
// if(zero==n){
//     row=true;
// }

// let col=false;
// let ones=0;

// for(let i=0;i<n;i++){
//     if(arr[i][can]==1){
//         ones++;
//     }

//     if(ones==n-1){
//         col=true;
//     }
// }

// if(row==true && col==true){
//     return can;
// }else{
//     return -1;
// }
// }

// console.log(Celebrity([
//     [0,1,0],
//     [0,0,0],
//     [0,1,0],
// ],3))



















// function QueueReversal(q){
//     let s=[];
//     while(!q.length==0){
//         let store=q[0];
//         q.shift();
//         s.push(store);
        
//     }
    
//     while(!s.length==0){
//         let take=s[s.length-1];
//         s.pop();
//         q.push(take);
//     }
//     return q;
// }

// console.log(QueueReversal([1,2,3,4,5]));







// function StackReversalString(s){
// let q=[];
// let make=s.split("");
// console.log(make);

// while(!make.length==0){
//     let store=make[make.length-1];
//     q.push(store);
//     make.pop();
// }

// while(!q.length==0){
//     let take=q[0];
//     make.push(take);
//     q.shift();
// }
// return make.join("");
// }

// console.log(StackReversalString("GeeksforGeeks"));













// let MaxSub=(arr,n,k)=>{
// let sum=0;
// let i=0;
// let j=0;
// let max=0;

// while(j<n){
//     sum=sum+arr[j];
//     if(j-i+1<k){
//         j++;
//     }else if(j-i+1==k){
//         max=Math.max(max,sum);
//         sum=sum-arr[i];
//         i++;
//         j++;
//     }
// }
// return max;


// }

// console.log(MaxSub([1, 4, 2, 10, 2, 3, 1, 0, 20],9,4));












// function NegativeInt(arr,n,k){
 

//   let i=0;
//   let j=0;
//   let q=[];
//   let store=[];

//   while(j<n){
//     if(arr[j]<0){
//       q.push(arr[j]);
//     }
    
//     if(j-i+1<k){
//       j++;
//     }else if(j-i+1==k){
//       if(q.length==0){
//         store.push(0);
//       }else{
//         store.push(q[0]);
//         if(arr[i]==q[0]){
//           q.shift();
//         }
//       }
//       i++;
//       j++;
//     }


//   }
//   return store;

// }

// console.log(NegativeInt([-8, 2, 3, -6, 10],5,2));

































// function MaxAllSubarray(arr,n,k){
//   if(n<k){
//     return -1;
//   }
//   let q=[];
//   let res=[];

//   for(let i=0;i<k;i++){
//    while(q.length>0 && arr[i]>=arr[q[q.length-1]]){
//     q.pop();
//    }
//    q.push(i);
//   }
//   res.push(arr[q[0]]);

//   for(let i=k;i<n;i++){
//     while(q.length>0 && arr[i]>=arr[q[q.length-1]]){
//       q.pop();
//      }
//      if(q.length>0 && q[0]<=i-k){
//       q.shift();
//      }
//      q.push(i);
//      res.push(arr[q[0]]);
//   }

//   return res;

// }


//   console.log(MaxAllSubarray([1 ,3 ,2, 1 ,4, 5, 2, 3, 6],9,3));    




  









// function LongestSubarrayK(arr,n,k){
//     let map= new Map();
//     let sum=0;
//     let max=0;

//     for(let i=0;i<n;i++){
//         sum+=arr[i];

//         if(sum==k){
//             max=i+1;
//         }

//         if(!map.has(sum)){
//             map.set(sum,i);
//         }

//         if(map.has(sum-k)){
//             if(max<(i-map.get(sum-k))){
//                 max=i-map.get(sum-k);
//             }
//         }
//     }
//     return max;



// }


// console.log(LongestSubarrayK([10, 5, 2, 7, 1, 9],6,15));









// let sum0=(arr,n)=>{


//   let map = new Set();

//    let sum=0;


//    for(let i=0;i<n;i++){
//     sum+=arr[i];

//     if(sum==0 || map.has(sum)){
//       return 'Yes';
//     }

//     map.add(sum);

//    }

// }


// console.log(sum0([4, 2, -3, 1, 6],5));
















// let CountAnaOccurance=(txt,pat)=>{

//   let map= new Map();

//   let n=txt.length;
//   let k=pat.length;
//   let sum=0;

//   for(let i=0;i<k;i++){
//     if(map.has(pat[i])){
//       map.set(pat[i],map.get(pat[i])+1);
//     }else{
//       map.set(pat[i],1);
//     }
//   }


//   let i=0;
//   let j=0;
//   let count=map.size;
//   let res=0;

//   while(j<n){

//     if(map.has(txt[j])){
//       map.set(txt[j],map.get(txt[j])-1);
//     }

//     if(map.get(txt[j])==0){
//       count--;
//     }

//     if(j-i+1<k){
//       j++;
//     }else if(j-i+1==k){

//       if(count==0){
//         res++;
//       }

      
//     if(map.has(txt[i])){
//       map.set(txt[i],map.get(txt[i])+1);
//     }

//     if(map.get(txt[i])==1){
//       count++;
//     }

//     i++;
//     j++;


//     }
//   }

//   return res;


 
// }



// console.log(CountAnaOccurance('aabaabaa','aaba'));
























// let sum2=(nums,n,tar)=>{
//     let j=0;
//     let res=[];

//     for(let i=0;i<n;i++){
//      j=i+1;

//      while(j<n){
//         if(nums[i]+nums[j]==tar){
//             res.push(i,j);
//             return res;
//         }
//         j++;
//      }
//     }

// }


// console.log(sum2([2,7,11,15],4,9));





















// let BinaryInsert=(arr,n,tar)=>{
//     let min=0;
//     let max=n-1;
//     let mid=0;

//     while(min<=max){
//         mid=Math.floor((min+max)/2);

//         if(arr[mid]==tar){
//             return mid;
//         }else if(arr[mid]<tar){
//             min=mid+1;
//         }else{
//             max=mid-1;
//         }

//     }
//     return min;

// }


// console.log(BinaryInsert([1,3,5,6],4,7));











// let FirstLetter=(str)=>{
//     let take=str.split(' ');
//     let res='';
    
//     for(let i=0;i<take.length;i++){
      
//         res+=take[i].charAt(0);

//     }

//     return res;

// }


// console.log(FirstLetter('geeks for geeks'));

























// let lonuniq=(s,k)=>{

//     let map=new Map();
//     let n=s.length;
//     let i=0;
//     let j=0;
//     let max=0;

//     while(j<n){
//         if(map.has(s[j])){
//             map.set(s[j],map.get(s[j])+1);
//         }else{
//             map.set(s[j],1);
//         }

//       if(map.size<k){
//         j++;
//       } 
//       if(map.size==k){
//         max=Math.max(max,j-i+1);
//         j++;
//       } 
      
//       if(map.size>k){

//         do{
//             if(map.get(s[i])!==1){
//                 map.set(s[i],map.get(s[i])-1);

//             }else{
//                 map.delete(s[i]);
//             }
//             i++;

//         }while(map.size>k);
        
//         if(map.size==k){
//         max=Math.max(max,j-i+1);
//       }

//       j++;

//       }


//     }
//     return max;

// }


// console.log(lonuniq("aabacbebebe",3));









// let longest=(str)=>{

// let map=new Map();
// let i=0;
// let j=0;
// let max=0;
// let n=str.length;

// while(j<n){

//     if(map.has(str[j])){
//     map.set(str[j],map.get(str[j])+1);
//     }else{
//         map.set(str[j],1);
//     }


//     if(map.size==j-i+1){

//         max=Math.max(max,j-i+1);
//         j++;
//     }else if(map.size<j-i+1){

//         do{
//             if(map.get(str[i])!==1){
//                 map.set(str[i],map.get(str[i])-1);
//             }else{
//                 map.delete(str[i]);
//             }
//             i++;

//         }while(map.sizeW<j-i+1);

//         if(map.size==j-i+1){
//             max=Math.max(max,j-i+1);
//         }
//         j++;
//     }


// }

// return max;

// }


// console.log(longest("geeksforgeeks"));





























// let SmallerSubstring=(s,t)=>{

     
//     if(t.length>s.length){
//         return '';
//     }


//     if(s.length==1 && t.length==1 ){
//        if(s[0]==t[0]){
//           return s[0];
//        }else{
//            return '';
//        }
//     }

//   let stack=[];
// let i=0;
// let j=0;
// let n=s.length;
// let map=new Map();
// let k=t.length;

// for(let y of t){

//     if(map.has(y)){
//         map.set(y,map.get(y)+1);
//     }else{
//         map.set(y,1);
//     }

// }

// let count=map.size;
// let ans=Number.MAX_VALUE;


// if(k<n){
//     while(j<n){

//     if(map.has(s[j])){
//         map.set(s[j],map.get(s[j])-1);
//     }

//     if(map.get(s[j])==0){
//         count--;
//     }

//     if(count>0){
//         j++;
//     }else if(count==0){

//         ans=Math.min(ans,j-i+1);

//         stack.push([i,j]);
        
//         while(count==0){


//             if(map.has(s[i])){
//                 map.set(s[i],map.get(s[i])+1);

//                 if(map.get(s[i])>0){
//                        i++;
//                        count++;
//                 }else{
//                     i++;
//                   ans=Math.min(ans,j-i+1);


//                 }

//             }else{
//                 i++;
//                 ans=Math.min(ans,j-i+1);
               

//             }



//         }

//           j++;

//     }

// }
// }else{
//     return '';
// }
// console.log(stack);
// return ans;
    
// }


// console.log(SmallerSubstring("zoomlazapzo","oza"));







// let no=prompt('Enter decimal no');


// console.log(Number(no).toString(2));


// console.log(parseInt(no,2));








// let ReverseNoWithoutString=(num)=>{ 
                                  
//      let rev=0;                                rev=0,0+9=9,90+7=97,978
//                                                num=0,87,8
 
//      while(num>0){
//         rev=(rev*10)+(num%10);          
//         num=Math.floor(num/10);
//     }
//     return rev;
// }

// console.log(ReverseNoWithoutString(879));







































// let MissingNo=(arr,n)=>{

//     let x1=arr[0];
//     let x2=1;

//     for(let i=1;i<n;i++){
//         x1=x1^arr[i];
//     }

//     for(let i=2;i<=n+1;i++){
//         x2=x2^i;
//     }

//     return x1^x2;


// }

// console.log(MissingNo([1,2,3,5],4));






















// let PowerOfTwo=(n)=>{
 
//     return (n!=0 && (n&(n-1))==0); 

// }


// console.log(PowerOfTwo(8));





















// let FindFirstSetBit=(n)=>{
// let p=1;

// while(n>0){
//     if((n&1)>0){
//        return p;
//     }
//     p++;
//     n=n>>1;
// }
// return 0;

// }


// console.log(FindFirstSetBit(12));











// let Count1SetBit=(n)=>{
//     debugger;

//     let count=0;

//     for(let i=0;i<4*8;i++){

//       if((n & (1<<i))!=0){
//         count++;
//       }
//     }
//     return count;

// }

// console.log(Count1SetBit(12));
































// let NonRepeatingNo=(arr,n)=>{


//      let res=[];

//      let xor=0;

//      for(let i=0;i<n;i++){
//         xor^=arr[i];
//      }

//      let righmost=xor & ~(xor-1);

//      let x=0;
//      let y=0;

//      for(let i=0;i<n;i++){

//         if(arr[i]&righmost){
//           x^=arr[i];
//         }else{
//             y^=arr[i];
//         }

//      }

//      res.push(x);
//      res.push(y);
//      res.sort((a,b)=>a-b);

//      return res;


      

//     }
      



// console.log(NonRepeatingNo([1,1,2,2,51,31],6));






















// let KbitSetOrNot=(n,k)=>{
//     if((n & (1<<k)) ==1 ){
//         return 'Set'
//     }else{
//         return 'Not Set';
//     }

// }


// console.log(KbitSetOrNot(5,0));



















// let RightmostDifferent=(m,t)=>{


// let n=m^t;

// if(n==0){
//     return 0;
// }else{
//     return Math.log2((n & (-n))+1);
// }




// }

// console.log(RightmostDifferent(10,14));




// let value=111;

// console.log(Number(value).toString(2));

// console.log(parseInt(23,2));
















// class LinkedList{
//     constructor(data){
//         this.head={
//             value:data,
//             next:null,
//         }

//         this.tail=this.head;

//     }
    
//     append(data){
//         let newData={
//             value:data,
//             next:null,
//         }
           
//       this.tail.next=newData;
//       this.tail=newData 

//     }


// }

// let take= new LinkedList(100);
// take.append(20);
// take.append(50);




// console.log(take);





// let Reversal=(q)=>{

//     let stack=[];


//     while(!q.length==0){
    
//         let x=q[0];
//         stack.push(x);
//         q.shift();


//     }

//     while(!stack.length==0){
//         let y=stack[stack.length-1];
//         q.push(y);
//         stack.pop();
//     }


//     return q;

    

// }


// console.log(Reversal([1,2,3,4]));


























let take='rohit';
console.log(take[0])








