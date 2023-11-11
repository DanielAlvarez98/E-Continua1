export function validarDatos(datos) {
    const soloLetras = /^[a-zA-Z\s]*$/g.test(datos);
    return soloLetras;
}
export function validarDni(documento){
    const dni =documento.length
    return (dni===8) ? true : false;
}
export function validarPhone(telefono){
    const phone =telefono.length
    return (phone===9) ? true : false;
}
export function validarDirec(direccion){
    const direc =direccion.length
    return (direc>=5) ? true : false;
}