# Developpeur-application-Projet11
This is a frontend project built with React. It's a web application that provides accommodations services.


## Project Structure

The project has the following structure:
```bash
frontend/
    .gitignore
    craco.config.js
    package.json
    public/
        index.html
        manifest.json
        robots.txt
    src/
        _Service/
            Accommodations.service.jsx
        App.jsx
        assets/
        Components/
            Banner.jsx
            Card.jsx
            Carousel.jsx
            Collapse.jsx
            Host.jsx
            Rating.jsx
            Tag.jsx
        Data/
            aboutinfo.json
            accommodations.json
        index.jsx
        Layout/
            Footer/
            Header/
            Layout.jsx
        pages/
            Auth/
            Public/
        styles/
            accommodation.css
            banner.css
    README.md
```
## Styles
The project uses CSS for styling. The styles for each component are located in the styles directory.


## Run Locally

Clone the project

```bash
  git clone <(https://github.com/jeremydlny/Developpeur-application-Projet11)>
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

> The application will start and can be accessed at http://localhost:3000. 

## Features

- Home Page: Displays a list of accommodations.
- About Page: Provides information about the service.
- Accommodation Details: Displays detailed information about a specific accommodation.

## Components

- Banner: Displays a banner image.
- Card: Displays a card with accommodation details.
- Carousel: A carousel for displaying multiple images.
- Collapse: A collapsible component for displaying text.
- Header: The header of the application.
- Footer: The footer of the application.
