

// Define a function to handle submission form

document.getElementById('resume_form')?.addEventListener("submit", (event) => {
    event.preventDefault()


const usernameElement = document.getElementById("username") as HTMLInputElement;


// Type asserting

const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone_number = (document.getElementById('phone_number') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLTextAreaElement).value;
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as HTMLInputElement).value;


//** 

const username = usernameElement.value;
const uniquePath = `resume/${username.replace(/\s+/g, '_' )}_cv.html`

// Create output Dynamically

const resumeHTML = `
<h2><strong>Name:</strong> <span id = 'edit name' class = "editable"> ${name} </span></h2>;
<p><strong>Email:</strong> <span id = 'edit email' class = "editable">;
<p><strong>Phone Number:</strong> <span id = 'edit phone_number' class = "editable">${phone_number}</span></p>;

<h3>Education</h3>
<p id = 'edit education' class = "editable">${education}</p>;

<h3>Experience</h3>
<p id = 'edit experience' class = "editable">${experience}</p>;

<h3>Skills</h3>
<p id = 'edit skills' class = "editable">${skills}</p>`;



const downloadLink = document.createElement('a');
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeHTML);
downloadLink.download = uniquePath;
downloadLink.textContent = "Download your Resume";

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeHTML;

resumeOutputElement.appendChild(downloadLink);

    makeEditable();
}
});

function makeEditable() {
    const editableElements = document.querySelectorAll('editable')
    editableElements.forEach(element => {
        element.addEventListener('Click', function() {
            const newElement = element as HTMLElement;
            const newValue = newElement.textContent || "";

        // Replacing content
        if(newElement.tagName === "P" || newElement.tagName === "SPAN") {
            const input = document.createElement('input')
            input.type = 'text'
            input.value = newValue
            input.classList.add('editing input')

            input.addEventListener('blur', function (){
                newElement.textContent = input.value;
                newElement.style.display = 'inline';
                input.remove();
            })


            newElement.style.display = 'none'
            newElement.parentNode?.insertBefore(input, newElement)
            input.focus
        }
             
        })
    })
}

