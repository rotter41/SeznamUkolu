document.getElementById("bt1").addEventListener("click" , () =>
{
    // vytvořeni elementu
    const novUk = document.createElement("ukol")
    const  splneno = document.createElement("tl")
    const  zrusit = document.createElement("tl2")
    
    // vytvořeni objektu pro čas a proměnné pro finalní datum

    const cas = new Date()
    let datum
    
    let splBool = true // proměná pro přepinani splněno/nesplněno

    // vytvořeni jednotlivých aspektu času

    const hours = cas.getHours();
    const minutes = cas.getMinutes();
    const day = cas.getDate();
    const month = cas.getMonth() + 1; 
    const year = cas.getFullYear();

    // přiřazeni datumu

    datum = hours+ ":" + minutes + " "+ day +"." + month+ " " + year

    // addEventListener pro tlacitko splnit/zrusit spneni

    splneno.addEventListener("click", () =>
    {
        if (splBool) {
            novUk.style.backgroundColor = "green"
            splneno.style.backgroundColor = "red"
            splneno.innerText = "Zrusit splneni"
        }

        else{
            novUk.style.backgroundColor = "white"
            splneno.style.backgroundColor = "greenyellow"
            splneno.innerText = "Splnit"
        }
        splBool =  !splBool

    })

    // addEventListener pro tlacitko zrusit

    zrusit.addEventListener("click", () =>
    {
        novUk.remove()
        splneno.remove()
        zrusit.remove()
    })

    let jmeno = document.getElementById("i1").value
    let poznamka = document.getElementById("i2").value

    // vypsani textu do elementu

    splneno.innerText = "Splnit"
    zrusit.innerText = "Zrusit"
    novUk.innerHTML = `<strong>${jmeno}</strong>: ${poznamka}<br>Datum: ${datum}`

    // přiřazeni do konteineru

    document.getElementById("Cont").appendChild(novUk);
    document.getElementById("Cont").appendChild(splneno)
    document.getElementById("Cont").appendChild(zrusit)

})