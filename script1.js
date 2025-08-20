var section1Data = {
    p:"I am <mark>Abhishek Deshwal</mark> - <mark>web-developer</mark> with a passion for creating beautiful and responsive websites."
}

const contactData = {
email: "abhishekkumardeshwal@gmail.com",
socialMedia: {
    instagram: "",
    linkedIn: "https://www.linkedin.com/feed/",
    whatsApp: "",
    },
};

function toggleMenu() {
  var headerRight = document.querySelector('.right-header');
  headerRight.classList.toggle('active');
}


function renderSection1(){
    const section1Container = document.querySelector('#section1');
    const section = `<div class="header-container">
                        <div class="header">
                            <div class="left-header"><img src="/logo.png" alt="" class="logo"></div>
                            <div class="right-header">
                                <a href="#section2">SERVICES</a>
                                <a href="#section3">SKILLS</a>
                                <a href="#section4">PROJECTS</a>
                                <a href="#section5">CONTACT</a>
                                <a href="#section1">ABOUT</a>
                            </div>
                            <div class="hamburger-menu">&#9776;</div>
                        </div>
                    </div>
            <div class="section1-down">
                <div class="paras">
                    <h1 class="bold-para">FRONTEND DEVELOPER</h1>
                    <P class="para">${section1Data.p}</P>
                    <div class="buttons">
                      <a href="https://github.com/" class="view-btn">VIEW MY WORK</a>
                      <a href="https://drive.google.com/file/d/1-qhfBm0sOGpzntisoGf7z020Zbe2Og3f/view?usp=drivesdk" class="resume">RESUME</a>
                    </div>
                </div>
                <div class="abhi-div">
                    <img src="" alt="" class="abhi">
                </div>
            </div>`;
    section1Container.innerHTML = section;

    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
}


const servicesData = [
    {
      title: "Website Development",
      description: "I create websites based on your ready-mode design. Whether it's a landing page or a business card websites.",
    },
    {
      title: "Website Design",
      description: "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
    },
    {
      title: "Software Engineering",
      description: "I can design, develop, and manage complex software systems and infrastructure.",
    },
];

function renderSection2(){
    const section2Container = document.getElementById('section2');
    let section2 = <h2>MY SERVICES</h2>;
        servicesData.forEach((service, index) => {
            section2 += `<div class="service${index + 1}">
                            <h3>${service.title}</h3>
                            <p>${service.description}</p>
                        </div>`;
        if (index < servicesData.length - 1) {
            section2 += <hr id="hr${index + 1}">;
            }
                      
    });
            
    section2Container.innerHTML = section2;
}

const skillsData = {
    description: "The skills, tools and technologies I use:",
    images: [
        {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8IaYl3q9jl6N1QWTNYIAHH9nCX64xrLTuQ&s",
        alt: "HTML",
        },
        {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPixDGHHN5VI-ZGO_Uq-_m7MULGn9aMkfFHCIYK2ohxlBXnjpVHqHUs9YimwdNmgkem4&usqp=CAU",
        alt: "CSS",
        },
        {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMvId3MgmE1uQFfCI5R0qxDfix_kb5b1ttpg&s",
        alt: "js",
        },
        {
        src: "https://zerovaega.com/site/assets/files/1425/react-icon_svg.png",
        alt: "React",
        },
        {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBwhMOxO7xHV9OqhDZ585TTapui1-kcj3dA&s",
        alt: "GitHub",
        },
        {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbQW0cN1w6qDSzbivb_yzKBcA-e7EXLyCfIQ&s",
        alt: "Vite",
        },
        {
        src: "https://altcampus.com/images/icons/course/git.svg",
        alt: "Git",
        },
        ],
    };

function renderSection3() {
    const section3Container = document.getElementById('section3');
    let section3 = `
      <h2>SKILLS</h2>
      <div class="skills-div">
        <p>${skillsData.description}</p>
        <div class="skills-images">
    `;
    skillsData.images.forEach((image) => {
      section3 += `
        <img src="${image.src}" alt="${image.alt}" class="${image.alt.toLowerCase()}">
      `;
    });
    section3 += `
        </div>
      </div>
    `;
    section3Container.innerHTML = section3;
  }

const portfolioData = [
{
    image: "/weather.png",
    technologies: "Weather Forecast App",
    gitLink: "https://github.com/ABHISHEK-7455-coder/WeatherForecast",
    netlify: "weatherapp7455.netlify.app"
    },
{
    image: "/typing.png",
    technologies: "Typing Test App",
    gitLink: "https://github.com/ABHISHEK-7455-coder/typing-test-app",
    netlify: "typingtest13.netlify.app"
    },
{
    image: "/sticky.png",
    technologies: "Sticky Notes App",
    gitLink: "https://github.com/ABHISHEK-7455-coder/Sticky-Notes",
    netlify: "my-stickynote.netlify.app"
    },
];
  

function renderSection4() {
    const section4Container = document.getElementById('section4');
    let section4 = `
      <h2>MY PROJECTS</h2>
      <div class="portfolio">
    `;
    portfolioData.forEach((portfolio, index) => {
      section4 += `
        <div class="portfolio${index + 1}">
          <img src="${portfolio.image}" alt="" class="portfolio-image" width="500px" height="100px">
          <div class="extra-div">${portfolio.technologies}</div>
          <div class="links">
          <a href="${portfolio.gitLink}"><i class="fa-brands fa-github"></i></a>
          <a href=""><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        </div>
      `;
    });
    section4 += `
      </div>
    `;
    section4Container.innerHTML = section4;
  }
  

function renderSection5(){
    const section5Container = document.getElementById('section5');
    const section5 = `<div class="section5-left">
                <h2>DO YOU HAVE A PROJECT TO DISCUSS?</h2>
                <p>GET IN TOUCH <i class="fa-solid fa-message-text"></i></p>
                <div class="section5-div">
                    <div class="contact-div">
                        <p>CONTACT</p>
                        <P class="emailId">abhishekkumardeshwal@gmail.com</P>
                    </div>
                    <div class="social-div">
                        <p>SOCIAL MEDIA</p>
                        <div class="icons">
                            <a href="https://www.instagram.com/deshwal6996/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="www.linkedin.com/in/abhishek-kumar-deshwal-85509a32b"><i class="fa-brands fa-linkedin"></i></a>
                            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section5-right">
                <h2>CONTACT FORM</h2>
                <form action="">
                    <label for="Name" class="name">Name</label><br><br>
                    <input type="text" name="" id="name"><br><br>
                    <label for="Email" class="email">Email</label><br><br>
                    <input type="email" name="" id="email"><br><br>
                    <label for="Message" class="message">Message</label><br><br>
                    <input type="text" name="" id="message"><br><br>
                    <button class="send">SEND</button>
                </form>
            </div>`;
    section5Container.innerHTML = section5;
}

function init(){
    renderSection1()
    renderSection2()
    renderSection3()
    renderSection4()
    renderSection5()
}

init()