<h1>Idol-recognizer</h1>

<h2> Description </h2>
A simple web page that takes in a link of image and identify member of snh48's team sii
Link: https://duahau1.github.io/idol-recognizer/

<h2>Additional information</h2>
-  Version 1.0.0
* This website uses Microsoft Face API to train and recognize faces. The accuracy of identifying a correct listed idol is 67% as tested with 3 top searched images found by using Microsoft Bing Web Search API.
* This website uses a serverless function hosted on Vercel to call all the APIs so it takes some extra for every requests. Also, I use my custom REST API hosted on Heroku with a in-memory cache to increase performance.
* Front end is developed using AngularJS 1 and Senmantic UI.
* This is a gift for SNH48's team SII Gen 1 's Graduation.

- Version 1.1.0
* Integrate D3.js to implement bar chart that shows the accuracy's result. 
* The plot shows the percentage of the correct recognition and the wrong recognition.
* Redis Cache is on set up.
