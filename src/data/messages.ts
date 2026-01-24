interface IMessage {
    banner: string;
    begin: Date;
    end: Date;
}

const messages: Array<IMessage> = [
    {
        banner: "Rescheduled: Elizabeth Nelson's Artist Talk will be held on Sunday, February 1st at 3:00 PM.",
        begin: new Date('2026-01-24T00:00:00'),
        end: new Date('2026-02-01T20:00:00')
    }
];

export default messages;