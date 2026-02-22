vamos a crear la pagina web inspirada de sax http://www.sax.com.bo/home
vamos a remodelar desde 0 este sitio vamos a crear un primero las reglas del proyecto 

Reglas :
- Todo codigo log o comentario dentro del codigo o en los md o txt dentro del proyecto sera en ingles 
- usaremos la libreria de diseno de Shadcn/UI para los componentes 
- separaremos la logica de y estructura del proyecto front utils - components - styles - pages - assets (imagenes)
- en un README.md estara toda la documentacion en ingles de como ejecutar q dependencias instalar la structura etc 
- las tecnologias q usaremos son typescrit - scss si es necesario combinado con Shadcn/UI - routing dom
- paleta de colores 
#0F172A   (Azul navy profundo)
#334155   (Azul grisáceo)
#E31E24   (Rojo principal)
#F1F5F9   (Gris muy claro)
#94A3B8   (Gris azulado) 
#111827   (Azul casi negro)
#1F2D3A   (Azul base)
#C4161C   (Rojo más oscuro)
#D1D5DB   (Gris suave)
#F9FAFB   (Blanco cálido)

personalmente refiero el fondo tonalidad mas oscura ... y letras blancas 


pasos 1
primer paso crearemos la pagnina home eta contara con un header 
header tendra en la izquierda la imagen del logo  bajo en la derecha estaran estos botones Inicio ,Quienes Somos, Productos,Contáctenos  y en la parte superior derecha abra un boton idioma dropdown que despliegre una lista ingles espanol y frances 
este header puede ser un navbar componente que siempre este en toda las pages como cabezera 
al lado del boton arriba a la derecha junto al boton de de idiomas abra un boton para cambiar el stilo de la pagina a modo claro y oscuro 

en el body ira una galeria de imagenes ocupara todo de deracha a izquierda el centro de la page cambiando de imagen haciendo una trancicion de 3 segundos 

luego abajo de eso abra un texto en un texto 
(Somos una empresa que está dedicada a soluciones y servicios en diferentes áreas como ser: productos de señalización, seguridad vial, Comercialización o ventas de Lamparas Led (Asia),equipos de oficina y maquinaria pesada. Exportación y Comercialización de Minerales certificado de registro fitosanitario; importación de productos de origen vegetal (granos), es emitido por el senasag; SAX cuenta con nexos comerciales en todo el territorio boliviano.  Es por esto que se trabaja en diferentes tipos de proyectos así como en licitaciones públicas y privadas a nivel nacional e internacional.

Contamos con el privilegio de ser el distribuidor exclusivo de ADATILE (USA)y de EFEXPORT ZF (Colombia) en materia de este mobiliario y equipamiento vial, para las diversas empresas de carácter local, nacional e internacional.)

como ultimo tendremos un footer
este footer tendra todo esto :
CONTACTENOS
SAX BOLIVIA
Director Gral. Christian Sandoval F.
C/Cobija #255 entre Warnes y Ñuflo de Chavez 
Tel./Fax.: 591 33317201
csandoval@sax.com.bo
SANTA CRUZ- BOLIVIA 
y tambien los logos de las redes sociales wasap facebook x twiter 



paso 2

para este paso crearemos pa pagina information que la veremos cuando agamos click en  el boton de quienes somos 
aqui en esta pagina estara el footer y el header 

