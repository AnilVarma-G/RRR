function toggleMenu(event) {
    const navLinks = document.getElementById('nav__link1');
    navLinks.classList.toggle('show-on-mobile');
}




let onSlide = false;

window.addEventListener("load", () => {
   autoSlide();

   const dots = document.querySelectorAll(".carousel_dot");
   for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", () => slide(i));
   }

   const buttonPrev = document.querySelector(".carousel_button__prev");
   const buttonNext = document.querySelector(".carousel_button__next");
   buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
   buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 3000); // slide speed = 3s
}

function slide(toIndex) {
   if (onSlide)
      return;
   onSlide = true;

   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   let newItemActive = null;

   if (toIndex > itemActiveIndex) {
      // check if toIndex exceeds the number of carousel items
      if (toIndex >= itemsArray.length) {
         toIndex = 0;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_next");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__next");
         itemActive.classList.add("carousel_item__next");
      }, 20);
   } else {
      // check if toIndex exceeds the number of carousel items
      if (toIndex < 0) {
         toIndex = itemsArray.length - 1;
      }

      newItemActive = itemsArray[toIndex];

      // start transition
      newItemActive.classList.add("carousel_item__pos_prev");
      setTimeout(() => {
         newItemActive.classList.add("carousel_item__prev");
         itemActive.classList.add("carousel_item__prev");
      }, 20);
   }

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
      onSlide = false;
   }, {
      once: true
   });

   slideIndicator(toIndex);
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
}

function slideIndicator(toIndex) {
   const dots = document.querySelectorAll(".carousel_dot");
   const dotActive = document.querySelector(".carousel_dot__active");
   const newDotActive = dots[toIndex];

   dotActive.classList.remove("carousel_dot__active");
   newDotActive.classList.add("carousel_dot__active");
}


let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);




document.addEventListener('DOMContentLoaded', () => {
    const animateNumbers = () => {
      const animatedNumbers = document.querySelectorAll('.animated-number');
      
      animatedNumbers.forEach(number => {
        const value = parseInt(number.getAttribute('data-value'));
        let current = 0;
        const increment = value / 100;
  
        const animate = () => {
          current += increment;
          if (current < value) {
            number.innerText = Math.floor(current);
            requestAnimationFrame(animate);
          } else {
            number.innerText = value;
          }
        };
  
        animate();
      });
    };
  
    animateNumbers();
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    const items = [
        {
            header: "Transport",
            imageSrc: "./img//transpaort.jpg",
            content: "Our school provides safe and reliable transport services to ensure students commute comfortably. With dedicated routes covering various neighborhoods, we prioritize student safety and punctuality."
        },
        {
            header: "CC Camera Security",
            imageSrc: "./img//cccamera.jpg",
            content: "To ensure the safety of our students and staff, our campus is equipped with state-of-the-art CCTV surveillance. This system monitors key areas of the school premises, promoting a secure learning environment."
        },
        {
            header: "Digital Classrooms",
            imageSrc: "./img//digital.jpg",
            content: "Our digital classrooms are equipped with the latest technology to enhance learning experiences. From interactive displays to multimedia resources, students benefit from innovative teaching methods tailored to modern educational standards."
        },
        {
            header: "Special Focus to Kids",
            imageSrc: "./img/special.jpg",
            content: "We prioritize personalized attention and care for every child at our school. Our programs and activities are designed to nurture their unique talents and foster holistic development in a supportive environment."
        },
        {
            header: "Best Caring Teachers",
            imageSrc: "./img/caringteachers.jpg",
            content: "Our dedicated teaching staff comprises passionate educators who go beyond academics to mentor and guide students. With their commitment to excellence, they create engaging learning experiences that inspire and empower."
        },
        {
            header: "Full Security Close Gates",
            imageSrc: "./img/gates.jpeg",
            content: "Ensuring a safe environment is our top priority. Our school premises are equipped with secure fencing and monitored entry points, providing peace of mind to students, staff, and parents."
        }
    ];


 // Select the facilities container
const facilitiesContainer = document.getElementById('facilities-container');

// Iterate through each item and create a facility item dynamically
items.forEach(item => {
    // Create a facility item element
    const facilityItem = document.createElement('div');
    facilityItem.className = 'facility-item';

    // Create a header element for facility item
    const facilityHeader = document.createElement('h2');
    facilityHeader.className = 'facility-header';
    facilityHeader.textContent = item.header;
    facilityItem.appendChild(facilityHeader);

    // Create an image element for facility item
    const facilityImage = document.createElement('img');
    facilityImage.className = 'facility-image';
    facilityImage.src = item.imageSrc;
    facilityImage.alt = item.header;
    facilityItem.appendChild(facilityImage);

    // Create a content element for facility item
    const facilityContent = document.createElement('p');
    facilityContent.className = 'facility-content';
    facilityContent.textContent = item.content;
    facilityItem.appendChild(facilityContent);

    // Append facility item to facilities container
    facilitiesContainer.appendChild(facilityItem);
});

// Function to set grid columns based on screen width
function setGridColumns() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
        facilitiesContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (screenWidth >= 768) {
        facilitiesContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        facilitiesContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
}

// Initial call to set grid columns based on current screen width
setGridColumns();

// Update grid columns on window resize
window.addEventListener('resize', setGridColumns);
});





