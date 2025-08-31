const headerData = {
    logo: {
        src: "https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg",
        alt: "Homestay Logo",
        width: "140px"
    },
    leftSide: [
        {
            type: "logo",
            src: "https://www.homestay.com/assets/logo-homestay-a2a7f2814cbfa356e29c846b314b58d512acdfc5750a0c7246ff81432cf8c713.svg",
            alt: "Homestay Logo",
            width: "140px"
        }
    ],
    rightSide: [
        {
            label: "DESTINATIONS",
            link: "/destinations"
        },
        {
            label: "&hearts;INSPIRE ME",
            link: "/inspire-me"
        },
        {
            label: "SIGN UP",
            link: "/sign-up"
        },
        {
            label: "LOG IN",
            link: "/log-in"
        },
        {
            label: "ENGLISH",
            link: "/language-selector"
        },
        {
            label: "HELP",
            link: "/help"
        },
        {
            label: "LIST A ROOM",
            link: "/list-a-room"
        }
    ]
};


function renderHeader(data) {
    const header = document.getElementById("header");

    const leftSideHTML = `
        <div class="left-side">
            <img src="${data.logo.src}" alt="${data.logo.alt}" width="${data.logo.width}" />
        </div>
    `;

    const rightSideHTML = data.rightSide.map(item => {
        return `
            <div class="nav-item">
                <a href="${item.link}">${item.label}</a>
            </div>
        `;
    }).join('');

    const hamburgerHTML = `
        <div class="hamburger-menu" onclick="toggleMenu()">
            &#9776; 
        </div>
    `;

    const headerHTML = `
        ${leftSideHTML}
        <div class="right-side">
            <div>${hamburgerHTML}</div>
            <div class="nav-links">
                ${rightSideHTML}
            </div>
        </div>
    `;

    header.innerHTML = headerHTML;
}

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
}



//renderMainSection(mainData);
const mainData = {
    heading: "Find Your Home Away From Home",
    formFields: [
        {
            type: "text",
            name: "destination",
            placeholder: "Where do you want to go?"
            
        },
        {
            type: "date",
            name: "checkin",
            placeholder: ""
        },
        {
            type: "date",
            name: "checkout",
            placeholder: ""
        },
        {
            type: "dropdown",
            name: "room-type",
            options: ["1", "2", "3"]
        },
        // {
        //     type: "search",
        //     name: "search",
        //     placeholder: "Search"
        // }
    ]
};

function renderMainSection(data) {
    const mainDiv = document.querySelector(".main");

    // Create the main section content using backticks
    const mainSectionHTML = `
        <div class="main-box">
            <h1>${data.heading}</h1>
            <form>
                ${data.formFields.map(field => {
                    if (field.type === "dropdown") {
                        return `
                            <div>
                                <select name="${field.name}">
                                    ${field.options.map(option => `
                                        <option value="${option}">${option}</option>
                                    `).join('')}
                                </select>
                            </div>
                        `;
                    } else {
                        return `
                            <div>
                                <input type="${field.type}" name="${field.name}" placeholder="${field.placeholder}">
                            </div>
                        `;
                    }
                }).join('')}
                <div>
                    <button type="submit">
                        <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" alt="Search Icon" style="width: 20px; height: 15px;">
                        <span>Search</span>
                    </button>
                </div>
            </form>
        </div>
    `;

    // Insert the HTML into the main container
    mainDiv.innerHTML = mainSectionHTML;
}

//data for happening 
const happeningsData = [
    {
        type: "review_created",
        link: "https://www.homestay.com/new-zealand/auckland/177359-homestay-in-pakuranga-heights-auckland",
        description: "Thomas in United States left a review for <strong>Esther in Auckland, New Zealand</strong>"
    },
    {
        type: "host_went_live",
        link: "https://www.homestay.com/united-states/new-york/229931-homestay-in-manhattan-new-york",
        description: "<strong>David in New York, United States</strong> is now available for bookings – from <span class='price-amount'><span class='currency_symbol'>₹</span>33</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/ireland/dublin/228364-homestay-in-dublin-5-dublin",
        description: "A guest in Germany booked 85 nights with <strong>Joy in Dublin, Ireland</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>32</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "host_went_live",
        link: "https://www.homestay.com/ireland/dublin/256740-homestay-in-finglas-east-dublin",
        description: "<strong>Michael in Dublin, Ireland</strong> is now available for bookings – from <span class='price-amount'><span class='currency_symbol'>₹</span>29</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/cuba/la-habana/161621-homestay-in-centro-habana-la-habana",
        description: "Sigurd in Germany left a review for <strong>Teresa De Jesús in Havana, Cuba</strong>"
    },
    {
        type: "user_review_created",
        link: "https://www.homestay.com/china/shanghai/9343-homestay-in-ecnuzhongshan-park-jingan-temple-jiaotong-university-tianshan-tea-city-1000-trees-shanghai",
        description: "Lily in Shanghai, China left a review for <strong>Antonino in Italy</strong>"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/spain/barcelona/252041-homestay-in-horta-guinardo-barcelona",
        description: "Laetitia in France left a review for <strong>Luca in Barcelona, Spain</strong>"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/canada/vancouver/191634-homestay-in-vancouver-vancouver",
        description: "A guest in Canada booked 112 nights with <strong>Man Oi in Vancouver, Canada</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>46</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "booking_created",
        link: "https://www.homestay.com/ireland/dublin/228364-homestay-in-dublin-5-dublin",
        description: "A guest in Germany booked 85 nights with <strong>Joy in Dublin, Ireland</strong> for <span class='price-amount'><span class='currency_symbol'>₹</span>32</span> <span class='currency-isoCode'>INR</span> per night"
    },
    {
        type: "review_created",
        link: "https://www.homestay.com/brazil/salvador/135847-homestay-in-barra-salvador",
        description: "Adriana in Germany left a review for <strong>Daysa in Salvador, Brazil</strong>"
    }
];

