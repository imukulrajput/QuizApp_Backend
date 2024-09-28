const { v4: uuid } = require("uuid");

const quizzes = {
    data: [
        // JavaScript Quiz
        {
            id: uuid(),
            category: "javascript",
            image: "https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg",
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
            image: "https://www.jrebel.com/sites/default/files/image/2020-05/image-blog-revel-top-java-tools.jpg",
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

// Python Quiz
{
    id: uuid(),
    category: "python",
    image: "https://www.codemotion.com/magazine/wp-content/uploads/2023/06/iStock-1284202542-min-896x504.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png",
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
//html
{
    id: uuid(),
    category: "html",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8anN8ZW58MHx8MHx8fDA%3D",
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
    image: "https://as1.ftcdn.net/v2/jpg/02/97/24/50/1000_F_297245087_2trtNBrS1oSR3nFdoLilIwcZF0we4Lux.jpg",
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
},
// c 

{
    id: uuid(),
    category: "c",
    image: "https://c8.alamy.com/comp/F2HYA9/c-programming-showing-software-design-and-programmer-F2HYA9.jpg",
    title: "C Programming",
    description: "Test your knowledge of C programming.",
    quiz: [
        {
            id: uuid(),
            question: "What is the correct syntax to output 'Hello World' in C?",
            options: [
                { id: uuid(), option: "print('Hello World');", isCorrect: false },
                { id: uuid(), option: "printf('Hello World');", isCorrect: true },
                { id: uuid(), option: "cout << 'Hello World';", isCorrect: false },
                { id: uuid(), option: "System.out.println('Hello World');", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid variable name in C?",
            options: [
                { id: uuid(), option: "int 1num;", isCorrect: false },
                { id: uuid(), option: "int num1;", isCorrect: true },
                { id: uuid(), option: "int #num;", isCorrect: false },
                { id: uuid(), option: "int @num;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which operator is used to compare two values in C?",
            options: [
                { id: uuid(), option: "=", isCorrect: false },
                { id: uuid(), option: "==", isCorrect: true },
                { id: uuid(), option: "&&", isCorrect: false },
                { id: uuid(), option: "||", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which data type is used to store decimal numbers in C?",
            options: [
                { id: uuid(), option: "int", isCorrect: false },
                { id: uuid(), option: "float", isCorrect: true },
                { id: uuid(), option: "char", isCorrect: false },
                { id: uuid(), option: "double", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which function is used to read input from the user in C?",
            options: [
                { id: uuid(), option: "scanf()", isCorrect: true },
                { id: uuid(), option: "input()", isCorrect: false },
                { id: uuid(), option: "cin", isCorrect: false },
                { id: uuid(), option: "get()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the keyword to declare a constant variable in C?",
            options: [
                { id: uuid(), option: "const", isCorrect: true },
                { id: uuid(), option: "let", isCorrect: false },
                { id: uuid(), option: "constant", isCorrect: false },
                { id: uuid(), option: "define", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which operator is used for modulus operation in C?",
            options: [
                { id: uuid(), option: "%", isCorrect: true },
                { id: uuid(), option: "/", isCorrect: false },
                { id: uuid(), option: "*", isCorrect: false },
                { id: uuid(), option: "&", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you declare an array in C?",
            options: [
                { id: uuid(), option: "int arr[5];", isCorrect: true },
                { id: uuid(), option: "arr int[5];", isCorrect: false },
                { id: uuid(), option: "array int arr[5];", isCorrect: false },
                { id: uuid(), option: "int array arr(5);", isCorrect: false }
            ]
        },
        {
            id: uuid(), 
            question: "Which function is used to open a file in C?",
            options: [
                { id: uuid(), option: "fopen()", isCorrect: true },
                { id: uuid(), option: "file_open()", isCorrect: false },
                { id: uuid(), option: "openfile()", isCorrect: false },
                { id: uuid(), option: "openf()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the result of the expression 5 + 10 / 2?",
            options: [
                { id: uuid(), option: "7.5", isCorrect: false },
                { id: uuid(), option: "10", isCorrect: false },
                { id: uuid(), option: "10.5", isCorrect: false },
                { id: uuid(), option: "10", isCorrect: true }
            ]
        }
    ]
},

// c++
{
    id: uuid(),
    category: "c++",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_CPP.jpg",
    title: "C++ Programming",
    description: "Test your knowledge of C++ programming.",
    quiz: [
        {
            id: uuid(),
            question: "What is the correct syntax to output 'Hello World' in C++?",
            options: [
                { id: uuid(), option: "print('Hello World');", isCorrect: false },
                { id: uuid(), option: "printf('Hello World');", isCorrect: false },
                { id: uuid(), option: "cout << 'Hello World';", isCorrect: true },
                { id: uuid(), option: "System.out.println('Hello World');", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid class definition in C++?",
            options: [
                { id: uuid(), option: "class MyClass {};", isCorrect: true },
                { id: uuid(), option: "MyClass() {}", isCorrect: false },
                { id: uuid(), option: "define MyClass() {}", isCorrect: false },
                { id: uuid(), option: "object MyClass() {}", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid access modifier in C++?",
            options: [
                { id: uuid(), option: "private", isCorrect: true },
                { id: uuid(), option: "secret", isCorrect: false },
                { id: uuid(), option: "hidden", isCorrect: false },
                { id: uuid(), option: "internal", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following allows function overloading in C++?",
            options: [
                { id: uuid(), option: "Different return types", isCorrect: false },
                { id: uuid(), option: "Different function names", isCorrect: false },
                { id: uuid(), option: "Different parameter lists", isCorrect: true },
                { id: uuid(), option: "None of the above", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which function is used to allocate memory dynamically in C++?",
            options: [
                { id: uuid(), option: "malloc", isCorrect: false },
                { id: uuid(), option: "new", isCorrect: true },
                { id: uuid(), option: "allocate", isCorrect: false },
                { id: uuid(), option: "malloc_cpp", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which operator is used to access members of a class using a pointer?",
            options: [
                { id: uuid(), option: ".", isCorrect: false },
                { id: uuid(), option: "->", isCorrect: true },
                { id: uuid(), option: "&", isCorrect: false },
                { id: uuid(), option: "*", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the default access specifier for class members in C++?",
            options: [
                { id: uuid(), option: "public", isCorrect: false },
                { id: uuid(), option: "private", isCorrect: true },
                { id: uuid(), option: "protected", isCorrect: false },
                { id: uuid(), option: "internal", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is inheritance in C++?",
            options: [
                { id: uuid(), option: "A class using its own members", isCorrect: false },
                { id: uuid(), option: "A class acquiring the properties of another class", isCorrect: true },
                { id: uuid(), option: "Functions calling each other", isCorrect: false },
                { id: uuid(), option: "None of the above", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you create an object of a class in C++?",
            options: [
                { id: uuid(), option: "class MyClass;", isCorrect: false },
                { id: uuid(), option: "new MyClass();", isCorrect: false },
                { id: uuid(), option: "MyClass obj;", isCorrect: true },
                { id: uuid(), option: "MyClass()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a feature of polymorphism in C++?",
            options: [
                { id: uuid(), option: "Function overloading", isCorrect: true },
                { id: uuid(), option: "Operator overloading", isCorrect: true },
                { id: uuid(), option: "Inheritance", isCorrect: false },
                { id: uuid(), option: "All of the above", isCorrect: false }
            ]
        }
    ]
},
 
//node 
{
    id: uuid(),
    category: "node",
    image: "https://c8.alamy.com/comp/2E8XJND/nodejs-inscription-against-laptop-and-code-background-learn-node-programming-language-computer-courses-training-2E8XJND.jpg",
    title: "Node.js",
    description: "Test your knowledge of Node.js.",
    quiz: [
        {
            id: uuid(),
            question: "What is Node.js?",
            options: [
                { id: uuid(), option: "A JavaScript library", isCorrect: false },
                { id: uuid(), option: "A JavaScript framework", isCorrect: false },
                { id: uuid(), option: "A JavaScript runtime environment", isCorrect: true },
                { id: uuid(), option: "A database", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a Node.js module?",
            options: [
                { id: uuid(), option: "http", isCorrect: true },
                { id: uuid(), option: "mongoose", isCorrect: false },
                { id: uuid(), option: "jquery", isCorrect: false },
                { id: uuid(), option: "flask", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which command is used to install a package in Node.js?",
            options: [
                { id: uuid(), option: "node install", isCorrect: false },
                { id: uuid(), option: "npm install", isCorrect: true },
                { id: uuid(), option: "npm update", isCorrect: false },
                { id: uuid(), option: "node update", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a built-in module in Node.js?",
            options: [
                { id: uuid(), option: "express", isCorrect: false },
                { id: uuid(), option: "mongodb", isCorrect: false },
                { id: uuid(), option: "fs", isCorrect: true },
                { id: uuid(), option: "sequelize", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the default file name of the entry point in Node.js?",
            options: [
                { id: uuid(), option: "index.html", isCorrect: false },
                { id: uuid(), option: "index.js", isCorrect: true },
                { id: uuid(), option: "app.js", isCorrect: false },
                { id: uuid(), option: "server.js", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used to handle events in Node.js?",
            options: [
                { id: uuid(), option: "EventEmitter", isCorrect: true },
                { id: uuid(), option: "EventHandler", isCorrect: false },
                { id: uuid(), option: "eventListener", isCorrect: false },
                { id: uuid(), option: "eventLoop", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is npm in Node.js?",
            options: [
                { id: uuid(), option: "A package manager", isCorrect: true },
                { id: uuid(), option: "A database", isCorrect: false },
                { id: uuid(), option: "A module", isCorrect: false },
                { id: uuid(), option: "An event handler", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which method is used to create a server in Node.js?",
            options: [
                { id: uuid(), option: "http.createServer()", isCorrect: true },
                { id: uuid(), option: "server.create()", isCorrect: false },
                { id: uuid(), option: "app.createServer()", isCorrect: false },
                { id: uuid(), option: "httpServer()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used to write asynchronous code in Node.js?",
            options: [
                { id: uuid(), option: "Callbacks", isCorrect: true },
                { id: uuid(), option: "Events", isCorrect: false },
                { id: uuid(), option: "Modules", isCorrect: false },
                { id: uuid(), option: "Databases", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following can be used to create RESTful APIs in Node.js?",
            options: [
                { id: uuid(), option: "express", isCorrect: true },
                { id: uuid(), option: "mongodb", isCorrect: false },
                { id: uuid(), option: "sequelize", isCorrect: false },
                { id: uuid(), option: "react", isCorrect: false }
            ]
        }
    ]
},

//react 
{
    id: uuid(),
    category: "react",
    image: "https://bbsmituni.com/storage/images/Untitled%20design%20(36).jpg",
    title: "React",
    description: "Test your knowledge of React.",
    quiz: [
        {
            id: uuid(),
            question: "What is React?",
            options: [
                { id: uuid(), option: "A JavaScript library for building user interfaces", isCorrect: true },
                { id: uuid(), option: "A JavaScript framework", isCorrect: false },
                { id: uuid(), option: "A programming language", isCorrect: false },
                { id: uuid(), option: "A database", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a component in React?",
            options: [
                { id: uuid(), option: "A reusable piece of UI", isCorrect: true },
                { id: uuid(), option: "A function that returns HTML", isCorrect: false },
                { id: uuid(), option: "A function that handles state", isCorrect: false },
                { id: uuid(), option: "None of the above", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is JSX?",
            options: [
                { id: uuid(), option: "A JavaScript library", isCorrect: false },
                { id: uuid(), option: "A JavaScript syntax extension", isCorrect: true },
                { id: uuid(), option: "A type of HTML", isCorrect: false },
                { id: uuid(), option: "A CSS framework", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which hook is used to manage state in a React component?",
            options: [
                { id: uuid(), option: "useState", isCorrect: true },
                { id: uuid(), option: "useEffect", isCorrect: false },
                { id: uuid(), option: "useContext", isCorrect: false },
                { id: uuid(), option: "useReducer", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of useEffect in React?",
            options: [
                { id: uuid(), option: "To fetch data from an API", isCorrect: false },
                { id: uuid(), option: "To run side effects after rendering", isCorrect: true },
                { id: uuid(), option: "To manage state", isCorrect: false },
                { id: uuid(), option: "To render JSX", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the virtual DOM in React?",
            options: [
                { id: uuid(), option: "A copy of the real DOM", isCorrect: true },
                { id: uuid(), option: "A virtual reality library", isCorrect: false },
                { id: uuid(), option: "A JavaScript object that represents the UI", isCorrect: false },
                { id: uuid(), option: "None of the above", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which function allows you to send data from a child component to a parent component?",
            options: [
                { id: uuid(), option: "useEffect", isCorrect: false },
                { id: uuid(), option: "props", isCorrect: true },
                { id: uuid(), option: "useState", isCorrect: false },
                { id: uuid(), option: "context", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you create a React application?",
            options: [
                { id: uuid(), option: "npm init react-app myApp", isCorrect: false },
                { id: uuid(), option: "npx create-react-app myApp", isCorrect: true },
                { id: uuid(), option: "npm create-react-app myApp", isCorrect: false },
                { id: uuid(), option: "node create-react-app myApp", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a key prop in React?",
            options: [
                { id: uuid(), option: "A unique identifier for list items", isCorrect: true },
                { id: uuid(), option: "A function to update state", isCorrect: false },
                { id: uuid(), option: "A property that contains a unique key", isCorrect: false },
                { id: uuid(), option: "None of the above", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which hook allows you to access context in a React component?",
            options: [
                { id: uuid(), option: "useContext", isCorrect: true },
                { id: uuid(), option: "useState", isCorrect: false },
                { id: uuid(), option: "useEffect", isCorrect: false },
                { id: uuid(), option: "useReducer", isCorrect: false }
            ]
        }
    ]
},
// ruby
{
    id: uuid(),
    category: "ruby",
    image: "https://i.pinimg.com/originals/eb/9e/3b/eb9e3b7dab09358e7cf13f188f64f9f4.png",
    title: "Ruby",
    description: "Test your knowledge of Ruby.",
    quiz: [
        {
            id: uuid(),
            question: "What is Ruby?",
            options: [
                { id: uuid(), option: "A programming language", isCorrect: true },
                { id: uuid(), option: "A database", isCorrect: false },
                { id: uuid(), option: "A JavaScript library", isCorrect: false },
                { id: uuid(), option: "A framework", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Who developed Ruby?",
            options: [
                { id: uuid(), option: "Guido van Rossum", isCorrect: false },
                { id: uuid(), option: "Yukihiro Matsumoto", isCorrect: true },
                { id: uuid(), option: "Brendan Eich", isCorrect: false },
                { id: uuid(), option: "James Gosling", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which symbol is used for interpolation in Ruby strings?",
            options: [
                { id: uuid(), option: "$", isCorrect: false },
                { id: uuid(), option: "@", isCorrect: false },
                { id: uuid(), option: "#{ }", isCorrect: true },
                { id: uuid(), option: "&", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct syntax to define a method in Ruby?",
            options: [
                { id: uuid(), option: "def methodName", isCorrect: true },
                { id: uuid(), option: "function methodName()", isCorrect: false },
                { id: uuid(), option: "void methodName", isCorrect: false },
                { id: uuid(), option: "method methodName()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is true about Ruby blocks?",
            options: [
                { id: uuid(), option: "They are anonymous functions", isCorrect: true },
                { id: uuid(), option: "They are executed lazily", isCorrect: false },
                { id: uuid(), option: "They cannot take arguments", isCorrect: false },
                { id: uuid(), option: "They are defined with 'def'", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which method is used to convert a string to an integer in Ruby?",
            options: [
                { id: uuid(), option: "to_i", isCorrect: true },
                { id: uuid(), option: "to_int", isCorrect: false },
                { id: uuid(), option: "parseInt", isCorrect: false },
                { id: uuid(), option: "convert_to_int", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you create an array in Ruby?",
            options: [
                { id: uuid(), option: "array = []", isCorrect: true },
                { id: uuid(), option: "array = {}", isCorrect: false },
                { id: uuid(), option: "array = new Array()", isCorrect: false },
                { id: uuid(), option: "array = Array()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the difference between '==' and '===' in Ruby?",
            options: [
                { id: uuid(), option: "'==' compares values, '===' checks types as well", isCorrect: true },
                { id: uuid(), option: "'===' is only used in case statements", isCorrect: false },
                { id: uuid(), option: "'==' compares memory addresses, '===' compares values", isCorrect: false },
                { id: uuid(), option: "Both operators perform the same function", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a gem in Ruby?",
            options: [
                { id: uuid(), option: "A package manager", isCorrect: false },
                { id: uuid(), option: "A Ruby library or package", isCorrect: true },
                { id: uuid(), option: "A data type", isCorrect: false },
                { id: uuid(), option: "A module", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which Ruby method is used to iterate over an array?",
            options: [
                { id: uuid(), option: "each", isCorrect: true },
                { id: uuid(), option: "forEach", isCorrect: false },
                { id: uuid(), option: "map", isCorrect: false },
                { id: uuid(), option: "loop", isCorrect: false }
            ]
        }
    ]
},

//kotlin
{
    id: uuid(),
    category: "kotlin",
    image: "https://contentstatic.techgig.com/photo/107942363/how-kotlin-is-shaping-the-future-of-programming-for-developers.jpg?379691",
    title: "Kotlin",
    description: "Test your knowledge of Kotlin.",
    quiz: [
        {
            id: uuid(),
            question: "What is Kotlin?",
            options: [
                { id: uuid(), option: "A programming language", isCorrect: true },
                { id: uuid(), option: "A framework", isCorrect: false },
                { id: uuid(), option: "A database", isCorrect: false },
                { id: uuid(), option: "A library", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which company developed Kotlin?",
            options: [
                { id: uuid(), option: "JetBrains", isCorrect: true },
                { id: uuid(), option: "Google", isCorrect: false },
                { id: uuid(), option: "Microsoft", isCorrect: false },
                { id: uuid(), option: "Oracle", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is the entry point of a Kotlin program?",
            options: [
                { id: uuid(), option: "main()", isCorrect: true },
                { id: uuid(), option: "start()", isCorrect: false },
                { id: uuid(), option: "init()", isCorrect: false },
                { id: uuid(), option: "run()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you declare a variable in Kotlin?",
            options: [
                { id: uuid(), option: "val x = 5", isCorrect: true },
                { id: uuid(), option: "let x = 5", isCorrect: false },
                { id: uuid(), option: "var x = 5", isCorrect: false },
                { id: uuid(), option: "const x = 5", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to define a function in Kotlin?",
            options: [
                { id: uuid(), option: "function", isCorrect: false },
                { id: uuid(), option: "def", isCorrect: false },
                { id: uuid(), option: "fun", isCorrect: true },
                { id: uuid(), option: "method", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the 'null' safety feature in Kotlin?",
            options: [
                { id: uuid(), option: "To prevent null pointer exceptions", isCorrect: true },
                { id: uuid(), option: "To allow null values in variables", isCorrect: false },
                { id: uuid(), option: "To manage memory more efficiently", isCorrect: false },
                { id: uuid(), option: "To simplify data types", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a data class in Kotlin?",
            options: [
                { id: uuid(), option: "A class that holds data", isCorrect: true },
                { id: uuid(), option: "A class that defines behavior", isCorrect: false },
                { id: uuid(), option: "A class that cannot be instantiated", isCorrect: false },
                { id: uuid(), option: "A class that extends another class", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which operator is used to handle nullable types in Kotlin?",
            options: [
                { id: uuid(), option: "?.", isCorrect: true },
                { id: uuid(), option: "!!", isCorrect: false },
                { id: uuid(), option: "?->", isCorrect: false },
                { id: uuid(), option: "!!.", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the result of the following code: 'val x: Int? = null; x?.plus(5)'?",
            options: [
                { id: uuid(), option: "5", isCorrect: false },
                { id: uuid(), option: "null", isCorrect: true },
                { id: uuid(), option: "0", isCorrect: false },
                { id: uuid(), option: "Runtime exception", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a feature of Kotlin?",
            options: [
                { id: uuid(), option: "Coroutines for asynchronous programming", isCorrect: true },
                { id: uuid(), option: "Automatic memory management", isCorrect: false },
                { id: uuid(), option: "Strictly typed language only", isCorrect: false },
                { id: uuid(), option: "No support for functional programming", isCorrect: false }
            ]
        }
    ]
},
 
//mongodb
{
    id: uuid(),
    category: "mongodb",
    image: "https://images.ctfassets.net/8cjpn0bwx327/7uFtBoODLhFQOpqgGb0P4b/7bc5c6cf2009768cfc0bcbe9691f7579/kuzt9r42or1fxvlq2-Meta_Generic.png",
    title: "MongoDB",
    description: "Test your knowledge of MongoDB.",
    quiz: [
        {
            id: uuid(),
            question: "What type of database is MongoDB?",
            options: [
                { id: uuid(), option: "Relational", isCorrect: false },
                { id: uuid(), option: "Document", isCorrect: true },
                { id: uuid(), option: "Key-Value", isCorrect: false },
                { id: uuid(), option: "Graph", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which language is primarily used for querying MongoDB?",
            options: [
                { id: uuid(), option: "SQL", isCorrect: false },
                { id: uuid(), option: "JavaScript", isCorrect: true },
                { id: uuid(), option: "Python", isCorrect: false },
                { id: uuid(), option: "Java", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a collection in MongoDB?",
            options: [
                { id: uuid(), option: "A group of databases", isCorrect: false },
                { id: uuid(), option: "A group of documents", isCorrect: true },
                { id: uuid(), option: "A single document", isCorrect: false },
                { id: uuid(), option: "A type of index", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid BSON type in MongoDB?",
            options: [
                { id: uuid(), option: "String", isCorrect: true },
                { id: uuid(), option: "Float", isCorrect: false },
                { id: uuid(), option: "Double", isCorrect: true },
                { id: uuid(), option: "Decimal", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What command is used to insert a document in MongoDB?",
            options: [
                { id: uuid(), option: "add()", isCorrect: false },
                { id: uuid(), option: "insertOne()", isCorrect: true },
                { id: uuid(), option: "put()", isCorrect: false },
                { id: uuid(), option: "create()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you query documents in a MongoDB collection?",
            options: [
                { id: uuid(), option: "find()", isCorrect: true },
                { id: uuid(), option: "get()", isCorrect: false },
                { id: uuid(), option: "search()", isCorrect: false },
                { id: uuid(), option: "select()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does the term 'sharding' refer to in MongoDB?",
            options: [
                { id: uuid(), option: "Data encryption", isCorrect: false },
                { id: uuid(), option: "Partitioning data across multiple servers", isCorrect: true },
                { id: uuid(), option: "Data indexing", isCorrect: false },
                { id: uuid(), option: "Data replication", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a document in MongoDB?",
            options: [
                { id: uuid(), option: "A database entry", isCorrect: true },
                { id: uuid(), option: "A collection of data types", isCorrect: false },
                { id: uuid(), option: "A type of query", isCorrect: false },
                { id: uuid(), option: "A type of index", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the _id field in MongoDB documents?",
            options: [
                { id: uuid(), option: "To uniquely identify a document", isCorrect: true },
                { id: uuid(), option: "To store metadata", isCorrect: false },
                { id: uuid(), option: "To link documents", isCorrect: false },
                { id: uuid(), option: "To track updates", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which operator is used to update documents in MongoDB?",
            options: [
                { id: uuid(), option: "modify()", isCorrect: false },
                { id: uuid(), option: "updateOne()", isCorrect: true },
                { id: uuid(), option: "change()", isCorrect: false },
                { id: uuid(), option: "set()", isCorrect: false }
            ]
        }
    ]
},

//sql 
{
    id: uuid(),
    category: "sql",
    image: "https://res.cloudinary.com/dyd911kmh/image/upload/v1646566163/about_sql_5dcf267e9c.jpg",
    title: "SQL",
    description: "Test your knowledge of SQL.",
    quiz: [
        {
            id: uuid(),
            question: "What does SQL stand for?",
            options: [
                { id: uuid(), option: "Structured Query Language", isCorrect: true },
                { id: uuid(), option: "Standard Query Language", isCorrect: false },
                { id: uuid(), option: "Simple Query Language", isCorrect: false },
                { id: uuid(), option: "Structured Question Language", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which SQL statement is used to extract data from a database?",
            options: [
                { id: uuid(), option: "GET", isCorrect: false },
                { id: uuid(), option: "SELECT", isCorrect: true },
                { id: uuid(), option: "EXTRACT", isCorrect: false },
                { id: uuid(), option: "PULL", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct SQL statement to create a table?",
            options: [
                { id: uuid(), option: "CREATE TABLE table_name", isCorrect: true },
                { id: uuid(), option: "NEW TABLE table_name", isCorrect: false },
                { id: uuid(), option: "MAKE TABLE table_name", isCorrect: false },
                { id: uuid(), option: "TABLE table_name", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which SQL clause is used to filter records?",
            options: [
                { id: uuid(), option: "WHERE", isCorrect: true },
                { id: uuid(), option: "FILTER", isCorrect: false },
                { id: uuid(), option: "HAVING", isCorrect: false },
                { id: uuid(), option: "ORDER BY", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the JOIN clause?",
            options: [
                { id: uuid(), option: "To combine rows from two or more tables", isCorrect: true },
                { id: uuid(), option: "To filter records", isCorrect: false },
                { id: uuid(), option: "To sort records", isCorrect: false },
                { id: uuid(), option: "To delete records", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which SQL statement is used to update data in a database?",
            options: [
                { id: uuid(), option: "UPDATE", isCorrect: true },
                { id: uuid(), option: "SET", isCorrect: false },
                { id: uuid(), option: "MODIFY", isCorrect: false },
                { id: uuid(), option: "CHANGE", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does the COUNT() function do?",
            options: [
                { id: uuid(), option: "Counts rows in a table", isCorrect: true },
                { id: uuid(), option: "Counts columns in a table", isCorrect: false },
                { id: uuid(), option: "Counts distinct values", isCorrect: false },
                { id: uuid(), option: "Counts the number of tables", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the default sorting order of the ORDER BY clause?",
            options: [
                { id: uuid(), option: "Ascending", isCorrect: true },
                { id: uuid(), option: "Descending", isCorrect: false },
                { id: uuid(), option: "Random", isCorrect: false },
                { id: uuid(), option: "No order", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which SQL keyword is used to remove duplicates from a result set?",
            options: [
                { id: uuid(), option: "DISTINCT", isCorrect: true },
                { id: uuid(), option: "UNIQUE", isCorrect: false },
                { id: uuid(), option: "DIFFERENT", isCorrect: false },
                { id: uuid(), option: "REMOVE", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which SQL function is used to find the highest value in a column?",
            options: [
                { id: uuid(), option: "MAX()", isCorrect: true },
                { id: uuid(), option: "HIGHEST()", isCorrect: false },
                { id: uuid(), option: "TOP()", isCorrect: false },
                { id: uuid(), option: "GREATEST()", isCorrect: false }
            ]
        }
    ]
},

// c#
{
    id: uuid(),
    category: "csharp",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Csharp_Programming_for_Beginners.jpg",
    title: "C#",
    description: "Test your knowledge of C#.",
    quiz: [
        {
            id: uuid(),
            question: "What does C# stand for?",
            options: [
                { id: uuid(), option: "C Sharp", isCorrect: true },
                { id: uuid(), option: "C Hash", isCorrect: false },
                { id: uuid(), option: "C Number", isCorrect: false },
                { id: uuid(), option: "C Plus", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a correct way to declare a variable in C#?",
            options: [
                { id: uuid(), option: "int number = 5;", isCorrect: true },
                { id: uuid(), option: "number int = 5;", isCorrect: false },
                { id: uuid(), option: "5 = int number;", isCorrect: false },
                { id: uuid(), option: "var number : int = 5;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to define a class in C#?",
            options: [
                { id: uuid(), option: "class", isCorrect: true },
                { id: uuid(), option: "def", isCorrect: false },
                { id: uuid(), option: "create", isCorrect: false },
                { id: uuid(), option: "object", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct way to create an array in C#?",
            options: [
                { id: uuid(), option: "int[] numbers = new int[5];", isCorrect: true },
                { id: uuid(), option: "int numbers[5];", isCorrect: false },
                { id: uuid(), option: "int numbers = new int[];", isCorrect: false },
                { id: uuid(), option: "array<int> numbers = new array<int>(5);", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is not a C# data type?",
            options: [
                { id: uuid(), option: "string", isCorrect: false },
                { id: uuid(), option: "boolean", isCorrect: false },
                { id: uuid(), option: "float", isCorrect: false },
                { id: uuid(), option: "decimal64", isCorrect: true }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the 'using' statement in C#?",
            options: [
                { id: uuid(), option: "To include namespaces", isCorrect: true },
                { id: uuid(), option: "To declare variables", isCorrect: false },
                { id: uuid(), option: "To create loops", isCorrect: false },
                { id: uuid(), option: "To define classes", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid C# method signature?",
            options: [
                { id: uuid(), option: "public void MyMethod()", isCorrect: true },
                { id: uuid(), option: "void MyMethod public()", isCorrect: false },
                { id: uuid(), option: "MyMethod(): void", isCorrect: false },
                { id: uuid(), option: "public MyMethod() void", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which statement is used to exit a loop in C#?",
            options: [
                { id: uuid(), option: "exit", isCorrect: false },
                { id: uuid(), option: "break", isCorrect: true },
                { id: uuid(), option: "stop", isCorrect: false },
                { id: uuid(), option: "return", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the output of Console.WriteLine(2 + 2); in C#?",
            options: [
                { id: uuid(), option: "22", isCorrect: false },
                { id: uuid(), option: "4", isCorrect: true },
                { id: uuid(), option: "Error", isCorrect: false },
                { id: uuid(), option: "2 + 2", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to inherit a class in C#?",
            options: [
                { id: uuid(), option: "inherits", isCorrect: false },
                { id: uuid(), option: "extends", isCorrect: false },
                { id: uuid(), option: "base", isCorrect: false },
                { id: uuid(), option: ": ", isCorrect: true }
            ]
        }
    ]
},
//rust
{
    id: uuid(),
    category: "rust",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2LLshkzElMbLerWOEaVAqYPtnlb-ku2VCQ&s",
    title: "Rust",
    description: "Test your knowledge of Rust.",
    quiz: [
        {
            id: uuid(),
            question: "What is the primary feature of Rust?",
            options: [
                { id: uuid(), option: "Memory safety without garbage collection", isCorrect: true },
                { id: uuid(), option: "Automatic memory management", isCorrect: false },
                { id: uuid(), option: "Multi-threading support", isCorrect: false },
                { id: uuid(), option: "Dynamic typing", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used to declare a variable in Rust?",
            options: [
                { id: uuid(), option: "let variable_name;", isCorrect: false },
                { id: uuid(), option: "var variable_name;", isCorrect: false },
                { id: uuid(), option: "let variable_name: Type;", isCorrect: true },
                { id: uuid(), option: "define variable_name;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does 'Cargo' do in Rust?",
            options: [
                { id: uuid(), option: "It manages Rust packages and builds", isCorrect: true },
                { id: uuid(), option: "It is the Rust compiler", isCorrect: false },
                { id: uuid(), option: "It is an IDE for Rust", isCorrect: false },
                { id: uuid(), option: "It is a runtime environment", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to define a function in Rust?",
            options: [
                { id: uuid(), option: "def", isCorrect: false },
                { id: uuid(), option: "func", isCorrect: false },
                { id: uuid(), option: "fn", isCorrect: true },
                { id: uuid(), option: "function", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the correct way to create a mutable variable in Rust?",
            options: [
                { id: uuid(), option: "let mut variable_name;", isCorrect: true },
                { id: uuid(), option: "mutable variable_name;", isCorrect: false },
                { id: uuid(), option: "var variable_name mutable;", isCorrect: false },
                { id: uuid(), option: "let variable_name mutable;", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which trait is used for formatting output in Rust?",
            options: [
                { id: uuid(), option: "Display", isCorrect: true },
                { id: uuid(), option: "Format", isCorrect: false },
                { id: uuid(), option: "Print", isCorrect: false },
                { id: uuid(), option: "Output", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a valid way to create a vector in Rust?",
            options: [
                { id: uuid(), option: "let v = Vec::new();", isCorrect: true },
                { id: uuid(), option: "let v = new Vec();", isCorrect: false },
                { id: uuid(), option: "let v = Vector::new();", isCorrect: false },
                { id: uuid(), option: "let v = vec[];", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the 'match' statement in Rust?",
            options: [
                { id: uuid(), option: "To create loops", isCorrect: false },
                { id: uuid(), option: "To handle multiple conditions", isCorrect: true },
                { id: uuid(), option: "To declare variables", isCorrect: false },
                { id: uuid(), option: "To define functions", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used to handle errors in Rust?",
            options: [
                { id: uuid(), option: "try/catch", isCorrect: false },
                { id: uuid(), option: "Result", isCorrect: true },
                { id: uuid(), option: "Error", isCorrect: false },
                { id: uuid(), option: "Exception", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does 'ownership' mean in Rust?",
            options: [
                { id: uuid(), option: "The ability to use variables", isCorrect: false },
                { id: uuid(), option: "A concept that ensures memory safety", isCorrect: true },
                { id: uuid(), option: "The type of a variable", isCorrect: false },
                { id: uuid(), option: "The ability to share data", isCorrect: false }
            ]
        }
    ]
},

//Go 
{
    id: uuid(),
    category: "go",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yyroiDkxheh7J2IpotwI2b3e3v0smLUnmw&s",
    title: "Go",
    description: "Test your knowledge of the Go programming language.",
    quiz: [
        {
            id: uuid(),
            question: "What is the primary purpose of the Go programming language?",
            options: [
                { id: uuid(), option: "Web development", isCorrect: false },
                { id: uuid(), option: "System programming", isCorrect: false },
                { id: uuid(), option: "Concurrency and efficiency", isCorrect: true },
                { id: uuid(), option: "Game development", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which keyword is used to declare a variable in Go?",
            options: [
                { id: uuid(), option: "var", isCorrect: true },
                { id: uuid(), option: "let", isCorrect: false },
                { id: uuid(), option: "define", isCorrect: false },
                { id: uuid(), option: "const", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the Go command to build a binary?",
            options: [
                { id: uuid(), option: "go build", isCorrect: true },
                { id: uuid(), option: "go run", isCorrect: false },
                { id: uuid(), option: "go create", isCorrect: false },
                { id: uuid(), option: "go make", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does the 'defer' keyword do in Go?",
            options: [
                { id: uuid(), option: "Delays the execution of a function until the surrounding function returns", isCorrect: true },
                { id: uuid(), option: "Defines a variable", isCorrect: false },
                { id: uuid(), option: "Creates a loop", isCorrect: false },
                { id: uuid(), option: "Handles errors", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which data structure is used to implement a stack in Go?",
            options: [
                { id: uuid(), option: "Array", isCorrect: false },
                { id: uuid(), option: "Map", isCorrect: false },
                { id: uuid(), option: "Slice", isCorrect: true },
                { id: uuid(), option: "Linked List", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the output of the following code: fmt.Println(1 + 1)?",
            options: [
                { id: uuid(), option: "1", isCorrect: false },
                { id: uuid(), option: "2", isCorrect: true },
                { id: uuid(), option: "3", isCorrect: false },
                { id: uuid(), option: "Error", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you declare a constant in Go?",
            options: [
                { id: uuid(), option: "const name = 'value'", isCorrect: true },
                { id: uuid(), option: "constant name = 'value'", isCorrect: false },
                { id: uuid(), option: "let name = 'value'", isCorrect: false },
                { id: uuid(), option: "define name = 'value'", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is a Go interface method?",
            options: [
                { id: uuid(), option: "func methodName()", isCorrect: true },
                { id: uuid(), option: "method methodName()", isCorrect: false },
                { id: uuid(), option: "func methodName{} ", isCorrect: false },
                { id: uuid(), option: "method func methodName()", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the primary way to handle errors in Go?",
            options: [
                { id: uuid(), option: "Exceptions", isCorrect: false },
                { id: uuid(), option: "Return values", isCorrect: true },
                { id: uuid(), option: "Logging", isCorrect: false },
                { id: uuid(), option: "Panic", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which Go keyword is used to create a goroutine?",
            options: [
                { id: uuid(), option: "go", isCorrect: true },
                { id: uuid(), option: "goroutine", isCorrect: false },
                { id: uuid(), option: "thread", isCorrect: false },
                { id: uuid(), option: "async", isCorrect: false }
            ]
        }
    ]
},
//next 
{
    id: uuid(),
    category: "nextjs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtp941GzKhHe95PNM1kMhrUW2uPpX5_2PtNw&s",
    title: "Next.js",
    description: "Test your knowledge of Next.js framework.",
    quiz: [
        {
            id: uuid(),
            question: "What is Next.js primarily used for?",
            options: [
                { id: uuid(), option: "Static site generation", isCorrect: false },
                { id: uuid(), option: "Server-side rendering", isCorrect: false },
                { id: uuid(), option: "Building React applications", isCorrect: true },
                { id: uuid(), option: "Database management", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you create a new Next.js application?",
            options: [
                { id: uuid(), option: "npx create-next-app", isCorrect: true },
                { id: uuid(), option: "npm init next-app", isCorrect: false },
                { id: uuid(), option: "create-next-app", isCorrect: false },
                { id: uuid(), option: "npm create next-app", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following file types is used to create pages in Next.js?",
            options: [
                { id: uuid(), option: ".jsx", isCorrect: false },
                { id: uuid(), option: ".next", isCorrect: false },
                { id: uuid(), option: ".js", isCorrect: true },
                { id: uuid(), option: ".html", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the `getStaticProps` function in Next.js?",
            options: [
                { id: uuid(), option: "Fetch data at build time", isCorrect: true },
                { id: uuid(), option: "Fetch data on each request", isCorrect: false },
                { id: uuid(), option: "Render client-side components", isCorrect: false },
                { id: uuid(), option: "Manage state", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What does `next/link` component do?",
            options: [
                { id: uuid(), option: "It creates an API route", isCorrect: false },
                { id: uuid(), option: "It enables client-side navigation between pages", isCorrect: true },
                { id: uuid(), option: "It handles form submissions", isCorrect: false },
                { id: uuid(), option: "It fetches data from a database", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is true about Next.js routing?",
            options: [
                { id: uuid(), option: "It uses file-based routing", isCorrect: true },
                { id: uuid(), option: "It requires a separate routing library", isCorrect: false },
                { id: uuid(), option: "It only supports dynamic routes", isCorrect: false },
                { id: uuid(), option: "It does not support nested routes", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you add global CSS in a Next.js project?",
            options: [
                { id: uuid(), option: "Import CSS files in _app.js", isCorrect: true },
                { id: uuid(), option: "Import CSS files in index.js", isCorrect: false },
                { id: uuid(), option: "Include CSS files in the public folder", isCorrect: false },
                { id: uuid(), option: "Use inline styles", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is `getServerSideProps` used for in Next.js?",
            options: [
                { id: uuid(), option: "Fetching data at build time", isCorrect: false },
                { id: uuid(), option: "Fetching data on each request", isCorrect: true },
                { id: uuid(), option: "Handling form submissions", isCorrect: false },
                { id: uuid(), option: "Generating static pages", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which command is used to start the development server in a Next.js application?",
            options: [
                { id: uuid(), option: "npm start", isCorrect: false },
                { id: uuid(), option: "npm run dev", isCorrect: true },
                { id: uuid(), option: "next dev", isCorrect: false },
                { id: uuid(), option: "next start", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the `Image` component in Next.js?",
            options: [
                { id: uuid(), option: "To optimize images automatically", isCorrect: true },
                { id: uuid(), option: "To display SVGs", isCorrect: false },
                { id: uuid(), option: "To create image sliders", isCorrect: false },
                { id: uuid(), option: "To handle image uploads", isCorrect: false }
            ]
        }
    ]
},

//angular
{
    id: uuid(),
    category: "angular",
    image: "https://solution25.com/wp-content/uploads/2022/08/angular-best-practices-and-structure-2048x1363.jpg",
    title: "Angular",
    description: "Test your knowledge of Angular framework.",
    quiz: [
        {
            id: uuid(),
            question: "What is Angular primarily used for?",
            options: [
                { id: uuid(), option: "Building mobile applications", isCorrect: false },
                { id: uuid(), option: "Building single-page applications", isCorrect: true },
                { id: uuid(), option: "Creating server-side applications", isCorrect: false },
                { id: uuid(), option: "Database management", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the command to create a new Angular application?",
            options: [
                { id: uuid(), option: "ng new app-name", isCorrect: true },
                { id: uuid(), option: "npm init angular-app app-name", isCorrect: false },
                { id: uuid(), option: "create-angular-app app-name", isCorrect: false },
                { id: uuid(), option: "ng create app-name", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a component in Angular?",
            options: [
                { id: uuid(), option: "A service for managing data", isCorrect: false },
                { id: uuid(), option: "A building block of the application UI", isCorrect: true },
                { id: uuid(), option: "A routing mechanism", isCorrect: false },
                { id: uuid(), option: "A directive for rendering templates", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which decorator is used to define an Angular component?",
            options: [
                { id: uuid(), option: "@Component", isCorrect: true },
                { id: uuid(), option: "@Injectable", isCorrect: false },
                { id: uuid(), option: "@NgModule", isCorrect: false },
                { id: uuid(), option: "@Directive", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the `ngFor` directive?",
            options: [
                { id: uuid(), option: "To iterate over a collection", isCorrect: true },
                { id: uuid(), option: "To create a form", isCorrect: false },
                { id: uuid(), option: "To handle events", isCorrect: false },
                { id: uuid(), option: "To bind data", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "How do you bind a property to a DOM element in Angular?",
            options: [
                { id: uuid(), option: "[propertyName] = 'value'", isCorrect: true },
                { id: uuid(), option: "{{propertyName}}", isCorrect: false },
                { id: uuid(), option: "(click) = 'value'", isCorrect: false },
                { id: uuid(), option: "propertyName: 'value'", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is the purpose of the `@Injectable` decorator?",
            options: [
                { id: uuid(), option: "To create a component", isCorrect: false },
                { id: uuid(), option: "To define a service", isCorrect: true },
                { id: uuid(), option: "To manage routing", isCorrect: false },
                { id: uuid(), option: "To create a module", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which of the following is used for routing in Angular?",
            options: [
                { id: uuid(), option: "RouterModule", isCorrect: true },
                { id: uuid(), option: "HttpClientModule", isCorrect: false },
                { id: uuid(), option: "FormsModule", isCorrect: false },
                { id: uuid(), option: "CommonModule", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "What is a service in Angular?",
            options: [
                { id: uuid(), option: "A component for UI", isCorrect: false },
                { id: uuid(), option: "A reusable piece of code for business logic", isCorrect: true },
                { id: uuid(), option: "A directive for rendering templates", isCorrect: false },
                { id: uuid(), option: "A routing mechanism", isCorrect: false }
            ]
        },
        {
            id: uuid(),
            question: "Which file is the main entry point of an Angular application?",
            options: [
                { id: uuid(), option: "main.ts", isCorrect: true },
                { id: uuid(), option: "app.module.ts", isCorrect: false },
                { id: uuid(), option: "index.html", isCorrect: false },
                { id: uuid(), option: "app.component.ts", isCorrect: false }
            ]
        }
    ]
},











       
    ]
};

module.exports = quizzes;
