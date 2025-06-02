let a = prompt('Enter your word')
let b = prompt('Enter your number')
b = parseInt(b)
for (i = 1 ; i <= b ; i++){
    document.writeln(i+". " + a+"<br/>")
}