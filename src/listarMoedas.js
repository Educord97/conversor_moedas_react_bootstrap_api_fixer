import React from 'react';

function ListarMoedas() {

    const MOEDAS = [
       {"sigla": "AUD", "descricao": "Dólar australiano"},
       {"sigla": "BGN", "descricao": "Lev búlgaro"},
       {"sigla": "BRL", "descricao": "Real Brasileiro"},
       {"sigla": "USD", "descricao": "Dólar dos Estados Unidos"},
       {"sigla": "CAD", "descricao": "Dólar canadense"},
       {"sigla": "CHF", "descricao": "Franco suiço"},
       {"sigla": "CNY", "descricao": "Yuan Chinês"},
       {"sigla": "CZK", "descricao": "Yuan Chinês"},
       {"sigla": "DKK", "descricao": "Coroa Republica Theca"},
       {"sigla": "EUR", "descricao": "Euro"},

    ];

    function compare(moeda1, moeda2) {
        if (moeda1.descricao < moeda2.descricao) {
            return -1;
        } else if (moeda1.descricao > moeda2.descricao) {
            return 1;
        }
        return 0;
    }

    return MOEDAS.sort(compare).map(moeda => 
        <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.descricao}
        </option>

    );

    

}

export default ListarMoedas;