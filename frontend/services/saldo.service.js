import moment from 'moment'

export default function saldoService() {
    let dataSaldo = null;

    function set(data) {
        moment().format('DD-MM-YYYY')
        //console.log(data);
        dataSaldo = new Date(moment(data));
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