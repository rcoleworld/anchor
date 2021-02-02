import Navigation from './components/Navigation'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About'
import Categories from './components/Categories'
import Compare from './components/Compare'
import Home from './Home'
import Article from './components/Article'
import './App.css';
import ArticleThumb from './components/ArticleThumb';

const defaultArticle = {
  id: "h_3858475923h9s8d7f",
  url: 'https://www.azlyrics.com/lyrics/bahamen/wholetthedogsout.html',
  firstPublishDate: "2021-01-23T19:15:55Z",
  lastPublishDate: "2021-01-23T19:47:41Z",
  contributors: [
    "Promyse Ward"
  ],
  source: 'Anchor News',
  headline: 'What Happens When an Article Isnt Found',
  section: 'Important Stuff',
  thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/15/Baha_Men_-_Dogs_single.png",
  description: 'Hmmm, a description should definitely be here.',
  body: 'Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Well the party was nice, the party was bumpin. Hey, yippie, yi, yoAnd everybody havin a ball. Hah, ho, yippie yi yo. I tell the fellas, "Start the name calling." Yippie yi yo. And the girls respond to the call. I heard a poor man shout out. Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Woof, woof, woof, woof. Who let the dogs out? Woof, woof, woof, woof. I see de dance people had a ball. Cause she really want to skip town. Get back gruffy, back scruffy. Get back you flea-infested mongrel. Gonna tell myself, "Hey, man, no get angry." Yippie, yi, yo. To any girls calling them canine. Yippie, yi, yo. But they tell me, "Hey man, its part of the party!" Yippie yi, yo. You put a woman in front and a man behind. Yippie, yi, yo. I heard a woman shout out. Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woofWho let the dogs out? Woof, woof, woof, woof Say, a doggy is nothing if he dont have a bone All doggy hold your bone, all doggy hold it A doggy is nothing if he dont have a bone All doggy hold your bone, all doggy hold it Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof I see de dance people had a ball Cause she really want to skip townGet back gruffy, back scruffy Get back you flea-infested mongrel Well, if I am a dog, the party is on I gotta get my groove I got my mind done gone Do you see the rays comin from my eye Walking through the place That Diji man is breakin them down? Me and my white short shorts And I cant see color, any color will do Ill stick on you thats why they call me pitbull Cause Im the man of the landWhen they see me they say, "Ooh! "Who let the dogs out? Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof Who let the dogs out?Woof, woof, woof, woof Who let the dogs out? Woof, woof, woof, woof ',
};
function App() {
  return (
    <div className="App">
      <Router>
      <Navigation>
      </Navigation>
      
      <Switch>
          <Route exact path="/about"><About/></Route>
          <Route path="/categories"><Categories /></Route>
          <Route path="/compare"><Compare /></Route>
          <Route path="/:category/:id"><Article/></Route>
          <Route path="/"><Home/></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
