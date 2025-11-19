In order to run this program, you will need to do the following:

pip install flask
pip install flask-cors
npm install --save react-spinners
npm install react-cookie

Add "<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>" to your public index.html

Make sure that the backend Flask application is running before the React application starts

In this program you will see a very basic example of why react-cookies are insecure and should not be relied on for things such as signing in, instead, make use of flask sessions to store the currently logged in userID