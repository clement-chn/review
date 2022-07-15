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
        img: "../profile-pictures/f-pic1.jpeg",
        text: "Sarah Jones dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '3',
        name: 'Robine Dupont',
        job: 'Cheffe de projet',
        img: "../profile-pictures/f-pic2.jpeg",
        text: "Robine Dupont dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '4',
        name: 'Manon Journeau',
        job: 'Web Designer',
        img: "../profile-pictures/f-pic3.jpeg",
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
        name: 'Quentin Gouet',
        job: 'Ingénieur sécurité web',
        img: "../profile-pictures/m-pic3.jpeg",
        text: "Quentin Gouet dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '7',
        name: 'Carole Dépot',
        job: 'Chargé de SEO',
        img: "../profile-pictures/f-pic4.jpeg",
        text: "Carole Dépot dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '8',
        name: 'Martine Scoreseize',
        job: 'Chargé de communication digitale',
        img: "../profile-pictures/f-pic5.jpeg",
        text: "Martine Scoreseize dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '9',
        name: 'Nolan Castrer',
        job: 'Commercial Web',
        img: "../profile-pictures/m-pic2.jpeg",
        text: "Nolan Castrer dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
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
        img: "../profile-pictures/m-pic4.jpeg",
        text: "Quentin Ephquaeux dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    },
    {
        id: '12',
        name: 'Marion Champion',
        job: 'Cheffe de produit',
        img: "../profile-pictures/f-pic1.jpeg",
        text: "Marion Champion dolor sit amet consectetur adipisicing elit. Perspiciatis deserunt provident nisi voluptatem obcaecati, tempora quo, error pariatur reprehenderit quae natus doloribus itaque quisquam magni consectetur quia labore, id ipsa."
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.surprise');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    console.log('sisi');
})