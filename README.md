# FlashFeed News React App

FlashFeed is a simple React app that fetches news articles from the [NewsAPI](https://newsapi.org/) and displays them in various categories. It provides a user-friendly interface to read the latest news on topics like general, business, entertainment, health, science, sports, and technology.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Demo

Please note that the NewsAPI used in this app requires an API key, and this demo may not be functional due to the limitations of the free API plan. To see the live demo in action, you can set up your own NewsAPI key and run the app locally as explained in the Installation section.

## Features

- Fetches news articles from NewsAPI based on different categories.
- Pagination functionality to navigate through news articles.
- Responsive design using Tailwind CSS for seamless mobile and desktop experience.

## Installation

1. Clone the repository.

```bash
git clone https://github.com/your-username/flashfeed-news-react-app.git
```

2. Install dependencies.

```bash
cd flashfeed-news-react-app
npm install
```

3. Obtain your API key from [NewsAPI](https://newsapi.org/) by signing up for an account.

4. Create a `.env` file in the root of your project and add your NewsAPI key.

```env
REACT_APP_NEWS_API_KEY=your_newsapi_key_here
```

## Usage

To start the development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` to view the app.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A library for adding routing functionality to a React app.
- NewsAPI: A service for fetching news articles from various sources.
- Tailwind CSS: A utility-first CSS framework for building responsive designs.
- Vite: A fast and lightweight development server and build tool for modern web projects.

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

