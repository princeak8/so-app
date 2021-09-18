import transmissionData from '../TransmissionData';

export var ahaoda = {
    name: "AHAODA TS",
    id: "ahaoda",
    is132: true,
    lines: [
        {
            name: "w21h",
            id: "w21h",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "w22h",
            id: "w22h",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "h23r",
            id: "h23r",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h23r-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "h24r",
            id: "h24r",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'h24r-h-0',
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