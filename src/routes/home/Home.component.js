import react from 'react';
import './Home.scss';

function Home() {
    
        return (
            <div className="Home">
               <div className="Home-image">
                   <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80" />
               </div>
               <div className="Home-title">
               <h1>Keep Reading</h1>
                <p className= "Home-title-1">Reading is best for get Idea.</p>
                <p className= "Home-title-2">Open your world. Opening the door to knowledge. Preserving the past, opening the future</p>                    
               </div>
            </div>
        ); 
}
export default Home;
