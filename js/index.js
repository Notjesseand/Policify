const productsBtn = document.querySelector('.dropdown-container #home');
const dropdown = document.querySelector('.dropdown-container .dropdown');
const dropdownIcon = document.querySelector('.dropdown-container button .icon');
const review = document.querySelector('.review2');
const reviewText = review.querySelector('#review-text');
const profilePic = review.querySelector('.profile-pic')
const userName = review.querySelector('#name')

const reviews = [
  {
    id: 1,
    name: 'Shawn Carter',
    img: ' <img src="css/images/customer (4).jpg" class="customer">',
    text: "Policify made my life so much easier. Thanks to their website, I was able to get my privacy policy, within a few minutes. It saved me hours and hours of research and writing"
  },
  {
    id: 2,
    name: 'Jefferey Lamar Williams',
    img: '<img src="css/images/customer (1).jpg" class="customer"></img>',
    text: 'The fact that i get updated on signiificant changes in laws that regulate privacy policies and can constantly update my policies accordingly is exceptional'
  },
  {
    id: 3,
    name: 'Jesse',
    img: '<img src="css/images/customer (3).jpg" class="customer">',
    text: "Its a priceless service to be able to generate specific terms and conditions specific to your business and this is what policify offers"
  }
]

productsBtn.onclick = () => {
  dropdown.classList.toggle('appear')
  dropdownIcon.classList.toggle('rotate')
}

count = 0;
function carousel() {
  count++;
  if (count > 2) {
    count = 0;
  }
  reviewText.innerHTML = reviews[count].text;
  profilePic.innerHTML = reviews[count].img;
  userName.innerHTML = reviews[count].name;  
}

var timer = 6;
function countdown() {
  timer--;
  if (timer < 1) {
    timer = 6;
    carousel()
  }
}
setInterval(countdown, 1000)

countdown();

// footer dropdown for products
const dropdownx = document.querySelector('.footer-container .dropdown')
const initiator = document.querySelector('.footer-container #home');
const iconx = document.querySelector('.footer-container button .icon')
initiator.onclick = () => {
  dropdownx .classList.toggle('appear')
  iconx.classList.toggle('rotate')
  
}


