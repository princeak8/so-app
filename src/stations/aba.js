import transmissionData from '../TransmissionData';

export var aba = {
    name: "ABA TS",
    id: "aba",
    is132: true,
    lines: [
        //Added by me
        {
            name: "a1b",
            id: "a1b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a2b",
            id: "a2b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b1i",
            id: "b1i",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'b1i-h-0',
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