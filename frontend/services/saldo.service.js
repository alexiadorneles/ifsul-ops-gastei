export default function saldoService() {
    let dataSaldo = null;

    function set(data) {
        //console.log(data);
        dataSaldo = data;
    }
    function get() {
       // console.log(data);
        return dataSaldo;
    }
    function getMesNome(){
        //console.log(dataSaldo)
        return ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ][dataSaldo.getMonth()]
    }

    return {
        set,
        get,
        getMesNome
    }

}