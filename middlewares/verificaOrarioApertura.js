export default function verificaOrarioApertura(req, res, next) {
    const ora = new Date().getHours();
    console.log('Sono le: ' + ora);

    if (ora < 18 || ora > 22) { // Il servizio non  disponibile
        res.json({
            err: 'Servizio non disponibile'
        });
        return;
    } else {
        next(); // Prosegui
    }
}