document.addEventListener('DOMContentLoaded', function() {
    const activities = [
        {
            header: "Computer Coding",
            imageSrc: "./img/coding.jpg",
            content: "Our computer coding program introduces students to the fundamentals of programming. From basic algorithms to advanced problem-solving, students learn skills essential for the digital age."
        },
        {
            header: "Mathematics",
            imageSrc: "./img/maths.jpg",
            content: "Our mathematics program focuses on building a strong foundation in arithmetic, algebra, and visual spatial skills (VS). Through interactive lessons and practical applications, students develop a deep understanding of mathematical concepts."
        },
        {
            header: "Art and Drawing",
            imageSrc: "./img/drawing.jpg",
            content: "Art and drawing classes at our school encourage creativity and self-expression. Students explore various mediums and techniques, fostering artistic skills and imagination."
        },
        {
            header: "Sports and Physical Health",
            imageSrc: "./img/sports.jpg",
            content: "Physical activity is essential for overall well-being. Our sports program promotes fitness, teamwork, and sportsmanship through a variety of activities and games."
        },
        {
            header: "Career Counseling",
            imageSrc: "./img/career.jpg",
            content: "Career counseling sessions help students explore career options, set goals, and make informed decisions about their future. We provide guidance and resources to support their career aspirations."
        },
        {
            header: "Meditation and Mental Health",
            imageSrc: "./img/medit.jpg",
            content: "Mindfulness practices and meditation sessions promote mental well-being among students. These sessions teach relaxation techniques and stress management strategies."
        },
        {
            header: "Western Dancing",
            imageSrc: "./img/wastern.jpg",
            content: "Our dance programs offer training in both Western and Classical dance forms. Students learn coordination, rhythm, and expression, enhancing their cultural appreciation and performance skills."
        },
        {
            header: "Classical Dancing",
            imageSrc: "./img/clasical.jpg",
            content: "Our dance programs offer training in both Western and Classical dance forms. Students learn coordination, rhythm, and expression, enhancing their cultural appreciation and performance skills."
        },
        {
            header: "Cultural Activities",
            imageSrc: "./img/activities.jpg",
            content: "Cultural activities celebrate diversity and heritage. Through festivals, traditions, and arts, students learn about different cultures, fostering mutual respect and understanding."
        },
        {
            header: "Slow Learners Activities",
            imageSrc: "./img/school.jpeg",
            content: "Tailored activities cater to the learning needs of every student. We provide individualized support and resources to help slow learners succeed academically and socially."
        },
        {
            header: "Festival-wise Activities",
            imageSrc: "./img/festy.jpeg",
            content: "Festival-wise activities enrich cultural learning and celebrate festive occasions. Students participate in rituals, crafts, and performances, promoting cultural awareness and unity."
        },
        {
            header: "Indoor Play Ground",
            imageSrc: "./img/games1.jpg",
            content: "At Rainbow School, we believe that play is an essential part of learning and development. Our state-of-the-art indoor playground provides a safe, stimulating, and fun environment where children can explore, create, and grow."
        },
    ];

   // Select the activities grid container
const activitiesContainer = document.querySelector('.activities-grid');

// Iterate through each activity and create a card dynamically
activities.forEach((activity, index) => {
    // Create a card element
    const card = document.createElement('div');
    card.classList.add('activities-card');

    // Create an image element
    const img = document.createElement('img');
    img.src = activity.imageSrc;
    img.alt = activity.header;
    img.classList.add('activities-card-img');

    // Create a content container for header and text
    const content = document.createElement('div');
    content.classList.add('activities-card-content');

    // Create a header element
    const header = document.createElement('h2');
    header.classList.add('activities-card-header');
    header.textContent = activity.header;

    // Create a text element
    const text = document.createElement('p');
    text.classList.add('activities-card-text');
    text.textContent = activity.content;

    // Append header and text to content container
    content.appendChild(header);
    content.appendChild(text);

    // Append image and content container to card
    card.appendChild(img);
    card.appendChild(content);

    // Append card to activities grid container
    activitiesContainer.appendChild(card);
});

// Set grid layout styles dynamically based on screen width
function setGridColumns() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
        activitiesContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else if (screenWidth >= 768) {
        activitiesContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        activitiesContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
    }
}

// Initial call to set grid columns based on current screen width
setGridColumns();

// Update grid columns on window resize
window.addEventListener('resize', setGridColumns);

});



