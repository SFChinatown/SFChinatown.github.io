import React from 'react';
import Footer from '../../components/Footer';
import "./LauNichols.css";
import "../PageStyle.css";

const LauNichols = () => {
    return (
        <div className="lau-nichols-page">
            <div className="lau-nichols-intro">
                <h2>Sophia: Lau v. Nichols Supreme Court Case</h2>
                <p>In 1974, the United States Supreme Court ruled unanimously in favor of educational access for non-English speaking students in the Lau v. Nichols case. This case set a precedent for students around the country who were immigrants, children of immigrants, or new to the language for any reason. </p>
                <p>	In San Francisco, there was a sharp influx of immigrants from non-European and non-white nations with the passing of the Immigration Act of 1965<sup>1</sup>. This also correlated to an influx of students from abroad who were continuing their education at schools in the city, while speaking languages other than English<sup>2</sup>. They were entering schools at their grade-level, but struggling to understand what was being taught because students didn’t have a solid enough understanding of the English language. These “English-only” schools were isolating for students coming from immigrant and non-English-speaking backgrounds<sup>3</sup>. In addition, teachers in the district did not feel that they had adequate resources to teach English as a second language alongside the rest of the assigned curriculum and subjects.<sup>4</sup></p>
            </div>
           
            {/* TODO: Figure out cleaner way to do citations, maybe with a component? */}
            <details className="citations">
                <summary>References</summary>
                <ul>
                    <li>
                        <sup>1</sup><it>SFUSD Bilingual Education Lau vs Nichols SFGTV San Francisco</it>, 2007. <a href="https://www.youtube.com/watch?v=cXhQrJ37gFE">https://www.youtube.com/watch?v=cXhQrJ37gFE</a>.
                    </li>
                    <li>
                        <sup>2</sup>Ibid.
                    </li>
                    <li>
                        <sup>3</sup>Ibid.
                    </li>
                    <li>
                        <sup>4</sup>Ibid.
                    </li>
                    <li>
                        <sup>5</sup>Ibid.
                    </li>
                    <li>
                        <sup>6</sup>Ibid.
                    </li>
                    <li>
                        <sup>7</sup>Oyez. “Lau v. Nichols - Oral Argument - December 10, 1973.” Accessed April 12, 2023. <a href="https://apps.oyez.org/player/#/burger4/oral_argument_audio/16355">https://apps.oyez.org/player/#/burger4/oral_argument_audio/16355</a>.
                    </li>
                    <li>
                        <sup>8</sup>Ibid.
                    </li>
                    <li>
                        <sup>9</sup>Ibid.
                    </li>
                    <li>
                        <sup>10</sup>Ibid.
                    </li>
                    <li>
                        <sup>11</sup><it>SFUSD Bilingual Education Lau vs Nichols SFGTV San Francisco</it>, 2007. <a href="https://www.youtube.com/watch?v=cXhQrJ37gFE">https://www.youtube.com/watch?v=cXhQrJ37gFE</a>.
                    </li>
                    <li>
                        <sup>12</sup>Ibid.
                    </li>
                    <li>
                        <sup>13</sup>Ibid.
                    </li>
                    <li>
                        <sup>14</sup>Ibid.
                    </li>
                    <li>
                        <sup>15</sup>Ibid.
                    </li>
                    <li>
                        <sup>16</sup>Ibid.
                    </li>
                    <li>
                        <sup>17</sup>Ibid.
                    </li>
                </ul>
            </details>
            <Footer />
        </div>
    )
}

export default LauNichols