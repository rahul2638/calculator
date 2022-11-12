console.log('hello world');
var x;
x=cal.screen.value;

function valuebutton(e){
    x += e.value;
}
function clear(){
    x = null;
} 
function caluclate(){
    x = eval(x);
}

function back(){
    
} 