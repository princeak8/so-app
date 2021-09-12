import transmissionData from '../TransmissionData';

export var alagbon = {
    name: "ALAGBON TS",
    id: "alagbon",
    lines: [
        {
            name: "j1b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b1e",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'b1e-h-0',
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