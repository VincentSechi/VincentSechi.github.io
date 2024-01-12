window.onload = function(){
    let btn = document.querySelector('.btn-calc');
    let form = document.querySelector('.form-container');
    let show = document.querySelector('.show');
    let hide = document.querySelector('.hide');
    
    let operator = document.querySelector('select');

    let math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y },
    }


    function hover(element, enter, leave){
        element.addEventListener('mouseenter', enter)
        element.addEventListener('mouseleave', leave)
      }

    btn.addEventListener('click',function(e){
        let operatorValue = document.querySelector('select').value;
        let nb1 = document.getElementById('nb1').value;
        let nb2 = document.getElementById('nb2').value;

        let result = math_it_up[`${operatorValue}`](Number(nb1),Number(nb2));
        e.preventDefault();
 
        alert(`${nb1} ${operatorValue} ${nb2} = ${result}`);
    });

    hover(nb1, () => {
        nb1.nextElementSibling.classList.remove("hidden");
        nb1.nextElementSibling.classList.add("visible");
        
    }, () => {
        nb1.nextElementSibling.classList.add("hidden");
        nb1.nextElementSibling.classList.remove("visible");
    })
    
    hover(nb2, () => {
        nb2.nextElementSibling.classList.remove("hidden");
        nb2.nextElementSibling.classList.add("visible");
        
    }, () => {
        nb2.nextElementSibling.classList.add("hidden");
        nb2.nextElementSibling.classList.remove("visible");
    })

    hover(operator, () => {
        operator.nextElementSibling.classList.remove("hidden");
        operator.nextElementSibling.classList.add("visible");
    }, () => {
        operator.nextElementSibling.classList.add("hidden");
        operator.nextElementSibling.classList.remove("visible");
    })

    show.addEventListener('click', function(e){
        show.classList.add("active");
        hide.classList.remove("active");
        !form.classList.contains("visible") ? form.classList.add("visible") : ""
        e.preventDefault();
    })
    hide.addEventListener('click', function(e){
        show.classList.remove("active");
        hide.classList.add("active");
        form.classList.contains("visible") ? form.classList.remove("visible") : ""
        e.preventDefault();
    })
    
    nb1.addEventListener("input", function(e){
        if(nb1.value !== "" && nb2.value !== ""){
            btn.removeAttribute("disabled");
        }else{
            btn.setAttribute("disabled", "disabled");
        }
        if(nb1.value !== ""){
            let color = nb1.nextElementSibling.style.background;
            setInterval()
            nb1.nextElementSibling.style.background="green"
        }else{
            nb1.nextElementSibling.style.background="crimson"
        }
    })
    nb2.addEventListener("input", function(e){
        if(nb1.value !== "" && nb2.value !== ""){
            btn.removeAttribute("disabled");
        }else{
            btn.setAttribute("disabled", "disabled");
        }
        if(nb2.value !== ""){
            nb2.nextElementSibling.style.background="green"
        }else{
            nb2.nextElementSibling.style.background="crimson"
        }
    })
    
}