# Library

A browser-based personal library tracker built with vanilla JavaScript. Manage your reading list, track completion status, and view live statistics — all without a backend.

## Features

- **Dynamic Book Catalog** — Renders a responsive card grid from an in-memory array of book objects
- **Live Statistics Dashboard** — Tracks total books, completed count, and pending count in real time
- **Add Books** — Submit a form to add new books using the spread operator for immutable state updates
- **Remove Books** — Delete any book from the library via event delegation
- **Toggle Status** — Cycle a book's status between `completed` and `pending` without mutating the original object

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Grid, CSS variables) |
| Logic | Vanilla JavaScript (ES6+) |

## Concepts Demonstrated

- **Constructor functions** with nested objects and instance methods (`this`, `getSummary`)
- **Destructuring** — extracting nested properties (e.g. `author.name`) inside `map()`
- **Array methods** — `map()` for rendering, `filter()` for removal and stats, `reduce()` for page totals
- **Immutability** — spread operator used to update library state without direct mutation
- **Template literals** — dynamic HTML string generation for book cards
- **Event delegation** — single listener on the container handles all card button clicks
- **Form events** — `preventDefault()`, reading `form.elements`, and `form.reset()`

## Getting Started

No build step or dependencies required.

```bash
git clone <repo-url>
cd library
# Open index.html in your browser
open index.html
```

Or drag `index.html` directly into any browser.

## Project Structure

```
library/
├── index.html      # Application shell and form markup
├── script.js       # All JavaScript logic
├── style.css       # Styling, CSS variables, responsive layout
└── TTD.md          # Original technical design document
```

## Usage

1. **View books** — Sample books are loaded on page open
2. **Add a book** — Fill in the title, author, status, and page count, then click Submit
3. **Remove a book** — Click the **Remove** button on any card
4. **Toggle status** — Click **Update Status** to flip a book between `completed` and `pending`

## Known Limitations

- Data is held in memory only — refreshing the page resets the library to the sample data
- No input validation on the add-book form
- Genre field defaults to `"General"` for user-added books
- Total pages calculated but not surfaced in the UI

## Planned Features

- Tag/genre-based filtering
- Quick summary modal using the `getSummary()` instance method
- `localStorage` persistence
- Input validation and error messaging
