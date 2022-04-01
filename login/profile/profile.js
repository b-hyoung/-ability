import React, { useState } from 'react'
import backImg from '../img/back.png'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            selectFile: '',
            previewURL: '',
            selectFileName: null,
            input1: "",
            molu: "",
            info: ""
        })
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFileInput(event) {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            this.setState({
                selectFile: file,
                previewURL: reader.result,
                selectFileName: event.target.files[0].name,
            })
        }
        reader.readAsDataURL(file);
    }

    handleChangeInput(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }    

    handleSubmit(event) {
        event.preventDefault();
        console.log("완료");
    }


    render() {

        const hstyle = {
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            backgroundColor: "white",
            objectFit: "cover"
        }
        const user_profileBox = {
            position: "reletive",
            width: "200px",
            height: "17px",
            padding: "7px",
            borderRadius: "0.15rem",
            border: "0.5px solid black",
            marginBottom: "10px",
        }
        const user_molu = {
            width: "300px",
            height: "100px",
            padding: "7px",
            borderRadius: "0.15rem",
            border: "0.5px solid black",
        }
        const ul = {
            position: "absolute",
            left: "270px",
            top: "20px"
        }

        const save_button = {
            position: "absolute",
            width: "90px",
            left: "225px",
            top: "205px"
        }

        let profile_preview = null;
        let profile_baseImg = <img className="profile_baseImg" style={hstyle} src={backImg} />;
        if (this.state.file !== '') {
            profile_preview = <img className='profile_preview' style={hstyle} src={this.state.previewURL}></img>
        }

        return (
            <form type="onSubmit" onSubmit={this.handleSubmit}>
                <div className="select_profile" >
                    <label htmlFor='input-file'>
                        {this.state.selectFileName ? profile_preview : profile_baseImg}
                    </label>
                    <input type="file" id="input-file" style={{ display: "none" }} onChange={(event) => this.handleFileInput(event)} />
                </div>
                <div className="user_info">
                    <ul style={ul} >
                        <li>
                            <input className="user_name" name='input1' style={user_profileBox} placeholder="뭐 넣어야함 그래서 여기" value={this.state.input1}
                                onChange={this.handleChangeInput}
                            />
                        </li>
                        <li>
                            <input className="user_mola" name='molu' style={user_profileBox} placeholder="난 몰?루" value={this.state.molu}
                                onChange={this.handleChangeInput}
                            />
                        </li>
                        <li>
                            <input className="user_molu" name='info' style={user_molu} placeholder=" 여긴 설명인듯?" value={this.state.info}
                                onChange={this.handleChangeInput}
                            />
                        </li>
                        <li>
                            <div style={{ textAlign: "right" }}>
                                <button tyle="submit" style={save_button}>
                                    리액트 싫어
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        )
    }
}

export default Profile