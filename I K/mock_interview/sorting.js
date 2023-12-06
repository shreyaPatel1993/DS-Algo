// Merge two sorted arrays. 
// e.g a = [1, 3, 4], b = [2, 5, 6]. output = [1,2,3,4,5,6]
// Done right

function merge(a,b){
    console.log('hi');
       let i = 0, j = 0, output = [];
       
       while(i < a.length && j < b.length){
           
           if(a[i] <= b[j]){
               output.push(a[i]);
               i++;
           } else {
            output.push(b[j]);   
               j++;
           }
       }
       
       while(i < a.length){
        output.push(a[i]);
           i++;
       }
       
       while(j < b.length){
           output.push(b[j]);
           j++;
       }
       
       return output;
   }
   
   //console.log([1,2,3])
   //console.log(merge([-2,0,1, 3, 4], [2, 5, 6]));
   
   // Merge two unnsorted/sorted linked lists in ascending order
   // a -> 1 -> 5 -> 9 -> 8 -> null 
   // b -> 3 -> 7 -> 10 -> null
   // output -> 1 -> 3 -> 5 -> 7 -> 8 -> 9 -> 10 -> null
   
   // Need to do this:
   // divide and conquer
   // 1. split list into two
   // 2. sort both lists
   // 3. merge lists
   
   class Node {
       constructor(val){
           this.val = val
           this.next = null
       }
   }
   
   function merge_sort(a, b){
       
   }
   
   function helper(val){
    if(val == null) return;
       
   }
   
   
   
   