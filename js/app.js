const reviews = [
    {
        id: '1',
        name: 'Clément Chouan',
        job: 'Développeur web',
        img: "../profile-pictures/clement-chouan.jpg",
        text: "Clément Chouan dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '2',
        name: 'Sarah Jones',
        job: 'UX Designer',
        img: "../profile-pictures/f-pic1.jpg",
        text: "Sarah Jones dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '3',
        name: 'Robine Dupont',
        job: 'Cheffe de projet',
        img: "../profile-pictures/f-pic2.jpg",
        text: "Robine Dupont dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '4',
        name: 'Manon Journeau',
        job: 'Web Designer',
        img: "../profile-pictures/f-pic3.jpg",
        text: "Manon Journeau dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '5',
        name: 'Maxime Costo',
        job: 'Développeur Mobile IOS',
        img: "../profile-pictures/m-pic1.jpeg",
        text: "Maxime Costo dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '6',
        name: 'Quentin Couteau',
        job: 'Ingénieur sécurité web',
        img: "../profile-pictures/m-pic3.jpg",
        text: "Quentin Couteau dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '7',
        name: 'Carole Dépot',
        job: 'Chargé de SEO',
        img: "../profile-pictures/f-pic4.jpg",
        text: "Carole Dépot dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '8',
        name: 'Martine Petit',
        job: 'Chargé de communication digitale',
        img: "../profile-pictures/f-pic5.jpg",
        text: "Martine Petit dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '9',
        name: 'Nolan Gasquin',
        job: 'Commercial Web',
        img: "../profile-pictures/m-pic2.jpeg",
        text: "Nolan Gasquin dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '10',
        name: 'Steve Jobs',
        job: 'Stagiaire',
        img: "../profile-pictures/steve_jobs.jpeg",
        text: "Steve Jobs dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, 'Apple ci, Apple ça' reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '11',
        name: 'Quentin Ephquaeux',
        job: 'Chargé de CRM',
        img: "../profile-pictures/m-pic4.jpg",
        text: "Quentin Ephquaeux dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '12',
        name: 'Marion Champion',
        job: 'Cheffe de produit',
        img: "../profile-pictures/f-pic6.jpg",
        text: "Marion Champion dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    }
]

const img = document.getElementById('person-img');
const imgStyle = document.querySelector('.pp');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.surprise');

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text; 
}

function getRandomInt(min, max) {
    //min est inclus et max est exclue
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* function addStyleIfNecessary(person) {
    const item = reviews[person];
    if (item.style) {
        imgStyle.style = item.style;
        console.log("c'est stylisé");
    } else {
        console.log("je ne reconnais pas le style dans l'objet");
    }
} */

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
})

prevBtn.addEventListener('click', () => {
    if (currentItem === 0) {
        currentItem = 11;
        showPerson(currentItem);
        console.log(currentItem);
    }
    else {
        currentItem--;
        showPerson(currentItem);
        console.log(currentItem);
    }
})

nextBtn.addEventListener('click', () => {
    if (currentItem === 11) {
        currentItem = 0;
        showPerson(currentItem);
        console.log(currentItem);
    } else {
        currentItem++;
    showPerson(currentItem);
    console.log(currentItem);
    }
})

randomBtn.addEventListener('click', () => {
    currentItem = randomNumber[getRandomInt(0, 12)];
    console.log(reviews[currentItem].name);
    showPerson(currentItem);
    console.log(currentItem);
})