document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(videoItem => {
        const video = videoItem.querySelector('.video');
        const closeIcon = document.createElement('span');
        closeIcon.classList.add('close-icon');
        closeIcon.innerHTML = '&times;';
        videoItem.appendChild(closeIcon);

        video.addEventListener('click', function() {
            videoItem.classList.toggle('expanded');
        });

        closeIcon.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent video from toggling when close icon is clicked
            videoItem.classList.remove('expanded');
        });
    });
});

  


  document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const popup = document.getElementById("popup");
    const successMessage = document.getElementById("success-message");
  
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      popup.classList.remove("hidden");
  
      setTimeout(() => {
        popup.classList.add("hidden");
        successMessage.classList.remove("hidden");
      }, 2000);
    });
  });
  

  const TAB_DATA = {
    skills: `
      <ul class="list-disc">
        <li>Communication Skills</li>
        <li>Critical Thinking Skills</li>
        <li>Social Skills</li>
        <li>Emotional Intelligence</li>
        <li>Creativity</li>
        <li>Time Management and Organization</li>
        <li>Problem-Solving Skills</li>
      </ul>
    `,
    education: `
      <ul class="list-disc">
        <li>Play group to Xnth class.</li>
        <li>Adding extra-curricular activities.</li>
      </ul>
    `,
    certifications: `
      <ul class="list-disc">
        <li>Language Proficiency Certificates</li>
        <li>Sports Certifications</li>
        <li>Art Certifications</li>
        <li>Computer Skills Certifications</li>
      </ul>
    `
  };
  
  function selectTab(tab) {
    const tabContent = document.getElementById('tab-content');
    tabContent.innerHTML = TAB_DATA[tab];
  
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
  
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tab);
    activeButton.classList.add('active');
  }
  
  // Initialize the first tab content
  selectTab('skills');
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Founder section loaded');
  });




  const images = [
    './img/scroll1.jpg',
    './img/scroll2.jpg',
    './img/scroll3.jpg',
    './img/scroll4.jpg',
    './img/scroll5.jpg',
  ];
  
  const texts = [
    "We DREAM of a school which is NOT a learning factory, but a GARDEN that lets the child BLOSSOM",
    "We DREAM of an education system where we TEACH, not by giving answers, but ASKING QUESTIONS",
    "We DREAM of classrooms where the teachers know that there is NO SLOW LEARNER, that no child is a poor performer, that NO CHILD is average",
    "We DREAM of an education system where 'EXCELLENT' is not a tool for comparison in the report cards, but 'EXCELLENECE' is the NATURE of every child",
  ];
  
  let currentImage = 0;
  
  const changeSlide = () => {
    const textContent = document.querySelector('.text-content');
    const imageContainer = document.querySelector('.image-container');
  
    textContent.innerHTML = texts[currentImage].split(' ').map(word => `<span class="word rainbow-text">${word}</span>`).join(' ');
    imageContainer.style.backgroundImage = `url(${images[currentImage]})`;
  
    currentImage = (currentImage + 1) % images.length;
  };
  
  setInterval(changeSlide, 5000); // Change slide every 5 seconds
  
  document.addEventListener('DOMContentLoaded', changeSlide);


  
  
  const data = [
    { id: 1, imgSrc: './img/image1.jpg' },
    { id: 2, imgSrc: './img/gates.jpg' },
    { id: 3, imgSrc: './img/image13.jpg' },
    { id: 4, imgSrc: './img/image12.jpg' },
    { id: 5, imgSrc: './img/image9.jpg' },
    { id: 6, imgSrc: './img/image4.jpg' },
    { id: 7, imgSrc: './img/kids.jpg' },
    { id: 8, imgSrc: './img/image5.jpg' },
    { id: 9, imgSrc: './img/imgsli4.jpg' },
    { id: 10, imgSrc: './img/classroom.jpg' },
    { id: 11, imgSrc: './img/image6.jpg' },
    { id: 12, imgSrc: './img/games.jpg' },
    { id: 13, imgSrc: './img/transpaort.jpg' },
    { id: 14, imgSrc: './img/image2.jpg' },
    { id: 15, imgSrc: './img/digital.jpg' },
    { id: 16, imgSrc: './img/festi.jpg' },
    { id: 17, imgSrc: './img/slider5.jpeg' },
    { id: 18, imgSrc: './img/image14.jpg' },
    // Add more images as needed
  ];
    
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    
    data.forEach(item => {
      const imgDiv = document.createElement('div');
      imgDiv.classList.add('pics');
      const img = document.createElement('img');
      img.src = item.imgSrc;
      img.alt = `Image ${item.id}`;
      img.addEventListener('click', () => openModal(item.imgSrc));
      imgDiv.appendChild(img);
      gallery.appendChild(imgDiv);
    });
    
    function openModal(imgSrc) {
      modalImg.src = imgSrc;
      modalOverlay.style.display = 'block';
      modal.classList.add('open');
    }
    
    function closeModal() {
      modalOverlay.style.display = 'none';
      modal.classList.remove('open');
    }
    
    modalOverlay.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);
    



    const feedbacks = [
        {
          text: "Good school for kids as the activity based learning helps the students to understand in a better way through the conceptual things. We are very impressive by the work of Teachers by explaining the concepts in different ways.",
          imageUrl: "Images/image13.jpg",
          name: "Rajulapati Manusha",
        },
        {
          text: "Rainbow concept & play school is one of the best school.and study,cultur activies,any programe's conducting very well and my childrens are issue the study ing very good & childrens to teachers very caring any things very naice and thankyou for all stop members.",
          imageUrl: "Images/image9.jpg",
          name: "M.Sravani",
        },
        {
          text: "I love this school!  My daughter has improved a lot with their practical approach. Thanks a lot to Rainbow Concept School for encouraging our kids to think creatively and helping them succeed in society ❤️",
          imageUrl: "Images/image12.jpg",
          name: "Mana Little World",
        },
        {
          text: "Im working in this place as Mother teacher for pre primary.This place is best for pre primary sections. Good syllabus pattern, excellent teaching staff. They really take care of every child.",
          imageUrl: "Images/image6.jpg",
          name: "Syeda Shazia",
        },
        {
          text: "I'm really pleased with this school. The way they teach spoken English and encourage creative thinking is excellent. The management is great, and the faculty is top-notch. My kids are doing really well, and it makes me happy to see their performance.",
          imageUrl: "Images/image7.jpg",
          name: "Anand P",
        },
        {
          text: "The management here is excellent, and the faculty is highly qualified. Their focus on spoken English is fantastic. I'm thrilled to see how much my child has improved under their guidance. It makes me really happy.",
          imageUrl: "Images/image2.jpg",
          name: "Sravani T",
        },
        {
          text: "I am very happy regarding my kids why because they are good in spoken english and very creative ideas.",
          imageUrl: "Images/image2.jpg",
          name: "Samreen Samreen",
        },
        {
          text: "I'm delighted with my kids' progress because they're excelling in spoken English and coming up with wonderfully creative ideas. It's truly fulfilling to see their growth and development.",
          imageUrl: "Images/image2.jpg",
          name: "Janga Reddy",
        },
        {
          text: "Best school and Excell management.I have 15 years experience in other schools as incharge , I joined this school 1 year back as coordinator. I can proudly say that this school management is Best 👌.. very supportive environment. Works on quality rather than quantity.",
          imageUrl: "Images/image2.jpg",
          name: "MC. SARITHA",
        },
      ];
      
      function createFeedbackItem(feedback) {
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
      
        const feedbackName = document.createElement('p');
        feedbackName.classList.add('feedback-name');
        feedbackName.textContent = feedback.name;
      
        const feedbackText = document.createElement('p');
        feedbackText.classList.add('feedback-text');
        feedbackText.textContent = feedback.text;
      
        feedbackItem.appendChild(feedbackName);
        feedbackItem.appendChild(feedbackText);
      
        return feedbackItem;
      }
      
      const feedbackList = document.getElementById('feedback-list');
      
      feedbacks.forEach(feedback => {
        const feedbackItem = createFeedbackItem(feedback);
        feedbackList.appendChild(feedbackItem);
      });
      
      function scrollFeedbackList() {
        feedbackList.scrollTo({
          left: feedbackList.scrollLeft + feedbackList.offsetWidth,
          behavior: 'smooth',
        });
      }
      
      setInterval(scrollFeedbackList, 2000);
      





