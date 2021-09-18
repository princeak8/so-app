import transmissionData from '../TransmissionData';

export var aba = {
    name: "ABA TS",
    id: "aba",
    is132: true,
    lines: [
        //Added by me
        {
            name: "a23b",
            id: "a23b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a26b",
            id: "a26b",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "b21t",
            id: "b21t",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'b21t-h-0',
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