// Data for chats
const chatData = [
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zNzA2MDQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--8cf0db84f6c237484e54a41c88d2b559ab7bb728&style=small",
        message: "Un plaisir de résider chez Abi. La chambre est bien chauffée, très cosy. Abi et Jason...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMzgzNTk_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--aed310c3016557877080f53f861dfb02be8522dd&style=small",
        message: "Thank you for a lot. They’re really good people. I think this house is located in mid...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
    {
        imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMTQ3OTI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ccac2b7bb2be524e248cf15bdc6ec12338ef050d&style=small",
        message: "Lola’s place was amazing! Centrally located and very clean and comfortable. Lola herself...",
        reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    },
    // {
    //     imageSrc: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSInZ2lkOi8vaHN0L0F2YXRhci8zMjYzNzY_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--476897db4fa8eb63a91c6a4d6a74218e93bcd327&style=small",
    //     message: "My stay was fantastic, very welcoming hosts. The room was perfect for my needs, well worth it!",
    //     reviewIcon: "https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"
    // }
];


// Function to render happenings
function renderHappenings() {
    const happeningsList = document.querySelector(".bordered-list");
    happeningsData.forEach(happening => {
        const listItem = `
            <li>
                <a target="_blank" href="${happening.link}" data-type="${happening.type}">
                    <div class="content-container">
                        <p>${happening.description}</p>
                    </div>
                </a>
            </li>
        `;
        happeningsList.innerHTML += listItem;
    });
}

// Function to render chats
function renderChats() {
    const chatSection = document.querySelector(".chatSection");
    chatData.forEach(chat => {
        const chatItem = `
            <div class="chat">
              
                <img src="${chat.imageSrc}" alt="" width="84px" height="84px;">
                
                <div class="contentContainer" >
                    <p>${chat.message}</p>
                  
                    <img src="${chat.reviewIcon}" alt="">
                </div>
            </div>
        `;
        chatSection.innerHTML += chatItem;
    });
}

// Data List a room
const data = {
    spareroom: {
        title: "Monetise your spare room",
        description: "Earn extra income renting out your spare room to international students, tourists, and professionals.",
        buttonText: "List Your Property Here"
    },
    sustainable: [
        {
            title: "True value",
            description: "We don't just offer great prices and good long term accommodation deals, we provide true value for money by giving you a priceless authentic experience."
        },
        {
            title: "Real Homes",
            description: "We will always offer rooms in real homes with local hosts. Our accommodation is different because you stay with locals and become part of the local community."
        },
        {
            title: "Sustainable tourism",
            description: "We promote sustainable local tourism by ensuring you're spending stays within local communities, minimising your environmental impact."
        }
    ]
};

// List a room
function generateContent() {
    const sectionHTML=document.querySelector('.ListARoom')
    let section = `
    <section class="ListARoom">
        <div class="spareroom">
            <div class="contentOfbox">
                <h3>${data.spareroom.title}</h3>
                <p>${data.spareroom.description}</p>
                <button type="submit">${data.spareroom.buttonText}</button>
            </div>
            <div class="img-container"></div>
        </div>
        <div class="Sustainable">
            ${data.sustainable.map(item => `
            <div class="sustainable-item">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            `).join('')}
        </div>
    </section>
    `;

    sectionHTML.innerHTML =section;
}
// Data for dynamic content
const inspireMeData = {
    sectionTitle: "Homestay Inspiration",
    sectionDescription: "Be inspired by our unique mix of homestays around the world. We work with hosts that specialise in student stays, but also plenty that offer short term city breaks and even some that are totally off the beaten track letting you discover the beach, rainforest, countryside and mountains.",
    cartItems: [
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMxP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--d186e6909c5047db5eec1cd60eb223947ad18f7e&style=medium",
            title: "Fancy a City Break?"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDMyP2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--db91429d6d57b079d776a90e1af20d5793177605&style=medium",
            title: "Calling all Students"
        },
        {
            imgUrl: "https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMzg5MDI5P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--f2d54a82eae10bcb8a2fb709499edb85a3dedc4e&style=medium",
            title: "Heading on an Adventure?"
        }
    ]
};
function generateInspireMeContent() {
    const Inspire = document.querySelector('.InspireMe');
    let InspiresectionHTML = `

        <div>
            <h2 class='heading'>${inspireMeData.sectionTitle}</h2>
            <p>${inspireMeData.sectionDescription}</p>
        </div>
        <div class="Cart1">
            ${inspireMeData.cartItems.map(item => `
            <div class="cart-item" style="background-image: url(${item.imgUrl});">
                <div class="title-container">
                    <h4 class="name">${item.title}</h4>
                    <button class="explore-btn">Explore Me</button>
                </div>
            </div>
            `).join('')}
        </div>
    
    `;

    Inspire.innerHTML = InspiresectionHTML;
}

