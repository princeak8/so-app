import td from '../TransmissionData';

export var eket = {
    name: "EKET TS",
    id: "eket",
    is132: true,
    integrated: true,
    lines: [
        {
            name: "e22t",
            id: "e22t",
            connectionRoot: false,
            td
        },
        {
            name: "e21m",
            id: "e21m",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'e21m-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "e22m",
            id: "e22m",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'e22m-v-0',
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