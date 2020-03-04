import React from 'react';
import './GameStats.css';
import axios from "axios";
import dateFormat from "dateformat";
import selectLogo from "./logoSelector.js";

class GameStats extends React.Component{
    constructor(p){
        super(p);
        const today = Date.now();
        var date = dateFormat(today, "yyyy-mm-dd");
        this.state = { 
            Games: [],
            date: date
        };
    }

    retrieveGames = () => {
        axios.get(`https://www.balldontlie.io/api/v1/games?start_date=${this.state.date}&end_date=${this.state.date}`)
        .then(async response => {
            this.setState({Games: response.data.data})
            this.sortGames()
        }).catch(e => {
            console.log(e);
        })
    }

    sortGames(){
        var gamelist = this.state.Games;
        gamelist.sort(function(a, b){
            var keyA = a.id, keyB = b.id;
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
        });
        this.setState({Games: gamelist});
    }

    render(){
        let games = this.state.Games;
        let allGames = games.map((game, idx) =>
        <div className="container" key = {idx}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={selectLogo(game.home_team.abbreviation)} width="25" height = "25" alt=""/>              
                        </td>
                        <td style={{width: "25%", textAlign: "left"}}>
                            {game.home_team.abbreviation}              
                        </td>
                        <td>
                            {game.home_team_score}              
                        </td>
                        <td style={{width: "100%", textAlign: "right"}}>
                            {game.time}              
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={selectLogo(game.visitor_team.abbreviation)} width="25" height = "25" alt=""/>              
                        </td>
                        <td style={{width: "25%", textAlign: "left"}}>
                            {game.visitor_team.abbreviation}              
                        </td>
                        <td>
                            {game.visitor_team_score}              
                        </td>
                        <td style={{width: "100%", textAlign: "right"}}>
                            {game.status}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
        const today = Date.now();
        var date = dateFormat(today, "ddd mmm dS, yyyy");
        return (
            <div>
                <div style={{clear: "right", marginBottom: "50px", marginRight: "450px"}}>
                    <label>TODAY'S GAMES ({date})</label>
                </div>
                <div>{allGames}</div>
            </div>
        )
    }
    
    componentDidMount(){
        this.retrieveGames();
    }
}
export default GameStats;