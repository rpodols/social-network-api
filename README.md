# Social Network API - Challenge 18

## Description
This project is the eighteenth challenge of the coding bootcamp.

User Story: As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data. 

Starting from scratch, this challenge required writing  code to do the following:
*   GIVEN a social network API

        - WHEN I enter the command to invoke the application
        - THEN my server is started and the Mongoose models are synced to the MongoDB database

        - WHEN I open API GET routes in Insomnia for users and thoughts
        - THEN the data for each of these routes is displayed in a formatted JSON

        - WHEN I test API POST, PUT, and DELETE routes in Insomnia
        - THEN I am able to successfully create, update, and delete users and thoughts in my database

        - WHEN I test API POST and DELETE routes in Insomnia
        - THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Made Using:
* Node.js
* MongoDB
* Mongoose
* Day.js (npm package)
* Express (npm package)

## Installation
* to run this locally, clone the repository from GitHub, and run the command 'npm i' while in the project's root directory.  run 'npm start' in the command line to start the server.  insomnia can then be used to test the routes.

## Usage
* this can be used as a social network test api, showing background logic for creating users, user's ability to add other users as friends, user's ability to post their thoughts, and user's ability to post a reaction to another user's thought (along with the ability to remove users, thoughts, friends, and reactions, and the ability to revise user data and thoughts).

## Contributing
* no outside contributions at this time

## License
* MIT License

[Click here for more license info!](https://choosealicense.com/licenses/mit/)

## Tests
* tests can be run by using Insomnia, and testing different get, post, put, and delete commands once the server is running.  all possible route combination tests demonstrated (working) in below video.

## Questions
* any questions, please feel free to reach out via email to rdpodols@gmail.com

## Link to Project & Screenshot
![social-network-api Screenshot)](/public/assets/images/applicationImage.png)
[Click here to view the project!](https://github.com/rpodols/social-network-api)

## Walkthrough Video
* video walkthrough to show full capabilities of app:
    - Click here for Part 1 showing user and friend routes: https://drive.google.com/file/d/1x4_VjbIfazCVaEHlo835B9GbcXqWnzcQ/view
    - Click here for Part 2 showing thought and reaction routes: https://drive.google.com/file/d/1x4_VjbIfazCVaEHlo835B9GbcXqWnzcQ/view

