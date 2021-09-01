![Quizz-Pro]() to add link to website

# Quizz-Pro

## Purpose
This website was created to provide light-hearted entertainment for users through the medium of online quizzes.  The user has the option of entering a username if they so wish.  The user can also choose not to answer every question, as their intent may just be to learn where a particular quote originated from, rather than a test of their knowledge.
Quiz content comprises quotes from the movies made famous by the film and/or the actor.
The website is currently comprised of two quizzes:
* Famous Movie Quotes - this quiz has an easier difficulty level, as it comprises well known quotes from popular movies/films.
* Famous Actor Quotes - this quiz has a higher difficulty level, as quotes are attributed to the actor that said them, rather than to the movie/film. This quiz also has a year displayed in brackets after the quote - eg: (1951) - as there may have been later releases of the particular movie from which they are taken.

The website pages are as follows:
* Home page
* Famous Movie Quotes Quiz
* Famous Actor Quotes Quiz
* Contact Us
* Terms of Service

The live project can be found here ...

## Mockup of the Quizz-Pro website

## User Experience Design

### User Stories
#### New User Goals
* As a new user, I want to immediately understand the main purpose of the website
* As a new user, I want information on what services they offer
* As a new user, I want to be able to easily contact the organisation
* As a new user, the navigational layout must be easy to understand and follow
* As a new user, I want to be able to view the website on all device types
* As a new user, I want to see the 'terms of service' applicable to Quizz-Pro
##### New User Functionality Goals
* As a new user, I want to see my overall results from a quiz, along with correct answers if needed
* As a new user, I want to complete the quiz against a countdown timer
* As a new user, I want to be able to 'reset' the quiz and start again, if I should so choose
* As a new user, I would like the option of entering a username.

#### Regular User Goals
* As a regular user, I want to be able to easily contact the organisation
* As a regular user, I want the option of quizzes with increasing levels of difficulty

### Structure of the Quizz-Pro website

#### Website Responsiveness
* CSS @media queries have been used to ensure the website is viewable across laptops/desktops, tablets and mobile phones. The size and layout of both text content and images will adapt according to the viewing device to ensure readability and quality.
* All features on each web page are fully accessible and responsive across all viewing devices (laptops/desktops, tablets and mobile phones). 
* This feature fulfills the user story: *'As a new user, I want to be able to view the website on all device types'*. 

#### Navigation Options
* This feature is intended to enable the user to quickly and easily navigate between web pages without having to utilise the browser 'back' button.
* Present on all five pages of the website, the fully navigational menu links, present either on the bottom of each page, or in the form of buttons provides access to other pages in the website.
* The 'Actor Quotes Quiz' page and the 'Movie Quotes Quiz' page have their 'Home Page' link at the top of the page to allow for quick return to the Home Page, should the user for example, change their mind about which quiz they wish to complete.
* The 'Actor Quotes Quiz' page and the 'Movie Quotes Quiz' page have a link in the form of a button at the bottom of the page, which provides a link to another quiz.
* Links to the 'Actor Quotes Quiz' page and the 'Movie Quotes Quiz' page have been provided on the home page in the form of buttons to allow for higher visibility and immediate access to the different quizzes.
* This feature fulfills the user stories: *'As a new user, the navigational layout must be easy to understand and follow'* and *'As a new user, I want information on what services they offer'*.

#### Footer Element
* Present on all five pages of the website, the footer contains navigational links to the rest of website.
* This feature fulfills the user stories: *'As a regular user, I want to be able to easily contact the organisation'* and *'As a new user, I want to see the 'terms of service' applicable to Quizz-Pro'*.

#### The 'Home' Page or Landing Page
* This page is intended to provide an at-a-glance view of the main purpose of the website - the option of completing online quizzes.
* Links are provided within the page in the form of high visibility buttons to take the user directly to the 'Actor Quotes Quiz' and the 'Movie Quotes Quiz' pages.
* The user has the option of entering a username should they choose to.
* Rules for playing the quizzes are provided on this page.
* This feature fulfills the user stories: *'As a new user, I want to immediately understand the main purpose of the website'* and *'As a new user, the navigational layout must be easy to understand and follow'* and *'As a new user, I would like the option of entering a username'*.

#### The 'Actors Quote Quiz and the 'Movie Quotes Quiz' pages
* These two pages each contain a different quiz, but the layout and functionality are identical in both pages.
* Users complete the quiz against a countdown timer set to 60 seconds.  When the timer runs out, a message is displayed telling the user that the quiz will automatically 'reset' within 4 seconds. The user is unable to continue until the quiz has reset.
* Users can choose to 'reset' the quiz themselves, should they so wish - by clicking the 'reset' button present underneath the 10 questions.
* A 'submit' button allows the user to submit their chosen answers.  Upon submitting a results container will display any question numbers that were answered incorrectly along with its particular correct answer.  An overall score out of 10 is also displayed.
* This feature fulfills the user stories: *'As a new user, I want to see my overall results from a quiz, along with correct answers if needed'*, and *'As a new user, I want to complete the quiz against a countdown timer'*, and *'As a new user, I want to be able to 'reset' the quiz and start again, if I should so choose'*.

