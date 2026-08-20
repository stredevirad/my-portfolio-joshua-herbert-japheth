# Joshua Herbert Japheth - Personal Portfolio

Personal portfolio website developed for the **Web Programming** course at **Rajagiri School of Engineering & Technology (Autonomous)**.

## Student Details

- **Name:** Joshua Herbert Japheth
- **Programme:** B.Tech Artificial Intelligence and Data Science
- **Institution:** Rajagiri School of Engineering & Technology
- **Repository:** https://github.com/stredevirad/my-portfolio-joshua-herbert-japheth
- **Live Website:** https://stredevirad.github.io/my-portfolio-joshua-herbert-japheth/

---

## Purpose

This website presents my personal profile, education, technical skills, projects, activities and contact information.

The website is being progressively developed according to the three phases of the Web Programming Personal Website Assignment:

1. Phase 1 - HTML5 and CSS3
2. Phase 2 - JavaScript, DOM, jQuery and External Data
3. Phase 3 - React

---

## Website Sections

### Home

Contains:

- Welcome message
- Dynamic greeting
- Profile photograph
- Brief introduction

### Profile

Contains:

- Short biography
- Career goals
- Personal interests

### CV

Contains:

- Education
- Skills
- Certifications
- Academic/professional experience

### Education & Technical Expertise

Contains:

- Degree information
- Institution
- Programming languages
- Database technologies
- Web technologies
- Data science tools
- Development tools

### Projects

Contains a minimum of two projects with descriptions, technologies and relevant links/images.

### Activities

Contains information about academic, technical and competitive activities.

Current activities:

1. **Hive Night Hackathon**
   - Organization: IEDC & IIC
   - Date: October 2024
   - Type: Hackathon
   - Highlights:
     - Rapid prototyping and development
     - Team collaboration under pressure
     - Innovative problem-solving
     - Technology integration
   - Skills developed:
     - Team Leadership
     - Rapid Development
     - Innovation
     - Presentation

2. **Game Craft Competition**
   - Organization: Techkshetra 2024
   - Date: 2024
   - Type: Competition
   - Highlights:
     - Game design and mechanics
     - Creative storytelling
     - Technical implementation
     - User experience design
   - Skills developed:
     - Unity Development
     - Game Design
     - C# Programming
     - Creative Thinking

### Embedded Content

Contains an HTML5 iframe embedding a Rajagiri School of Engineering & Technology location map.

### My Articles

Retrieves recent technology-related articles from the DEV Community public API using `fetch()` and displays article titles as clickable links.

### Contact

Contains:

- Name field
- Email field
- Message field
- Preferred contact method
- Client-side form validation
- LinkedIn link
- Email link
- GitHub link

---

## Technologies Used

### Phase 1

- HTML5
- CSS3
- Semantic HTML
- Flexbox
- CSS Grid
- Responsive media queries
- HTML tables
- HTML forms
- iframe embedding

### Phase 2

- JavaScript
- ES6 syntax
- DOM manipulation
- `getElementById()`
- `querySelector()`
- `.textContent`
- `.value`
- `addEventListener()`
- Conditional statements
- Loops
- Functions
- Arrays
- Objects
- Arrow functions
- Template literals
- Client-side form validation
- jQuery
- `fetch()`
- REST API
- JSON data handling
- DEV Community API

---

## Phase 2 Features

### Dynamic Greeting

The Home section displays:

- Good Morning
- Good Afternoon
- Good Evening

depending on the current time.

### Contact Form Validation

The form validates:

- Name
- Email
- Message

Validation messages are displayed dynamically using JavaScript and DOM manipulation.

### Interactive Activities

jQuery is used in the Activities section to expand and collapse activity details without reloading the page.

### DEV Community API

The project retrieves recent articles from the DEV Community public API using `fetch()`.

The returned data is processed and filtered for technology-related content before displaying five article results.

### Embedded Content

An HTML5 `<iframe>` is used to embed the Rajagiri School of Engineering & Technology map.

---

## Project Structure

```text
my-portfolio-joshua-herbert-japheth/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── images/
    ├── profile.png
    ├── project1.png
    └── project2.png