import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import axios from 'axios'

class AlbumList extends React.Component {
    state = {
        albums: []
    }
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))    
    }

    renderAlbums() {
        return this.state.albums.map(album => {
            return (
                <View key={album.title}>
                    <Text>{album.title}</Text>
                </View>
            )
        })
    }

    render(){
        const { headerTextStyle, container } = styles
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )

    }

}

export default AlbumList

const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center', //vertically
        alignItems: 'center', //horizontally
        height: 70,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        //shadow for box
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    headerTextStyle: {
        fontSize: 20,
    
    }

})