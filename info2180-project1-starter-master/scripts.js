/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", () => {

    var emailad= document.getElementById('email');
    var msg = document.getElementsByClassName('message')[0];
    var btn = document.getElementsByClassName("btn")[0];
  
     

    for(var form of document.getElementsByTagName('form')){
        form.addEventListener('Subscribe', function(ev){
          ev.preventDefault()
        })
     }


    for(var btn of document.getElementsByClassName('btn')){
        btn.addEventListener('click', function(ev){
            if (emailValid(emailad.value.trim())& ! emailEmpty(emailad.value.trim())){
                emailCheck = true;
                msg.innerHTML = 'Thank you! Your email address ' + emailad.value + ' has been added to our mailing list!';
                alert('Thank you! Your email address ' + emailad.value + ' has been added to our mailing list!');
                
            }else {
                //var emailCheck = false;
                if (emailEmpty(emailad.value.trim())){
                    emailCheck= false;
                    msg.innerHTML = 'Please enter a valid email address.';
                    alert('Please enter a valid email address.');
                }
            }
            })
        
            
    // var emailCheck = false;

    

    // if (emailEmpty(emailad.value.trim())){
    //     emailCheck= false;
    //     msg.innerHTML = 'Please enter a valid email address.'
    // }
    // })
}
    btn.addEventListener('click',function(ev){
    });
});
function emailValid(emailad){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailad);
}

function emailEmpty(eval){
    if(eval.length == 0){
        return true;
    }
}
    