import React, { useEffect, useState} from 'react';
import {useRouteMatch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticleThumb from './components/ArticleThumb';
import styles from './stylesheets/homepage.css';
import axios from 'axios';

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

const Home = () => {

    const {path} = useRouteMatch();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5001/articles').then((response) => {
            if(response.status === 201) {
                setArticles(response.data)
                console.log(response)
                console.log(articles)
            }  else {
                setArticles([defaultArticle])
            }
        }).catch((error) => {
            console.log(error)
        })

    }, []) //will change, it's to load all articles at once when the page loads /
    // Request grabbing a list of articles


        return (


            <div className="Home">
                
            {articles !== undefined && articles.length > 0 &&
            articles.map((article, index) => (
                <ArticleThumb 
                headline = {article.headline}
                id = {article._id}
                thumbnail = {article.thumbnailUrl}
                section = {article.section}
                description = {article.description}
                category = {article.category}
                body = {article.body}
                url = {article.url}
                date = {article.firstPublishDate}
                
                ></ArticleThumb>
            ))
            }

            

        </div>
        
        )
    
}

export default Home;

// Issues:
//  App and Home are separate, but maybe should be together?
//      Issue because as it is currently implemented, the routing defaults to the default article, as it cannot
//      check what is being linked?
