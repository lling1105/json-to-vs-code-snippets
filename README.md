# json-to-vs-code-snippets
convert json object to vs code snippets and keep formatted

# how to use
npm run build will create an executable app named json-to-vs-code-snippets.exe, copy it to the folder with .json snippets, just run the exe it will create the code-snippets file accordingly.
enjoy!

### if create one_line_templates.json, and list which file no need to keep format and compact in one line
```json
["test2"]
```
the output will be 
```javascript
{"name": "json-to-vs-code-snippets","children": [{"c1": 1},{"c2": 2}]}

// rather than
{
  "name": "json-to-vs-code-snippets",
  "children": [
    {
      "c1": 1
    },
    {
      "c2": 2
    }
  ]
}
```