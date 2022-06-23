import { Link } from "react-router-dom";
import React from "react";
import './menu.css'; 

function Header(){
    return(
        <div>
            <input type="checkbox" id="active"/>
                <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
                <div class="wrapper">
                    <ul>
                        <li class="menu1"><Link to="/">STUDIO GHIBILI</Link></li>
                        <li class="menu2"><Link to="/spiritedaway">SPIRITED AWAY</Link></li>
                        <li class="menu3"><Link to="/myfriendtotoro">MY FRIEND TOTORO</Link></li>
                        <li class="menu4"><Link to="/princessmononoke">PRINCESS MONONOKE</Link></li>
                        <li class="menu5"><Link to="/howlsmovingcastle">HOWL'S MOVING CASTLE</Link></li>
                    </ul>
                </div>
        </div>
    );
}

export default Header;