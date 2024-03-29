import React, { Component } from 'react'
import './ListPhotos.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LinearIndeterminate from '../Loader'
export default class ListPhotos extends Component {

    state = {
        photos: [],
        filteredPhotos: [],
        clicked: null,
    }

    async componentDidMount() {
        try {
          const fetchPhotos = await fetch("https://jsonplaceholder.typicode.com/photos/");
          const photos = await fetchPhotos.json();
          this.setState({
              photos,
              filteredPhotos: photos
          })            
        } catch (error) {
          console.error(error);
        }
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
        const { clicked } = this.state;
        if (i === clicked) {
            this.setState({ clicked: null })
        } else {
            this.setState({ clicked: i })
        }
    }

    render() {

        return (
            <React.Fragment>
                {this.state.photos.length > 0 ? (<List style={{ position: 'absolute', display: 'block', margin: 'auto' }}>
                    {this.state.filteredPhotos.map((photo, i) => <ListItem style={{ display: 'block ' }} key={photo.id}> <ListItemText key={i} onClick={this.handleClick.bind(this, i)} style={{ cursor: 'pointer' }}>{photo.title} </ListItemText> {this.state.clicked === i && <ListItemIcon><img src={photo.url} ></img></ListItemIcon>} </ListItem>)}
                </List>) : <LinearIndeterminate />
                }    </React.Fragment>
        )
    }
}