#### The 'Contact Us' page
* This page provies information on how the user can contact the organisation, through the provision of an email address.
* All present on this page is an 'About Us' section providing details on the organisation.
* This feature fulfills the user story: *'As a new user, I want to be able to easily contact the organisation'*.

#### The 'Terms of Service' page
* This page provides the organisation's legal wording for the purposes of conducting a online quiz service.
* This feature fulfills the user story: *'As a new user, I want to see the 'terms of service' applicable to Quizz-Pro'*.

### Design of the Quizz-Pro website

#### Colour Scheme
The colour palette chosen consists of three basic colours: #ADD8E6(light blue); #FFC0CB (pink); and #ADFF2F (greenyellow).  The body text is mostly #FFFFFF (white) and the background is #000000 (black).  The 'overlay' message block is comprised of a css gradient with the colours:  #ADD8E6(light blue); #FFC0CB (pink); and #C0C0C0 (silver).  The colours were chosen to compliment each other and provide the necessary contrasts.

#### Fonts
The logo and the logo byline are using **Windsong**; all headings are using **Mitr**; and the body text is using **Comfortaa**.  The back-up font is **sans-serif**.  Fonts were downloaded from **Google Fonts**.

#### Imagery
Images for the website have been downloaded from **Pexels** and compressed and pixelated for a fast-loading website, using **tinyjpg**.

#### Limitations
This website has been designed to not retain user information. ???...

#### Features
* A countdown timer set to 90 seconds has been added for the 'Actor Quotes Quiz' and the 'Movie Quotes Quiz' pages.  If the timer expires before the user completes the quiz, it will automatically reset (reload) the page, move to the top of the page and restart the timer.
* On the 'Actor Quotes Quiz' and the 'Movie Quotes Quiz' pages, a congratulatory message will display should the user achieve a 10/10 score.

## Technologies

* HTML - the structure of this website project uses HTML as the main language.
* CSS - the styling of this website encompasses custom written CSS.
* Javascript - website interaction provided by custom written Javascript.
* [Google Fonts](https://fonts.google.com/) - utilised for the logo and byline (Windsong); the headings (Mitr); and the body text (Comfortaa).
* [GitHub](https://github.com/) - hosting site for storage of source code for the website and [Git Pages](https://pages.github.com/) for the deployment of the website.
* [Git](https://git-scm.com/) - used as version control software to commit and push code to a GitHub repository where all source code is located.
* [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) - these are built in developer tools used to inspect page elements (eg. responsive design); debug issues; and test different CSS styling options; and the Lighthouse Report.

## Testing
* Testing will be performed to check for back-end functionality (Javascript), as well as visual effects and website layout (html and css).
* Testing will be performed to check for compatibility across three web browsers (Google Chrome; Firefox; and Opera) 
* Responsive design will be tested across the different screen sizes: desktops/laptops (1024px); tablets (min-width 426px to max-width 769px); mobiles (to a max-width of 426px); and large laptops (min-width 1025px to max-width 1441px).
* All navigational links should direct to the correct html web page as per their names.  The exception here is the 'Home' page, as it will redirect to 'index.html'.

### Test Cases
Test cases can be found [here](..)

### Code Validation
All HTML pages were run through the [W3C Markup Validation Service](https://validator.w3.org/) and showed no errors.<br>
The CSS stylesheet was run through the [CSS Validation Service-Jigsaw](https://jigsaw.w3.org/css-validator/) and showed no errors.
<br>
The Javascript file was run  through the [JSHint](https://jshint.com/) and showed ...

### Lighthouse Report
...insert screenshots for each page

## Deployment
### Project Creation
The project was created using GitHub and choosing a new [repository](..).<br>
The following terminal commands were used during this project:
* git add . - this command adds a change in the working directory to the staging area.
* git commit -m "*message*" - this command details the change/s made in the 'message' section and then commits the changes to the local repository.
* git push - this command is used to push all changes to the GitHub repository.

### Using GitHub Pages
* Navigate to the GitHub [repository](..).
* Select 'Settings'.
* Scroll down to 'GitHub Pages'.
* Select 'Main' branch as the source and click 'Save' button.
* Select link to go to live published page.

## Credits
### Code
* The private collaboration and knowledge sharing SaaS platform [Stack Overflow](https://stackoverflow.com/) was an invaluable resource for general coding queries.
* Use was made of Code Institute tutor support for help with persistent coding issues.

### Content
* Inspiration was taken from the concept of online quizzing.
* Legal wording for the 'Terms of Service' page was taken from the website [Fun Quizzes](https://www.funquizzes.uk/tos/) 
* Ideas for quote questions were taken from the website [AFI's 100 years](https://www.afi.com/afis-100-years-100-movie-quotes/).
