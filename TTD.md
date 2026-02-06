This project, the **Vrindavan Devotional Library & Sādhana Tracker**, is a specialized web application designed to manage books and track reading progress. 

### 🛠️ Core Project Information

* **Project Name:** Vrindavan Devotional Library.
* **Target Tech Stack:** HTML5, CSS3, and Vanilla JavaScript (ES6+).
* **Primary Learning Objective:** Mastery of JavaScript objects, array manipulation methods, and ES6 syntax like destructuring and spread/rest operators.

---

### 📋 Technical Requirements

The project must demonstrate the following programming concepts through its features:

* **Advanced Object Usage:**
    * **Creation & Methods:** Use of the `this` keyword within object methods to generate summaries of devotional texts.
    * **Destructuring:** Extracting values from nested objects (e.g., pulling the author's name from a nested author object).

* **Functional Array Programming:**
    * **Transformation (`map`):** Converting book data arrays into HTML list elements for the UI.
    * **Filtering (`filter`):** Removing books from the library and filtering completed books for statistics.
    * **Aggregation (`reduce`):** Calculating total pages read across the entire library.
    * **Immutability:** Using spread operator and `map` to update book status without mutating original arrays.

* **Modern ES6 Syntax:**
    * **Spread Operator:** Adding new books to the library and updating book status immutably.
    * **Template Literals:** Building dynamic HTML strings for book cards.
    * **Arrow Functions:** Used in array methods and event handlers.

---

### ✨ Key Features

The application includes these interactive elements to practice UI/UX and DOM integration:

| Feature | Description | Technical Focus | Status |
| --- | --- | --- | --- |
| **Dynamic Book Catalog** | A responsive grid that displays books from a nested array of objects with title, author, pages, and status. | `map()`, template literals, destructuring | ✅ Implemented |
| **Sādhana Statistics** | A dashboard showing total reading progress: total books, completed count, and pending count. | `reduce()`, `filter()`, array length | ✅ Implemented |
| **Add Book Form** | A functional form allowing users to input new titles, authors, status, and page counts. | Spread operator, Form events, event.preventDefault() | ✅ Implemented |
| **Remove Book** | Button on each book card to remove it from the library. | `filter()`, event delegation | ✅ Implemented |
| **Toggle Status** | Button to toggle book status between 'completed' and 'pending'. | `map()`, spread operator for immutability | ✅ Implemented |
| **Tag-Based Filter** | A search bar that narrows down the library based on specific tags (planned feature). | Event listeners, `filter()` | ❌ Not Implemented |
| **Quick Summary Toggle** | A button on each book item that invokes an internal object method to show a brief description (planned feature). | `this` keyword, DOM methods | ❌ Not Implemented |

---

### 🎨 Design & Styling (CSS)

* **Responsive Layout:** Uses CSS Grid for the book catalog and form layout, ensuring the library looks clean on both mobile and desktop.
* **Visual States:** Hover effects on book cards, focus styles on form inputs, and status-based color coding for book status tags.
* **Theming:** CSS variables maintain a consistent color palette inspired by traditional Vedic aesthetics (saffron, maroon, vellum backgrounds).
* **Typography:** Clean, readable fonts with proper hierarchy and spacing.

---

### 🚀 Current Implementation Status

**Completed Features:**
- Book constructor with nested author object and getSummary method
- Library array management with sample data
- Dynamic rendering using map() and destructuring
- Statistics dashboard with reduce() and filter()
- Form submission with spread operator for immutability
- Event delegation for remove and status toggle functionality
- Comprehensive CSS styling with responsive design

**Missing Features:**
- Tag-based filtering system
- Quick summary toggle UI
- Proper error handling and validation
- Unit tests for JavaScript functions

**Known Issues:**
- Total pages calculation is done but not displayed in the UI
- No input validation for the add book form