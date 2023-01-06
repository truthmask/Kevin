window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy (element) {
        element.childNodes.forEach(node => {
            if(node.nodeName.match(/^H\d/)){
                textNodes.push(node.textContent);
            }else{
                recursy(node);
            }
         })
    }

    recursy(body);
    console.log(textNodes);
})