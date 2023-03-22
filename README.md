# BestEgg Test

* This repo is written by Jessica Chavez for BestEgg testing. Yay ^_^ 
This test is made in Javascript it is able to retrieve `json` files, each which contains 100 people records filtering through data retrieving 3 fields. 
- Retrieving json files that are `active`. 
- Retrieving json files`balances` that exceed $2000. 
- Retrieving json files`registered` files after January 1st, 2016.




## Instructions for Test and Documentation
I did a lot of testing in here to make sure each function works 100%.

To test this repo simply run npm run build. 

To find the Results for new updated json files look in the output directory afterwards at newresults.json

* Typedoc(installed Typscript only for testing purposes): https://jessi-777.github.io/data_test/docs/

To run the repo type `npm install`. 

* GitHub Repo: https://github.com/Jessi-777/data_testing



### Write Up
When imagining what kind of approach I would do differently, having unlimited time and budget containing 500,000 files. I believe, I would use the createWriteStream approach, because it is more safe then using writeFiles.   

You can find my write up imagination idea in the directory inside two files called:

- `zhu_li_do_the_thing.spec.js` 
- `utils.js` 

In these files I'm generating a sequence of fake files and fake id's. The ideas was to generate random sizes of files to see it's performance function, but I ran out of time.



 