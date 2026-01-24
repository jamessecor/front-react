interface IMessage {
    banner: string;
    begin: Date;
    end: Date;
}

const messages: Array<IMessage> = [
    {
        banner: "<em>Rescheduled:</em> Elizabeth Nelson's Artist's Talk will be held on <br/> <div style='text-align: center; font-weight: bold;'>Sunday, February 1st at 3:00 PM</div>",
        begin: new Date('2026-01-24T00:00:00'),
        end: new Date('2026-02-01T16:00:00')
    }
];

export default messages;