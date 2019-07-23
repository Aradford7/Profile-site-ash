
import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade2 extends Highway.Transition{
    //in Home -> out about
    in({from, to, done}) {

        const t2 = new TimelineLite();
        t2.fromTo(to, 0.5, {left:'-100%', top: '50%'}, {left: '0%'})
        .fromTo(to, 0.5, 
            {height:'2vh'}, 
            {height: '100vh', top:'10%', 
            onComplete:function(){
            done();
        }
    }
)
.fromTo(to.children[0], 2, {opacity:0}, {opacity:1})
    }
    out({from, done}){
        from.remove();
        done();
    }
}


export default Fade2;