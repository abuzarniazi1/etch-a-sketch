// let ask = prompt('Enter A Number Between 10 to 34')
//Currently code has problems like it cant create 64x64 the page gets broken

function myPrompt(){
    var ask = prompt("Enter A Number Between 10 to 20");
    for (let i = 0; i < ask; i++){
        for (let j=0; j<ask;j++){
            let square = document.createElement('Div')
            square.className = 'square'
            document.getElementById('container').appendChild(square);  
            square.addEventListener("mouseover", function () {
                square.classList.add("black");
            })
        }
        let br = document.createElement('br');
        document.getElementById('container').appendChild(br)
     
    }
    
 }

 
 

