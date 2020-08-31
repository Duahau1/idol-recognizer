<h1>Idol-recognizer</h1>

<h2> Description </h2>
A simple web page that takes in a link of image and identify member of snh48's team sii
Link: https://idol-recognizer.herokuapp.com/

<h2>Additional information</h2>

* This website uses Microsoft Face API to train and recognize faces. The accuracy of identifying a correct listed idol is 67% as tested with 3 top searched images found by using Microsoft Bing Web Search API.
* This website uses a serverless function hosted on Vercel to call all the APIs so it takes some extra for every requests. Also, I use my custom REST API hosted on Heroku with a in-memory cache to increase performance.
* Front end is developed using AngularJS 1 and Senmantic UI.
* This is a gift for SNH48's team SII Gen 1 's Graduation.
* Integrate D3.js to implement bar chart that shows the accuracy's result. 
* The plot shows the percentage of the correct recognition and the wrong recognition.
* Redis Cache has been set up hosted on Redis Labs (30MB as limit) so if the keys exceed more than 30 the cache would be flush. Since we are only looking at the name and the birthday so we don't need to invalidate the cache.

* Schema of technologies used in this project
<img src="./Blank Diagram.png"  height="350px" />
