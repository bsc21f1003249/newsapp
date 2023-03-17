import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: PropTypes.string,
  };

  static propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  articles = {
    status: "ok",
    totalResults: 54,
    articles: [
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Stephen Collinson",
        title:
          "Fox and Trump’s marriage of convenience is held hostage by the GOP base",
        description:
          '"You Can\'t Always Get What You Want" has long been the anthem to Donald Trump triumphantly walking off stage after his rallies.',
        url: "http://us.cnn.com/2023/03/01/politics/trump-fox-republican-party-2024/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/230228235653-01-donald-trump-fox-town-hall-032420-file.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2023-03-01T05:05:39Z",
        content:
          "You Cant Always Get What You Want has long been the anthem to Donald Trump triumphantly walking off stage after his rallies.\r\nBut the ex-presidents entire political career, the modern Republican Part… [+9212 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news1",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news2",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news3",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news4",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news5",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news6",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "breitbart-news",
          name: "Breitbart News",
        },
        author: "Nick Gilbertson",
        title: "Poll: Surging Donald Trump Leads DeSantis in Head-to-Head",
        description:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) by eight points in a head-to-head Republican primary match-up, per a poll.",
        url: "https://www.breitbart.com/politics/2023/02/28/poll-surging-donald-trump-leads-desantis-head-2-head/",
        urlToImage:
          "https://media.breitbart.com/media/2023/02/12-13-18-Donald-Trump-smiles-at-Ron-DeSantis-gettyimages-640x335.jpg",
        publishedAt: "2023-03-01T03:44:17Z",
        content:
          "Former President Donald Trump leads Gov. Ron DeSantis (R-FL) in a hypothetical head-to-head Republican primary match-up after a 12-point swing his way in only three weeks, according to a poll.\r\nThe Y… [+2645 chars]",
      },
      {
        source: {
          id: "cnn",
          name: "CNN",
        },
        author: "Melanie Zanona, Manu Raju",
        title:
          "House’s MAGA wing torn over Trump as loyalists eye other 2024 candidates",
        description:
          "Former President Donald Trump's allies have been privately lobbying hard-right House members to throw their support behind his bid for the GOP 2024 presidential nomination and help inject some fresh momentum into his fledgling campaign, according to Republica…",
        url: "http://us.cnn.com/2023/02/28/politics/house-maga-members-2024-trump/index.html",
        urlToImage:
          "https://media.cnn.com/api/v1/images/stellar/prod/230128200317-donald-trump-ron-desantis-split.jpg?c=16x9&q=w_800,c_fill",
        publishedAt: "2023-03-01T02:35:23Z",
        content:
          "Former President Donald Trumps allies have been privately lobbying hard-right House members to throw their support behind his bid for the GOP 2024 presidential nomination and help inject some fresh m… [+8453 chars]",
      },
      {
        source: {
          id: "axios",
          name: "Axios",
        },
        author: "Josh Kraushaar",
        title: "Trump's February bump",
        description:
          "After a shaky start, Trump has quietly found his footing over the last month.",
        url: "https://www.axios.com/2023/03/01/trump-polling-february",
        urlToImage:
          "https://images.axios.com/tSr_sMEI-CMRwG9Yc50CWWmtr4k=/0x0:3609x2030/1366x768/2023/02/28/1677616200980.jpg",
        publishedAt: "2023-03-01T01:07:54Z",
        content:
          "Four new polls show former President Trump has received a boost in Republican support with one survey showing him hitting 50% support in a crowded GOP field.\r\nWhy it matters: After a shaky start to h… [+2370 chars]",
      },
      {
        source: {
          id: "axios",
          name: "Axios",
        },
        author: "Sareen Habeshian",
        title: "DeSantis, McCarthy among GOP leaders missing from CPAC lineup",
        description:
          "Trump, easily the most recognizable name at this year's conference, is returning to CPAC while in the midst of his third presidential campaign.",
        url: "https://www.axios.com/2023/03/01/gop-leaders-missing-cpac-conference-2023",
        urlToImage:
          "https://images.axios.com/dN0Rm7lGlkzRhRQaaMYHOBys9zU=/0x417:4000x2667/1366x768/2023/02/28/1677625111406.jpg",
        publishedAt: "2023-03-01T01:04:50Z",
        content:
          "Many Republican lawmakers will not attend the annual Conservative Political Action Conference (CPAC) this week, paving the way for former President Trump to make an impact among some of his staunches… [+1479 chars]",
      },
      {
        source: {
          id: "bloomberg",
          name: "Bloomberg",
        },
        author: "Bloomberg",
        title:
          "Rubio, Warner Not Satisfied After Briefing on Biden, Trump Classified Documents",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5ibG9vbWJlcmcuY29tL25ld3MvYXJ0aWNsZXMvMjAyMy0wMy0wMS9ydWJpby13YXJuZXItbm90LXNhdGlzZmllZC1hZnRlci1icmllZmluZy1vbi1iaWRlbi10cnVtcC1jbGFzc2lmaWVkLWRvY3VtZW50c9IBAA?oc=5",
        urlToImage: null,
        publishedAt: "2023-03-01T00:52:00+00:00",
        content: null,
      },
      {
        source: {
          id: "bbc-news",
          name: "BBC News",
        },
        author: "BBC News",
        title: "Donald Trump assails Rupert Murdoch over defamation testimony",
        description:
          'The media mogul\'s emails reveal he told a Fox executive: "We want to make Trump a non person."',
        url: "http://www.bbc.co.uk/news/world-us-canada-64806437",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/139A2/production/_128809208_gettyimages-1247393711.jpg",
        publishedAt: "2023-03-01T00:37:17.3412951Z",
        content:
          "Former President Donald Trump has lashed out at Fox News owner Rupert Murdoch, accusing him of betraying Fox hosts in recent legal testimony.\r\nIn a defamation lawsuit, Mr Murdoch conceded some Fox ho… [+3392 chars]",
      },
      {
        source: {
          id: "usa-today",
          name: "USA Today",
        },
        author: null,
        title:
          "Florida Gov. Ron DeSantis loses lead in 2024 GOP race, now trails Donald Trump, poll finds",
        description:
          "The poll shows former president Donald Trump leading Florida Gov. Ron DeSantis by eight points for the 2024 Republican presidential nomination.",
        url: "https://www.usatoday.com/story/news/politics/2023/02/28/desantis-trump-gop-2024-poll/11368133002/",
        urlToImage:
          "https://www.gannett-cdn.com/presto/2023/02/01/USAT/b5f3c5fd-b14b-4245-a60d-0f29a614f41f-AP_Election_2018_Trump_DeSantis.JPG?auto=webp&crop=3750,2109,x0,y302&format=pjpg&width=1200",
        publishedAt: "2023-03-01T00:08:39+00:00",
        content:
          "Florida Gov. Ron DeSantis now trails former President Donald Trump in a two-man race for the 2024 Republican presidential nomination despite previously leading the former president, according to a ne… [+1350 chars]",
      },
      {
        source: {
          id: "msnbc",
          name: "MSNBC",
        },
        author: "Kurt Bardella",
        title:
          "James Comer's Hunter Biden crusade lets Trump and Jared Kushner off the hook",
        description:
          "House Republican James Comer has turned “investigating” President Joe Biden and son Hunter Biden into a crusade, letting Trump's son Jared Kushner off the hook.",
        url: "https://www.msnbc.com/opinion/msnbc-opinion/james-comers-hunter-biden-crusade-lets-trump-jared-kushner-hook-rcna72717",
        urlToImage:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230228-jared-kushner-hunter-biden-ew-200p-215247.jpg",
        publishedAt: "2023-02-28T22:53:03Z",
        content:
          "House Oversight Committee Chairman James Comer, R-Ky., has turned investigating President Joe Biden and his family into a 24/7 crusade. His rationale? According to a tweet blasted out Friday, Comer i… [+3948 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Rolling Stone",
        title:
          "Trump Melts Down Over Murdoch Admitting Fox Lied About Election Fraud - Rolling Stone",
        description: null,
        url: "https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJvbGxpbmdzdG9uZS5jb20vcG9saXRpY3MvcG9saXRpY3MtbmV3cy90cnVtcC1hdHRhY2tzLXJ1cGVydC1tdXJkb2NoLWRvbWluaW9uLWxhd3N1aXQtMTIzNDY4ODMyMi_SAXFodHRwczovL3d3dy5yb2xsaW5nc3RvbmUuY29tL3BvbGl0aWNzL3BvbGl0aWNzLW5ld3MvdHJ1bXAtYXR0YWNrcy1ydXBlcnQtbXVyZG9jaC1kb21pbmlvbi1sYXdzdWl0LTEyMzQ2ODgzMjIvYW1wLw?oc=5",
        urlToImage: null,
        publishedAt: "2023-02-28T20:22:13+00:00",
        content: null,
      },
      {
        source: {
          id: "msnbc",
          name: "MSNBC",
        },
        author: "Steve Benen",
        title:
          "Trump now sees special counsel Jack Smith as a ‘mad dog psycho’",
        description:
          "Targeting special counsel Jack Smith, Donald Trump is lashing out with hysterics. These are not the actions of a man expecting to be cleared of wrongdoing.",
        url: "https://www.msnbc.com/rachel-maddow-show/maddowblog/trump-now-sees-special-counsel-jack-smith-mad-dog-psycho-rcna72678",
        urlToImage:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-12/221207-Jack-Smith-al-0854-252d6e.jpg",
        publishedAt: "2023-02-28T16:17:01Z",
        content:
          "Special counsel Jack Smith and his team continue to pursue witnesses some of whom are at the center of Donald Trumps inner circle and The Wall Street Journal summarized the current landscape this way… [+2321 chars]",
      },
      {
        source: {
          id: "the-huffington-post",
          name: "The Huffington Post",
        },
        author: "Lee Moran",
        title:
          "Here’s How Bryan Cranston Handles People Who Don’t Think Trump’s MAGA Slogan Is Racist",
        description:
          'The actor raised critical questions about the former president\'s "Make America Great Again" rallying cry.',
        url: "https://www.huffpost.com/entry/bryan-cranston-maga-slogan_n_63fdcc6de4b08b1402dfd0e5",
        urlToImage:
          "https://img.huffingtonpost.com/asset/63fdd21b2600003900cb6628.jpeg?cache=YeZ0mC5UNF&ops=1200_630",
        publishedAt: "2023-02-28T10:16:06Z",
        content:
          "Actor Bryan Cranston explained to CNNs Chris Wallace exactly why he believes Donald Trumps Make America Great Again campaign slogan can be interpreted as racist.\r\nCranston first told Wallace over the… [+845 chars]",
      },
      {
        source: {
          id: "the-huffington-post",
          name: "The Huffington Post",
        },
        author: "Lee Moran",
        title:
          "Rupert Murdoch Reveals How Sean Hannity Really Felt About Donald Trump After Election",
        description:
          "The Fox News founder told GOP former House Speaker Paul Ryan why Hannity didn't push back on the former president, according to new court documents.",
        url: "https://www.huffpost.com/entry/rupert-murdoch-sean-hannity-paul-ryan-trump-election_n_63fdb53be4b0c253d346db94",
        urlToImage:
          "https://img.huffingtonpost.com/asset/63fdc59c230000600003a089.jpeg?cache=yOXYEEYYzH&ops=1200_630",
        publishedAt: "2023-02-28T09:33:53Z",
        content:
          "Fox News founder Rupert Murdoch told Paul Ryan, the GOP former House speaker-turned-Fox Corp. board member, how Fox News Sean Hannity really felt about Donald Trump in the weeks following the 2020 el… [+1294 chars]",
      },
      {
        source: {
          id: "the-huffington-post",
          name: "The Huffington Post",
        },
        author: "Ed Mazza",
        title:
          "Stephen Colbert Spots Trump's Most Unsettling New Mar-A-Lago Habit",
        description:
          'The "Late Show" host said this one is reminiscent of a "toddler at Oliver Garden."',
        url: "https://www.huffpost.com/entry/stephen-colbert-trump-dj_n_63fd9e2de4b0c253d346ce69",
        urlToImage:
          "https://img.huffingtonpost.com/asset/63fda4c92600003700cb660c.jpg?cache=c6kRTcMkAt&ops=1200_630",
        publishedAt: "2023-02-28T07:11:17Z",
        content: null,
      },
      {
        source: {
          id: "the-huffington-post",
          name: "The Huffington Post",
        },
        author: "Ed Mazza",
        title:
          "Jimmy Kimmel Fires Back At Trump In Absolutely Blistering Monologue",
        description:
          "The late night host spoke out in his first show since revelations that Trump tried to have him censored.",
        url: "https://www.huffpost.com/entry/jimmy-kimmel-trump-censorship-response_n_63fd8b01e4b0cab1fa30e001",
        urlToImage:
          "https://img.huffingtonpost.com/asset/63fd97ca2600002000cb6609.jpg?cache=PF9oyII7an&ops=1200_630",
        publishedAt: "2023-02-28T06:10:42Z",
        content: null,
      },
      {
        source: {
          id: "msnbc",
          name: "MSNBC",
        },
        author: "Steve Benen",
        title:
          "Jared Kushner, Ivanka Trump reportedly get special counsel subpoenas",
        description:
          "Let no one accuse Jack Smith of timidity: The special counsel's subpoenas keep reaching prominent members of Donald Trump’s inner circle.",
        url: "https://www.msnbc.com/rachel-maddow-show/maddowblog/jared-kushner-ivanka-trump-get-subpoenas-special-counsel-rcna71942",
        urlToImage:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230223-kushner-mb-1308-4bfba2.jpg",
        publishedAt: "2023-02-23T13:40:16Z",
        content:
          "Let no one accuse Jack Smith of timidity. It was just two weeks ago when the public learned that the special counsel overseeing two criminal investigations into Donald Trump had sent subpoenas to som… [+2430 chars]",
      },
      {
        source: {
          id: "newsweek",
          name: "Newsweek",
        },
        author: "Ewan Palmer",
        title:
          "How 'Narcissist' Trump Would React to Being Indicted: Kirschner",
        description:
          'Legal analyist Glenn Kirschner predicts the former president will be charged and then "throw every single person under the bus."',
        url: "https://www.newsweek.com/trump-narcissist-indicted-glenn-kirchner-1782626",
        urlToImage:
          "https://d.newsweek.com/en/full/2198078/trump-indictment.jpg",
        publishedAt: "2023-02-21T11:28:18Z",
        content:
          'Donald Trump will turn on "every single person," including his own family members, if he gets indicted as part of the criminal investigations into him, according to a former federal prosecutor.\r\nSpea… [+2568 chars]',
      },
      {
        source: {
          id: "msnbc",
          name: "MSNBC",
        },
        author: "Zeeshan Aleem",
        title:
          "Trump-Kushner-Saudi Arabia connections go deeper than we thought",
        description:
          "Trump, Kushner and MBS have stronger financial connections than we previously thought, a report from the Washington Post shows. Corruption is in the air.",
        url: "https://www.msnbc.com/opinion/msnbc-opinion/trump-kushner-saudi-arabia-mbs-corruption-rcna70598",
        urlToImage:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-02/230214-donald-trump-jared-kushner-saudi-arabia-cs-4b5d76.jpg",
        publishedAt: "2023-02-15T11:00:40Z",
        content:
          "Another day, another story of breathtaking corruption in Trump World. This time its new details about how former President Donald Trump and his son-in-law Jared Kushner enriched themselves with the h… [+5186 chars]",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
      {
        source: {
          id: "the-globe-and-mail",
          name: "The Globe And Mail",
        },
        author: "Lawrence Martin",
        title: "Liz Cheney is making headway in slaying the Trump dragon",
        description:
          "By spearheading congressional hearings into the Jan. 6 attack on the Capitol, the representative is fast becoming an American heroine",
        url: "https://www.theglobeandmail.com/opinion/article-liz-cheney-is-making-headway-in-slaying-the-trump-dragon/",
        urlToImage:
          "https://www.theglobeandmail.com/resizer/wCgPPEAVIFE4MLAb_xauhJzJqLI=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/YT6S7Z443RL23MYNL4VZY4WXRQ.jpg",
        publishedAt: "2022-06-15T19:24:08Z",
        content:
          "Vice Chair Liz Cheney, Rep. Adam Schiff, and Rep. Adam Kinzinger, stand together during a break as the House select committee investigating the Jan. 6 attack on the U.S. Capitol holds its first publi… [+4635 chars]",
      },
      {
        source: {
          id: "fortune",
          name: "Fortune",
        },
        author: "Eamon Barrett",
        title:
          "A new report shows how badly the Trump administration slashed the U.S.’s climate credentials",
        description:
          "The ranking from Yale University says decisions made by the Trump administration slashed the country's climate credentials",
        url: "https://fortune.com/2022/06/01/trump-us-climate-action-paris-accord-methane-yale-environmental-performance-index/",
        urlToImage:
          "https://content.fortune.com/wp-content/uploads/2022/06/GettyImages-1342340441-e1654072113634.jpg?resize=1200,600",
        publishedAt: "2022-06-01T10:31:29Z",
        content: "Skip to Content",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles.articles,
      loading: true,
      page: 1,
      totalNumberOfArticles: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}- News Monkey`;
  }

  async updateNews() {
    //const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8eb318b06e814a31b4dfdaace5da0ca3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    //let data = await fetch(url);
    //let parsedData = await data.json();
    this.setState({
      articles: this.articles.articles,
      totalNumberOfArticles: this.articles.totalResults,
      loading: false,
    });
  }

  // async componentDidMount() {
  //   this.updateNews();
  // }
  fetchMoreData = async () => {
    setTimeout(() => {
      this.setState({
        page: this.state.page + 1,
      });
      //let data = await fetch(url);
      //let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(this.articles.articles),
        totalNumberOfArticles: 108, //hardcoded value to 108 so that it doesnot go to infinite loop
        loading: false,
      });
    }, 1500);
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px, 0px," }}>
          NewsMonkey - Top Headlines from{" "}
          {this.capitalizeFirstLetter(this.props.category)} category
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.articles.length !== this.state.totalNumberOfArticles
          }
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={
                        element.title === null ? "" : element.title.slice(0, 45)
                      }
                      description={
                        element.description === null
                          ? ""
                          : element.description.slice(0, 88)
                      }
                      imageURL={element.urlToImage}
                      newsUrL={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
