JILATIN - Single Page application to manage ice cream stock

Tech : Node.js, React.js

this app is my playground to improve my skills in React.js, Node.js, and Testing

Node.js
- Express cannot receive and parse form data that's why we need another module called Multer

React.js
- Have a try on 'render props' by replacing the existing code of <Modal/>
- Have a try on Async/Await to replace Promise. It looks shorter but in my case there's still no big difference
- Create Reducer Helper for updating item in array and updating object
- Create actions creator helper so I don't to create object literal action creator over and over again
- Create reusable table using render props technique
- Change Modal component to use Portals, so that it can render wherever we want in the DOM, outside our component declaration
- [IMPORTANT] children do not update based on PROPS CHANGE. in this case we can use componentDidUpdate (ex: InfoBox)

Problem
1. Database not updated when I send PUT request. Actual request is not sent but I always received empty response from OPTIONS method instead
1.-FIX : return success flag when actual request received, then the client update the data when the success flag is true