import React, { Component,} from 'react';
import { Link, BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleThumb from './ArticleThumb';
import styles from '../stylesheets/homepage.css'

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

const testArticle = {
    id: "h_a612776564ca4b795dc938f3cf95d740",
    url: "https://www.cnn.com/2021/01/23/us/explosion-los-angeles-church-vandalism/index.html",
    firstPublishDate: "2021-01-23T19:15:55Z",
    lastPublishDate: "2021-01-23T19:47:41Z",
    contributors: [
        "Artemis Moshtaghian",
        "Alaa Elassar"
    ],
    source: "CNN",
    headline: "Police are investigating an overnight explosion at a suburban Los Angeles church",
    section: "US",
    thumbnail: "https://cdn.cnn.com/cnnnext/dam/assets/210123132517-map-explosion-los-angeles-church-vandalism-trnd-story-body.jpg",
    description: "Yeehaw!",
    body: "Police are investigating vandalism and an explosion at a church in the San Gabriel Valley of Los Angeles County on Saturday. Police were called to First Works Baptist Church in El Monte around 1 a.m. where they found the walls of the church vandalized and smoke coming out of the church's window, which appeared to be smashed in. \"We realized that the windows were not smashed, that they had actually blown out from some type of explosion,\" said El Monte Police Department Lt. Christopher Cano. The FBI's Los Angeles field office said agents responded along with El Monte police and the Los Angeles County Sheriff's Department to what it called an \"IED attack\" at the church. IED is an acronym for improvised explosive device. \"Bomb Technicians and an Evidence Response Team are processing the scene which sustained damage. No injuries are reported,\" the field office said in a statement. The field office said a joint investigation is underway and anyone with information on the incident should contact the Los Angeles field office. Police did not provide any further details and church representatives were not readily available for comment.  The church had been the center of some local protests due to its condemnation of same-sex relationships, according to CNN affiliate KCAL.  The church is described as an \"independent, fundamental\" Baptist church on its website, which includes a doctrinal statement listing the church's beliefs. One of the beliefs listed is: \"We believe that homosexuality is a sin and an abomination which God punishes with the death penalty.\" A protest scheduled for Sunday by a group called Keep El Monte Friendly has been canceled, according to the group's Facebook page. El Monte is located about 16 miles east of Los Angeles."
};

const Home = () => {

    // Request grabbing a list of articles

        return (

            <div className="Home">
            {/* Display list of articles */}

            <ArticleThumb></ArticleThumb> 
            <ArticleThumb></ArticleThumb>
            <ArticleThumb></ArticleThumb>
            <ArticleThumb></ArticleThumb>
            <ArticleThumb></ArticleThumb>
        </div>
        
        )
    
}

export default Home;

// Issues:
//  App and Home are separate, but maybe should be together?
//      Issue because as it is currently implemented, the routing defaults to the default article, as it cannot
//      check what is being linked?
