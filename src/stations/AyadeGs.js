import transmissionData from '../TransmissionData';

export var ayadeGs = {
    name: "AYADE GS",
    id: "ayadeGs",
    lines: [
        {
            name: "r2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r2a-v-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'up'
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r2a-h-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'r2a-v-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        },
        {
            name: "h2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h2a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        }
    ]
};