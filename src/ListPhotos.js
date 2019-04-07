import React, { Component } from 'react'
import './ListPhotos.css'
export default class ListPhotos extends Component {

    state = {
        photos: [],
        filteredPhotos: [],
        clicked: null,
    }

    async componentDidMount() {
        const fetchPhotos = await fetch("http://jsonplaceholder.typicode.com/photos/");
        const photos = await fetchPhotos.json();
        this.setState({ photos, filteredPhotos: photos })
        // console.log('photos', photos)
    }

    async componentWillReceiveProps() {
        const { photos } = this.state;
        const { input } = this.props;
        // console.log('input', input)

        const filteredPhotos =
            photos.filter(photo => {
                return photo.title.toLowerCase().includes(input.toLowerCase())
            })

        console.log('filteredPhotos.length', filteredPhotos.length)
        this.setState({ filteredPhotos })
    }

    handleClick = (i) => {
        // console.log('i', i);
        if (i === this.state.clicked) {
            this.setState({ clicked: null })
        } else {
            this.setState({ clicked: i })
        }
    }

    render() {
        const { input } = this.props;
        // console.log(this.props.input);

        return (
            <div>
                <ul style={{ position: 'absolute', display: 'block', margin: 'auto' }}>
                    {this.state.filteredPhotos.map((photo, i) => <li key={i} onClick={this.handleClick.bind(this, i)}> <p>{photo.title} </p> {this.state.clicked === i && <img src={photo.url} style={{ position: 'relative', display: 'block', margin: 'auto' }}></img>} </li>)}
                </ul>
            </div>
        )
    }
}