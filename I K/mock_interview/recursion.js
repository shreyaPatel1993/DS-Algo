/*

div
 |  \
div div
 |   |
 a   b
 
<div>
    <div>
        a
    </div>
    <div>
        b
    </div>
</div>
 

 div
 |  \
div div
 |    \
 a    div
    /  |  \
  div div div
   |   |   |
   b   c   d
*/

/*

const html = `<div>
<div>
a
</div>
<div>
b
</div>
</div>`
*/

function fromStringToTree(html) {
    const tokens = html.split('\n')
    const stack = []
    tokens.forEach(token => {
      if (token === '</div>') {
         const children = []
         while (stack[stack.length - 1] !== '<div>') { // peek
           children.unshift(stack.pop()) // keep the order with unshift
         }
         stack.pop() // remove last <div>
         stack.push({
           children,
           value: 'div'
         })
      } else {
        stack.push(token)
      }
    })
    return stack.pop()
  }
  
  function fromStringToTree(html) {
      
      let arr = html.split('');
      
      function dfs(arr){
          let root = arr[0];
          for(let i = 1; i <arr.length; i++){
              if(arr[i].split('')[1] == '/') return;
              root.children.push(arr[i]);
          }
          dfs(children);
      }
  }
  
  function tree(node){
       dfs(node);
      
      function dfs(root){
          if(!root) return;
          
         
          if(root.children.length){
              
              console.log('<'+root.val+'>'); //start
              
           for(let i = 0; i < root.children.length; i++){
               
               dfs(root.children[i];
           } 
              console.log('</'+root.val+'>'); //start
  
          } else{ console.log(root.val); }
               
         
      }
              
  }
  
  