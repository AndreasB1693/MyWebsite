import React from "react";
import {Carousel} from 'react-bootstrap';
import "../css/Skills.css";

function Skills() {
    return(
        <>

       

        <div class="skills">
        <Carousel interval={7000}>
            <Carousel.Item>
                <div class="skill-row">
                    <i class="left fa-brands fa-java fa-8x"/>
                    <h3>Lorem & Ipsum</h3>
                    <p class="code-skill-description">Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
                    <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></p>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div class="skill-row">
            <i class="right fa-brands fa-python fa-8x"/>
                <h3>Lorem Ipsum Dolor</h3>
                <p class="chilli-skill-description">Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
                <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></p>
                </div>

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div class="skill-row">
                    <i class="left fa-solid fa-database fa-8x"/>
                    <h3>Lorem & Ipsum</h3>
                    <p class="code-skill-description">Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
                    <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></p>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div class="skill-row">
                    <i class="right fa-brands fa-js fa-8x"/>
                    <h3>Lorem & Ipsum</h3>
                    <p class="code-skill-description">Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
                    <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></p>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div class="skill-row">
                    <i class="computer fa-brands fa-react fa-8x"/>
                    <h3>Lorem & Ipsum</h3>
                    <p class="code-skill-description">Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
                    <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i></p>
                </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div> 

        <div class="strength">
            <div class="row">
                <div class="feature-box col-lg-3">
                    <i class="fa-solid fa-dumbbell fa-4x"/>
                    <h3 class="feature-title">Stärke</h3>
                    <p>So easy to use, even your dog could do it.</p>
                </div>
        
                <div class="feature-box col-lg-3">
                    <i class="fa-solid fa-people-group fa-4x"></i>
                    <h3 class="feature-title">Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>

                <div class="feature-box col-lg-3">
                <i class="fa-solid fa-circle-check fa-4x"></i>
                    <h3 class="feature-title">Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>

                <div class="feature-box col-lg-3">
                <i class="fa-solid fa-mountain fa-4x"></i>
                    <h3 class="feature-title">Elite Clientele</h3>
                    <p>We have all the dogs, the greatest dogs.</p>
                </div>
            </div>
        </div>

       
       
        </>
    );
}

export default Skills;

