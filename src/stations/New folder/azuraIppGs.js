import transmissionData from '../TransmissionData';

export var azuraIppGs = {
    name: "AZURA IPP",
    id: "azuraIppGs",
    gs: true,
    gsId: 'azuraIppPs',
    has132: false,
    lines: [
        {
            name: "v7b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'v7b-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'v7b-v-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'down'
                }
            ],
            transmissionData
        }
    ]
};