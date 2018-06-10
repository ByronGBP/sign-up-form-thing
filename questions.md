# HTML
- HTML. Si queremos resaltar un texto, ¿qué deberíamos usar, el tag ​<b>​ o ​<strong>​? ¿Por qué?
  - `b`, al igual que `i` son solo estilos. `strong`, al igual que `em`, son tags semánticas. Al ser semánticos pueden ser utilizados por diferentes programas para usuarios que necesitan una accesibilidad especial. Mientras que `b` o `i` solo añaden un estilo. Por lo tanto siempre es más conveniente usar `strong` ya que engloba un mayor rango de usuarios a los que se les ofrecerá una buena UX.

# CSS
- ¿Qué ventajas presenta el uso de un preprocesador de CSS? ¿Inconvenientes? ¿Es recomendable su uso en cualquier tipo de proyecto?
  - Nunca he usado ningún preprocesador de forma "profesional".
  - Poder hacer CSS en "modo porgramación". Esto significa que se pueden usar variables, funciones y todo lo que ello conlleva. Además de poder poner en práctica principios como DRY o Clean Code.
  - Al igual que en programación, no usar buenos principios para escribir código puede causar más que algún otro incoveniente tanto para quien lo ha escrito como para cualquier developer compañero. 
  - Supongo que para proyectos grandes viene mucho más que bien, por la reusabilidad y manteniento que se puede conseguir con buenas prácticas. En mi caso, hasta el momento no he necesitado usarlo ya que todos mis proyectos han sido muy sencillos.
  - AL ACABAR EL TEST: Me he dado cuenta que en este pequeño proyecto, un prepocesador hubiese venido muy bien.

# JS
- ¿Qué ventajas o inconvenientes presenta el uso de ​promises​ respecto a ​callbacks​?
  - Visualmente se consigue un código más conciso y limpio. Pero la principal ventaja es que da muchísimo control con las funciones asíncronas de manera que se pueden hacer operaciones complejas, como esperar a que dos funciones asíncronas se terminen para realizar el siguiente paso (con `Promise.all()`), de forma segura por el error handling que proporcionan. 
  - Aún así parece que con el nuevo `async/await` todo esto aún podrá ser más conciso y limpio. 

