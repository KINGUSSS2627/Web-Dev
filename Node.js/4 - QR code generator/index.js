// using inquirer npm to get user input
// Using qr-image npm to convert url to image
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([{
        "message": "Type in Url : ",
        name: "URL"
    }])
    .then((answers) => {
        const URL = answers.URL;
        var qr_svg = qr.image(URL);
        qr_svg.pipe(fs.createWriteStream('qr_img.png'));

        fs.writeFile("URL.txt", URL, (err) => {
            if (err) throw err;
            console.log("The I/P is saved");
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


