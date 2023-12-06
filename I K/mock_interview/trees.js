/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

/*

2d Plane 
contains points
represented as x, y coordinates

we can add/remove point
minimum bounding box - contains 4 points


box.ul:-1 box.ur: 1
   *---*
   |   |
   *___*
box.ll:-1 box.lr:0 

bouding box contains all the points in 2D plane with least amount of area

https://leetcode.com/discuss/interview-question/1218164/Google-Phone-interview-(reject)/943347


add(x= 0,y= 0) => Box((0,0),(0,0),(0,0),(0,0))
            |
            |
            |
            |
------------*------------
            |(0,0)
            |
            |
            |


add(x = -1. y = 1) => 
            |
 (-1,1)     |
        *---| (0,1)
 (-1,0) |   |
------------*------------
        |   |(0,0)
        |   |
            |
            |
 
add(x = 2, y = 2)
            |      *
            |
        *   | 5
            |   
------------*------------
            |(0,0)
            |
            |
            |
            
remove (x = 10, y = 20)
            |      *
            |
        *   | 
            |
------------*------------
            |(0,0)
            |
            |
            |

remove(x = -1. y = 1) 
            |
            |      *
            |
            | 
            |
------------*------------
            |(0,0)
            |
            |
            |
 

*/
-1,1,0
console.log('Hello, world!');