pero el body cambiara ...  se colocora el siguiente texto en unas cars junto a una imagen 
texto
(Somos una empresa que está dedicada a soluciones y servicios en diferentes áreas como ser importación, exportación y comercialización de minerales, productos de consumo humano, equipos de oficina y maquinaria pesada.  SAX cuenta con nexos comerciales en todo el territorio boliviano.  Es por esto que se trabaja en diferentes tipos de proyectos así como en licitaciones públicas y privadas a nivel nacional e internacional.

En temas de minerales se trabaja en toda la comercialización hasta la exportación de los mismos.  Se ha trabajado con minerales como ser SAL, COBRE Y ORO.  La empresa cuenta con todos los registros y permisos necesarios en las diferentes entidades del estado como ser SENARECOM, SENAVEX, ADUANA NACIONAL DE BOLIVIA, SIN y otros. Es importante mencionar que cuenta con sucursales y socios estratégicos en  las zonas donde se producen estos minerales (La Paz, Oruro, Potosí)

En el área de importaciones se viene trabajando en la importaciónde diferentes productos según requerimientos de nuestros clientes.  Se ha trabajado bastante en la importación de MAQUINARIA PESADA Y PRODUCTOS DE SEÑALIZACIÓN VIAL, EQUIPOS DE COMPUTACIÓN, INSUMOS MÉDICOS entre otros. Es importante mencionar que SAX cuenta con todos los registros y permisos necesarios para realizar todo tipo de importaciones.

Otra área importante de la empresa es la distribución y venta de EQUIPOS DE COMPUTACIÓN, (HARDWARE) ACCESORIOS Y PARTES  para las diferentes empresas a nivel local y nacional. Las principales marcas con las que se trabaja son: HP, DELL, LENOVO, SAMSUNG, EPSON, CISCO, TOSHIBA, CANON, SONY, APC y otros.  El objetivo principal es la de brindar un excelente servicio con precios competitivos  para lograr satisfacer a nuestros clientes y construir una verdadera  relación humana.)

cada parrafo sera de una cars diferente respetando el boton del nav bar para cambiar el idioma del texto 

paso 3 
haremos la pagina de products 
mentendremos el header y el footer 
abran 9 cards  3x3 cada de estas tendran un nombre y una sola imagen 
cuando se le aga clik en el esa cards se desplegara un modal grande que ocupe el centro de la pagina dejando un pequeno margen de izquierda a derecha y oscureciendo el fondo 
cada modal de card tendra un boton que que diga solicitar producto este redigira a un whatsapp con un mensaje grabado diciendo (Hola, quiero mas informacion de este prodcuto "nombre del procuto")

cada card de productos tendra una descripcion y una lista de imagenes q podra cambiar cada 3 seg o manualmente elegir la imagen mas el texto 
lista de productos mas descripcion :
1.-
Barrera o maletin plastico
Categorías
Señalización Vial Temporal
Descripción Resumida
Canalizador Vehícular y Peatonal.
Detalles Técnicos
Las barreras o maletines plásticos son un sistema modular muy fácil de armar con unidades acoplables entre si que permiten construir cerramientos seguros de acuerdo a sus necesidades, livianos y fáciles de transportar, esenciales para obras, separadores de carril, desvíos, carriles alternativos. Especialmente indicadas para trabajos con excavaciones profundas y/o trabajos en altura (Puentes).

2.-
Caneca vial
Categorías
Señalización Vial Temporal
Descripción Resumida
Canalizador Vehícular y Peatonal.
Detalles Técnicos
Son dispositivos utilizados para la canalización y separación del tránsito, livianos y fáciles de transportar, esenciales para obras, separadores de carril, desvíos, carriles alternativos. Son de forma cilíndrica con dimensiones mínimas de 80cm de altura y 40cm de diámetro, su color anaranjado y deberán contener como mínimo dos franjas de lámina reflectiva Tipo III de 15cm de ancho.

3.-
Conos de trafico
Categorías
Señalización Vial Temporal
Descripción Resumida
Canalizador Vehícular y Peatonal.
Detalles Técnicos
Conos en PVC resistente, de color naranja, base cuadrada que le da gran estabilidad al producto, Filtro UV que permite mayor durabilidad y consistencia, con tramos de lámina retroreflectiva categoría III Alta intensidad que permiten una alta visibilidad tanto de día como de noche.Son conos de plástico usados en carreteras para avisar a los conductores de zonas en obras o accidentes. Los conos de tráfico (también llamados conos de carretera o conos de seguridad) son conos de plástico de colores brillantes usados en carreteras para avisar a los conductores de zonas en obras o accidentes. Los conos también se usan en espacios públicos interiores para marcar zonas que se encuentran cerradas a los peatones, como baños fuera de servicio; o para destacar una situación de peligro, como un suelo resbaladizo. También pueden usarse en zonas de juego en colegios para delimitar áreas del campo. Los conos de tráfico son de muchos colores, naranja, amarillos y rojos, siendo estos colores usados por su brillo.

