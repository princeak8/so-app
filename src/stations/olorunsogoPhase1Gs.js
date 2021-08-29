import transmissionData from '../TransmissionData';

export var olorunsogoPhase1Gs = {
    name: "Olorunsogo Phase1",
    id: "olorunsogoPhase1Gs",
    lines: [
        {
            name: "r2a",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r1w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r1w-v-0',
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