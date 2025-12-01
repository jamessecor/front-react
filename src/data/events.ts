import { IEvent } from "../components/Event";

export const events: Array<IEvent> = [
    {
        title: 'Art Walk reception for Group Show 70',
        date: new Date('2025-12-05T16:00:00'),
        description: [
            'Join us this Friday, December 5th, for the opening reception of Show 70, featuring work by members at The Front. For this show, it being the holiday season, we will have a table of smaller works, perfect for grabbing a quick gift for someone special.'
        ],
        image: {
            src: 'featured.jpg',
            directory: 'shows/2025-12'
        },
        link: {
            type: 'internal',
            text: 'Click here for show details',
            url: '/shows/show-70'
        }
    },
    {
        title: 'Kathy Stark - Opening Reception and Artist\'s Talk',
        date: new Date('2025-11-23T16:00:00'),
        description: [
            'Join us at the Front for the opening of <em>Memories and Dreams</em> by Kathy Stark.',
            'Opening Reception: November 7, 2025, 4-7 pm',
            'Artist\'s Talk: Sunday, November 23 at 4 PM'
        ],
        image: {
            src: 'featured.jpg',
            directory: 'shows/2025-11'
        },
        link: {
            type: 'internal',
            text: 'Click here for show details',
            url: '/shows/memories-and-dreams'
        }
    },
    {
        title: 'Art Walk reception for Salon-style Group Show 69',
        date: new Date('2025-10-03T16:00:00'),
        description: [
            'Join us this Friday, October 3rd, for the opening reception of Show 69, featuring work by members at The Front. We\'re trying something a little different this time, inviting our members to submit larger and/or more pieces than usual, for a dense, full exhibit. It may not be quite floor-to-ceiling at all points but we\'re describing it as our first "Salon-Style" show.',
        ],
        image: {
            src: 'featured.jpg',
            directory: 'shows/2025-10'
        },
        link: {
            type: 'internal',
            text: 'Click here for show details',
            url: '/shows/show-69'
        }
    },
    {
        title: 'Cheryl Betz - Opening Reception and Informal Tour with Q & A',
        date: new Date('2025-09-05T16:00:00'),
        description: [
            'Join us at the Front for the opening of <em>From the Mud</em> by Cheryl Betz.',
            'Opening Reception: September 5, 2025, 4-7 pm',
            'Informal exhibit tour with Q & A: Friday September 19, 6 PM'
        ],
        image: {
            src: 'featured.jpg',
            directory: 'shows/2025-09'
        },
        link: {
            type: 'internal',
            text: 'Click here for show details',
            url: '/shows/from-the-mud'
        }
    },
    {
        title: 'Hasso Ewing - Solo Show and Talk',
        date: new Date('2025-07-04T16:00:00'),
        description: [
            'Join us at the Front for the opening of <em>… of the earth</em> by Hasso Ewing, with Bob Hannan.',
            'Opening Reception: July 4, 2025, 4-7 pm',
            'Artist\'s Talk: July 18, 5-6 PM'
        ],
        image: {
            src: 'featured.jpg',
            directory: 'shows/2025-07'
        },
        link: {
            type: 'internal',
            text: 'Click here for show details',
            url: '/shows/of-the-earth'
        }
    },
    {
        title: 'Jonathan Rose - Solo Show at AVA Gallery',
        date: new Date('2025-07-11T17:00:00'),
        description: [
            'Announcing member Jonathan Rose\'s Solo Show at AVA Gallery in Lebanon, NH',
            'July 11 to August 9, 2025',
            'Opening Reception is July 11th, 5-7 pm'
        ],
        image: {
            src: '2025/rose-ava-solo.jpeg'
        }
    },
    {
        title: 'Book Discussion on Baudelaire with Sam Thurston',
        date: new Date('2025-06-29T15:30:00'),
        description: [
            'June 29th at 3:30 pm',
            'Join us for a panel discussion on a text by Baudelaire.',
            'This event is free. (Donations accepted.)'
        ]
    },
    {
        title: 'Live Music by chanterelle',
        date: new Date('2025-06-21T17:00:00'),
        description: [
            'June 21st at 5pm - Join us for an evening of music at the Front.',
            'chanterelle, featuring Front member James Secor, have been creating music together for several years, but have rarely played out in public (so far). Buckle up for a rare (to date) performance by the group.',
            'chanterelle\'s debut album <em>the big event</em> came out in May.',
            'This event is free. (Donations accepted.)'
        ],
        image: {
            src: '2025/chanterelle.jpg'
        },
        link: {
            text: 'Listen to the big event here.',
            type: 'external',
            url: 'https://chanterellevt.bandcamp.com'
        }
    },
    {
        title: 'Ekphrasis Poetry Workshop with Baron Wormser',
        date: new Date('2025-06-11T18:00:00'),
        description: [
            'June 11th at 6 pm - Join us for an evening of poetry.',
            'Baron Wormser is the author of twenty books and has received fellowships from the National Endowment for the Arts and the John Simon Guggenheim Memorial Foundation. From 2000 to 2005 he served as poet laureate of the state of Maine. Essays of his were included in Best American Essays.',
            'This event is free. (Donations accepted.)'
        ]
    },
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
            src: '2025/rabbit&wolf.jpg',
            directory: 'events'
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