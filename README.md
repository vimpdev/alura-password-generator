# Generador de Contraseñas

Este proyecto forma parte del programa ***Inmersión Dev***, desarrollado por **Alura**.

![Generador de contraseñas](./assets/video/sample.gif)

## *Objetivo* :dart:

🔳 Desarrollar una aplicación que genere contraseñas aleatorias según los requisitos especificados.

## *Requerimientos* :memo:

✏️ Permitir al usuario ingresar un número que determinará la longitud de la contraseña.

✏️ El usuario podrá seleccionar si la contraseña debe incluir mayúsculas, minúsculas, números o caracteres especiales.

✏️ Incluir un botón que permita reestablecer los campos y limpiar la contraseña generada.

✏️ Implementar un sistema de validación para clasificar la fortaleza de la contraseña como *débil*, *regular* o *fuerte*.

## *Screenshots* :camera:

![Mobile](./assets/screenshot/mobile.avif)

![Desktop initial](./assets/screenshot/desktop-initial.avif)

![Desktop result](./assets/screenshot/desktop-result.avif)

## *Links* :link:

[Live site URL](https://vimpdev.github.io/inmersion-alura-password-generator/) 👀

## *Pasos* :footprints:

### *Funciones*
1. Obtener la longitud deseada para la contraseña: `function getPasswordLength()`.

1. Crear la ***base*** de caracteres con los que se generará la contraseña.

1. Activar el botón ***Generar*** después de validar que se ha ingresado una longitud y se ha seleccionado al menos una opción.

1. Genera la contraseña utilizando la longitud y la base de caracteres previamente definidas.

1. Mostrar la contraseña generada en el ***textarea***.

1. Limpiar los campos: ***longitud***, ***textarea***; desactivar los ***checkboxes*** y el botón ***Generar***.

1. Asignar y mostrar la ***fortaleza*** de la contraseña generada.

### *Eventos*

1. `DOMContentLoaded` - al cargar la página el botón ***Generar*** se muestra desactivado.

1. `input` - obtener la longitud de la contraseña.

1. `change` - crear la cadena de caracteres *base*.

1. `submit` - generar la contraseña.

1. `reset` - limpiar los campos y desactivar los checkboxes.

## Lo que he aprendido :nerd_face:

📌 `valueAsNumber` - obtiene o establece el valor de un `<input type="number">` como un número. Si el valor no es un número válido, devuelve `NaN`.
```js
passwordLength = $length.valueAsNumber;
```

📌 `charAt(index)` - devuelve el caracter de la posición especificada por el ***index***.
```js
let randomIndex = Math.floor( Math.random() * base.length );
let randomChar = base.charAt(randomIndex);
```

📌 `forEach()` - ejecuta una función proporcionada una vez por cada elemento de un array. No devuelve un nuevo array, sino que realiza una acción para cada elemento.
```js
$checkBoxes.forEach( checkBox => {
  if (checkBox.checked) {
    base += checkBox.value;
  }
} );
```

📌 `.test()` - se utiliza con expresiones regulares (**RegExp**) para comprobar si una cadena de texto coincide con el patrón de la expresión regular. Devuelve `true` si hay una coincidencia, de lo contrario, devuelve `false`.
```js
const hasNumber = /[0-9]/.test(password);
const hasSpecial = /[!@#$%^&*()_+-={}|;:\,.<>?/]/.test
```

📌 `DOMContentLoaded` - se dispara cuando el documento HTML inicial ha sido completamente cargado y analizado, sin esperar a que se carguen hojas de estilo, imágenes y subframes. Es útil para ejecutar scripts que deben interactuar con el DOM una vez que esté listo.
```js
document.addEventListener("DOMContentLoaded", disableGenerateBtn);
```

📌 `change` - se activa cuando el valor de un campo de entrada (***input***, ***select***, ***textarea***) cambia **Y** pierde el foco.
```js
$checkBoxes.forEach( checkBox => {
  checkBox.addEventListener("change", createBaseString);
} )
```

📌 `blur` - se activa cuando el elemento pierde el foco, sin importar si el valor ha cambiado.

## *Recursos* :card_file_box:

📰 [Alura blog](https://www.aluracursos.com/blog) - Artículos interesantes sobre una variedad de temas.

📺 [Generador de Passwords](https://www.youtube.com/watch?v=wgft7XYZCbo&t=475s) por Dorian Desings.
