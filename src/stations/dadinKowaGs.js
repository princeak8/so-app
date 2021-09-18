import transmissionData from '../TransmissionData';

export var dadinKowaGs = {
    name: "DADIN KOWA GS",
    id: "dadinKowaGs",
    gs: true,
    gsId: 'dadinKowaPs',
    has132: false,
    lines: [
        {
            name: "w23e",
            id: "w23e",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'w23e-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },

        {
            name: "w21b",
            id: "w21b",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'w21b-h-0',
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