import React, { useState } from "react";

function App() {
    return (
        <NavBar/>
    );
}

function About(){
    return(
        <h1>디테일입니다</h1>
    )
}

function Product() {
    return(
        <h1>질문입니다</h1>
    )
}

function Contact(){
    return(
        <h1>리뷰입니다</h1>
    )
}

const ContentsContainer = ({ listName }) => {
    if (listName === "about") {
        return <About />;
    } else if (listName === "product") {
        return <Product />;
    } else if (listName === "contact") {
        return <Contact />;
    }
    };

function NavBar() {
    const [listName, setListName] = useState("detail");
    //listName = detail 프로젝트 커지면 이렇게 메모
    const checkId = (e) => {
    setListName(e.target.id);
    };

    return (
    <>
        <nav>
            <ul>
                <li
                id="detail"
                style={
                    listName === "about" ? { color: "blue" } : { color: "lightPink" }
                }
                onClick={checkId}
                >
                상세정보
                </li>
                <li
                id="qa"
                onClick={checkId}
                style={listName === "product" ? { color: "blue" } : { color: "lightPink" }}
                >
                Q&A
                </li>
                <li
                id="review"
                onClick={checkId}
                style={
                    listName === "contact" ? { color: "blue" } : { color: "lightPink" }
                }
                >
                Review
                </li>
            </ul>
        </nav>
        <ContentsContainer listName={listName} />
    </>
    );
}

export default App;