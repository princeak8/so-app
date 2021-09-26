import td from '../TransmissionData';

export var ibomGs = {
    name: "IBOM GS",
    id: "ibomGs",
    gs: true,
    gsId: 'ibomPs',
    has132: false,
    is132: false,
    lines: [
        {
            name: "e21m",
            id: "e21m",
            connectionRoot: false,
            td
        },
        {
            name: "e22m",
            id: "e22m",
            connectionRoot: false,
            td
        },
        {
            name: "bm23s",
            id: "bm23s",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'bm23s-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "bm24s",
            id: "bm24s",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'bm24s-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        }
    ]
};