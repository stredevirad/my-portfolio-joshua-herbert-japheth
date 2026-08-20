/* =========================
   DYNAMIC GREETING
========================= */

const greeting = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour < 12) {

    greeting.textContent = "Good Morning, I'm";

} else if (currentHour < 18) {

    greeting.textContent = "Good Afternoon, I'm";

} else {

    greeting.textContent = "Good Evening, I'm";

}


/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm =
    document.getElementById("contact-form");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");


const nameError =
    document.getElementById("name-error");

const emailError =
    document.getElementById("email-error");

const messageError =
    document.getElementById("message-error");

const formSuccess =
    document.getElementById("form-success");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const message =
        messageInput.value.trim();


    let isValid = true;


    /* Name validation */

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;
    }


    /* Email validation */

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    /* Message validation */

    if (message === "") {

        messageError.textContent =
            "Please enter a message.";

        isValid = false;
    }


    if (!isValid) {

        return;

    }


    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );


    const body =
        encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );


    formSuccess.textContent =
        "Opening your email application...";


    window.location.href =
        `mailto:joshuajapheth14@gmail.com?subject=${subject}&body=${body}`;

});


/* =========================
   JQUERY ACTIVITIES INTERACTION
========================= */

$(document).ready(function () {

    $(".activity-toggle").on("click", function () {

        const button = $(this);

        const details =
            button.siblings(".activity-details");


        details.slideToggle(250);


        if (button.text() === "Show Details") {

            button.text("Hide Details");

        } else {

            button.text("Show Details");

        }

    });

});


/* =========================
   DEV COMMUNITY API
========================= */

const articlesContainer =
    document.getElementById(
        "articles-container"
    );


fetch(
    "https://dev.to/api/articles/latest?per_page=30"
)

    .then((response) => {

        if (!response.ok) {

            throw new Error(
                "Unable to load articles."
            );

        }

        return response.json();

    })

    .then((articles) => {


        /*
         * Filter articles for technology-related topics.
         */

        const technologyArticles =
            articles

                .filter((article) => {

                    const tags =
                        article.tag_list
                            .join(" ")
                            .toLowerCase();


                    const title =
                        article.title
                            .toLowerCase();


                    return (

                        tags.includes("javascript") ||

                        tags.includes("python") ||

                        tags.includes("webdev") ||

                        tags.includes("react") ||

                        tags.includes("ai") ||

                        tags.includes("machinelearning") ||

                        tags.includes("datascience") ||

                        title.includes("javascript") ||

                        title.includes("python") ||

                        title.includes("react") ||

                        title.includes("artificial intelligence") ||

                        title.includes("machine learning") ||

                        title.includes("data science")

                    );

                })

                .slice(0, 5);


        /* No articles found */

        if (
            technologyArticles.length === 0
        ) {

            articlesContainer.innerHTML =
                "<p>No suitable technology articles were found.</p>";

            return;
        }


        let html =
            '<div class="article-list">';


        /*
         * Generate article cards.
         */

        technologyArticles.forEach(
            (article) => {

                html += `

                    <article class="article-item">

                        <h3>
                            ${article.title}
                        </h3>

                        <p>
                            ${
                                article.description ||
                                "Technology article from the DEV Community."
                            }
                        </p>

                        <a
                            href="${article.url}"
                            target="_blank"
                            rel="noopener noreferrer">

                            Read Article

                        </a>

                    </article>

                `;

            }
        );


        html +=
            "</div>";


        articlesContainer.innerHTML =
            html;

    })


    .catch(() => {

        articlesContainer.innerHTML =
            "<p>Unable to load technology articles right now.</p>";

    });