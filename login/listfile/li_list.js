import React from "react"
import backImg from '../img/back.png'


class ListUl extends React.Component {
    constructor() {
        super()
         

    }
    render() {
        const box = {
            width: "150px",
            height: "150px",
            objectFit: "cover",
            backgroundColor : "red",
            float:"left",
            marginLeft : "10px",
            marginTop : "20px"
        }
        //li width 가 150 이기때문에 ul을 500으로 설정하면 3칸마다 줄바꿈이된다
        const ul = {
            width:"500px"
        }

        const rendering = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push(<li key={i} style={box}><p>most</p></li>);
            }
            return result;
        };


        return (
            <>
                <div>
                    <ul style={ul}>
                        {rendering()}
                    </ul>
                </div>
            </>
        )
    }

}

export default ListUl;