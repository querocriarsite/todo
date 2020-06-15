import {createGlobalStyle} from "styled-components";

export default createGlobalStyle `

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    font-weight: 500;
    //text-decoration: none;
    outline: none;
    -webkit-font-smoothing: antialiased!important;
    color: aqua;
    border-color: aqua!important;
    font-family: 'Montserrat', sans-serif;
}

html, body, #root {
    background: #15161a;
    min-height: 100%;
}

body {
    padding: 30px;
}

#root {
    width: 40%;
    margin: auto;
}

button {
    cursor: pointer;
}

@media screen and (max-width: 1600px) {
    #root {
        width: 50%;
    }
}

@media screen and (max-width: 1300px) {
    #root {
        width: 60%;
    }
}

@media screen and (max-width: 850px) {
    #root {
        width: 70%;
    }
}

@media screen and (max-width: 700px) {
    #root {
        width: 80%;
    }
}

@media screen and (max-width: 540px) {
    #root {
        width: 100%;
    }
}
`;