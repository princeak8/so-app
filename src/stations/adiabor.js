import transmissionData from '../TransmissionData';

export var adiabor = {
    name: "ADIABOR TS",
    id: "adiabor",
    lines: [
        {
            name: "d1b",
            id: "d1b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd1b-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "d2b",
            id: "d2b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'd2b-h-0',
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
            name: "d22t",
            id: "d22t",
            connectionRoot: false,
            is132: true,
            transmissionData
        },
    ]
};