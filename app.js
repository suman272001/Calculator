let buttons_list=document.querySelectorAll(".buttons");
let buttons=Array.from(buttons_list);
let inputbox=document.getElementById("result_output");
let result="";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
    if(button.innerHTML=="=")
    {
        try{
        result=eval(result);
        inputbox.value=result;
        }
        catch(err)
        {
            inputbox.value="Invalid";
            result="";
            //inputbox.value=result;
            console.log(err);
        }
    }
    if(button.innerHTML=="C")
    {
        result="";
        inputbox.value=result;
        console.log("c");
    }
    if(button.innerHTML!=="="&& button.innerHTML!=="C")
    {
        result=result+button.innerHTML;
        inputbox.value=result;
      console.log(button.innerHTML); 
    }
    })
})