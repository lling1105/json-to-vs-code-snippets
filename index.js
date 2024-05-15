const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');


const root_folder_name = path.parse(process.cwd()).name;

let code_snippets = {};
fs.readdirSync(process.cwd()).forEach(file => {
    let file_info = path.parse(file);
    if(file_info.ext.toLowerCase()==='.json'){
        let json_obj = fse.readJsonSync(path.join(process.cwd(),file));
        code_snippets[`${file_info.name}`] = {
            "scope":"javascript,typescript,json",
            "prefix":"template",
            "body":[
                JSON.stringify(json_obj,null,'\t')
            ],
            "description":""
        }
    }
});
fse.writeJsonSync(`${root_folder_name}.code-snippets`,code_snippets,{spaces:'\t'});