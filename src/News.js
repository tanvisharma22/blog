import React, { Component } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    
  constructor(){
    super();
    this.state = {
    articles: [],
    loading: false,
    page:1,
    totalResults:0
    }
    }

    async updateNews(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=94d8ecbb92424d60a1dfaafdf71baf8f";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading: true});
    this.setState(
      {
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false,
     })
};
  
   async componentDidMount(){
    this.updateNews();
   }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=94d8ecbb92424d60a1dfaafdf71baf8f";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({loading: true});
    this.setState(
      {
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        loading:false,

    })
    
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Fresh News Blogs</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          >
        <div className='row'>
       
       
        {this.state.articles.map((element) => {
            return  <div className='col-md-4' key={element.url} >
            <NewsItem title= {element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
           
        })}
           
        </div>
        </InfiniteScroll>
      
      </div> 
    )
  }
};

export default News
