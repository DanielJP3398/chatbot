const qrcode = require('qrcode-terminal');
// const { Client } = require('whatsapp-web.js');
const { Client, LocalAuth } = require('whatsapp-web.js');
const {MessageMedia} = require('whatsapp-web.js');

// const numero = "573128758377@c.us";

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr',qr =>{
    qrcode.generate(qr,{small:true});
});

// client.on('ready',() =>{
//     client.sendMessage(numero,"Holi");
// });
client.initialize();

client.on('message',message =>{
    console.log(message.body);
});


// client.on('message', message =>{
//     if(message.body === 'Hola'){
//         message.reply('Un gusto saludarte');
//     }
// });

// client.on('message', message =>{
//     if(message.body === 'Imagen'){

//         const media = MessageMedia.fromFilePath('images.jpg');
//         client.sendMessage(message.from,media);
//     }
    // else
    // {
    //     const media = MessageMedia.fromFilePath('img.jpg');
    //     client.sendMessage(message.from,media);
    // }
// });

client.on('message', (message) =>{

    if(message.from!="1203630422416299979@g.us"){
        const para = message.from;
        let resp=message.body.toLowerCase();
        switch (resp){
            case '1':
                client.sendMessage(para, 'Hola Este es el Menu del dia');
                client.sendMessage(para, 'bandeja paisa');
                media =MessageMedia.fromFilePath('paisaje.jpg');
                // client.sendMessage(message.from,media);
                // client.sendMessage(para, 'sancocho');
                // media =MessageMedia.fromFilePath('descarga.jpeg');
                // client.sendMessage(message.from,media);
                break;
            case '2':
                client.sendMessage(para, 'Plato del día: \n-Alistas con salsa BBQ. \n -Arroz \n -Tajadas de plátano sofreídas en tequila. \n -Ensalada (aguacate, lechuga y tomate) \n -Tinta .');
                break;
            case '3':
                client.sendMessage(para, 'Esta es la opción 2');
                break;
            default:
                client.sendMessage(para, 'Hola bienvenido al restaurante -Jp sabores- por favior digite su preferencia hoy \n 1/ver menu del dia \n 2/Ver carta')
        }
    }

})


// npm i init -y
// npm i whatsapp-web.js
// npm i qrcode-terminal
//node app.js