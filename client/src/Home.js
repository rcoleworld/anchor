import React, { useEffect, useState } from 'react';
import ArticleThumbTrending from './components/ArticleThumbTrending';
import ArticleThumb from './components/AritcleThumb'
import axios from 'axios';
import './stylesheets/homepage.css';

const defaultArticle = {
        contributers: [
            "Christina Vercelletto"
        ],
        _id: "6019da8859883600218dbb70",
        url: "https://www.cnn.com/2020/11/19/cnn-underscored/best-gifts-for-dog-lovers/index.html",
        firstPublishDate: "2020-12-15T00:00:00.000Z",
        lastPublishDate: "2020-12-15T00:00:00.000Z",
        headline: "41 gifts for pets and the people who love them",
        section: "Underscored",
        thumbnailUrl: "https://cdn.cnn.com/cnnnext/dam/assets/201118122307-petgiftslead1-super-169.jpg",
        body: [
            {
                sentence: "Pets can be a little like toddlers in that they’re known to play with (or in) the box the present comes in",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "But that doesn’t mean they shouldn’t be indulged at the holidays with really great stuff",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "Cashmere sweater? French-style pet macarons? Nothing’s too good for the other pea in your quarantine pod",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "They haven’t left your side",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "Ever",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "So it’s time to lay on the holiday love",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "On a tight budget this year? Lots of folks are this year, so we have fun ideas for as little as $3.99",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "Whether your heart belongs to a gentle giant of a dog or a tiny fluffball kitten, celebrate the interspecies bond you share with a token of your gratitude for their unconditional love",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "Oh, and we have really fun picks for the other pet lovers in your life too",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            },
            {
                sentence: "If these gifts don’t strike your fancy, check out our roundups of gifts for her, gifts for him, practical gifts, Amazon 5-star gifts, top-rated Nordstrom gifts and gifts for everyone else.",
                biasDetectionResult: null,
                objectivityDetectionResult: null,
                sentimentDetectionResult: null
            }
        ],
        category: "Pets",
        publisher: "CNN",
        "__v": 0
    };

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [trendingArticles, setTrendingArticles] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:5001/articles?orderBy=firstPublishDate&orderType=des').then((response) => {
            if(response.status === 201) {
                setArticles(response.data)
                console.log(response)
            }  else {
                setArticles([defaultArticle])
            }
        }).catch((error) => {
            console.log(error)
        })
    }, []) //will change, it's to load all articles at once when the page loads /
    // Request grabbing a list of articles
    useEffect(() => {
        axios.get('http://127.0.0.1:5001/articles?limit=3').then((response) => {
            if(response.status === 201) {
                setTrendingArticles(response.data)
                console.log(response)
            }  else {
                setTrendingArticles([defaultArticle])
            }
        }).catch((error) => {
            console.log(error)
        })
    }, []) 
    return (
        <div className="Home">
            <div className="title-class">
                <div className="home-title">
                Anchor News
                </div>
                <div className="logo">
                Think Different
                </div>
                <a id="scroll" href="#trending">Get Started</a>
            </div>
            <div className="trending-class" id="trending">
                <h1> Trending </h1>
                        
                <div className="trending-articles">
                    {trendingArticles !== undefined && trendingArticles.length > 0 &&
                    trendingArticles.map((article, index) => (
                        <ArticleThumbTrending 
                        headline = {article.headline}
                        id = {article._id}
                        thumbnail = {article.thumbnailUrl}
                        section = {article.section}
                        category = {article.category}
                        body = {article.body}
                        url = {article.url}
                        date = {article.firstPublishDate}
                        source = {article.publisher}
                        authors = {article.contributers}
                        ></ArticleThumbTrending>
                    ))
                }
                </div>

            </div>
            <div className="recent-articles">    
                <h1> Recent Stories </h1>
                <div className="articles">
                    {articles !== undefined && articles.length > 0 &&
                    articles.map((article, index) => (
                        <ArticleThumb
                            headline = {article.headline}
                            id = {article._id}
                            thumbnail = {article.thumbnailUrl}
                            section = {article.section}
                            category = {article.category}
                            body = {article.body}
                            url = {article.url}
                            date = {article.firstPublishDate}
                            source = {article.publisher}
                            authors = {article.contributers}>

                        </ArticleThumb>
                    ))}
                </div>
            </div>
        </div>
     )
}
export default Home;
