import React,{Component} from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';

import {api} from '../store/actions';

class movieDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            genre: '',
            studio_name: '',
            synopsis:'',
            image_url: '',
            youtube_url: '',
            actors: '',
            actresses: '',
            director:'',
            country: '',
            mpaa_rating: '',
            availability_type: '',
            price: 0.00,
            currentTab : 0,
            movieId : null
        }
    }

    componentWillMount(){
        var movieID = this.props.match.params.movieID;
        console.log("Movie ID : ", movieID);
        axios.get(`${api}/movies/${movieID}`)
            .then((response) => {
                console.log("Response : ", response);
                this.setState({
                    title : response.data.title,
                    genre : response.data.genre,
                    studio_name : response.data.studio_name,
                    synopsis : response.data.synopsis,
                    image_url : response.data.image_url,
                    youtube_url : response.data.youtube_url,
                    actors : response.data.actors,
                    actresses : response.data.actresses,
                    director : response.data.director,
                    country : response.data.country,
                    mpaa_rating : response.data.mpaa_rating,
                    availability_type : response.data.availability_type,
                    price : response.data.price,
                    movieId : response.data.movieId
                })
        })
    }
    render(){
        return(
            <div >
                <Navbar/>
                <div style = {{color : "white", margin:"5%"}} class="row">
                    <div class="col-sm-3" >
                        <h1>Movie Image Goes Here</h1>
                    </div>
                    <div class="col-sm-6" >
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-sm-3" >
                        <button style={{alignSelf:"center"}} type="button" class="btn btn-primary">
                            Add a Review
                        </button>
                        <h1>Movie Reviews Goes Here</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default movieDetails;