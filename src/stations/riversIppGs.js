import td from '../TransmissionData';

export var riversIppGs = {
    name: "RIVERS IPP GS",
    id: "riversIppGs",
    gs: true,
    gsId: 'riversIppPs',
    has132: false,
    lines: [
        {
            name: "v21p",
            id: "v21p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'v21p-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'v21p-v-1',
                    start: false,
                    end: true,
                    position: 0,
                    arrowDirection: 'down'
                }
            ],
            td
        },
        {
            name: "v22p",
            id: "v22p",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'v22p-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                }
            ],
            td
        },
    ]
};