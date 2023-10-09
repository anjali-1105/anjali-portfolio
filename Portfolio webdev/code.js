expBtn1 = document.getElementById("expbtn1");
expBtn2 = document.getElementById("expbtn2");
expBtn3 = document.getElementById("expbtn3");

expTitle = document.getElementById("exp-title");
expBody = document.getElementById("exp-body");
expDate = document.getElementById("exp-date");




expBtn1.addEventListener("click", (() => {
    console.log("btn1")
    console.log(expTitle.innerHTML)
    expTitle.innerHTML = "Alpha - Microsoft Learn Student Ambassador"
    expBody.innerHTML = "I'm obsessed with Microsoft Learn Student Ambassadors activities these days and super excited to unlock my benefits of free access to Azure, LinkedIn learnings, and free certificate exams."
    expDate.innerHTML = "July 2021 - Feb 2022"


}))

expBtn2.addEventListener("click", (() => {
    console.log("btn2")
    expTitle.innerHTML = "Beta - Microsoft Learn Student Ambassador"
    expBody.innerHTML = "This is a great platform to explore, update and modify your ideas and enhance your communication skills along with other personality development. Super excited to receive the goodies and learn more from other ambassadors. I learned a lot from my peers during the path and looking forward to continue with this hard work and patience."
    expDate.innerHTML = "Aug 2021 - Feb 2022"
}))

expBtn3.addEventListener("click", (() => {
    console.log("btn3")
    expTitle.innerHTML = "GPCSSI 2021 Intern"
    expBody.innerHTML = "9th Gurugram Police Cyber Security Summer Internship is a cybersecurity internship under the guidance of Rakshit Tandon Sir, where we are taught different cybersecurity techniques, their solutions, and the cyber crimes raising these days. We have guest lectures by cyber experts, police commissioners, etc. This year's internship is under the Gurugram Police Cyber Cell, with SafeHouse Technologies and Society for Safe Gurgaon (SSG)."
    expDate.innerHTML = "June 2021 - July 2021"
}))

// SIDEBAR
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-Link")
        }
        else
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-Link")
        }
    })
}