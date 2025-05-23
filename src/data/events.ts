import { IEvent } from "../components/Event";

export const events: Array<IEvent> = [
    {
        title: 'SUPER Group Show #67 celebrating The Front\'s 10th anniversary',
        date: new Date('2025-06-06T16:00:00'),
        description: [
            'Opening reception June 6 for Montpelier Art Walk, 4-8PM',
            'The Front gallery celebrates 10 years in existence this June with a "SUPER Group Show," including work by many former and all current gallery members. This event, the 67th group exhibit presented by the gallery, expresses the members\' gratitude and joy in making it through 10 interesting years in Montpelier.'
        ],
        link: {
            type: 'internal',
            text: 'Click here to visit the SUPER Group Show page',
            url: '/shows/show-67'
        },
        image: {
            src: '../shows/2025-06/03.jpg'
        }
    },
    {
        title: 'Ned Richardson\'s Artist Talk',
        date: new Date('2025-05-17T17:30:00'),
        description: [
            'Please join us for Ned Richardson\'s artist talk. His show, new memory: landscapes, ghosts, machines, is on display through June 1st.'
        ],
        link: {
            type: 'internal',
            text: 'Click here to visit the show page for Ned\'s new memory: landscapes, ghosts, machines',
            url: '/shows/new-memory-landscapes-ghosts-machines'
        },
        image: {
            src: '2025/ned-talk.jpg'
        }
    },
    {
        title: 'Glen Coburn Hutcheson\'s Artist Talk',
        date: new Date('2025-03-20T18:00:00'),
        description: [
            'Please join us for a conversation with Glen Coburn Hutcheson, whose exhibit "Solo Group Show" is on display through March 30.',
            'For a more comfortable gathering, we\'ve decided to hold the talk at the Savoy Theater, near the corner across Main Street from The Front. The gallery will open early in the evening, around 5 o\'clock, for in-person viewing. At 6:00 we\'ll walk over to the Savoy for Glen\'s talk and Q&A, then reconvene at The Front afterward with anyone who\'d like to linger.',
            'While in the gallery, you\'re encouraged to add marks and color to the Free Draw panel just inside the door. This is a collaborative acrylic-marker painting open to all, and a fundraising effort for the Central Vermont Refugee Action Network, whose March Arts Marathon runs through the month.'
        ],
        link: {
            type: 'internal',
            text: 'Click here to visit the show page for Glen\'s Solo Group Show',
            url: '/shows/glen-coburn-hutcheson-solo-group-show'
        },
        image: {
            src: '2025/self-portrait.jpg',
            text: 'image: Self Portrait, 2025, oil on linen shirt scrap'
        }
    },
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