const cards = document.querySelector('.cards')

const devs = [
    {
        name: 'Loiane Groner',
        img: 'assets/loiane.jpg',
        techs: ['Angular', 'Java'],
        social: [
            {
                url: 'https://www.twitch.tv/loiane',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/loiane',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/loiane',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/loianeg',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/loiane',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Michelli Brito',
        img: 'assets/michelli.jpg',
        techs: ['Angular', 'Java', 'SpringBoot'],
        social: [
            {
                url: 'https://github.com/MichelliBrito',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/MichelliBrito4',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/michellibrito',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/brito_michelli',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Glaucia Lemos',
        img: 'assets/glaucia.png',
        techs: ['C#', 'Vue.js'],
        social: [
            {
                url: 'https://www.twitch.tv/glaucia_lemos86',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/glaucia86',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/glaucia_lemos86',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/l32759',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/glaucia.lemos.dev',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Sthefane Soares',
        img: 'assets/sthefane.jpg',
        techs: [ 'C#', 'Mobile'],
        social: [
            {
                url: 'https://github.com/sthefanesoares',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://www.youtube.com/vidaprogramacao',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/sthefane.dev',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Kizzy Terra',
        img: 'assets/kizzy.jpg',
        techs: ['Data Science'],
        social: [
            {
                url: 'https://github.com/kterra',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/kizzy_terra',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/channel/UC70mr11REaCqgKke7DPJoLg',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/kizzy_terra',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Peixe Babel',
        img: 'assets/peixebabel.png',
        techs: ['Data Science'],
        social: [
            {
                url: 'https://github.com/peixebabel',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/canalpeixebabel',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/c/PeixeBabel',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/canalpeixebabel',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Fabrícia Diniz',
        img: 'assets/fabricia.jpg',
        techs: ['Django', 'Python'],
        social: [
            {
                url: 'https://www.twitch.tv/nomadcodemist',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/FabriciaDiniz',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/fabrciadiniz',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/c/nomadcodemist',
                icon: 'assets/youtube.svg'
            }
        ]
    },
    {
        name: 'Sthefanny Gonzaga',
        img: 'assets/sthefanny.jpg',
        techs: ['Flutter'],
        social: [
            {
                url: 'https://www.twitch.tv/stelbyrn',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/Sthefanny',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/StelByrn',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://instagram.com/sthefanny.gonzaga',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Bullas Attekita',
        img: 'assets/attekita.jpg',
        techs: ['Games', 'Mobile', 'Carreira'],
        social: [
            {
                url: 'https://github.com/Bullas',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/Attekita',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/c/AttekitaDev',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/attekitadev',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Ana Beatriz Neri',
        img: 'assets/anabeatriz.jpg',
        techs: ['Java'],
        social: [
            {
                url: 'https://github.com/anabneri',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/anabneri',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/c/UCBjoWT-P17Bl66D52RwqdGA',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/anabneri',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Amanda',
        img: 'assets/amanda.jpg',
        techs: ['Javascript', 'ReactJS'],
        social: [
            {
                url: 'https://www.twitch.tv/little_yuuh',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/Ayuka1',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/YuuhLittle',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://instagram.com/little_yuuh',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Aline Bastos',
        img: 'assets/aline.jpg',
        techs: ['Javascript', 'Carreira'],
        social: [
            {
                url: 'https://github.com/alinebastos',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/Alinebastos',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/channel/DeFrontcomAline',
                icon: 'assets/youtube.svg'
            },
        ]
    },
    {
        name: 'Laura Beatris',
        img: 'assets/laura.jpg',
        techs: ['Javascript', 'Typescript', 'React'],
        social: [
            {
                url: 'https://github.com/LauraBeatris',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/lauradotjs',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/channel/LauraBeatris',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/lauriebeatris',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Pachi Codes',
        img: 'assets/pachicodes.jpg',
        techs: ['HTML', 'CSS', 'ReactJS'],
        social: [
            {
                url: 'https://www.twitch.tv/pachicodes',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/pachicodes',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/pachicodes',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/channel/UCaOiuksFZP8e0ijb5G4kdMQ/',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/pachicodes',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Leticia Caroline',
        img: 'assets/levxyca.jpg',
        techs: ['HTML', 'CSS'],
        social: [
            {
                url: 'https://www.twitch.tv/levxyca',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/levxyca',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/levxyca',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://instagram.com/levxyca',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Adriana Cerdeira',
        img: 'assets/adriana.jpg',
        techs: ['PHP'],
        social: [
            {
                url: 'https://github.com/adrianacerdeira',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/ComputerBuddyBR',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://www.youtube.com/c/ComputerBuddyBR',
                icon: 'assets/youtube.svg'
            },
            {
                url: 'https://instagram.com/ComputerBuddyBR',
                icon: 'assets/instagram.svg'
            }
        ]
    },
    {
        name: 'Erika Heidi',
        img: 'assets/erika.jpg',
        techs: ['PHP'],
        social: [
            {
                url: 'https://www.twitch.tv/erikaheidi',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/erikaheidi',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/erikaheidi',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://instagram.com/erikaheidi',
                icon: 'assets/instagram.svg'
            },
        ]
    },
    {
        name: 'Isabelle Samways',
        img: 'assets/isabelle.jpg',
        techs: ['Ruby'],
        social: [
            {
                url: 'https://www.twitch.tv/bellesamways',
                icon: 'assets/twitch.svg'
            },
            {
                url: 'https://github.com/bellesamways',
                icon: 'assets/github.svg'
            },
            {
                url: 'https://twitter.com/bellesamways',
                icon: 'assets/twitter.svg'
            },
            {
                url: 'https://instagram.com/bellesamways',
                icon: 'assets/instagram.svg'
            },
        ]
    },
]

const createCard = (devs) => {

    for (let i = 0; i < devs.length; i++) {

    const card = document.createElement('div');
    card.classList.add('cards__item');

    const techs = devs[i].techs.map(tech => `<span class="cards__tag">${tech}</span>`)
    const tags = techs.join('');

    const social = devs[i].social.map(social => `<a class="media" href="${social.url}" target="_blank"><img src="${social.icon}" alt="Rede social"></a>`);
    const medias = social.join('');

    card.innerHTML = 
    `<div class="wrapper">
    <img class="cards__img" src="${devs[i].img}" alt="${devs[i].name}">
    <p class="cards__name">${devs[i].name}</p>
    ${tags}
    <div class="cards__media">
    ${medias}
    </div>
    </div>`

    cards.appendChild(card);

    }
}

createCard(devs);