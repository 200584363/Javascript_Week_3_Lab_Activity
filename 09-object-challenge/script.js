// Object Challenge

const library = [ // array named "library"
    {   
        // Object 1
        title: "Clean Code",
        author: "Robert Cecil Martin",  
        status: {
            // with properties
            own: true,
            reading: false,
            read: false,
        }      
    },
    {
        // Object 2
        title: "The Mythical Man-month",
        author: "Frederick Brooks",  
        status: {
            // with properties
            own: true,
            reading: false,
            read: false,
        }      
    },
    {
        // Object 3
        title: "Algorithms",
        author: "Robert Sedgewick & Kevin Wayne",  
        status: {
            // with properties
            own: true,
            reading: false,
            read: false,
        }      
    },
]

console.log("Object Challenge");

// update the read property for each book
for(let i=0; i<library.length; i++) {
    library[i].status.read = true;
}

// destructuring to extract the title property from the first book
const { title : firstBook } = library[0];
console.log(firstBook);

// JSON.stringify() method to convert the library array to a JSON string
const libraryJson = JSON.stringify(library);
console.log(libraryJson);