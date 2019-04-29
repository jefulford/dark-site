//SELECT MENU TABS

var homeTab = document.getElementById("tab-home");
var aboutTab = document.getElementById("tab-about");
var contactTab = document.getElementById("tab-contact");
var blogTab = document.getElementById("tab-blog");

//SELECT CORRESPONDING PAGES

var home = document.getElementById("home");
var about = document.getElementById("about");
var contact = document.getElementById("contact");
var blog = document.getElementById("blog");

//FUNCTION RESET ALL

function resetAll(){
	//show home
	home.classList.remove("hidden");
	//hide other pages
	about.classList.add("hidden");
	contact.classList.add("hidden");
	blog.classList.add("hidden");

	//make sure tabs all look the same
	aboutTab.classList.remove("active-tab");
	contactTab.classList.remove("active-tab");
	blogTab.classList.remove("active-tab");

	//hide home tab
	homeTab.classList.add("hidden");
}

resetAll();

//FUNCTION FOR CHANGING PAGES

function changePage(to, toTab){
	resetAll();
	to.classList.remove("hidden");
	toTab.classList.add("active-tab");
	home.classList.add("hidden");
	homeTab.classList.remove("hidden");
	sneakyChangePageTab(to);
}

//ADD EVENT LISTENERS

aboutTab.addEventListener("click", function(){
	changePage(about, aboutTab);
});
contactTab.addEventListener("click", function(){
	changePage(contact, contactTab);
});
blogTab.addEventListener("click", function(){
	changePage(blog, blogTab);
});
homeTab.addEventListener("click", function(){
	resetAll();
})