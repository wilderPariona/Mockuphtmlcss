btneliminarorden.addEventListener("click", () => {
    modaleliminar.style.display="flex";
})

volveraordenes.addEventListener("click", () => {
    modaleliminar.style.display="none";
})

eliminarorden.addEventListener("click", () => {
    ordenaeliminar.style.display="none";
    modaleliminar.style.display="none";
})

btnseguirpedido.addEventListener("click", ()=>{
    modallogistica.style.display="flex";
})

btnregresarordenes.addEventListener("click", ()=>{
    modallogistica.style.display="none";
})