# Exposición. 
- A nivel de usabilidad, presentación e interacción; por favor, desarrolla un breve análisis (no más de 15 líneas) de qué falla y qué se podría mejorar en la web actual de ​Cymit​.

  - Resumén: 
    - No tiene ningún tipo de consistencia respecto a los colores. A medida que vas navegando aparecen nuevos colores. Además de que el color principal, gris, no da una buena sensación de compra. Aburre antes de tener que buscar el/los producto/s.
    - Para poder buscar algún producto en específico tienes que saber bien como buscarlo con la gran cantidad de filtros que se te proporcionan. Si no, será una odisea encontrarlo.
    - Se te obliga a registrarte antes de poder poner algo en el carrito cuando el carrito siempre este disponible visualmente.
    - Los botones no son nada llamativos y da la impresión, incluso, que son parte de un anuncio de terceros. 
    - Las secciones no están nada diferenciadas.
    - Tarda una eternidad para hacer una búsqueda y no deja hacer nada mientras tanto. 
    - No agradable user experience.
    - 0 confianza para poner mi tarjeta.


  - Xperience:
    - Usando la última versión de Chrome sin estar en pantalla completa, lo primero que se ha visto es que el mensaje respecto a las cookies está cubierto por la pequeña pestaña de "Deje un mensaje / Leave a messa..."
    - Si cambio el idioma de la página la pestaña de "Deje un mensaje / Leave a messa..." no cambia de idioma. 
    - No sabía que se trataba de un chat hasta que no he dado click
    - El color de la pestaña "Deje un mensaje / Leave a messa.." no sigue los colores de la página.
    - Los colores de la página no son nada atractivos. Da la sensación de una página web que ya no se utiliza. Parecen "pasados de moda".
    - Los anuncios tampoco cambian de idioma.
    - El icono de profesor con un like me daba la impresión de que me iba a redirigir al facebook de la compañía para que le diese like pero resulta ser la forma de ver los diferentes links de las diferentes redes sociales de la página cuando estos links ya están antes del footer de la página. 
    - Al dar click en el banner de 5% de descuento me ha abierto una nueva pestaña, la cual me aparece como "No seguro" y ha perdido el idioma que había definido y ha pasado a "Español". La página en la que estaba queda inservible al aparecer un pop-up con un spinner y el texto "WE ARE CONDUCTING SEARCH FROM:"
    - Los otros banners me llevan a un dominion diferente al de "cymitquimica" lo cual me produce inseguridad respecto a la página
    - Parece que para poder moverte por la página para ver algún producto específico tienes que saber muy bien el campo de la Química. 
    - Viendo el producto `BIOCIDAL ZF - DISINFECTANT SPRAY` ha aparecido un celeste el cual no sigue los colores de la página. 
    - Las tags del producto anterior parecen clickables cuando no lo son.
    - La imagen del producto anterior pierde protagonismo por los pdfs
    - Las imagenes de `IMPORTANT PRODUCT DETAILS:` del producto anterior siguen en español cuando tenga la página en inglés.
    - Al hacer la búsqueda de `qwer` en el field me ha puesto en espera por unos 10s sin poder hacer nada en la página web y me ha aparecido `Lo sentimos. No se ha encontrado ningún resultado` cuando tengo la página en inglés.
    - Al buscar `desinfectante`, `desinfectante` y `DISINFECTANT` los dos primeros no tienen resultado y el último tiene un solo resultado diferente a `BIOCIDAL ZF - DISINFECTANT SPRAY`
    - Al intentar añadir algo al carrito me aparece el texto `Para añadir productos al carro primero debeBE LOGGED INorREGISTERED FIRST`.
    - Formulario para registrarse muy aburrido y de nuevo con colores diferentes a los que había visto anteriormente.

# Ejercicio 2
- Honéstamente me parece que ningún usuario nunca pondrá (ni debería) toda una dirección en un solo `input` de texto. Pienso que debería estar todos estos campos por separados ya que, entre otras cosas, le da la facilidad al usuario de poder revisar algún dato de forma mucho más sencilla que si lo tiene todo en un línea. Al ser una información primordial para hacer la entrega de producto puede que incluso centraría en facilitarle al usuario este paso con herramientas como `autocomplete` proveída por APIs como la de Google Maps.

# Ejercicio 3
- Aquí entraría, primero de todo, un research exhaustivo enfocado a usuarios que suelen comprar productos químicos para ver que tipos de preferencias, gustos, costumbres, manías, etc. tienen a la hora de hacer una compra online para productos químicos.
- Teniendo en cuenta que es una venta de producto, intenría pensar en un diseño llamativo nada más abrir la página de producto. Dicho esto me enfocaría en tener buenas imagenes del producto para poder enseñar al usuario. 
- También añadiría como imagen la `structure` y `smiles` ya que tienen potencial para ser llamativas.
- Una vez tenemos al usuario enganchado con las imagenes, el segundo foco se haría a la breve descripción del producto para tener más detalles del mismo.
- El tercer foco irian en conjuntos los demás campos `packaging`, `properties`, `safety`, `other`, `synonyms`. 
- Hasta este punto el usuario ha visto lo básico del producto. En caso que quiera más. Habrá un link donde podrá ver en profundidad detalles del producto con el `pdf_msds`.
- Todos estos focos pueden cambiar drásticamente con el research de usuarios ya que, por ejemplo, puede que un usuario, que suele comprar productos químicos, siempre va directo a `properties`. De manera que si le facilitamos la presentación de `properties` en segundo foco, en vez de tercero, estará agradecido y se la hará más placentero comprar en la página web.
- Diseño en directo.
