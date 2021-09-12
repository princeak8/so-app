import transmissionData from '../TransmissionData';

export var alaoji = {
    name: "ALAOJI TS",
    id: "alaoji",
    lines: [
        {
            name: "l7a",
            id: "l7a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "l8a",
            id: "l8a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "t4a",
            id: "t4a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "f1a",
            id: "f1a",
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
            id: "f2a",
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
            id: "a1k",
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
            id: "a2k",
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
            id: "a1b",
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
            id: "a2b",
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
        {
            name: "a1o",
            id: "a1o",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a2o",
            id: "a2o",
            connectionRoot: false,
            transmissionData
        },
    ]
};