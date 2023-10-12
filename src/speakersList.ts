
export interface Speaker {
    name: string;
    company: string;
    photo: string;
}
const speakersList: Speaker[] = [
    {
        name: 'Leslie Chapman',
        company: 'Comcast',
        photo: 'leslie-chapman.png'
    },
    {
        name: 'Loren Sands-Ramshaw',
        company: 'Temporal',
        photo: 'loren.png'
    },
    {
        name: 'Jessica Kerr',
        company: 'Honeycomb.io',
        photo: 'jessica-kerr.jpeg'
    },
    {
        name: 'Dan Luchi',
        company: 'DrayNow',
        photo: 'dan-luchi.jpeg',
    },
    {
        name: 'Ernest Phillips',
        company: 'GitHub',
        photo: 'ernest-phillips.jpg',
    },
    {
        name: 'Josh Goldberg',
        photo: 'josh-goldberg.jpeg',
        company: 'Open Source Developer'

    },
    {
        name: 'John Riviello',
        photo: 'john-riviello.jpeg',
        company: 'Comcast'
    },
    {
        name: 'Chris Ng',
        photo: 'chris-ng.jpeg',
        company: 'LinkedIn'
    },
    {
        name: 'Jeb Barabanov',
        photo: 'jeb-barabanov.jpg',
        company: 'Wix'
    },
    {
        name: 'Adina Halter',
        photo: 'adina-halter.jpg',
        company: 'Comcast NBCUniversal'
    },
    {
        name: 'Derek Binkley',
        company: 'Localize',
        photo: 'derek-binkley.jpg'
    },
    {
        name: 'Mrina Sugosh',
        photo: 'mrina-sugosh.jpg',
        company: 'TinyMCE'
    },
    {
        name: 'Toni Darden',
        photo: 'toni-darden.jpg',
        company: 'Comcast'
    },
    {
        name: 'Lee White',
        photo: 'lee-white.jpg',
        company: 'Olark'
    },
    {
        name: 'Grady Salzman',
        photo: 'grady-salzman.jpg',
        company: 'Contenda'
    },
    {
        name: 'Phil Nash',
        photo: 'phil-nash.jpeg',
        company: 'Sonar'
    },
    {
        name: 'Jaylen Sanders',
        photo: 'jaylen-sanders.jpg',
        company: 'Comcast'
    },
    {
        name: 'Ruben Restrepo',
        photo: 'ruben-restrepo.jpg',
        company: 'Stateful'
    },
    {
        name: 'Jeffrey Smith',
        photo: 'jeffrey-smith.jpg',
        company: 'Vanguard'
    },
    {
        name: 'Gabby Getz',
        photo: 'gabby-getz.jpg',
        company: 'Cesium'
    },
    {
        name: 'Christopher J Baker',
        photo: 'christopher-baker.jpg',
        company: 'Bitovi'
    },
    {
        photo: 'kilian-valkhof.jpeg',
        name: 'Kilian Valkhof',
        company: 'Polypane'
    },
    {
        name: 'Jen Ozmen',
        photo: 'jen-ozmen.jpg',
        company: 'Google'
    },
    {
        name: 'Aaron Shim',
        photo: 'aaron-shim.jpg',
        company: 'Google'
    },
    {
        name: 'Ceora',
        photo: 'ceora.jpg',
        company: 'Okta'
    },
    {
        name: 'Michael Schoonmaker',
        photo: 'michael-schoonmaker.jpg',
        company: 'Squad'
    },
    {
        name: 'Martin Snyder',
        photo: 'martin-snyder.jpg',
        company: 'Pinnacle 21'
    }

];

export {
    speakersList
}