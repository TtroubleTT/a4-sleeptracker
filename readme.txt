--Readme document for *Taylor Clark*, *clarktm1@uci.edu*, *60581941*--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?
20 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)
https://ionicframework.com/docs/angular/navigation
https://ionic.io/ionicons
https://ionicframework.com/docs/components
https://stackoverflow.com/questions/35352486/turn-typescript-object-into-json-string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
https://developer.mozilla.org/en-US/docs/Web/CSS


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
Nobody.



5. Is there anything special we need to know in order to run your code?
The specific capacity command in class wasn't working I had to use specifically
npm install @capacitor/preferences@7

and then the sync command didn't work until I ran
npm run build


--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
I designed with college students in mind. I specifically in my sleepinesss answers included studying and in class
as options and also designed a more dark mode app with the expectation students are up late.


7. Did you design your app specifically for iOS or Android, or both?
I designed with IOS in mind  by using models in most of my information they give and using a key color (purple) for denoting interactive elements.


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?
They can select the default date to get a modal of a calendar and scroll screen. This was an easy way for a user to select stuff out of predefined answers to stop user input error.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?
They click the choose sleepiness level which brings up a modal of the 7 Stanford sleepiness options that they can select and then confirm.
Having the modal makes their eye drawn to it, and they can easily select out of easy to pick values and then confirm even after changing their answer.


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?
The history of all logged data is on the home page together this is because upon opening the app it gives useful information.
I group them together so they can more easily correlate how many hours of sleep might affect their sleepiness.


11. Which feature choose--using a native device resource, backing up logged data, or both?
backing up logged data.


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
N/A


13. If you backed up logged data, where does it back up to?
It backs up to Preferences.


14. How does your app implement or follow principles of good mobile design?
It has a useful initial view by showing off the history and showcases at the top to draw the eye of the last nights sleep.
There is many back buttons, and it uses IOS standard models and purple as an interactions color.
There is toast pop-ups when you put in data that doesn't make sense and the way they select data leaves little room for bad data.