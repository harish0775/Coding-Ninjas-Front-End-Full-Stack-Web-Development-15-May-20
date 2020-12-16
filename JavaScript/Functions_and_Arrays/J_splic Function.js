/* Splice Function is use :
                    change  Something into Array or delete something into array

                    start index
                    deletion count
                    element to inserted

                    arr.splice(2,3)




*/
var arr = [10,2,5,23,7,9];
/*
  arr
(6) [10, 2, 5, 23, 7, 9]
arr.splice(3,2);  // 3 start point(start value from 1 & how many element to delete 2)
(2) [23, 7]  // remove part 
arr
(4) [10, 2, 5, 9]

arr.splice(1) // if your not specifie anything then it's delete all element form 1;
(3) [2, 5, 9]
arr
[10]


arr.splice(2,0,50);  // 2 index par ,0 deletion(no deletion at 2 index only inserte), 50 inserte at 2 index

arr
(7) [10, 2, 50, 5, 23, 7, 9]


arr.splice(2,2,20,40)  index 2 par 2 delete and 20 40 insert
(2) [5, 23]
arr
(6) [10, 2, 20, 40, 7, 9]
 * */