import React from 'react';
import Footer from '../components/Footer';

const Map = () => {
    return (
        <div>
          <script src="https://code.jquery.com/jquery-3.6.1.min.js" integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/svg-pan-zoom@3.6.1/dist/svg-pan-zoom.min.js"></script>
          <link href="sfcmap.css" rel="stylesheet" />
          <div id="svgContainer" style="width: 920px; height: 600px; background-color: #eeece7"></div>
          <div id='dirContainer'></div>
          <script src="sfcmap.js"></script>
        </div>
    )
}

export default Map
