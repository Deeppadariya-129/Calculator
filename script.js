
//M+ And M- Is just for design

let string=""

let button=document.querySelectorAll('.btn')
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try {
            if(e.target.innerHTML=="="){
                string=eval(string)
                document.querySelector('input').value=string
            }
            else if(e.target.innerHTML=="C"){
                string=""
                document.querySelector('input').value=string
            }
            else{
            console.log(e.target); 
            string+=e.target.innerHTML;
            document.querySelector('input').value=string
            }
        } catch (error) {
           console.log(error) 
        }
        
    })
})