## Welcome to my personal project Task Notes!!.

I am working on building out a simple todo application. I am using React as the main framework with Redux for statemangement. I am connecting to a backend I created which you can find here
https://github.com/jonathan-portillo/todo-backend-/tree/main
Link to the website is here https://task-notes-omega.vercel.app/
Prior commits can also be found here https://github.com/jonathan-portillo/TODO

## Status

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
