import {React,useState,useEffect} from "react";
import "./styles.css";
import telegram from './images/paper.png';
import Toggle from "./toggle";
import Table from "./table";

function Homepage()
{
   
    const [time,setTime]=useState(60);
    const [item,setItem]=useState("INR");
    const[degree,setDegree]=useState(0);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisible1, setMenuVisible1] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
    const toggleMenu1 = () => {
        setMenuVisible1(!menuVisible1);
      };
    useEffect(() => {
        // Only run the interval if the time is greater than 0
        if (time > 0) {
            const timerId = setInterval(() => {
                setTime(prevTime => prevTime - 1); // Decrement time by 1 every second
            }, 1000);
            const temp=time*(10/6)*3.6;
            setDegree(temp);
            // Cleanup the interval when the component unmounts or when time changes
            return () => clearInterval(timerId);
        }
        else{
            setTime(60);
        }
    }, [time]); // Dependency array includes time
return <div className="main">
    <div className="header">
        <div className="logo"><img className="logoImage" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="Logo"></img></div>
        <div class="currency-selectors">
            
            <div className="Parent"><button onClick={toggleMenu} >INR <p className="arrow">▼</p> </button>
            {menuVisible && <div className="Menu">
            <ul>
            <button onClick={()=>{toggleMenu();}}>INR</button>
            </ul>
            </div>}
            </div>
            <div className="Parent"><button onClick={toggleMenu1} >BTC <p className="arrow">▼</p> </button>
            {menuVisible1 && <div className="Menu">
                <ul>
                <button onClick={()=>{setItem("REQ"); toggleMenu1();}}>REQ</button>
                <button onClick={()=>{setItem("BTC"); toggleMenu1();}}>BTC</button>
                <button onClick={()=>{setItem("ZRX"); toggleMenu1();}}>ZRX</button>
                <button onClick={()=>{setItem("BAT"); toggleMenu1();}}>BAT</button>
                <button onClick={()=>{setItem("ZIL"); toggleMenu1();}}>ZIL</button>
                <button onClick={()=>{setItem("EOS"); toggleMenu1();}}>EOS</button>
                <button onClick={()=>{setItem("TRX"); toggleMenu1();}}>TRX</button>
                <button onClick={()=>{setItem("ETH"); toggleMenu1();}}>ETH</button>
                <button onClick={()=>{setItem("XRP"); toggleMenu1();}}>XRP</button>
                <button onClick={()=>{setItem("NULS"); toggleMenu1();}}>NULS</button>
            </ul>
            </div>}
            </div>
            <button class="buy-btn">BUY {item}</button>
        </div>
        <div class="connect-btn">
        <div   style={{
            background: `conic-gradient(#50c0bc 0deg ${degree}deg, white ${degree}deg 360deg)`,
            position: "relative",
            width: "35px",
            height: "35px",
            display: "grid",
            placeItems: "center", // Corrected 'place'
            borderRadius: "50%" // Use camelCase for CSS properties
        }}>
        <div className="ProgressBarChild">    
        <span className="TimeBar">{time}</span>
        </div>
         </div>
            
            <button className="telegramLink"><img className="telegram" src={telegram} alt="telegram"></img> Connect Telegram</button>

           <Toggle/>
     </div>
    </div>
    <div className="Centre">
    <div className="propertiesPrice">
        <h1>0.1%</h1>
        <p>5 Mins</p>
    </div>
    <div className="propertiesPrice">
        <h1>0.96%</h1>
        <p>1 Hour</p>
    </div>
    <div><div class="best-price">
        <span>Best Price to Trade</span>
        <div class="price">₹ 26,56,110</div>
        <div class="avg-price">Average BTC/INR net price including commission</div>
    </div></div>
    <div className="propertiesPrice">
        <h1>2.73 %</h1>
        <p>5 Mins</p>
    </div>
    <div className="propertiesPrice">
        <h1>7.51 %</h1>
        <p>7 Days</p>
    </div>
    </div>

    <div><Table/></div>

    <div class="add-to-home-screen">
        <button>Add hodlinfo to home screen</button>
    </div>
</div>
}
export default Homepage;