import Highway from '@dogstudio/highway';
import Fade from './transition';
import Fade2 from './transition2'

const H = new Highway.Core({
    transitions: {
        home:Fade,
        about:Fade,
        work:Fade,
        showwork:Fade,
        contact:Fade,
    }
});

