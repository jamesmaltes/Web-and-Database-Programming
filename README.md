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
![cryohome](https://user-images.githubusercontent.com/102160505/168894814-3915380a-ffac-4d67-9670-7646243ff0a3.png)

**Home page with user logged in. Notice the nav bar changed to links for Home, Profile, Logout, and Reserve a Spot:**
![cryohomelogged](https://user-images.githubusercontent.com/102160505/168894920-d8791110-b02a-45ff-86a7-ec1de56cc98d.PNG)

<pre>
</pre>

**Register page:**
![cryoregister](https://user-images.githubusercontent.com/102160505/168895001-45af5e48-19b3-4452-b0cd-599d8fa53fe4.PNG)


<pre>
</pre>

**Login page:**
![cryologin](https://user-images.githubusercontent.com/102160505/168895025-21e4f4a6-9841-48e2-9363-7fc80c0d9154.PNG)


<pre>
</pre>

**Profile page:**
![cryoprofile](https://user-images.githubusercontent.com/102160505/168895044-72d0f4a2-58c4-4eb9-9b14-69b1488ef4aa.PNG)


**Profile page once "Edit Info" is clicked:**
![cryoedit](https://user-images.githubusercontent.com/102160505/168895082-c8d0d01e-5fe2-42a0-8e84-19768aedb1ce.PNG)

**Profile page once "Edit Info" is clicked:**
![cryodelete](https://user-images.githubusercontent.com/102160505/168895441-94857dd4-903a-4abc-ad87-30c20b412591.PNG)


<pre>
</pre>

**Reservation page:**
![cryoreservation](https://user-images.githubusercontent.com/102160505/168895096-1b9a229d-800a-4047-8c14-f043b525be66.PNG)


<pre>
</pre>

**Page for adding messages:**
![cryolabel](https://user-images.githubusercontent.com/102160505/168895122-350ebc57-dcc4-4d45-a3c8-8b0e7a547967.PNG)


**Added messages:**
![cryoaddmessage](https://user-images.githubusercontent.com/102160505/168895161-8b84d0c1-7ea8-4146-96ad-23160da477a2.PNG)


**Typed message to replace initial message:**
![cryoeditmessage](https://user-images.githubusercontent.com/102160505/168895210-24f93a97-cf9c-4dfb-b4e6-17c1be6d0439.PNG)


**Message replaced:**
![cryoreplaced](https://user-images.githubusercontent.com/102160505/168895282-859e83d5-bb68-41d4-ab5e-6edba8a6ec90.PNG)


**Message deleted:**
![cryodeletemessage](https://user-images.githubusercontent.com/102160505/168895322-de98e30b-348b-4e8f-a2b7-2e0b79c8cbb6.PNG)
