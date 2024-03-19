let pass = document.querySelector('#password');
let msg = document.querySelector('#msg');
let strength = document.querySelector('#strength');

pass.addEventListener('input', function () {
    if(pass.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none'
        pass.style.borderColor = '#ccc'
    }

    if(pass.value.length > 0 && pass.value.length < 4) {
        strength.innerHTML = "Weak";
        pass.style.borderColor = '#d35724'
        msg.style.color = '#d35724'
    } else if(pass.value.length >= 4 && pass.value.length < 8) {
        strength.innerHTML = "Medium";
        pass.style.borderColor = 'yellow'
        msg.style.color = 'yellow'
    } else if(pass.value.length > 8) {
        strength.innerHTML = 'Strong';
        pass.style.borderColor = 'green'
        msg.style.color = 'green'
    }
});