const ourPicksData = {
    sectionTitle: 'Homestays We Love',
    homestays: [
        {
            name: 'Deboragh',
            location: 'Nottingham, United Kingdom',
            price: '1,875',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjgwMTA1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--761c7cdc3a6858ce0e4b79b5658b680c49decf8b&style=medium'
        },
        {
            name: 'Mari',
            location: 'Barcelona, Spain',
            price: '3,304',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8yOTg0NjQ_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--0cce744b5d968b9ce3065bb3cf5c0445d55ce813&style=medium'
        },
        {
            name: 'Sisy',
            location: 'Barcelona, Spain',
            price: '5,395',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIxZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS8xMjkwNTU1P2V4cGlyZXNfaW4GOwBUSSIMcHVycG9zZQY7AFRJIgxkZWZhdWx0BjsAVEkiD2V4cGlyZXNfYXQGOwBUMA%3D%3D--86022a26977ba816ca9e33f2d46f8fb67e9df34a&style=medium'
        },
        {
            name: 'Tokyo Host Tomoko',
            location: 'Tokyo, Japan',
            price: '2,383',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81NTE2NTI_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--ea0d91b58c6057902197958b0bb6d6b4d7f881d1&style=medium'
        },
        {
            name: 'Joy',
            location: 'Melbourne, Australia',
            price: '3,021',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIvZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS84NzY3Nz9leHBpcmVzX2luBjsAVEkiDHB1cnBvc2UGOwBUSSIMZGVmYXVsdAY7AFRJIg9leHBpcmVzX2F0BjsAVDA%3D--2cec0abbaa0fc576380382dd67f1f7f02447420e&style=medium'
        },
        {
            name: 'Asuncion',
            location: 'ALCORCON, Spain',
            price: '1,526',
            currency: '₹',
            imgUrl: 'https://secure.homestaymanager.com/picture?ss=BAh7CEkiCGdpZAY6BkVUSSIwZ2lkOi8vaHN0L1Byb3BlcnR5UGljdHVyZS81MTIxMjU_ZXhwaXJlc19pbgY7AFRJIgxwdXJwb3NlBjsAVEkiDGRlZmF1bHQGOwBUSSIPZXhwaXJlc19hdAY7AFQw--60c0bd52720ff807407f4b5ebac41a0dbad71911&style=medium'
        }
    ]
};
function generateOurPicksContent() {
    const ourPicks = document.querySelector('.ourPicks');

    let sectionHTML = `
    
        <div>
            <h2 class='heading'>${ourPicksData.sectionTitle}</h2>
        </div>
        <div class="picks-container">
            ${ourPicksData.homestays.map(item => `
            <div class="pick-item" style="background-image: url(${item.imgUrl});">
                <div class="info-container">
                    <h4 class="name">${item.name}</h4>
                    <h5 class="location">${item.location}</h5>
                    <span class="price">
                        Book now from 
                        <span class="price-amount">
                            <span class="currency_symbol">${item.currency}</span> ${item.price}
                        </span>
                    </span>
                </div>
            </div>
            `).join('')}
        </div>
   
    `;

    ourPicks.innerHTML = sectionHTML;
}


  // Function to handle smooth scroll to a section
  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,  
      behavior: 'smooth'            
    });
  }

  
  const stickyHeader = document.querySelector('.sticky-head');
  const stickyButton = document.getElementById('stickyButton');

  
  const headerOffset = stickyHeader.offsetTop;

  // Function to handle the scroll and show/hide button
  function handleScroll() {
    if (window.pageYOffset > headerOffset) {
      stickyHeader.classList.add('stuck');
      stickyButton.classList.add('show'); 
    } else {
     
      stickyHeader.classList.remove('stuck');
      stickyButton.classList.remove('show'); 
    }
  }

  
  

function init(){
    renderHeader(headerData);
    renderMainSection(mainData);
    renderHappenings();
    renderChats();
    generateContent();
    generateInspireMeContent();
    generateOurPicksContent();
    document.querySelectorAll('.sticky-head a').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
    window.addEventListener('scroll', handleScroll);
     
}

init();