//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// function emailSend(){

// 	var userName = document.getElementById('name').value;
// 	var message = document.getElementById('message').value;
// 	var email = document.getElementById('email').value;

// 	var messageBody = "Name " + userName +
// 	"<br/> message " + message +
// 	"<br/> Email " + email;
// 	Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "ristoglobaltech.md@gmail.com'z",
//     Password : "EB77C326B1DBCEA12E8F0C988BDEA82879B8",
//     To : 'ristoglobaltech.md@gmail.com',
//     From : "ristoglobaltech.md@gmail.com",
//     Subject : "This is the subject",
//     Body : messageBody
// }).then(
//   message => {
//   	if(message=='OK'){
//   		swal("Secussful", "You clicked the button!", "success");
//   	}
//   	else{
//   		swal("Error", "You clicked the button!", "error");
//   	}
//   }
// );
// }



const form = document.querySelector("form")
const fname = document.getElementById('subject');
const email = document.getElementById('email')
const mess = document.getElementById('message')

function emailSend(){

  const bodyMessage =  `Full Name:${fname.value} <br/> Email: ${email.value} <br/>  Message: ${mess.value}<br/>`
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rainbowschool0236@gmail.com",
    Password : "C295F589C819DD7D5EC70B5BE2BF422747CC",
    To : 'rainbowschool0236@gmail.com',
    From : "rainbowschool0236@gmail.com",
    Subject : "School Form Message",
    Body :bodyMessage
}).then(
  message => alert(message)
)
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  emailSend();
})