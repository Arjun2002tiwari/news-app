import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  //   articles=[
  //     {
  //         "source": {
  //            "id": "news24",
  //            "name": "News24"
  //        },
  //        "author": "Khanyiso Tshwaku",
  //        "title": "Tamim, Taskin combine to roll SA, claim historic series win as hosts ponder World Cup issues",
  //        "description": "South Africa's automatic path to the 2023 Cricket World Cup hasn't just hit an obstacle, but has firmly run aground after their nine-wicket loss to Bangladesh in the third ODI at SuperSport Park on Wednesday.",
  //        "url": "https://www.news24.com/sport/Cricket/Proteas/tamim-taskin-combine-to-roll-sa-claim-historic-series-win-as-hosts-ponder-world-cup-issues-20220323",
  //        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1607/e3ef63563977449891742ab8ffecd8e9.jpg",
  //        "publishedAt": "2022-03-23T18:32:29+00:00",
  //        "content": "<ul><li>South Africa's World Cup qualification path is in tatters after their embarrassing nine-wicket loss to Bangladesh at SuperSport Park on Wednesday.</li><li>South Africa remains ninth on the lo… [+4049 chars]"
  //    },
  //    {
  //        "source": {
  //            "id": "talksport",
  //            "name": "TalkSport"
  //        },
  //        "author": "Josh Fordham",
  //        "title": "Ash Barty retires at just 25, won three Grand Slam titles, made history for Australia and played cricket...",
  //        "description": "",
  //        "url": "https://talksport.com/sport/tennis/1029218/ash-barty-evonne-goolagong-tennis-cricket-australian-open-winner/",
  //        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2022/01/TALKSPORT-Barty.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
  //        "publishedAt": "2022-03-23T12:10:00Z",
  //        "content": "Ash Barty shocked the sporting world as she announced her retirement from tennis at the age of 25.\r\nThe world number one is the reigning Wimbledon and Australian Open champions, while she has also wo… [+4766 chars]"
  //    },
  //    {
  //        "source": {
  //            "id": "espn-cric-info",
  //            "name": "ESPN Cric Info"
  //        },
  //        "author": null,
  //        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //        "publishedAt": "2020-04-27T11:41:47Z",
  //        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //    },
  //    {
  //        "source": {
  //            "id": "espn-cric-info",
  //            "name": "ESPN Cric Info"
  //        },
  //        "author": null,
  //        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //        "publishedAt": "2020-03-30T15:26:05Z",
  //        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //    }
  // ]
  static defaultProps = {
    country: 'in',
    pagesize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string

  }
  constructor() {
    super();
    //console.log("hello world");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    //console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    //console.log(parseData);
    this.setState({ 
      articles: parseData.articles, 
      totalResults: parseData.totalResults,
      loading:false

    })
  }

  handleprevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parseData = await data.json()
    //console.log(parseData);
    //this.setState({articles:parseData.articles})

    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading:false
    })
  }
  handlenextClick = async () => {
    console.log("next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pagesize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=182ff6c14f2f4209839b0db444f7a5e1&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parseData = await data.json()
      
      //console.log(parseData);
      //this.setState({articles:parseData.articles})

      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      })
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4">NewsMonkey-Top Headlines</h1>
        <div className="text-center">
          {this.state.loading && <Spinner/>}
        </div>
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {

            return <div className='col-md-3 mx-4' key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 50) : ""} Imageurl={element.urlToImage} newsurl={element.url} />
            </div>
            
          })}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenextClick}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News