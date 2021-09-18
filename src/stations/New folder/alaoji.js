import transmissionData from '../TransmissionData';

export var alaoji = {
    name: "ALAOJI TS",
    id: "alaoji",
    lines: [
        {
            name: "l7a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "l8a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "t4a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "f1a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f1a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "f2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f2a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "a1k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a1k-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "a2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a2k-h-0',
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
            is132Connection: true,
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
            is132Connection: true,
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