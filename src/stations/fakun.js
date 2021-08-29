import transmissionData from '../TransmissionData';

export var fakun = {
    name: "FAKUN TS",
    id: "fakun",
    lines: [
        {
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'k1f-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            name: "k1f",
            transmissionData
        }
    ]
};