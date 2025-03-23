const form = document.getElementById("age_form");
const name_input = document.getElementById("name");
const age_input = document.getElementById("age");
const msg = document.getElementById("msg");
const body = document.body;
const sbtn = document.getElementById("sbtn");
const h1 = document.getElementById("h1");

function get_message(name, age){
    let message = "";
    let bg_img = ""; 
    let text_color = "";
    let title_text = "";
    
    if(age > 0 && age <= 12){
        message = "You are a little explorer, full of curiosity!"
        bg_img = "https://theglobalmontessorinetwork.org/wp-content/uploads/2022/07/Blog-Cover-Picture.jpg";
        text_color = "#000000";
        title_text = "#000000";
    }
    else if(age >= 13 && age <= 17){
        message = "Your teenage years are the time to dream big and learn fast!"
        bg_img = "https://thumbs.dreamstime.com/b/schoolboy-looking-his-dream-job-elementary-school-student-carrying-bag-using-binocular-to-cloud-sky-76693482.jpg";
        text_color = "#000000";
        title_text = "#000000";
    }
    else if(age >= 18 && age <= 35){
        message = "You are the strongest soul. Your wisdom and energy make you a true go-getter!"
        bg_img = "https://brightspotcdn.byu.edu/dims4/default/10901a4/2147483647/strip/true/crop/1911x1280+0+0/resize/840x563!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2Fe2%2F46%2F23b216666957db3ac46403f2c292%2Fstudents-on-campus-1911x1280.jpg";
        text_color = "#ffffff";
        title_text = "#000000";
    }
    else if(age >= 36 && age <=60){
        message = "Your experience and knowledge inspire the younger generation!"
        bg_img = "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/images/panoramic/GettyImages-688025115_529905_gzkvld.jpg";
        text_color = "#8b0000";
    }
    else if(age > 60){
        message = "You are a treasure of wisdom and experience.<br> Like an old and strong tree, you provide shade, guidance and teach life's greatest lessons!"
        bg_img = "https://media.istockphoto.com/id/953772938/photo/close-up-of-senior-hands-giving-small-plant-to-a-child.jpg?s=612x612&w=0&k=20&c=01eF3bk2nPyhDoG-0pODLdlQf18oWd1Y5mU3iKvRPho=";
        text_color = "#000000";
    }
    else {
        message = "there is an error. So, Please enter a valid age"
        bg_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDN-GUt3M5JnwVvUwmlTWjFZ-YksnDKWuHw&s";
        text_color = "#ffffff";
        title_text = "#ffffff";
    }
    return {text: `Hey ${name}, your age is ${age}.<br> That means ${message}`, title_text, bg_img, text_color};   
   
}

form.addEventListener("submit", function(e){
    e.preventDefault();


const name = name_input.value.trim();
const age = parseInt(age_input.value);

const { text, title_text, bg_img, text_color } = get_message(name, age);

h1.style.color = title_text;
msg.innerHTML = text;
msg.style.color = text_color;
body.style.backgroundImage = `url('${bg_img}')`;
body.style.transition = "background-image 0.8s ease-in-out";
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";

});