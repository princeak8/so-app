import transmissionData from '../TransmissionData';

export var onitsha = {
    name: "ONITSHA TS",
    id: "onitsha",
    lines: [
        {
            name: "b1t",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b2t",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "d3t",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "t4a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 't4a-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "t3h",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k1t",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k1t-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "k2t",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'k2t-h-0',
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