(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(a,t,s){a.exports=s.p+"assets/img/activate_plugin.1bbe11d8.png"},374:function(a,t,s){a.exports=s.p+"assets/img/add_plugin_to_tilemap.6dc3dd05.png"},375:function(a,t,s){a.exports=s.p+"assets/img/added_liquidsim_node.44d17cc3.png"},376:function(a,t,s){a.exports=s.p+"assets/img/adjust_cell_size.cabdf114.png"},451:function(a,t,s){"use strict";s.r(t);var e=s(65),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("iframe",{attrs:{width:"100%",height:"400",src:"https://www.youtube.com/embed/nF7cdUVgvNc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a._v(" "),e("h1",{attrs:{id:"guia"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#guia"}},[a._v("#")]),a._v(" Guía")]),a._v(" "),e("p",[a._v("Esta guía, te enseñará cómo compilar y agregar el plugin a un nuevo proyecto de "),e("strong",[a._v("Godot engine")]),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Prueba una demostración del plugin "),e("RouterLink",{attrs:{to:"/es/game/"}},[a._v("aqui")])],1)]),a._v(" "),e("h2",{attrs:{id:"prerrequisitos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerrequisitos"}},[a._v("#")]),a._v(" Prerrequisitos.")]),a._v(" "),e("p",[a._v("Para el desenvolvimiento de esta guía, debemos tener instalado en nuestro sistema lo siguiente:")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("ul",[e("li",[a._v("Godot engine 3.x")]),a._v(" "),e("li",[a._v("Compilador C++")]),a._v(" "),e("li",[a._v("Herramienta de compilación Scons")]),a._v(" "),e("li",[a._v("Herramienta de compilación Emscripten 2.0.17 (En caso de compilar para web "),e("strong",[a._v('"wasm"')]),a._v(").")])])]),a._v(" "),e("h2",{attrs:{id:"clonar-repositorio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clonar-repositorio"}},[a._v("#")]),a._v(" Clonar Repositorio.")]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Es probable que encuentres diferencias entre el repositorio original y este repositorio, si vas a usar el repositorio original de "),e("strong",[a._v('"tterrasson"')]),a._v(", te recomiendo que sigas las instrucciones que encontraras en él, ya que puede haber diferencias en como se instala el plugin.")])]),a._v(" "),e("p",[a._v("Repositorio Original.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --recurse-submodules https://github.com/tterrasson/liquid-simulator-godot\n")])])]),e("p",[a._v("Este Repositorio.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --recurse-submodules https://github.com/AJ-Wi/liquid-simulator-godot\n")])])]),e("h2",{attrs:{id:"compilar-binario"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compilar-binario"}},[a._v("#")]),a._v(" Compilar binario.")]),a._v(" "),e("p",[a._v("En esta sección veremos como compilar, tanto el binario de godot-cpp como nuestro plugin.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("En los siguientes comandos debemos sustituir "),e("strong",[a._v('"<os>"')]),a._v(" por la plataforma en la que queremos ejecutar nuestro juego:")]),a._v(" "),e("ul",[e("li",[a._v("windows")]),a._v(" "),e("li",[a._v("linux")]),a._v(" "),e("li",[a._v("osx")]),a._v(" "),e("li",[a._v("javascript")]),a._v(" "),e("li",[a._v("andorid")])])]),a._v(" "),e("h3",{attrs:{id:"binario-godot-cpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binario-godot-cpp"}},[a._v("#")]),a._v(" binario godot-cpp.")]),a._v(" "),e("p",[a._v("Necesitamos compilar el binario de godot-cpp acorde a la plataforma en la que queremos ejecutar nuestro juego, para ello debemos estar posicionados dentro de la carpeta godot-cpp en nuestro terminal.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" liquid-simulator-godot/godot-cpp\n$ scons "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("platform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("os"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("generate_bindings")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes\n")])])]),e("h3",{attrs:{id:"binario-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binario-plugin"}},[a._v("#")]),a._v(" binario plugin.")]),a._v(" "),e("p",[a._v("Una vez compilado el binario de godot-cpp volvemos a la carpeta raíz del proyecto y compilamos el plugin.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n$ scons "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("platform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("os"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h2",{attrs:{id:"copia-el-plugin-a-tu-proyecto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#copia-el-plugin-a-tu-proyecto"}},[a._v("#")]),a._v(" Copia el plugin a tu proyecto.")]),a._v(" "),e("p",[a._v("En este punto encontrarás el plugin compilado en la carpeta "),e("strong",[a._v('"bin"')]),a._v(" del proyecto, solo debes copiar esta carpeta a la carpeta "),e("strong",[a._v('"addons"')]),a._v(" de tu proyecto, y renombrar la carpeta del plugin como "),e("strong",[a._v('"liquidsim"')]),a._v(", también puedes ejecutar el siguiente comando.")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -r bin/* /ruta/a/tuproyecto/addons/liquidsim\n")])])]),e("p",[a._v("Deberías quedar con la siguiente estructura de archivos en tu proyecto.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".\ntuproyecto\n    ├── addons\n    |    └── liquidsim\n    |        ├── assets\n    |        |   ├── icon.png\n    |        |   ├── lava.png\n    |        |   └── water.png\n    |        ├── lib\n    |        |   └── `libliquidsim.so` (segun el que hayas compilado.)\n    |        ├── LiquidSim.tscn\n    |        ├── liquidsim_plugin.gd\n    |        ├── liquidsim.gdnlib\n    |        ├── liquuidsim.gdns\n    |        └── plugin.cfg\n    ├── default_env.tres\n    ├── icon.png\n    ├── project.godot\n")])])]),e("h2",{attrs:{id:"activa-el-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#activa-el-plugin"}},[a._v("#")]),a._v(" Activa el plugin.")]),a._v(" "),e("p",[a._v("Para ello accedes a la configuración de tu proyecto y en la sección de plugin te aparecerá "),e("strong",[a._v('"LiquidSim"')]),a._v(", solo debes activarlo.")]),a._v(" "),e("p",[e("img",{attrs:{src:s(373),alt:"alt img"}})]),a._v(" "),e("h2",{attrs:{id:"agregar-nodo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#agregar-nodo"}},[a._v("#")]),a._v(" Agregar Nodo.")]),a._v(" "),e("p",[a._v("Una vez activado, ya nos aparece el plugin en la lista de nodos del editor.")]),a._v(" "),e("p",[e("img",{attrs:{src:s(374),alt:"alt img"}})]),a._v(" "),e("p",[a._v("Para que funcione nuestro nuevo nodo o plugin, debemos agregarlo como nodo hijo de un "),e("strong",[a._v('"TileMap"')]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:s(375),alt:"alt img"}})]),a._v(" "),e("h2",{attrs:{id:"ajuste-del-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ajuste-del-plugin"}},[a._v("#")]),a._v(" Ajuste del plugin.")]),a._v(" "),e("p",[a._v("Ajusta el tamaño de las celdas del plugin según el tamaño de celdas de tu "),e("strong",[a._v('"TileMap"')]),a._v(".")]),a._v(" "),e("p",[e("img",{attrs:{src:s(376),alt:"alt img"}})]),a._v(" "),e("h2",{attrs:{id:"probar-el-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#probar-el-plugin"}},[a._v("#")]),a._v(" Probar el plugin.")]),a._v(" "),e("p",[a._v("Adjunte un gdscript al "),e("strong",[a._v('"TileMap"')]),a._v(" para probar el complemento, puede usar el siguiente código de muestra.")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("extends TileMap\n\nfunc _ready"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("pass")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Replace with function body.")]),a._v("\n\nfunc _input"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("event"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" event "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("is")]),a._v(" InputEventMouseButton"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Mouse in viewport coordinates")]),a._v("\n\t\tvar wpos "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" world_to_map"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("get_global_mouse_position"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\t\t$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("add_liquid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("wpos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" wpos"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API.")]),a._v(" "),e("div",{staticClass:"language-py extra-class"},[e("pre",{pre:!0,attrs:{class:"language-py"}},[e("code",[a._v("$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("start"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Inicia la simulación "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Iniciado por defecto"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Detiene la simulación\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("update_simulation"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Fuerza la actualización de la simulación\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cleanup_empty_cells"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Limpiar todas las celdas vací"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("automático"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("add_liquid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float")]),a._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Añade un poco de líquido a la celda"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("del_liquid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" vaciar una celda\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("set_liquid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float")]),a._v(" amount"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Establecer una cantidad fija de líquido a la celda\n$LiquidSim"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("get_liquid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Retorna la cantidad de líquido que tiene la celda"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),e("h2",{attrs:{id:"problemas-al-compilar"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problemas-al-compilar"}},[a._v("#")]),a._v(" Problemas al compilar.")]),a._v(" "),e("p",[a._v("Como se mencionó al comienzo, si estás trabajando con la versión "),e("a",{attrs:{href:"https://github.com/tterrasson/liquid-simulator-godot",target:"_blank",rel:"noopener noreferrer"}},[a._v('"original"'),e("OutboundLink")],1),a._v(" del plugin, sigue las instrucciones de ese repositorio.")]),a._v(" "),e("p",[a._v("En caso de continuar trabajando con la versión de este repositorio, te dejo un tip o solución a un problema que yo me encontré en el camino y probablemente a ti te sirva mi experiencia.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Al momento de compilar el plugin para la versión web, me encontré con que el script "),e("strong",[a._v('"SConstruct"')]),a._v(" no contenía el fragmento de código necesario para dicha tarea, conseguí en los repositorios de "),e("strong",[a._v('"godot-cpp"')]),a._v(" un script de bash para compilar a la versión html5, sin embargo, dicha compilación me produjo muchos problemas, e incluso con poca información para poder solucionarlo, la recomendación de la documentación de "),e("strong",[a._v('"godot"')]),a._v(", en cuanto a la versión de "),e("strong",[a._v('"Emscripten"')]),a._v(" es la 1.39.9, después de tantos intentos e investigar pude concluir que para la compilación de este plugin la versión de "),e("strong",[a._v('"Emscripten"')]),a._v(" que debemos usar es la 2.0.17, y para mayor comodidad agregue el fragmento de código faltante para esta operación en el archivo "),e("strong",[a._v('"SConstruct"')]),a._v(", de manera que podemos ejecutar directamente el comando "),e("strong",[a._v('"scons"')]),a._v(" con el agregado que debemos usar el atributo "),e("strong",[a._v('"emscripten"')]),a._v(" para proporcionar la ruta de nuestra herramienta de compilación, aquí les dejo un ejemplo:")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[a._v("$ scons "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("platform")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("javascript "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("emscripten")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/bin/emscriptem/\n")])])])]),a._v(" "),e("p",[a._v("Para obtener más detalles, consulte "),e("a",{attrs:{href:"https://docs.godotengine.org/en/3.2/tutorials/plugins/gdnative/gdnative-cpp-example.html#using-the-gdnative-module",target:"_blank",rel:"noopener noreferrer"}},[a._v('"Uso de módulo GDNative"'),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);