const logout = async() => {
    const action = await fetch('/api/users/logout',{
        method:'POST',
    });
    
    if(response.ok){
        document.location.replace('/')
    } else{
        alert(response.statusText);
    }
};

document.querySelector('#logout').addEventListener('click', logout);