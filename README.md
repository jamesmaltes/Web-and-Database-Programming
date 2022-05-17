**<h1>Decription of Web Application:</h1>**

For my project in Web and Database Programming, I want to make a website based on the sci-fi principle of cryonics, or the freezing of people after their death in the hopes that they can be revived sometime in the future.  This website will allow people to sign up for an account and reserve a spot so that they can be frozen at the time of their death.  

I have decided to change the app to create a "reservation" as a sort of log to indicate that a person wishes to encapsulate themselves after death.  

This person has to have a profile before they can create a reseration.

Family and friends may log back into the initial account to write "messages" on this reservation to this person in the hopes that if they are revived somewhere down the line, they may be able to view the messages.
<pre>
</pre>

**<h1>Current Bugs / Issues:</h1>**
If a profile is attemped to be deleted before all reservations and messages are deleted, there will be an error due to the child rows (reservations, labels) in SQL referencing the parent row (users).

Every time the link "Reserve a Slot" is pressed no matter if the user has a reservation already, they will be taken to "reservation.html".  They must click on "reserve now:" again in order to view the messages if they leave the "labels.html" page.

Blank messages can be added without any text content.

The "edit message" button applies the edited content from the text input box, which is always visible.  More intuitive functionality would be to have the text box appear *after* the edit button is pressed, then have another "apply edit" button to apply the edit to the message.
<pre>
</pre>

**<h1> List of all Technologies, Frameworks, and Programming languages Used</h1>**

**<h2>Front End:</h2>**
HTML and CSS were used for website user interface design and styling, while Javascript was used to dynamically create forms and retrieve information from inputs based on form submission.

**<h2>Back End:</h2>**
Node.js, Express.js were used along with mySQL for database management and retrieval of database information to create tables for users, reservations, and labels (messages).
<pre>
</pre>

**<h1>Final ERD Screenshot:</h1>**
![Image]()

<pre>
</pre>

**<h1>Steps to get website to work:</h1>**
**In VSCode Terminal type:**\
npm install express\
npm install dotenv\
npm install mysql2

**Create a .env file with the following content:**\
MYSQL_HOST = "localhost"\
MYSQL_USERNAME = "your_username"\
MYSQL_PSWD = "your_password"\
MYSQL_DB = "database_name"

**In MySQL Command Client type:**\
CREATE DATABASE database_name;\
USE database_name;

**In VSCode Terminal type:**\
npm run dev

**In Browser:**\
Type in "localhost" and press enter.  Website should start up at the home page (home.html).

<pre>
</pre>

**<h1>Website Screenshots</h1>**

**Home page without a logged in user. Note the nav bar has links for Home, Login, and Register:**
![Image]("C:\Users\James\Pictures\Screenshots\cryohome.png")

**Home page with user logged in. Notice the nav bar changed to links for Home, Profile, Logout, and Reserve a Spot:**
![Image]("C:\Users\James\Pictures\Screenshots\cryohomelogged.PNG")

<pre>
</pre>

**Register page:**
![Image]()

<pre>
</pre>

**Login page:**
![Image]()

<pre>
</pre>

**Profile page:**
![Image]()

**Profile page once "Edit Info" is clicked:**
![Image]()

<pre>
</pre>

**Reservation page:**
![Image]()

<pre>
</pre>

**Page for adding messages:**
![Image]()

**Added messages:**
![Image]()

**Typed message to replace initial message:**
![Image]()

**Message replaced:**
![Image]()

**Message deleted:**
![Image]()