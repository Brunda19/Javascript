let return_language = (...element) => {
    // Filter to get only string elements
    let string_elements = element.filter((ele) => typeof ele === "string");
    
    // Map over string elements and return corresponding languages
    let result = string_elements.map((ele) => {
        if (ele === "p") {
            return "python";
        } else if (ele === "j") {
            return "java";
        } else if (ele === "js") {
            return "javascript";
        } else if (ele === "h") {
            return "html";
        } else {
            return "Language rest found";
        }
    });

    return result;
};

let myarr = return_language(2.3, 3, "j", "hole", "h", "pavan", "p", "js", 8, 0, "htl");
console.log(myarr);

