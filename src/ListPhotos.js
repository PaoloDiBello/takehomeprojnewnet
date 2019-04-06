import React, { Component } from 'react'

export default class ListPhotos extends Component {

    state = {
        filteredPhotos: [],
        clicked: null
    }

    async componentWillMount() {
        const fetchPhotos = await fetch("http://jsonplaceholder.typicode.com/photos/");
        const photos = await fetchPhotos.json();
        this.setState({ filteredPhotos: photos })
    }

    async componentWillReceiveProps() {

        const fetchPhotos = await fetch("http://jsonplaceholder.typicode.com/photos/");
        const photos = await fetchPhotos.json();
        const { input } = this.props;
        console.log('input', input)
        console.log('photos', photos)

        let filteredPhotos =
            photos.filter(photo => {
                return photo.title.toLowerCase().includes(input.toLowerCase())
            })

        filteredPhotos = (/^(\s)+/g).test(input) ? photos : filteredPhotos;

        this.setState({ filteredPhotos: filteredPhotos })

    }

    handleClick = (i) => {
        console.log('i', i);
        if (i == this.state.clicked) {
            this.setState({ clicked: null })
        } else {
            this.setState({ clicked: i })
        }
    }



    render() {


        const { input } = this.props;

        console.log(this.props.input);

        return (
            <div>
                <ul>
                    {this.state.filteredPhotos.map((photo, i) => <li key={i} onClick={this.handleClick.bind(this, i)}> {photo.title} {this.state.clicked === i && <img src={photo.url}></img>} </li>)}
                </ul>
            </div>
        )
    }
}
