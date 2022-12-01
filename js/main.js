//alert("Hola!");

/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates
    unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item 
    (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    Image (of specific coffee)
    all tag (identifies type of coffee)
    description (of this type of coffee)
    weekday
    color(supporting image)

    The unique color could affect the background HTML, or an element on the page for each day of the week. 
    All of the above must occur within one page.

*/

function coffeeTemplate(coffee){
    return `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>, ${coffee.desc}
            </p>`;
}

let myDate =new Date();
let today =myDate.getDay();
let coffee ="";

switch(today){
        case 1:
            today = "Monday";
            coffee= {
                color:"pink",
                name:"Bubble Tea",
                pic:"bubble-tea.jpg",
                alt:"A picture of a bubble tea",
                day:"Monday",
                desc:`I like me some bubble tea!`
            };
        break;

        case 2:
            today = "Tuesday";
            coffee= {
                color:"brown",
                name:"Caramel Latte",
                pic:"caramel-latte.jpg",
                alt:"A picture of a bubble tea",
                day:"Tuesday",
                desc:`It's cold so a Caramel Latte sounds good right now!`
            };
        break;

        
        case 3:
            today = "Wednesday";
            coffee= {
                color:"black",
                name:"Drip",
                pic:"drip.jpg",
                alt:"A picture of a drip coffee",
                day:"Wednesday",
                desc:`Drip Coffee is cool!`
            };
        break;

        case 4:
            today = "Thursday";
            coffee= {
                color:"gold",
                name:"Frappaccino",
                pic:"frappaccino.jpg",
                alt:"A picture of a frappaccino drink",
                day:"Thursday",
                desc:`I love frappaccino drinks!`
            };
        break;

        
        case 5:
            today = "Friday";
            coffee= {
                color:"purple",
                name:"Pumpkin Spice Latte",
                pic:"pumpkin-spice-latte.jpg",
                alt:"A picture of a pumpkin spice latte",
                day:"Friday",
                desc:`Pumpkin Spice Lattes are the best!`
            };
        break;

        default:
            alert("Something went wrong!");

}




console.log(coffee);

document.getElementById("coffee-template").innerHTML=coffeeTemplate(coffee);
