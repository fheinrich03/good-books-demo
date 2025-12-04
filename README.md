# Good Books Demo

A React Demo Project interacting with Google Books API.

## Tech Stack

- React Router
- UI Components - Shadcn/ui
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- API Client - Tanstack React Query

---

## Features

### Features defined in Requirements

**Book List Page**
- Shows a list of Books fetched from [Google Books API](https://developers.google.com/books/docs/v1/using?hl=en)
- Use the Search Query above the table to look for specific book titles
  - e.g. "school" -> looks for books with "school" in the title
  - e.g. "genre:romance" -> looks for books with "romance" as a genre
  - etc.

**Book Detail Page**
- Can be accessed by clicking on any book in the BookList
- Shows Additional Details for a specific Book
- Users can 
  - leave a star review (saved via React.useState) 
  - or write a Text Review (shows success toast, but no real submit action)

**Authentication**
- All routes under the path`/books` are protected (so `/books` as well as `/books/:id`)

### Additional Features

- User Avatar in the Header that shows user name initials (top right)
- Logout function is available when clicking on User Avatar (top right)

---

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

---

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```