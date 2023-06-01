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
        document.location.replace('/profile');
    } else{
        alert(response.statusText);
    } 
}
};

const createProfile = async (event)=> {
    event.preventDefault();
    
    const name= document.querySelector('#name-create').value.trim();
    const email= document.querySelector('email-create').value.trim();
    const password=document.querySelector('password-create').value.trim();
    
    if(name && email && password){
        const response = await fetch('/api/users', {
            method:'POST',
            body: JSON.stringify({name, email, password}),
        });
        if (response.ok){
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-handler')
    addEventListener('click', loginHandler);
document
    .querySelector('.create-profile')
    .addEventListener('click', createProfile);