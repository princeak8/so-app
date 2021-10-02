import td from '../TransmissionData';

export var itu = {
    name: "ITU TS",
    id: "itu",
    is132: true,
    lines: [
        {
            name: "b21t",
            id: "b21t",
            connectionRoot: false,
            td
        },

        {
            name: "d22t",
            id: "d22t",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd22t-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            td
        },
        {
            name: "e22t",
            id: "e22t",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'e22t-v-0',
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