import React from 'react';
import Footer from '../components/Footer';
import "./Map.css";

const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>SF Chinatown</title>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&family=Rowdies:wght@700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <!-- Bootstrap core JS-->
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
        <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>

    </head>
    <body>


    <div id="intro"></div>
    <!--Main layout-->
    <main class="my-5">
        <div class="container">

        <!--Section: Map -->
        <section class="pb-4 mb-5">
            <div class="row">

        <!--- div class="text-center">
        <br><h1 class="mb-3 h2 red">Interactive Map</h1>
        <p class="mb-3">Hover over the buildings to explore</p>
        </div --->

    <div class="col-sm-1 mx-auto"></div>
    <div class="col-sm-10 mx-auto">

    <!--- copy sfcmap.min.svg, sfcmap.json, sfcmap.css, sfcmap.js into the template directory and insert the following chunk of html in page --->
    <script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
    <link href="Map.css" rel="stylesheet" />
    <div id="svgContainer" style="width: 920px; height: 600px; background-color: #eeece7"></div>
    <div id='dirContainer'></div>
    <script src="Map.js"></script>
    <!--- end of map --->
        
        
    </div>

    <div class="col-sm-1 mx-auto"></div>

            </div>
        </section>
        <!--Section: Map -->

        </div>
    </main>
    <!--Main layout-->



    </body>
    </html>
`;
const Map = () => {
    return (
        <iframe src="https://sfchinatown.github.io/map/"></iframe>
    )
}

export default Map;