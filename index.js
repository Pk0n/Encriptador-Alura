function encriptarMensaje()
{
    var mensajeEntrante = Array.from(document.getElementById("entrada").value);
    
    if(mensajeEntrante == "")
    {
        alert("Por favor ingrese un mensaje a encriptar!");
    }

    for(i=0; i < mensajeEntrante.length; i++)
    {
        if(mensajeEntrante[i] === "e")
        {
            mensajeEntrante.splice(i, 1, "enter");
        }
        else if(mensajeEntrante[i] === "i")
        {
            mensajeEntrante.splice(i, 1, "imes");
        }
        else if(mensajeEntrante[i] === "a")
        {
            mensajeEntrante.splice(i, 1, "ai");
        }
        else if(mensajeEntrante[i] === "o")
        {
            mensajeEntrante.splice(i, 1, "ober");
        }
        else if(mensajeEntrante[i] === "u")
        {
            mensajeEntrante.splice(i, 1, "ufat");
        }
    }
    var oracionEncriptada = document.getElementById("result");
    oracionEncriptada.textContent = mensajeEntrante.join("");
}

function desencriptarMensaje()
{
    var mensajeEncriptado = document.getElementById("entrada").value

    if(mensajeEncriptado == "")
    {
        alert("Por favor ingrese un mensaje a desencriptar!");
    }

    mensajeEncriptado = mensajeEncriptado.replaceAll("enter", "e");
    mensajeEncriptado = mensajeEncriptado.replaceAll("imes", "i");
    mensajeEncriptado = mensajeEncriptado.replaceAll("ober", "o");
    mensajeEncriptado = mensajeEncriptado.replaceAll("ai", "a");
    mensajeEncriptado = mensajeEncriptado.replaceAll("ufat", "u");

    var mensajeDesencriptado = document.getElementById("result");
    mensajeDesencriptado.textContent = mensajeEncriptado;
}
    

function copiarResultado()
{
    var texto = document.getElementById("result");
    texto.select();

    if(texto == "")
    {
        alert("Por favor encripte o desencripte un mensaje para copiar el resultado!")
    }

    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto.value);
}