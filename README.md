## Welcome to my personal project Task Notes!!.

I am working on building out a simple todo application. I am using React as the main framework with Redux for statemangement. I am connecting to a backend I created which you can find here
https://github.com/jonathan-portillo/todo-backend-/tree/main
Link to the website is here https://task-notes-omega.vercel.app/
Prior commits can also be found here https://github.com/jonathan-portillo/TODO

## HOW TO DEPLOY ON YOUR OWN LOCAL MACHINE

1. Clone repository. Run `git clone https://github.com/jonathan-portillo/todo-frontend-.git`
2. Run `npm i` to update packages that need updating.
3. In your terminal run npm start, this will open up `localhost:3000`
4. You need to also clone the backend `https://github.com/jonathan-portillo/todo-backend-/tree/main`
5. Repeat step 2 in the backend folder.
6. Run `npm run server` in your terminal this well get the backend running for your application.
7. Have fun!

## Status
- Issues implementing a delete button that toggles delete option on all components. 
- Ran into a few issues moved to 8/25 
- Looking to shift from css to styled components. 
- Deciding on a new color scheme to have more engagability.
- Started wifeframing a few new styles. Might implement a way to toggle between list view and notes view to add more user usability.
- Aiming to have everything completed by end of next week 8/18/23
- Bugs fixed. 95% of main features are running with no issues. Next focus is to implement a universal delete button that sets that once clicked allows the delete buttons to be enabled in components. After that our main focus is going to be usablity and accessiblity. Device view points are next, user interactions are important. Then I can deploy the final version of app. Its been a long time coming!
- Accidentally pushed commit with bugs. currently working on fixing bugs
- Forgot to mention next step is to update the notes of the task. Hopefully it isnt as tedius as it was to update the title. I have a bit of perspective this time around.
- I can offically update titles. It looks a bit sloppy but it works for just need to do some clean up on styling. While I was at it I fixed the flex box issue with the note boxes only going straight down the page and not wrapping. That's was a simple fix, looking away at the code and coming back is what really helped out there.
- Updating tasks work, now updating notes
- Started on working on updating tasks and notes
- Found a bug when it came to displaying notes, which was fixed through the reducer. I added a Modal whenever you click a create new button it prompts a form. Did a ton of clean up and file scaffolding it was a bit of a mess tbh. Working on styling the dashboar, the boxes for the notes have been created. Need to find a way to properly display the tasks, pagnation? Scrolling box? There are a few ways I can approach this. Also I have to be more careful making my commits, did git add . without realize on my last commit. Luckily they were all revolved around styling so not too bad.
- Fixed login rerendering and did a bit of refactoring, accidentally made on big commit without updating each commit message. In short I now have the store to check login creds so if page gets reset and resets state the app will know if the user is logged in or not helping with conditional rendering. Log out is now in the initial state, and a few changes with conditional rendering in the nav.
- Decided im going to stary stlying componenents I found alot of inspiriation from dribbble in the direction i want to go
- Alot to update, notes are properly displaying alongside adding conditional rendering, so that there is only one note added to each task while checking to see if there are any notes, if none then it will give the option to create a new note with the input. Was able to propely connect everything to the store, got alot of progress. I have a list of things I want to get done prior to styling. I need to create a way for users to update their notes while deleting them aswell as updating the titles. I also need to add a few more things like updating the state when logging in so that the user is routed to the dashboard. There may be a reason to just start styling now since updating really affect much other than adding an update pencil into the components.
- Went back to the drawing board, missed alot of things that was breaking the notes. Now I just need to make sure that I am properly submitting information to the API.
- New issue on notes, might have to do a bit of refactoring
- Resolved issue now only users notes are showing. Now need to allow for updating and deleting notes.
- For some reason, When creating a Task the notes from prior users are showing, trying to debug to figure out why. Last issue to hurdle over and then design is going to be a main priority.
- Alot of progress tonight, fixed issue with components not rerendering on submits. I complely missed updating allTask state. Created a delete button for my tasks. All thats really left now is to make sure that the descriptions are functioning, need to connect noteDescription to global state.
- Doing a bit of brain storming. Trying to figure out the design of the dashboard.
- Can now display all tasks created on dashboard. Next will be implementing fuctionality and working on rerendering pages when submitting a new task.
- Fixed issue with calling on todo_title end points. Next is going to be displaying a list of those titles.
- Created new components for Task Notes, going to return to log in route issue later. I want to focus on functionality for now. Having issues posting a new title however. Going to revist tomorrow after some rest.
- Created a log out button, however having issues routing on handleSubmit to a private route. Once I figure that out straight to notes functionality.
- Finished connecting log in and sign up to backend. Next I'm looking to add a few functions for functionality. Logging in will send to dashboard so with signing up. Also planning on adding verification, ex. wrong password/username, username already exists. Also need to create a PrivateRoute for dashboards. Ensure that users are logged in to even access that page.
- Finished styling landing page and sign up page. Connect Repository to have a running link https://task-notes-omega.vercel.app/ . Next step is to connect backend auth to front end so that we can have a working log in and sign up page.
