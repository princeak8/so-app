import transmissionData from '../TransmissionData';

export var aladja = {
    name: "ALADJA TS",
    id: "aladja",
    lines: [
        {
            name: "g1w",
            id: "g1w",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'g1w-v-0',
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