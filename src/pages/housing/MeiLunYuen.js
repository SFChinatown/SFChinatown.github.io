import React from 'react';
import Footer from '../../components/Footer';
import "./MeiLunYuen.css";
import "../PageStyle.css";

const MeiLunYuen = () => {
    return (
        <div className="mei-lun-yuen-page">
            <div className="mei-lun-yuen-intro">
                <br/>
                <h2>Mei Lun Yuen</h2>
                <p>As was made evident by the International Hotel eviction protests, 1970s San Francisco Chinatown was in great need of affordable housing for its residents. In 1970, a study by the City of San Francisco found that over 26% of Chinatown's population lived in overcrowded conditions. In 1974, the Bureau of Building Inspection found that 42% of housing in Chinatown contained building code violations. Additionally, around 1976, the San Francisco Planning Department found that 50% of Chinatown’s elderly population lived without sufficient plumbing.<sup>1</sup> Clearly, Chinatown desperately needed housing that would provide its residents, especially its elderly residents,  with safe, secure, and affordable places to live. One solution to this issue was the Mei Lun Yuen Redevelopment Project.</p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/meilunyuen/image1.png')} className="horizontal-img"/>
                    </figure>
                </div>
                <br/>
                <p>Up until the 1970s, the southwest block of Stockton and Sacramento Streets contained 11 residential buildings that were in poor condition, with some even remaining unoccupied. The Chinatown Coalition for Better Housing proposed the Mei Lun Yuen Redevelopment Project, which would redevelop the block into low-income housing instead.<sup>2</sup> The location was ideal, as it was within a block of other important Chinatown resources and locations, including the Cameron House, St. Mary’s Chinese School, Stockton Elementary School, and the YMCA.<sup>3</sup> The original plan was to construct five residential buildings containing 175 units in total, with 140 units being designated for elderly residents and 35 units designed to accommodate families. There would also be a five-story commercial garage constructed on the property for use by both Mei Lun residents and patrons of the surrounding neighborhood.<sup>4</sup></p>
                <div className="imgText">
                    <figure>
                        <img src={require('../../assets/images/meilunyuen/image2.jpg')} className="horizontal-img"/>
                    </figure>
                </div>
                <br/>
                <p>The first obstacle in the construction of Mei Lun Yuen was funding. Due to supposed budget cuts, the United States Department of Housing and Urban Development (HUD) was unable to provide federal matching funds to construct the project. Community members decided to draw attention to the project’s need for funding by holding a community demonstration. A peaceful walking protest was held from Portsmouth Square, an important community gathering space in Chinatown, to the HUD office in Embarcadero Center. About  200 people came together to show their support for the project. Eventually, the HUD allocated funds specifically for housing subsidy programs. Additionally, funding for the project was acquired through partnerships between multiple developers. The Presbyterian Church in Chinatown partnered with the private developing firm Arcon to develop the project; the church financed the housing while the firm financed the parking garage.<sup>5</sup> Ultimately, the project was able to obtain funding for construction to commence.</p>
                <p>The other obstacle to Mei Lun Yuen’s construction came from Nob Hill residents who objected to the development. The Nob Hill Association and 840 Powell Street Homeowners Association attempted to sue the HUD for increased traffic, pollution, and blocking their view of the San Francisco Bay.<sup>6</sup> However, the HUD’s environmental impact investigation found that such effects from the project were not significant enough to prevent construction. Measures were taken to reduce the amount of air pollution emitted from the parking garage. For instance, the exhaust pipes from the garage were designed to lay above street level.<sup>7</sup> Additionally, Mei Lun Yuen apartment buildings were designed to intentionally avoid blocking significant portions of the Bay from view. Of the 840 Powell Street apartments, only 19 units would have their view of the Bay partially blocked by the Mei Lun Yuen apartments, while no units would be completely blocked.<sup>8</sup> In the end, the Mei Lun Yuen Redevelopment Project was permitted, and in 1979 construction of the apartments began.<sup>9</sup></p>
                <p>When Mei Lun Yuen’s construction was completed in 1982, it became the first housing project specifically dedicated to senior housing in San Francisco Chinatown.<sup>10</sup> Today, it remains under the HUD affordable housing program. The apartment complex has a total of 185 residential units, with 152 units designated for elderly residents and 33 units designated for families.<sup>11</sup></p>
                <br/>
            </div>

            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup> United States Department of Housing and Urban Development, San Francisco Area Office, “Mei Lun Yuen Development of the Chinatown Redevelopment Area in San Francisco, California: Draft Environmental Impact Statement” (San Francisco, CA, 1976), 52. http://archive.org/details/meilunyuendevelo2719unit.
                    </li> 
                    <li>
                        <sup>2</sup> Li, Chuo. “Postwar Urban Redevelopment and the Politics of Exclusion: The Case of San Francisco’s Chinatown.” Journal of Planning History 18, no. 1 (2019), 37.
                    </li> 
                    <li>
                        <sup>3</sup> US HUD, “Mei Lun Yuen Development of the Chinatown Redevelopment Area”, 19.
                    </li> 
                    <li>
                        <sup>4</sup> US HUD, “Mei Lun Yuen Development of the Chinatown Redevelopment Area”, 13.
                    </li> 
                    <li>
                        <sup>5</sup> Li. “Postwar Urban Redevelopment and the Politics of Exclusion,” 37.
                    </li>
                    <li>
                        <sup>6</sup> Li. “Postwar Urban Redevelopment and the Politics of Exclusion,” 37.
                    </li> 
                    <li>
                        <sup>7</sup> US HUD, “Mei Lun Yuen Development of the Chinatown Redevelopment Area”, 41.
                    </li> 
                    <li>
                        <sup>8</sup> US HUD, “Mei Lun Yuen Development of the Chinatown Redevelopment Area”, 139.
                    </li> 
                    <li>
                        <sup>9</sup> Li. “Postwar Urban Redevelopment and the Politics of Exclusion,” 38.
                    </li> 
                    <li>
                        <sup>10</sup> Li. “Postwar Urban Redevelopment and the Politics of Exclusion,” 38.
                    </li>
                    <li>
                        <sup>11</sup> “Mei Lun Yuen,” The John Stewart Company, accessed March 14, 2023, https://jsco.net/property/mei-lun-yuen/.
                    </li> 
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default MeiLunYuen;