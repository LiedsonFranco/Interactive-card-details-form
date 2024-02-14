var inputs
window.addEventListener('DOMContentLoaded', () => {
    inputs = document.querySelectorAll('input')
    for (let i = 0; i < inputs.length; i++) {
        
        inputs[i].addEventListener("input", () => {
            
            if(inputs[i].getAttribute('data-target') == '#card-number-label'){
                let text = inputs[i].value
                let f_text = ''
                if(text.length < 17){
                    for(var  j = 0; j < text.length;j++){
                        if( j/4 == 1 || j/4 == 2 || j/4==3 || j/4 == 4){
                            f_text+= ' '
                        }
                        f_text+= text[j]
                        document.querySelector(inputs[i].getAttribute('data-target')).innerText = f_text
                    }
                    if(text.length == 16){
                        inputs[i].value = f_text
                    }
                }
                else{
                    inputs[i].value = f_text
                }
            }
            else{
                document.querySelector(inputs[i].getAttribute('data-target')).innerText = inputs[i].value
            }
        })
    }
})

function check_inputs(){
    let checks = 0
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == '' || inputs[i].value == null){
            let children = getSibling(inputs[i],'nextSibling')
            if(children){
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
                children.innerText = 'Can\'t be blank'
            }
        }
        else{
            let children = getSibling(inputs[i],'nextSibling')
            inputs[i].setAttribute('class', '')
            children.style.display = 'none'
            checks +=1
        }
        if(inputs[i].id == 'card-number'){
            let children = getSibling(inputs[i],'nextSibling')
            if (/[a-zA-Z]/.test(inputs[i].value)) {
                checks -=1
                children.innerText = 'Wrong format, numbers only'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
              }
            else if ( (inputs[i].value).replace(/\s/g, " ").length < 16) {
                checks -=1
                children.innerText = 'Minumum numbers to insert: 16'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
              }
        }
        if(inputs[i].id == 'card-holder-name'){
            let children = getSibling(inputs[i],'nextSibling')
            if (!/[a-zA-Z]/.test(inputs[i].value)) {
                checks -=1
                children.innerText = 'Please inserte a name'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
              }
        }
        if(inputs[i].id == 'card-expire-date-MM'){
            let children = getSibling(inputs[i],'nextSibling')
            console.log(parseInt(inputs[i].value))
            if(parseInt(inputs[i].value) > 12 || parseInt(inputs[i].value) < 1){
                checks -=1
                children.innerText = 'Between 1 and 12'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
            }
        }
        if(inputs[i].id == 'card-expire-date-YY'){
            let children = getSibling(inputs[i],'nextSibling')
            if(parseInt(inputs[i].value) > 99 || parseInt(inputs[i].value) < 1 || parseInt(inputs[i].value) == NaN){
                checks -=1
                children.innerText = 'Between 01 and 99'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
            }
        }
        if(inputs[i].id == 'card-cvc'){
            console.log('SUPER')
            let children = getSibling(inputs[i],'nextSibling')
            if(parseInt(inputs[i].value) > 999 || parseInt(inputs[i].value) < 100 || parseInt(inputs[i].value) == NaN){
                checks -=1
                children.innerText = 'Between 100 and 999'
                children.style.display = 'block'
                inputs[i].setAttribute('class', 'error')
            }
        }
    }
    if(checks == inputs.length){
        document.getElementById('inputs').style.display = 'none'
        document.getElementById('thanks').style.display = 'block'
    }
    
}
function getSibling(node, direction) {
    do {
      node = node[direction];
    } while (node && node.nodeType !== 1);
    return node;
  }