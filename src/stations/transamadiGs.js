import td from '../TransmissionData';

export var transamadiGs = {
    name: "TRANSAMADI GS",
    id: "transamadiGs",
    gs: true,
    gsId: 'transamadiPs',
    has132: false,
    lines: [
        {
            name: "m21p",
            id: "m21p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'm21p-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "m22p",
            id: "m22p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'm22p-h-0',
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