import React from "react";
import "../css/Downloads.css";
import {Dropdown} from "react-bootstrap";

function Downloads() {
    return(

        <div class=" row material">
            <div class="downloads col-lg-4">
                <Dropdown>
                    <Dropdown.Toggle size="lg" variant="secondary" id="dropdown-basic" btn-block>
                        Downloads
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> 
            </div> 

            <div class="links col-lg-4">
            <Dropdown>
                <Dropdown.Toggle size="lg" variant="secondary" id="dropdown-basic">
                   Links
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 

            </div> 


            <div class="more col-lg-4">
            <Dropdown>
                <Dropdown.Toggle size="lg" variant="secondary" id="dropdown-basic">
                    More 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 

            </div> 


    </div>
  );
}

export default Downloads;