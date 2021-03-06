import transmissionData from '../TransmissionData';

export var omotoshoPhase1Gs = {
    name: "Omotosho Phase1",
    id: "omotoshoPhase1Gs",
    lines: [
        {
            name: "b5m",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'b5m-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "m5w",
            connectionRoot: false,
            transmissionData
        }
    ]
};