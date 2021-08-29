import transmissionData from '../TransmissionData';

export var jebba = {
    name: "JEBBA TS",
    id: "jebbaTs",
    lines: [
        {
            name: "k1j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "k2j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "j3r",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j3r-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },


        {
            name: "j7r",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j7r-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },


        {
            name: "b8j",
            connectionRoot: false,
            transmissionData
        },
        
        {
            name: "b9j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "j1h",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'j1h-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "j2h",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'j2h-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "j3g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'j3g-h-0',
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