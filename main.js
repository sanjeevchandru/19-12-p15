document.write("15.Display colors using ordinal numbers"+"<br>");
function test15(arr){
    var n=["th","st","nd","rd"];
    var out="<br>";
    for(let i=0;i<arr.length;i++){
         var x=(i+1)%100;
         console.log(x);
         out=out+x+((n[x]||n[0]))+" choice is " +arr[i]+"<br>";
    }
    return out;
}
document.write(test15(["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "])+"<br>");