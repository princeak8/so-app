import transmissionData from '../TransmissionData';

export var ikotEkpene = {
    name: "IKOT EKPENE TS",
    id: "ikotEkpene",
    lines: [
        {
            name: "a1k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a2k",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d1k",
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
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k2u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k3u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k4u",
            connectionRoot: false,
            transmissionData
        }
    ]
};