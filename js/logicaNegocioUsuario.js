/* Roles:
1:admin,
2;cliente
*/
function obtenerListaUsuarios(){
var ListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

if(ListaUsuarios==null){
    ListaUsuarios=[
        // id, nombre, apellido,   correo,                 contraseña,fecha nac, num
        ['1','Isabel','Rondan','Rondanisabel@gmail.com','1isabel9','2001-07-06','1'],
        ['2','Lizett','Garcia','lizettgarmatt@gmail','1lizett9','1987-10-06','2']
    ]
}
return ListaUsuarios;
}
function validarCredenciales(pCorreo , pContrasenna){
    var ListaUsuarios=obtenerListaUsuarios();
    var bAcceso=false;
    for(var i=0;i<ListaUsuarios.length;i++){
        if(pCorreo==ListaUsuarios[i][3]&& pContrasenna==ListaUsuarios[i][4]) {
            bAcceso=true;
            sessionStorage.setItem('usuarioActivo',ListaUsuarios[i][1]+ ' ' +ListaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo',ListaUsuarios[i][6]);
        }
    }
    return bAcceso;
}