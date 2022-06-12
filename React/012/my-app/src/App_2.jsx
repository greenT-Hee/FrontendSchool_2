import styled from "styled-components";

const AA = styled.div`
    padding: 40px;
    background-color: lightblue;
`;

const BB = styled.h2`
    width: 200px;
    margin: 0 auto;
    text-align: center;
    background-color: lightcoral;
`;

const CC = styled.p`
    color: gray;
`

const UnicornAfter = styled.div`
    &:after {
    content: " ??";
}`


function App() {
    return (
        <AA>
            <BB>hello world</BB>
            <CC>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis laudantium facere hic praesentium odio tempora debitis sint reprehenderit, facilis optio reiciendis sed explicabo voluptatem consequuntur quis fugiat animi. Corporis!</CC>
            <UnicornAfter>hello</UnicornAfter>
        </AA>
    );
}

export default App;