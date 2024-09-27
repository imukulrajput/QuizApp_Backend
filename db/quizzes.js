const { v4: uuid } = require("uuid");

const quizzes = {
    data: [
        // JavaScript Quiz
        {
            id: uuid(),
            category: "javascript",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            title: "JavaScript",
            description: "Test your knowledge of JavaScript, one of the most popular programming languages.",
            quiz: [
                {
                    id: uuid(),
                    question: "Which company developed JavaScript?",
                    options: [
                        { id: uuid(), option: "Google", isCorrect: false },
                        { id: uuid(), option: "Netscape", isCorrect: true },
                        { id: uuid(), option: "Microsoft", isCorrect: false },
                        { id: uuid(), option: "Apple", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which type is not supported by JavaScript?",
                    options: [
                        { id: uuid(), option: "Boolean", isCorrect: false },
                        { id: uuid(), option: "Integer", isCorrect: true },
                        { id: uuid(), option: "String", isCorrect: false },
                        { id: uuid(), option: "Object", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is 'this' keyword in JavaScript?",
                    options: [
                        { id: uuid(), option: "Refers to the current object", isCorrect: true },
                        { id: uuid(), option: "Refers to the parent object", isCorrect: false },
                        { id: uuid(), option: "Refers to the DOM element", isCorrect: false },
                        { id: uuid(), option: "Refers to the global object", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method is used to parse a string to an integer in JavaScript?",
                    options: [
                        { id: uuid(), option: "parseInt()", isCorrect: true },
                        { id: uuid(), option: "Number()", isCorrect: false },
                        { id: uuid(), option: "parseFloat()", isCorrect: false },
                        { id: uuid(), option: "toFixed()", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the use of '===' operator?",
                    options: [
                        { id: uuid(), option: "Checks equality", isCorrect: false },
                        { id: uuid(), option: "Checks strict equality", isCorrect: true },
                        { id: uuid(), option: "Assigns a value", isCorrect: false },
                        { id: uuid(), option: "Inverts a boolean", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "How can you declare a variable in JavaScript?",
                    options: [
                        { id: uuid(), option: "var", isCorrect: true },
                        { id: uuid(), option: "const", isCorrect: true },
                        { id: uuid(), option: "let", isCorrect: true },
                        { id: uuid(), option: "All of the above", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following is not a JavaScript framework?",
                    options: [
                        { id: uuid(), option: "React", isCorrect: false },
                        { id: uuid(), option: "Angular", isCorrect: false },
                        { id: uuid(), option: "Django", isCorrect: true },
                        { id: uuid(), option: "Vue", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method is used to add an element to an array in JavaScript?",
                    options: [
                        { id: uuid(), option: "push()", isCorrect: true },
                        { id: uuid(), option: "pop()", isCorrect: false },
                        { id: uuid(), option: "shift()", isCorrect: false },
                        { id: uuid(), option: "unshift()", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is an IIFE in JavaScript?",
                    options: [
                        { id: uuid(), option: "Immediately Invoked Function Expression", isCorrect: true },
                        { id: uuid(), option: "Initial Invoked Function Expression", isCorrect: false },
                        { id: uuid(), option: "Inline Invoked Function Expression", isCorrect: false },
                        { id: uuid(), option: "Internal Invoked Function Expression", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the output of `typeof NaN`?",
                    options: [
                        { id: uuid(), option: "'number'", isCorrect: true },
                        { id: uuid(), option: "'undefined'", isCorrect: false },
                        { id: uuid(), option: "'object'", isCorrect: false },
                        { id: uuid(), option: "'NaN'", isCorrect: false }
                    ]
                }
            ]
        },
        // Java Quiz
        {
            id: uuid(),
            category: "java",
            image: "https://i.imgur.com/XtL9ACX.png",
            title: "Java",
            description: "Test your knowledge of the Java programming language.",
            quiz: [
                {
                    id: uuid(),
                    question: "Who developed Java?",
                    options: [
                        { id: uuid(), option: "Google", isCorrect: false },
                        { id: uuid(), option: "Oracle", isCorrect: false },
                        { id: uuid(), option: "Sun Microsystems", isCorrect: true },
                        { id: uuid(), option: "Microsoft", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which keyword is used to define a class in Java?",
                    options: [
                        { id: uuid(), option: "class", isCorrect: true },
                        { id: uuid(), option: "Class", isCorrect: false },
                        { id: uuid(), option: "object", isCorrect: false },
                        { id: uuid(), option: "new", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is JVM in Java?",
                    options: [
                        { id: uuid(), option: "Java Virtual Machine", isCorrect: true },
                        { id: uuid(), option: "Java Variable Memory", isCorrect: false },
                        { id: uuid(), option: "Java Vector Method", isCorrect: false },
                        { id: uuid(), option: "Java Version Manager", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of the following is not a Java keyword?",
                    options: [
                        { id: uuid(), option: "new", isCorrect: false },
                        { id: uuid(), option: "delete", isCorrect: true },
                        { id: uuid(), option: "try", isCorrect: false },
                        { id: uuid(), option: "extends", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method is used to find the length of a string in Java?",
                    options: [
                        { id: uuid(), option: "length()", isCorrect: true },
                        { id: uuid(), option: "size()", isCorrect: false },
                        { id: uuid(), option: "getLength()", isCorrect: false },
                        { id: uuid(), option: "measure()", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is the output of `10 % 3` in Java?",
                    options: [
                        { id: uuid(), option: "1", isCorrect: true },
                        { id: uuid(), option: "3", isCorrect: false },
                        { id: uuid(), option: "0", isCorrect: false },
                        { id: uuid(), option: "10", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which of these is not a valid access modifier in Java?",
                    options: [
                        { id: uuid(), option: "public", isCorrect: false },
                        { id: uuid(), option: "private", isCorrect: false },
                        { id: uuid(), option: "protected", isCorrect: false },
                        { id: uuid(), option: "global", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method is called when an object is created in Java?",
                    options: [
                        { id: uuid(), option: "constructor", isCorrect: true },
                        { id: uuid(), option: "initialize", isCorrect: false },
                        { id: uuid(), option: "main", isCorrect: false },
                        { id: uuid(), option: "start", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which method must be implemented in a Java class implementing the Runnable interface?",
                    options: [
                        { id: uuid(), option: "run()", isCorrect: true },
                        { id: uuid(), option: "start()", isCorrect: false },
                        { id: uuid(), option: "main()", isCorrect: false },
                        { id: uuid(), option: "init()", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which operator is used to compare two values in Java?",
                    options: [
                        { id: uuid(), option: "==", isCorrect: true },
                        { id: uuid(), option: "=", isCorrect: false },
                        { id: uuid(), option: "equals()", isCorrect: false },
                        { id: uuid(), option: "compareTo()", isCorrect: false }
                    ]
                }
            ]
        },
        //pyhthon quiz
        // Continuing from the previous quizzes data...

// Python Quiz
{
    id: uuid(),
    category: "python",
    image: "https://www.python.org/community/logos/python-logo.png",
    title: "Python",
    description: "Test your knowledge of the Python programming language.",
    quiz: [
        {
            id: uuid(),
            question: "What is the output of `print(2 ** 3)`?",
            options: [
                { id: uuid(), option: "6", isCorrect: false },
                { id: uuid(), option: "8", isCorrect: true },
                { id: uuid(), option: "9", isCorrect: false },
                { id: uuid(), option: "3", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid variable name in Python?",
            options: [
                { id: uuid(), option: "2ndValue", isCorrect: false },
                { id: uuid(), option: "_value", isCorrect: true },
                { id: uuid(), option: "value!", isCorrect: false },
                { id: uuid(), option: "value name", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to define a function in Python?",
            options: [
                { id: uuid(), option: "function", isCorrect: false },
                { id: uuid(), option: "def", isCorrect: true },
                { id: uuid(), option: "func", isCorrect: false },
                { id: uuid(), option: "define", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you create a list in Python?",
            options: [
                { id: uuid(), option: "[]", isCorrect: true },
                { id: uuid(), option: "{}", isCorrect: false },
                { id: uuid(), option: "()", isCorrect: false },
                { id: uuid(), option: "<>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the output of `len('hello')`?",
            options: [
                { id: uuid(), option: "5", isCorrect: true },
                { id: uuid(), option: "4", isCorrect: false },
                { id: uuid(), option: "6", isCorrect: false },
                { id: uuid(), option: "0", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a tuple in Python?",
            options: [
                { id: uuid(), option: "A mutable list", isCorrect: false },
                { id: uuid(), option: "An immutable list", isCorrect: true },
                { id: uuid(), option: "A special type of dictionary", isCorrect: false },
                { id: uuid(), option: "A type of set", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is not a built-in data type in Python?",
            options: [
                { id: uuid(), option: "List", isCorrect: false },
                { id: uuid(), option: "Dictionary", isCorrect: false },
                { id: uuid(), option: "Tuple", isCorrect: false },
                { id: uuid(), option: "Array", isCorrect: true }
            ]
        },
        {
            id: uuid(),
            question: "How do you start a comment in Python?",
            options: [
                { id: uuid(), option: "//", isCorrect: false },
                { id: uuid(), option: "#", isCorrect: true },
                { id: uuid(), option: "/*", isCorrect: false },
                { id: uuid(), option: "--", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the output of `bool(0)`?",
            options: [
                { id: uuid(), option: "True", isCorrect: false },
                { id: uuid(), option: "False", isCorrect: true },
                { id: uuid(), option: "None", isCorrect: false },
                { id: uuid(), option: "0", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following functions is used to read a file in Python?",
            options: [
                { id: uuid(), option: "open()", isCorrect: true },
                { id: uuid(), option: "read()", isCorrect: false },
                { id: uuid(), option: "get()", isCorrect: false },
                { id: uuid(), option: "file()", isCorrect: false }
            ]
        }
    ]
},
// PHP Quiz
{
    id: uuid(),
    category: "php",
    image: "https://www.php.net/images/logos/php-logo.svg",
    title: "PHP",
    description: "Test your knowledge of PHP, a popular server-side scripting language.",
    quiz: [
        {
            id: uuid(),
            question: "What does PHP stand for?",
            options: [
                { id: uuid(), option: "Private Home Page", isCorrect: false },
                { id: uuid(), option: "PHP: Hypertext Preprocessor", isCorrect: true },
                { id: uuid(), option: "Personal Home Page", isCorrect: false },
                { id: uuid(), option: "Preprocessor Home Page", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid way to start a session in PHP?",
            options: [
                { id: uuid(), option: "session_start();", isCorrect: true },
                { id: uuid(), option: "start_session();", isCorrect: false },
                { id: uuid(), option: "begin_session();", isCorrect: false },
                { id: uuid(), option: "init_session();", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which PHP function is used to include a file?",
            options: [
                { id: uuid(), option: "include_file();", isCorrect: false },
                { id: uuid(), option: "include();", isCorrect: true },
                { id: uuid(), option: "require();", isCorrect: false },
                { id: uuid(), option: "file();", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct way to declare a variable in PHP?",
            options: [
                { id: uuid(), option: "$variable_name;", isCorrect: true },
                { id: uuid(), option: "variable_name;", isCorrect: false },
                { id: uuid(), option: "var variable_name;", isCorrect: false },
                { id: uuid(), option: "declare variable_name;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used to create a comment in PHP?",
            options: [
                { id: uuid(), option: "//", isCorrect: true },
                { id: uuid(), option: "#", isCorrect: true },
                { id: uuid(), option: "/* comment */", isCorrect: true },
                { id: uuid(), option: "All of the above", isCorrect: true }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct way to end a PHP statement?",
            options: [
                { id: uuid(), option: ";", isCorrect: true },
                { id: uuid(), option: ".", isCorrect: false },
                { id: uuid(), option: ":", isCorrect: false },
                { id: uuid(), option: "!", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which superglobal array is used to retrieve form data in PHP?",
            options: [
                { id: uuid(), option: "$_GET", isCorrect: true },
                { id: uuid(), option: "$_POST", isCorrect: true },
                { id: uuid(), option: "$_REQUEST", isCorrect: true },
                { id: uuid(), option: "All of the above", isCorrect: true }
            ]
        },
        {
            id: uuid(),
            question: "How do you create an array in PHP?",
            options: [
                { id: uuid(), option: "array()", isCorrect: true },
                { id: uuid(), option: "new array()", isCorrect: false },
                { id: uuid(), option: "[]", isCorrect: true },
                { id: uuid(), option: "create array()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which function is used to get the length of a string in PHP?",
            options: [
                { id: uuid(), option: "strlen()", isCorrect: true },
                { id: uuid(), option: "str_length()", isCorrect: false },
                { id: uuid(), option: "length()", isCorrect: false },
                { id: uuid(), option: "count()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is the correct way to connect to a MySQL database in PHP?",
            options: [
                { id: uuid(), option: "$conn = new mysqli('localhost', 'username', 'password', 'database');", isCorrect: true },
                { id: uuid(), option: "$conn = mysql_connect('localhost', 'username', 'password');", isCorrect: false },
                { id: uuid(), option: "$conn = connect('localhost', 'username', 'password');", isCorrect: false },
                { id: uuid(), option: "$conn = mysqli_connect('localhost', 'username', 'password', 'database');", isCorrect: false }
            ]
        }
    ]
},
{
    id: uuid(),
    category: "html",
    image: "https://www.w3schools.com/html/img_logo.png",
    title: "HTML",
    description: "Test your knowledge of HTML.",
    quiz: [
        {
            id: uuid(),
            question: "What does HTML stand for?",
            options: [
                { id: uuid(), option: "Hyper Text Markup Language", isCorrect: true },
                { id: uuid(), option: "High Text Markup Language", isCorrect: false },
                { id: uuid(), option: "Hyperlinks and Text Markup Language", isCorrect: false },
                { id: uuid(), option: "Hyper Text Machine Language", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which HTML element is used to define the title of a document?",
            options: [
                { id: uuid(), option: "<title>", isCorrect: true },
                { id: uuid(), option: "<head>", isCorrect: false },
                { id: uuid(), option: "<meta>", isCorrect: false },
                { id: uuid(), option: "<header>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which element is used for creating an unordered list?",
            options: [
                { id: uuid(), option: "<ol>", isCorrect: false },
                { id: uuid(), option: "<ul>", isCorrect: true },
                { id: uuid(), option: "<list>", isCorrect: false },
                { id: uuid(), option: "<li>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct way to insert a line break in HTML?",
            options: [
                { id: uuid(), option: "<break>", isCorrect: false },
                { id: uuid(), option: "<br>", isCorrect: true },
                { id: uuid(), option: "<lb>", isCorrect: false },
                { id: uuid(), option: "<newline>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            options: [
                { id: uuid(), option: "src", isCorrect: false },
                { id: uuid(), option: "alt", isCorrect: true },
                { id: uuid(), option: "title", isCorrect: false },
                { id: uuid(), option: "longdesc", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which HTML tag is used to define an internal style sheet?",
            options: [
                { id: uuid(), option: "<style>", isCorrect: true },
                { id: uuid(), option: "<css>", isCorrect: false },
                { id: uuid(), option: "<script>", isCorrect: false },
                { id: uuid(), option: "<link>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does the <a> tag do?",
            options: [
                { id: uuid(), option: "Defines a hyperlink", isCorrect: true },
                { id: uuid(), option: "Defines an image", isCorrect: false },
                { id: uuid(), option: "Defines a paragraph", isCorrect: false },
                { id: uuid(), option: "Defines a table", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which HTML element is used to define a footer for a document or section?",
            options: [
                { id: uuid(), option: "<footer>", isCorrect: true },
                { id: uuid(), option: "<bottom>", isCorrect: false },
                { id: uuid(), option: "<section>", isCorrect: false },
                { id: uuid(), option: "<head>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                { id: uuid(), option: "<break>", isCorrect: false },
                { id: uuid(), option: "<linebreak>", isCorrect: false },
                { id: uuid(), option: "<br>", isCorrect: true },
                { id: uuid(), option: "<lb>", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which element is used to create a checkbox in HTML?",
            options: [
                { id: uuid(), option: "<check>", isCorrect: false },
                { id: uuid(), option: "<checkbox>", isCorrect: false },
                { id: uuid(), option: "<input type='checkbox'>", isCorrect: true },
                { id: uuid(), option: "<input type='check'>", isCorrect: false }
            ]
        }
    ]
},

// CSS Quiz
{
    id: uuid(),
    category: "css",
    image: "https://www.w3schools.com/css/img_logo.png",
    title: "CSS",
    description: "Test your knowledge of CSS.",
    quiz: [
        {
            id: uuid(),
            question: "What does CSS stand for?",
            options: [
                { id: uuid(), option: "Creative Style Sheets", isCorrect: false },
                { id: uuid(), option: "Cascading Style Sheets", isCorrect: true },
                { id: uuid(), option: "Computer Style Sheets", isCorrect: false },
                { id: uuid(), option: "Colorful Style Sheets", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                { id: uuid(), option: "styles", isCorrect: false },
                { id: uuid(), option: "style", isCorrect: true },
                { id: uuid(), option: "class", isCorrect: false },
                { id: uuid(), option: "css", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which property is used to change the background color?",
            options: [
                { id: uuid(), option: "bgcolor", isCorrect: false },
                { id: uuid(), option: "color", isCorrect: false },
                { id: uuid(), option: "background-color", isCorrect: true },
                { id: uuid(), option: "background", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you select an element with id 'header'?",
            options: [
                { id: uuid(), option: "#header", isCorrect: true },
                { id: uuid(), option: ".header", isCorrect: false },
                { id: uuid(), option: "header", isCorrect: false },
                { id: uuid(), option: "*header", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which CSS property controls the text size?",
            options: [
                { id: uuid(), option: "font-size", isCorrect: true },
                { id: uuid(), option: "text-size", isCorrect: false },
                { id: uuid(), option: "font-style", isCorrect: false },
                { id: uuid(), option: "text-font", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which property is used to change the font of an element?",
            options: [
                { id: uuid(), option: "font-family", isCorrect: true },
                { id: uuid(), option: "font-weight", isCorrect: false },
                { id: uuid(), option: "font-style", isCorrect: false },
                { id: uuid(), option: "text-font", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you make a list that lists its items with squares?",
            options: [
                { id: uuid(), option: "list-style-type: square;", isCorrect: true },
                { id: uuid(), option: "list: square;", isCorrect: false },
                { id: uuid(), option: "list-style: square;", isCorrect: false },
                { id: uuid(), option: "list-type: square;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you add a comment in CSS?",
            options: [
                { id: uuid(), option: "// this is a comment", isCorrect: false },
                { id: uuid(), option: "/* this is a comment */", isCorrect: true },
                { id: uuid(), option: "<!-- this is a comment -->", isCorrect: false },
                { id: uuid(), option: "// this is not a comment", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which CSS property is used to set the space between the element's border and its content?",
            options: [
                { id: uuid(), option: "margin", isCorrect: false },
                { id: uuid(), option: "padding", isCorrect: true },
                { id: uuid(), option: "border-spacing", isCorrect: false },
                { id: uuid(), option: "spacing", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which CSS property is used to change the text color?",
            options: [
                { id: uuid(), option: "text-color", isCorrect: false },
                { id: uuid(), option: "color", isCorrect: true },
                { id: uuid(), option: "font-color", isCorrect: false },
                { id: uuid(), option: "background-color", isCorrect: false }
            ]
        }
    ]
}

       
    ]
};

module.exports = quizzes;
