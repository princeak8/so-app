import transmissionData from '../TransmissionData';

export var ajaokuta = {
    name: "AJAOKUTA TS",
    id: "ajaokuta",
    lines: [
        {
            name: "j1l",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "j2l",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b11j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b12j",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r1j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r1j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "r2j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r2j-h-0',
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