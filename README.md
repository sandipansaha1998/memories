# The Memory Lane
> Image Organiser with networking abilities.
> Full Stack MERN application with authentication system and user management.
> Redux served as the centralised state manager to implement consistency across the web application.Axios was used to communicate with the backend API.
> It facilitates all the CURD operations for logged in users.All the CURD operations are protected and require authentication to perform.
> Users can interact with posts via like feature.
>The Feed section has two views.The 'Explore' section displays posts of other users from the community and the 'Album' section is populated with the current logged in user's posts.



## [Hosted URL link](https://the-memory-lane.netlify.app/)


This is a full stack Single Page MERN app with CURD operations. This repository contains the frontend section.
### [Github repository to the backend API.](https://github.com/sandipansaha1998/memories_API)
### Features
- [x] User session management and  authentication
- [x] Create,Update,Read and Delete posts with images.  
- [x] Like or dislike a image post.
- [x] `Explore` section to view posts of other users
- [x] `Album` section to view posts of logged in user.
      
      
### Upcoming Feature
- [x] Pagination
- [x] Search posts via tags

### Dependencies
Particulars | Version
----------- | ---------
"@emotion/react"| "11.11.1"
"@emotion/styled"| "11.11.0"
"@mui/icons-material"| "5.11.16"
"@mui/material"| "5.13.5"
"@testing-library/jest-dom"| "5.16.5"
"@testing-library/react"| "13.4.0"
"@testing-library/user-event"| "13.5.0"
"axios"| "1.4.0"
"bootstrap"| "5.3.0"
"framer-motion"| "10.12.16"
"moment"| "2.29.4"
"react"| "18.2.0"
"react-bootstrap"| "2.7.4"
"react-dom"| "18.2.0"
"react-file-base64"| "1.0.3"
"react-redux"| "8.1.0"
"react-router-dom"| "6.13.0"
"react-scripts"| "5.0.1"
"react-scroll"| "1.8.9"
"react-scroll-motion"| "0.3.2"
"react-scroll-parallax"| "3.4.2"
"react-switch"| "7.0.0"
"react-toastify"| "9.1.3"
"redux"| "4.2.1"
"redux-thunk"| "2.4.2"
"web-vitals"| "2.1.4"


### Directory Structure
```
├── README.md
├── netlify.toml
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── actions
    │   ├── auth.js
    │   └── posts.js
    ├── api
    │   └── index.js
    ├── components
    │   ├── App.js
    │   ├── Form.js
    │   ├── Input.js
    │   ├── LandingPage.js
    │   ├── Navbar.js
    │   ├── Notification.js
    │   ├── Post.js
    │   ├── Posts.js
    │   └── Switch.js
    ├── images
    │   ├── landing.png
    │   └── memories.png
    ├── index.js
    ├── pages
    │   ├── Auth.js
    │   └── Home.js
    ├── reducers
    │   ├── auth.js
    │   ├── index.js
    │   └── posts.js
    └── styles
        ├── App.css
        ├── Form.css
        ├── Navbar.css
        ├── Post.css
        ├── Posts.css
        └── index.css
```



