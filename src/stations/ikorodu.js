import transmissionData from '../TransmissionData';

export var ikorodu = {
    name: "IKORODU TS",
    id: "ikorodu",
    is132: true,
    lines: [
        {
            name: "n21d",
            id: "n21d",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "n22d",
            id: "n22d",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d23s",
            id: "d23s",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd23s-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                }
            ],
            transmissionData
        },
        {
            name: "d24s",
            id: "d24s",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd24s-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d21p",
            id: "d21p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd21p-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d22p",
            id: "d22p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd22p-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d23y",
            id: "d23y",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd23y-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd23y-v-1',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'down'
                }
            ],
            transmissionData
        },
    ]
};