import transmissionData from '../TransmissionData';

export var adiabor = {
    name: "ADIABOR TS",
    id: "adiabor",
    lines: [
        {
            name: "d1b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd1b-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d2b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd2b-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },

        //Added by me
        {
            name: "a1b",
            connectionRoot: true,
            is132: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'a1b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "a2b",
            connectionRoot: true,
            is132: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'a2b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
    ]
};