import { IEvent } from "../components/Event";

export const events: Array<IEvent> = [
    {
        title: 'Artist Talk - Melora Kennedy',
        date: new Date('2024-11-25T17:30:00'),
        description: [
            'Join us on November 25, 5:30-6:30 PM for Melora Kennedy\'s artist talk. Her show, <em>Human Family: Works 2013-2024</em> is on view for the month of November.'
        ],
        link: {
            type: 'internal',
            text: 'Click here to see more info about Melora\'s show.',
            url: '/shows/human-family-works-2013-2024'
        }
    },
    {
        title: 'Conversation with Arista and James',
        date: new Date('2024-11-16T14:00:00'),
        description: [
            'Member James Secor is part of a two-person show at the AVA Gallery in Lebanon, NH. On November 16, 2-3:30 PM, there will be a conversation with the artists at the AVA Gallery.'
        ],
        image: {
            src: '2024/ava_postcard_2024.jpg'
        },
        link: {
            type: 'external',
            text: 'Click here to see more info about the talk and show',
            url: 'https://avagallery.org/event/arista-alanis-and-james-secor/'
        }
    }
]