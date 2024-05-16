const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');

//array to list which file need compact in one line without formate
const one_line_templates_configs_file = path.join(process.cwd(), 'one_line_templates.json');
const one_line_templates = fse.existsSync(one_line_templates_configs_file) ? fse.readJsonSync(one_line_templates_configs_file) : [];

const root_folder_name = path.parse(process.cwd()).name;

let code_snippets = {};
fs.readdirSync(process.cwd()).forEach(file => {
    let file_info = path.parse(file);
    if(file_info.ext.toLowerCase()==='.json'){
        let json_obj = fse.readJsonSync(path.join(process.cwd(),file));
        let body_string = JSON.stringify(json_obj, null, '\t')
            .replace(/"\$/ig, '"\\$')
            .replace(/{\n(\t)+/ig, '{')
            .replace(/\n[\t]+}/ig, '}')
            .replace(/\n}/ig, '}');
        if (one_line_templates.includes(file_info.name)) { 
            body_string = body_string.replace(/\n[\t]+/ig, '');
        }
        
        code_snippets[`${file_info.name}`] = {
            "scope":"javascript,typescript,json",
            "prefix":"template",
            "body":[
                body_string
            ]
        }
    }
});
fse.writeJsonSync(`${root_folder_name}.code-snippets`,code_snippets,{spaces:' '});