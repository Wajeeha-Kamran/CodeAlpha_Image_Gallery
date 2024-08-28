//now i need to start this process while loading the html page 
document.addEventListener('DOMContentLoaded', () =>{
    const items=document.querySelectorAll('.item1,.item2,.item3');
    const albumview=document.querySelector('.albumview');
    const albumcontent=document.querySelector('.albumcontent');
    const closebtn=document.querySelector('.close');

//stored all the pics in different arrays 
const albums ={
    asthetic:[
        'aesthetic_places/¿Cuál es el mejor país para viajar barato cada mes_.jpeg',
        'aesthetic_places/7ce41a8f-008c-4ec4-b86f-04ebe37d96a2.jpeg',
        'aesthetic_places/10 Must-Visit Places in Spain for an Unforgettable Trip!.jpeg',
        'aesthetic_places/12 Most Famous London Landmarks To Visit.jpeg',
        'aesthetic_places/15 Of The World’s Most Romantic Destinations.jpeg',
        'aesthetic_places/210 Aesthetic Paris Wallpapers For Your Phone (Free Download).jpeg',
        'aesthetic_places/Beautiful places of Pakistan.jpeg',
        'aesthetic_places/Marvelous nature beauty of Naran Kaghan valley….jpeg',
        'aesthetic_places/Most Incredible German Towns.jpeg',
        'aesthetic_places/Naran Kaghan.jpeg',
        'aesthetic_places/Petra, Jordan! Lost city carved into rose-red cliffs.jpeg',
        'aesthetic_places/Street City Sunset - Free photo on Pixabay.jpeg',
        'aesthetic_places/The beautiful village of Castle Combe in….jpeg',
        'aesthetic_places/Things to do in Annecy a fairytale town.jpeg'
    ],
    wonders:[
         'wonders_of_the_world/28 Breathtaking Wonders Of The World To See (1).jpeg',
         'wonders_of_the_world/28 Breathtaking Wonders Of The World To See.jpeg',
         'wonders_of_the_world/bd1a1761-ae01-4b7a-80ac-ea5cd9194022.jpeg',
         'wonders_of_the_world/Know More About 7 Wonders of the World.jpeg',
         'wonders_of_the_world/Lonely Planet Names The Most Stunning Buildings In The World.jpeg',
         'wonders_of_the_world/The New 7 Wonders of the World - Do you know them_.jpeg',
         'wonders_of_the_world/Turkey_ An Amazing Trip to Cappadocia with Kids - Travel Babbo.jpeg',
         'wonders_of_the_world/Why Visit Pakistan - the Most Underrated Tourist Destination.jpeg'
    ],
    galleries:[
         'art_galleries/3d модели - скачать на 3ddd_ru.jpeg',
         'art_galleries/872669c5-860a-4313-9623-47b6c269f8bb.jpeg',
         'art_galleries/Asylum Gallery.jpeg',
         'art_galleries/Constable and Cloud Studies at the Yale Centre for….jpeg',
         'art_galleries/Dark Academia Gallery Wall Print Set Antique French Art Decor Romanticism Vintage Art Moody Prints Printable DIGITAL DOWNLOAD - Etsy.jpeg',
         'art_galleries/Galería de Cómo diseñar interiores de museos_ Vitrinas para proteger y destacar el arte  - 9.jpeg',
         'art_galleries/Gallery of Hoki Museum _ Nikken Sekkei  - 17.jpeg',
         'art_galleries/Gallery of Pace Gallery _ HS2 Architecture  - 8.jpeg',
         'art_galleries/Gallery of Tham & Videgård Celebrates Two Decades in Practice with Exhibition in Stockholm, Sweden  - 7.jpeg',
         'art_galleries/Gallery of The Art Space Gallery & Restaurant  _ ShapeUs studio  - 14.jpeg',
         'art_galleries/harvard art museum.jpeg',
         'art_galleries/World-class Art in the virtual dimension.jpeg'
    ]
};
//now making a funciton to open the images of the requested album :
items.forEach(item => {
    item.addEventListener('click',() =>{
        const albumname=item.getAttribute('data-album');
        const images=albums[albumname];
        albumcontent.innerHTML = images.map(src => `<img src="${src}" alt="Image">`).join('');
        albumview.style.display = 'block';
    });
});
closebtn.addEventListener('click', () => {
    albumview.style.display = 'none';
});

} )