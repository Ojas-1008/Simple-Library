// Get the library section to dynamically display books
const libraryContainer = document.getElementById("library");

// Array to store book objects (SOT)
let library = [];

// Constructor function
function Book(title, name, genre, status, pages) {
    this.bookTitle = title;
    this.author = {
        name: name,
        genre: genre
    };
    this.bookStatus = status; // e.g., 'completed', 'reading', 'pending'
    this.pageCount = pages;

    // Instance method: Returns a summary string
    this.getSummary = function () {
        return `${this.bookTitle} was written by ${this.author.name} and has ${this.pageCount} pages. Status: ${this.bookStatus}`;
    }; // Note: Methods in constructors consume memory; consider prototypes or classes for efficiency
}

// Sample data: Creating initial book instances
const newBook1 = new Book('Dune', 'Frank Herbert', 'Science Fiction', 'completed', 412);
const newBook2 = new Book('The Silent Patient', 'Alex Michaelides', 'Mystery', 'reading', 336);
const newBook3 = new Book('Atomic Habits', 'James Clear', 'Self-Help', 'not started', 320);

// Array manipulation: Add books to the library array
library.push(newBook1, newBook2, newBook3);
console.log(library); // Debug: View initial library array

// Render function: Updates the DOM with book cards
function renderLibrary(bookArray) {
    // Clear container: Prevents duplicate rendering on re-renders
    libraryContainer.innerHTML = "";

    // Array transformation: Convert book objects to HTML strings using map()
    // Destructuring: Extract specific properties from each book object
    const bookData = bookArray.map(({ bookTitle, author: { name }, pageCount, bookStatus }, index) => {
        // Create HTML string with dynamic data and data-index for identification
        return `
            <div class="book-card" data-index="${index}">
                <div class="book-card-inner">
                    <div class="book-card-header">
                        <h3 class="book-title">${bookTitle}</h3>
                        <span class="status-tag ${bookStatus.toLowerCase().replace(/\s+/g, '-')}">${bookStatus}</span>
                    </div>
                    <div class="book-details">
                        <p class="detail-item"><strong>Author:</strong> ${name}</p>
                        <p class="detail-item"><strong>Pages:</strong> ${pageCount}</p>
                    </div>
                    <div class="book-actions">
                        <button class="toggle-status">Update Status</button>
                        <button class="remove-book">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    console.log(bookData);
    // Combine HTML strings into one string (removes commas)
    const combinedHTML = bookData.join("");
    console.log(combinedHTML);

    libraryContainer.innerHTML = combinedHTML;

    updateStats(library);
}

// Stats function: Calculate and display library statistics
function updateStats(bookArray) {
    // Get stat display elements
    const totalBooks = document.getElementById("total-books");
    const completedBooks = document.getElementById("completed-books");
    const pendingBooks = document.getElementById("pending-books");

    // Array length: Total number of books
    const books = bookArray.length;
    console.log(books);
    totalBooks.textContent = books;

    // Array reduce: Sum all page counts
    const totalPages = bookArray.reduce((accumulator, currentItem) => accumulator + currentItem.pageCount, 0);
    console.log(totalPages);

    // Array filter: Get completed books
    const completed = bookArray.filter(book => book.bookStatus.toLowerCase() === "completed");
    console.log(completed.length);
    completedBooks.textContent = completed.length;

    // Calculation: Pending = Total - Completed
    const pending = books - completed.length;
    console.log(pending);
    pendingBooks.textContent = pending;
}

// Form handling: Capture user input for new books
const userInput = document.getElementById("new-books");

userInput.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on submit
    console.log("Form submitted, but no reload!");

    // Access input values by index (form.elements array)
    const title = userInput[0].value;
    const author = userInput[1].value;
    const status = userInput[2].value;
    const pages = Number(userInput[3].value);
    console.log(title, author, status, pages);

    // Object creation: Instantiate new book
    const newBook = new Book(title, author, "General", status, pages);
    console.log(newBook);

    // Immutability: Use spread operator to create new array without mutating original
    library = [...library, newBook];
    console.log(library);

    // Form reset: Clear input fields
    userInput.reset();

    renderLibrary(library);
});

// Event delegation
libraryContainer.addEventListener("click", (event) => {
    // Find parent card: Use closest() to get the book-card element
    const card = event.target.closest(".book-card");
    if (!card) return; // Exit if click outside card

    // Data attribute: Get index from data-index
    const index = Number(card.dataset.index);

    // Remove book: Filter out the book at this index
    if (event.target.classList.contains("remove-book")) {
        library = library.filter((_, i) => i !== index);
        renderLibrary(library);
    }

    // Toggle status: Map to update status immutably
    if (event.target.classList.contains("toggle-status")) {
        library = library.map((book, i) =>
            i === index
                ? { ...book, bookStatus: book.bookStatus.toLowerCase() === 'completed' ? 'pending' : 'completed' }
                : book
        );
        renderLibrary(library);
    }
});

// Initial render: Display sample books on page load
renderLibrary(library);