# Flarie SWE Frontend test

## Prerequisites:

- React
- TypeScript
- StyledComponents
- Jest

## Instructions

- Run the app and check the components. The base design is already implemented.
- Write test cases for the base design, the test statements are already written
- Make all the components responsive (follow the test-case statements).
- There should not be any breakpoints while implementing responsiveness, the design should be proportional for all screen/viewport size. For example,
  - The game container component (GameBox) has a max width and max height 360px x 640px (9/16 ratio), if the viewport width is less than 360px or greater than 640px, the container should update according (if the viewport is 320px x 800px then GameBox should be 320px x 569px, or for 800px x 600px, GameBox should be 337.5px x 600px)
- Fonts should be responsive too, all the config values are provided assuming the GameBox is 360px x 640px, so when it's smaller, the fonts, border-radius etc should updated respectively.
- Updating all the test cases to make sure the responsiveness is working is highly appreciated.

## How to run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). So follow create-react-app's doc.
