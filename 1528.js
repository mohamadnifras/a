var restoreString = function(s, indices) {
    let shuffled = new Array(s.length) 
    for(let i=0;i<=s.length;i++){
     shuffled[indices[i]]=s[i]
    }
    return shuffled.join("")
 };
 console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));
 console.log(restoreString("abc",[0,1,2]));
 