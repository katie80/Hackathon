# Know Your Code
 - By Burlywood

##Level subjects:
- HTML ✅
- CSS ✅
- JavaScript
- jQuery
- Node
- Mongo
- Mongoose


```javascript
levels = [ {level} ]

level = {title: "level 1",
         question: "string",
         options: [{option}]
       }

option = {content: "string",
           isCorrect: boolean}
```
## The JSON:
```json
{"title": "Level 1: HTML",
"question": "question_content",
"options": [{"content": "option_1_content",
           "isCorrect": true},
           {"content": "option_2_content",
           "isCorrect": false},
           {"content": "option_3_content",
           "isCorrect": false}]
}
```
## Instructions for setting up Know Your Code full-stack application development environment
1. Initialize node application
2. Install express, body-parser and mongoose
3. Make a directory for data
4. Start mongodb poitnted to data directory
```bash
npm init
npm install --save express body-parser mongoose
mkdir data
mongod --dbpath ./data
```
With your mongo data base running in one terminal, open another with command-n, navigate to your local Know Your Code Full-stack folder and run server.js

## Intstructions for building Levels
1. Set up development Environment
2. In sublime, open hackathon/know-your-code-fullstack/public/levelmaker.html
3. Insert level dependent information into divs (first answer div always contains correct answer)
4. For options containing code blocks, 
 4.1: Use https://tohtml.com/ to generate styled html and 
 4.2: Insert styled html into answer divs 
 4.3: Add font-size styleing depending on code block size
 4.3: Manualy add indentation on a line by line basis.
5. Click add level to save level to database

# At the end of a session

1. Finalize your levels collection using robomongo (delete unwanted levels/duplicates)
2. Click save levels to json to export your levels into the leves.json file

