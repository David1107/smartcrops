var top_menu_height = 0;
var connected = 'false';


jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});   
});

require('./app.js')(client);
document.getElementById("clickMe").onclick = handleLightOn;
document.getElementById("regarTodo").onclick = regarCrop;
document.getElementById("regarRugula").onclick = regarRugula;
document.getElementById("regarCilantro").onclick = regarCilantro;
document.getElementById("regarTomate").onclick = regarTomate;
document.getElementById("cambiarModo").onclick = ModoAutomatico;
document.getElementById("manual").onclick = modoManual;



function regarCrop(){
    if (connected) {
            //regar todo
        client.publish('state/', '4');
        console.log('Entro a regar crops');

    }

}

function regarRugula(){
    if (connected) {
            //regar rugula
        client.publish('state/', '1');

    }

}

function regarCilantro(){
    if (connected) {
            //regar todo
        client.publish('state/', '2');

    }

}

function regarTomate(){
    if (connected) {
            //regar todo
        client.publish('state/', '3');

    }

}


function handleLightOn(){
    console.log("Hoooollaaaaaa");
    if(connected){
        //prender luz
        client.publish('state/', '6');
    }

}

function handleLightOff(){

    if (connected) {
        //apagar la luz
        client.publish('state/', "6");

    }
}

function ModoAutomatico(){
    console.log("MODO AUTO");
    if(connected){
        //Cambiar modo
        client.publish('state/', "5");

    }

}

function modoManual(){
console.log("MODO MANUAL");
    if (connected) {
        //cambia a manual
        client.publish('state/', '5');
         console.log("MODO MANUAL");
    };
}

function handleMCUConnection(message){
    //revisa conexion mqtt con el nodoMCU
    console.log('state/', message);
    connected = (message.toString()==='true');

}
