import React from 'react';
import './PlayerStats.css';
import axios from "axios";

class PlayerStats extends React.Component{
    constructor(p){
        super(p);
        this.state = { 
            playerStats: {},
            playerName: null
        };
    }

    retrievePlayerId = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
        .then(response => {
            if(response.data.data.length > 1){
                alert("Please be more specific with the name.")
            }else if(response.data.data[0] === undefined){
                alert("This player has not played this season.")
            }else{
                this.retrievePlayerStats(response.data.data[0].id)
            }
        }).catch(e => {
            console.log(e);
        })
    }

    retrievePlayerStats = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=${playerId}`)
        .then(response => {
            if(response.data.data[0] === undefined){
                alert("This player has not played this season.")
            }else{
                this.setState({playerStats: response.data.data[0]})
            }
        }).catch(e => {
            console.log(e)
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const name = this.state.playerName;
        if(name.length < 1){
            alert("Enter a valid name.");
        }else{
            this.retrievePlayerId();
        }
    }

    changeHandler = (e) => {
        const name = e.target.value.split(" ").join("_");
        this.setState({playerName: name}); 
    }

    render(){
        return (
            <div>
                <div style={{float: "left"}}>
                    <label>SEASON STATS (2019, Per Game)</label>
                    <form onSubmit = {this.submitHandler}>
                        <input type = "text" onChange = {this.changeHandler} placeholder = "Enter an NBA player name"/>                      
                        <input type = "submit" value="Submit"/>
                    </form>
                </div>  
                <div>  
                    <table className = "statstable" style = {{tableLayout: "fixed"}}>
                        <tbody>
                            <tr>
                                <th>GP</th>
                                <th>PTS</th>
                                <th>AST</th>
                                <th>REB</th>
                                <th>FG</th>
                                <th>3P</th>
                                <th>FT</th>
                                <th>STL</th>
                                <th>BLK</th>
                                <th>TO</th>
                            </tr>
                            <tr>
                                <td>{this.state.playerStats["games_played"]}</td>
                                <td>{this.state.playerStats["pts"]}</td>
                                <td>{this.state.playerStats["ast"]}</td>
                                <td>{this.state.playerStats["reb"]}</td>
                                <td>{this.state.playerStats["fg_pct"]}</td>
                                <td>{this.state.playerStats["fg3_pct"]}</td>
                                <td>{this.state.playerStats["ft_pct"]}</td>
                                <td>{this.state.playerStats["stl"]}</td>
                                <td>{this.state.playerStats["blk"]}</td>
                                <td>{this.state.playerStats["turnover"]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PlayerStats;