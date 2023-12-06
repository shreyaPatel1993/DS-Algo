/* 
In merge sort follow these steps:
1. Divide the array by two - left and right part until it reaches leaf node (keep dividing until 1 element left - base case) - recursion
2. merge the left and right divided arrays in a new array in which that all the elements comes sorted
think of merging the last leaf nodes/arrays which are of size 1 each
its a bottom up approach of merging 2 arrays to it will give the top nodes sorted part of arrays(left and right)
*/ 

function mergeSort(arr) { // divides - recursively
    if (arr.length <= 1) return arr; // base case

    let midPoint = Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, midPoint)); // recursion to go until leaf (left)
    let rightArr = mergeSort(arr.slice(midPoint)); //recursion to go until leaf (right)

    return merge(leftArr, rightArr); // call merge to sort left and right

}

const merge = (arr1, arr2) => { //merges 2 sorted arrays in a new sorted array

    const arr = []; //new merge sorted array to return
    let i = 0, j = 0;

    while (arr1.length > i || arr2.length > j) {

        if (arr1[i] <= arr2[j]) arr.push(arr1[i++]); 
        else if (arr1[i] > arr2[j]) arr.push(arr2[j++]);
        else if (i < arr1.length) arr.push(arr1[i++]);
        else arr.push(arr2[j++]);

    } 
    return arr;

};

mergeSort([2, 0 , 1 ,8, 5 , -5]); //?


