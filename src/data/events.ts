import { IEvent } from "../components/Event";

export const events: Array<IEvent> = [
    {
        title: 'Rabbit & Wolf Poetry Reading',
        date: new Date('2025-11-13T18:00:00'),
        description: [
            'The Front is pleased to host Rabbit & Wolf for an ongoing series of live poetry.',
            'Please join us on any or all of the following dates:',
            '<li>March 13, 2025, 6-8:30 PM</li>',
            '<li>April 10, 2025, 6-8:30 PM</li>',
            '<li>May 8, 2025, 6-8:30 PM</li>',
            '<li>September 11, 2025, 6-8:30 PM</li>',
            '<li>November 13, 2025, 6-8:30 PM</li>',
            '<br>'
        ],
        image: {
            src: '2025/rabbit&wolf.jpg'
        }
    },
    {
        title: 'Diane Sophrin\'s Artist Talk',
        date: new Date('2025-01-18T14:00:00'),
        description: [
            'This artist talk by Diane Sophrin covers the work in her Chaos and Catharsis show at the Front.'
        ],
        link: {
            type: 'internal',
            text: 'Click here to see a recording of the talk',
            url: '/shows/chaos-and-catharsis'
        }
    },
    {
        title: 'Intuitive Cartography by Rob Hitzig Opens',
        date: new Date('2024-11-25T17:30:00'),
        description: [
            '<em>Intuitive Cartography</em> opens at the Central Vermont Medical Center (CVMC). Among other works, the show features a number of works created at the beginning of COVID and yet to be seen.',
            'The opening reception is this Thursday, November 21, from 4:00 to 5:30 PM. The work will remain on view until January 11, 2025.'
        ],
        image: {
            src: '2024/hitzig_cvmc.jpg'
        },
        link: {
            type: 'external',
            text: '(CVMC website)',
            url: 'https://www.cvmc.org/departments-programs'
        }
    },
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