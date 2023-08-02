# Getting Started with Counter React App

## Introduction

1. Clone the repository:
   git clone https://github.com/nimesha-edirisinghe/react-counter-assessment.git
   cd react-counter-assessment

2. Install dependencies:
   npm install

   # or

   yarn install

3. Start the development server:
   npm start

   # or

   yarn start

   The development server will compile the React TypeScript code and open the app in your default web browser at http://localhost:3000/

## Testing

    To run the tests for the Counter component, use the following command:

    npm test

    # or

    yarn test

# Test cases

1. Renders initial count as 0: This test checks whether the initial count displayed in the component is 0.

2. Increases the count when the "+" button is clicked: This test verifies that the count increases by 1 when the "+" button is clicked.

3. Decreases the count when the "-" button is clicked: This test verifies that the count decreases by 1 when the "-" button is clicked.

4. Does not increase the count beyond the maximum limit of 10: This test ensures that the count does not exceed the maximum limit of 10. It clicks the "+" button 11 times and checks if the count stays at 10, and an alert message is displayed.

5. Does not decrease the count below 0: This test ensures that the count does not go below 0. It clicks the "-" button until the count becomes -1 and checks if the count stays at 0, and an alert message is displayed.

6. Resets the count to 0 when the "Reset" button is clicked: This test checks whether the count is reset to 0 when the "Reset" button is clicked. It first increases the count to 5, clicks the "Reset" button, and then checks if the count is back to 0.

## Deployment

If you want to deploy the app, use the following command:

npm run build

# or

yarn build