4.-
Delineador Flexible
Categorías
Señalización Vial Temporal
Descripción Resumida
Delineador Vial.
Detalles Técnicos
Estos dispositivos de canalización pueden utilizarse efectivamente para dividir vías de carriles contrarios, dividir el transito de vehículos automotores cuando dos o mas carriles se mantienen abiertos en la misma dirección.

5.-
Estoperol o Botón Vial
Categorías
Reductor de Velocidad
Descripción Resumida
Estoperol con espigo y Estoperol sin espigo.​
Detalles Técnicos
Dispositivo de señalización vial fabricado en plástico rígido inyectado, su forma es de semiesfera. Con espigo que reduce los desprendimientos, sin espigo inyectado en plástico de alta resistencia, colores amarillo y blanco disponibles. 

6.-
Resalto Vial 2 piesas
Categorías
Reductor de Velocidad
Descripción Resumida
Resalto plástico de alta resistencia.
Detalles Técnicos
-Dispositivo para disuadir al conductor a reducir la velocidad de su
vehículo ya que el efecto que recibe mismo es menor al sobrepasar
despacio dicho resalto.
-El material es polipropileno de alto impacto con buen balance impacto/rigidez.
-Adhesivo 3M grado diamante.

7.-
Resalto Vial 3 piesas 
Categorías
Reductor de Velocidad
Descripción Resumida
Banda Alertadora - Plástico Rumble Rayas
Detalles Técnicos
Dispositivo elaborado en plástico inyectado, su función es alertar los conductores de la aproximación a zonas de reducción de velocidad produciendo un sonido al ser sobrepasado por el vehículo.

8.-
Tachón o Segregador Vial
Categorías
Canalizacion Vial
Descripción Resumida

Tachón Plástico con Reflectivo 

Detalles Técnicos

Dispositivo de canalización de flujo vehicular, utilizado en carriles exclusivo o delineación de salidas de autopistas, con reflectivos microprismáticos 3M no autoadhesivos de alta durabilidad. También conocido como Bordillo Traspasable.

9.-
Topes de Estacionamiento
Topes de Estacionamiento
Categorías
Topellantas
Descripción Resumida
Tope de Estacionamiento Mini 

Detalles Técnicos

Tope MINI o "Topellanta" fabricado en plástico de alta resistencia al impacto, permanencia de color mejorada con estabilizante UV, cintas reflectivas que aumentan su visibilidad en sotanos. medidas 50cm x 10cm x 17cms.


paso 4
page de contacto 


paso 5 
crearemos la pagina de contactaenos 
sera simple 
deve tener 
Escribanos un Mensaje o Solicitud
Para enviarnos un mensaje o solicitud, por favor ingrese su nombre, su email y el texto de su solicitud.

Una vez que presente esta información, le enviaremos un mensaje para validar que el email es correcto, pidiendole que confirme que quiere enviar la solicitud. Una vez que confirme su mensaje será enviado al personal de soporte.

Si no recibe el email de confirmación despues de haber presentado su solicitud, por favor revise su Correo no deseado. Por favor tome en cuenta que la direccion de la que se envia la confirmación es noreply@prexenta.com.

Nombre
Correo
Texto de pregunta
  
  
 	 	 
Código de verificación (ejemplo nv7iuj)

No puede distinguir las letras? Generar una nueva imagen
Por favor, escriba las letras y / o números que se muestran
un boton de enviar toda esta informacion se mandara por un correo electronico a la siguiente direccion 
mauricio16pc@gmail.com 
agregar la imagen del logo al formato del correo 
