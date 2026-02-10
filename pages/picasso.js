function fechaImg(){
    let img=document.querySelector("#preview"); 
    img.remove();
}
function mostraImgBig(caminho){
    let tamanho = caminho.length;
    let inicio=caminho.indexOf("imagens");
    let novaSrc=caminho.substr(inicio,tamanho);
    novaSrc=caminho.replace("pequenas","grandes");
    var cximg = document.createElement('div');
    cximg.setAttribute("id", "preview"); 
    cximg.innerHTML = '<img src="'+novaSrc+'" alt="Pintura completa">';
    cximg.setAttribute("onclick", "fechaImg();"); 
    document.body.appendChild(cximg);
} 
function addListeners(){
	let imagens=document.querySelectorAll("img");
	for(let i=0;i<imagens.length;i++){
		imagens[i].addEventListener('click',function(){
			mostraImgBig(this.src);
		})
	}
    let outro=document.querySelector("#outros");
    outro.addEventListener('change', function(){
        novoUrl=outro.value+".html";
        window.location=novoUrl;
    });
}
window.addEventListener('load', function(){addListeners();});