/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


    clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias(materializacion) de este tipo de objetos.


*/

//creando mi primera clase

class persona{
    //1. Propiedades o atributos de mi clase de forma general
    nombre = '';
    apellido = '';
    edad=0;
    emai='';
    telefono='';

    //3. Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El constructor es una funcion especial, cuya funcion es la de construir o instanciar objetos
    constructor(nombre, apellido ,edad,email,telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }








    //2.Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palara function 
    hablar(){
        console.log("Hola, estoy hablando...");

    }
    dormir(){
        console.log("Zzzzz");
    }
    
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ",this.email);
        console.log("Telefono: ",this.telefono);
    }//Cierre de metodo mostrar info
    
}//cierre de mi clase persona


/*Instancia de objetos del tipo persona

Sintaxis basica de una instancia
variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)


*/
let persona1 = new persona ("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5526378904");
let persona2 = new persona ("Jose", "Perez",22,"Josepp@gmai.com","3173876543");


//imprimir objeto completo
console.log(persona1);

//imprimir un atributo de un objeto 
console.log(persona1.apellido);

//invocar el metodo de objeto 
persona1.dormir();
persona2.mostrarInfo();


/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/

//Creando una nueva clase para aplicar la herencia

class paciente extends persona{
    //1. Definicion de atributos o propiedades
    doctorAtiende = ''; //nombre del doctor atiende
    historialMedico = '';//si o no el hitorial
    alergias = '';//alergias existentes


        //3. Generacion de constructor
        constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
            super(nombre, apellido, edad, email, telefono);//super indica que traemos cosas de la clase superior
            this.doctorAtiende = doctorAtiende;
            this.historialMedico = historialMedico;
            this.alergias = alergias;
        }

  
        //2. Metodos
       mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    }


}

//Instancia de un paciente 
let paciente1 = new paciente ("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "5567483908", "Doctor Sim", "No tiene", "Penicilina");


//imprimir objeto paciente
console.log(paciente1);


//Uso del metodo 
paciente1.mostrarInfo();

paciente1.dormir();

//Diferencias entre un objeto literal (normal), y un objeto tipo JSON

let objetoJSON = {
        "nombre": "Jesus",
        "apellido": "Gonzalez",
        "edad": 31,
        "emai": "",
        "telefono": "5567483908",
        "email": "jesusgonzalez@mail.com",
        "doctorAtiende": "Doctor Sim",
        "historialMedico": "No tiene",
        "alergias": "Penicilina"
}

let objetoLiteral = {
    "nombre": "Jesus",
        apellido: "Gonzalez",
        edad: 31,
        emai: "",
        telefono: "5567483908",
        email: "jesusgonzalez@mail.com",
        doctorAtiende: "Doctor Sim",
        historialMedico: "No tiene",
        alergias: "Penicilina"

}

//Tenemos un objeto serializado (enviar a un )
let objetoJSONserializado = '{
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "5567483908",
    "doctorAtiende": "Doctor Sim",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"


}'