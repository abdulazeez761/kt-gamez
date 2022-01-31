import '../assets/css/play-n-win.css'
import battleTankv2 from '../assets/images/Action/battletankv2.png'
import carnivalDuc from '../assets/images/Action/carnivalducks.png'
import crushMe from '../assets/images/Action/crushmev2.png'
import rockyRocket from '../assets/images/Action/rockyrocket.png'
import bubbleShocker from '../assets/images/Arcade/bubbleshocker.png'
import ballBalance from '../assets/images/Arcade/ballbalancev2.png'
import ballPillar from '../assets/images/Arcade/ballpillarv2.png'
import boxBalancer from '../assets/images/Arcade/boxbalancerv2.png'
import dualBalancer from '../assets/images/Arcade/dualbalancer.png'
import fishCutter from '../assets/images/Arcade/fishcutter.png'
import fruitJars from '../assets/images/Arcade/fruitjars.png'
import spaceAttack from '../assets/images/Arcade/spaceattack.png'
import kaa from '../assets/images/Arcade/kaa.png'
import stickSaviour from '../assets/images/Arcade/sticksaviour.png'
import universeAttack from '../assets/images/Arcade/universeattack.png'
import linePlay from '../assets/images/Education/lineplayv2.png'
import carCircle from '../assets/images/SportsRacing/carcirclev2.png'
import carControl from '../assets/images/SportsRacing/carcontrol.png'
import carSpeeder from '../assets/images/SportsRacing/carspeederv2.png'
import dunky from '../assets/images/SportsRacing/dunky.png'

 function PlayAndWinCards() {
    const  handelClick = ()=>{
      const hiddenCards = document.getElementsByClassName('play-n-win-cards')
      const showMoreAndShowLess = document.getElementById('showMore-showLss')
      const icon = document.getElementById('icon')
      for(let i=0; i<hiddenCards.length; i++){
        
        if(hiddenCards[i].style.display === 'none'){
          hiddenCards[i].style.display = 'inline'
          showMoreAndShowLess.innerHTML = ` show less ` ; 
        }
        else  {
          showMoreAndShowLess.innerHTML = `show all `; 
          hiddenCards[i].style.display = 'none'
          
          
        }
      }
  }
    return (

      <div className="play-n-win">
       <h1 >Play N Win</h1>
       <button id='showMore-showLss' onClick={handelClick} > see All <span id='icon'><i class="gg-chevron-right"></i></span>  </button>
        <div className="play-n-win-cards-header">
            <div className="play-n-win-cards">
                <img src={battleTankv2}></img>
                <p>battle tank</p>
            </div>
            <div className="play-n-win-cards">
                <img src= {bubbleShocker}></img>
                <p>bubble shocker </p>
            </div>
            <div className="play-n-win-cards">
                <img src={carnivalDuc}></img>
                <p>carnival ducks tank</p>
            </div>
            <div className="play-n-win-cards">
                <img src={crushMe}></img>
                <p>crush me </p>
            </div>
            <div className="play-n-win-cards">
                <img src={rockyRocket}></img>
                <p>rocky rocket </p>
            </div>
            <div className="play-n-win-cards">
                <img src={ballBalance}></img>
                <p>ball ballBalance  </p>
            </div>
            <div className="play-n-win-cards">
                <img src={ballPillar}></img>
                <p>ball pillar  </p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={boxBalancer}></img>
                <p>box balancer   </p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={dualBalancer}></img>
                <p>dual balancer  </p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={fishCutter}></img>
                <p>fish cutter </p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={fruitJars}></img>
                <p>fruit jars</p>
            </div> 
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={kaa}></img>
                <p>kaa</p>
            </div> 
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={spaceAttack}></img>
                <p>space attack</p>
            </div> 
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={stickSaviour}></img >
                <p>stick saviour</p>
            </div> 
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={universeAttack}></img>
                <p>universe attack</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={linePlay}></img>
                <p>line play</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={carCircle}></img>
                <p>car circle</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={carControl}></img>
                <p>car conreol</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={carSpeeder}></img>
                <p>car speeder</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={dunky}></img>
                <p>dunky</p>
            </div>
            <div className="play-n-win-cards" style={{display: 'none'}}>
                <img src={fishCutter}></img>
                <p>fish cutter balancer</p>
            </div>
        </div>
      </div>
    );
  }
  
export default PlayAndWinCards;
  