const loginHandler= async(event)=>{
    event.preventDefault();

    const email= document.querySelector('#email-login').value.trim();
    const password= document.querySelector('#password-login').value.trim();

if (email&password){
    const response= await fetch('/api/users/login', {
        method:'Post',
        body:JSON.stringify({email,password}),
    });
    if (response.ok){
        document.location
    }
}
}