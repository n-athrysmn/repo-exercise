
//first
function reverseString (str){
    var words = str.split('')
    for (var i = 0, j=(words.length) - 1; i < words.length/2; i++){
        temp = words[i]
        words[i] = words[j]
        j--
    }
    console.log(words.join(''))
}

var string = "Hi! Welcome to this Javascript Guide!";
var terbalik = reverseString(string)



function reverseString(string) {
    var array = string.split(" ");
    for (var i = 0,j=(array.length)-1; i < array.length/2; i++) {
            temp=array[i]
            array[i] = array[j];
            array[j]=array[i]
            array[j] = temp; j--;}
      console.log(array.join(" "));
};  

var string = "Welcome to this Javascript Guide!";
var terbalik = reverseString(string)

//second
var arrayList = [1 , 2, 3];
console.log(Array.isArray(arrayList))

