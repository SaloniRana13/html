let selectedCity=data.cities["1"];
function optionsRender(){
    let tpl=``
    for(let key in data.cities){
        let city=data.cities[key];
        tpl+=`<option value="${key}">${city.name}</option>`;
    }
    document.querySelector("#placeToGO").innerHTML=tpl;
}
function videoSection(){
    let tpl=`
    <h1>Don't just visit, live it!</h1>
    <p>Homestay.com connects host families with students and independent travellers looking for accommodation. The Homestay community offers you the opportunity to live with a local and to truly discover your destination. We offer a wide selection of rooms for both long and short term accommodation that offer great value for money, leaving you with more to spend enjoying your trip.</p>
    <div>
        <iframe 
                src="https://www.youtube.com/embed/B0uYcxvPf1A" 
                title="Hello Homestay" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
        </iframe>
    </div>
    `;
    document.querySelector("main>div:nth-child(1)").innerHTML=tpl;
}
function reviewSection(data){
    let tpl=`
    <div>
        ${data.map((item)=>{
            return `
            <div class="reviewDiv">
                <div><img src="${item.imgLink}"></div>
                <div>${item.review}</div>
                <div></div>
                <div><img src="https://www.homestay.com/assets/small-review-score-img-0b2a7a69f06c0d32cd00047fc4dd9f2535d9d80cc4832b725f7d4cb0580e33d7.svg"></div>
                <div></div>
                <div>Read ${item.name}'s review, ${item.place}> </div>
            </div>`
        }).join('')}
    </div>
    <button>See Customer Reviews</button>
    `;
    document.querySelector("main>div:nth-child(2)").innerHTML=tpl;
}
function listingProperty(){
    let tpl=`
        <div class="monetiseDiv">
            <div>
                <p>Monetise your spare room</p>
                <p>Earn extra income renting out your spare room to international students, tourists and professionals.</p>
                <button>List your property here</button>
            </div>
            <div></div>
        </div>
    `;

    document.querySelector("main>div:nth-child(3)").innerHTML=tpl;
}
function benefitDiv(data){
    let tpl=`
    <div class="benefitDiv">
        ${data.map((item)=>{
            return `<div>
                    <div><div class="circleIcon"></div></div>
                    <div>
                        <h5>${item.title}</h5>
                        <p>${item.content}</p>
                    </div>
                </div>`
        }).join('')}
    </div>
    `;
    document.querySelector("main>div:nth-child(4)").innerHTML=tpl;
}
function inspirationDiv(data){
    let tpl=`
        <h1>Homestay Inspiration</h1>
        <p>Be inspired by our unique mix of homestays around the world. We work with hosts that specialise in student stays, but also plenty that offer short term city breaks and even some that are totally off the beaten track letting you discover the beach, rainforest, countryside and mountains.</p>
        <div class="cellContainer">
            ${data.map((item)=>{
                return `<div class="cells" style="background-image: url(${item.imgUrl})">
                    <div>
                        <div>${item.title}</div>
                        <div>Explore More</div>
                    </div>
                </div>`
            }).join('')}
        </div>
    `;
    document.querySelector("main>div:nth-child(5)").innerHTML=tpl;
}
function featuredPlaces(data){
    let tpl=`
        <h1>Homestays We Love</h1>
        <div class="cellContainer">
            ${data.map((item)=>{
                return `<div class="cells" style="background-image: url(${item.imgLink})">
                    <div>
                        <div>${item.ownerName}
                            <p>${item.location}</p>
                        </div>
                        <div>Book now for ₹${item.price}</div>
                    </div>
                </div>`
            }).join('')}
        </div>
    `;
    document.querySelector("main>div:nth-child(6)").innerHTML=tpl;
}
function renderMain(){
    let tpl=`
        <div id="child1"></div>
        <div id="child2"></div>
        <div id="child3"></div>
        <div id="child4"></div>
        <div id="child5"></div>
        <div id="child6"></div>
    `;
    document.querySelector("main").innerHTML=tpl;
    optionsRender();
    videoSection();
    reviewSection(reviewData);
    listingProperty();
    benefitDiv(benefitData);
    inspirationDiv(inspirationData);
    featuredPlaces(placesData);
    let sortList=document.querySelector(".hero .sortByList")
    if(sortList){
        sortList.style.display="none";
    }
    let filterList=document.querySelector(".hero .filterByList")
    if(filterList){
        filterList.style.display="none";
    }
    document.querySelector("header").classList.remove("secondary");
    document.querySelector("nav").classList.remove("secondPage");
    document.querySelector(".list_Room").classList.remove("secondPageBorder");
    document.querySelector(".hero").classList.remove("heightAuto");
    document.querySelector(".stickySection").style.display="flex";
    document.querySelector("footer").style.display="block";
};
function scrollToSection(section) {
    let offSet = section.offsetTop;
    window.scrollTo({
        top: offSet,
        behavior: "smooth"
    });
}
function toggleMobileNav() {
    let mobileNav = document.querySelector('.mobileNav');
    if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
    } else {
        mobileNav.classList.add('open');
    }
}
function removingNavHeroComponents(){
    let navList=document.querySelector("nav ul");
    let inspireMeLi=navList.querySelector("li:nth-child(1)");
    inspireMeLi.textContent="Inspire Me";
    let mobileNav = document.querySelector(".mobileNav");
    let inspireMeAnchor = document.querySelector(".mobileNav>a:nth-child(3)");
    let newAnchor = document.querySelector(".mobileNav>a:nth-child(2)");
    inspireMeAnchor.textContent = "Inspire Me";
    mobileNav.removeChild(newAnchor);

    let heroFormSection=document.querySelector(".hero form");
    heroFormSection.querySelectorAll(".bigButtons").forEach(button => button.remove());
}
/* This function is adding event listeners and event to nav bar's li*/
function addEventsListeners(){
    document.addEventListener("DOMContentLoaded", visibiltyOfLists);
    document.querySelectorAll('.stickySection a').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = anchor.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);
            scrollToSection(targetElement);
        });
    });
    document.querySelectorAll('.mobileNav a').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = anchor.getAttribute('href').substring(1);
            let targetElement = document.getElementById(targetId);
            scrollToSection(targetElement);
        });
    });
    document.querySelectorAll("nav ul li").forEach((item)=>{
        item.addEventListener("click",(event)=>{
            event.preventDefault();
            let tragetID=item.dataset.value.substring(1);
            let targetElement=document.querySelector(`#${tragetID}`);
            if(targetElement){
                scrollToSection(targetElement);
            }
        })
    })
    document.querySelector("form").addEventListener("click",formRenderVisibility);
    document.querySelector(".sortByList").addEventListener("click",sorterButtons);
    document.querySelector(".filterByList").addEventListener("click",filterButtons);
    document.querySelector(".clearAllFilters").addEventListener("click",clearAllFilters);
}
document.querySelector('.homestays_logo').addEventListener("click",function(){
    renderMain();
    removingNavHeroComponents();
    addEventsListeners();
})
let observer = new IntersectionObserver((entries,observer)=>{
    let entry=entries[0]
    if(!entry.isIntersecting){
        document.querySelector(".findHomestayButton").style.display="block";
    }
    else{
        document.querySelector(".findHomestayButton").style.display="none";
    }
},{
    threshold: 0
})
observer.observe(document.querySelector(".hero"));

let secondObserver= new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
        else{
            entry.target.classList.remove("visible");
        }
    })
},{
    threshold: 0
})