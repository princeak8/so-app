import transmissionData from '../TransmissionData';

export var ikotEkpene = {
    name: "IKOT EKPENE TS",
    id: "ikotEkpene",
    lines: [
        {
            name: "a1k",
            id: "a1k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a2k",
            id: "a2k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d1k",
            id: "d1k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd1k-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d2k",
            id: "d2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'd2k-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "k1u",
            id: "k1u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k2u",
            id: "k2u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k3u",
            id: "k3u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k4u",
            id: "k4u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "s1k",
            id: "s1k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 's1k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        },
        {
            name: "s2k",
            id: "s2k",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 's2k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        },
        {
            name: "f5k",
            id: "f5k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f5k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        },
        {
            name: "f6k",
            id: "f6k",
            connectionRoot: true,
            commissioned: false,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'f6k-v-0',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'up'
                },
            ],
            transmissionData
        }
    ]
};