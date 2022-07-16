// vai ler todos os popover da pagina
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
)

// vai passar de botão em botão lendo os popover
var popoverList = popoverTriggerList.map(function (popoverTriggerEl){
    return new bootstrap.Popover(popoverTriggerEl)
})

//TOOLTIP
// vai ler todos os popover da pagina
var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
)

// vai passar de botão em botão lendo os popover
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl){
    return new bootstrap.Tooltip(tooltipTriggerEl)
})