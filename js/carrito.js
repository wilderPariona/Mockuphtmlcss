retirar_producto.addEventListener("click", ()=>{
    productoaeliminar.style.display="none";
    changetext1.innerHTML="$110.17";
    changetext2.innerHTML="$19.83";
    changetext3.innerHTML="$130.00";
})

btnpagar1.addEventListener("click",()=>{
    modalPagarPaypal.style.display="flex";
})

btnpagar2.addEventListener("click",()=>{
    modalPagarTarjeta.style.display="flex";
})
