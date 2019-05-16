import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    Linking
} from 'react-native'
import {
    Card,
    CardSection,
    Button
} from '../../src/ReuseComponents'

const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image, url } = album
    const { 
        textContainer, 
        thumbnailStyle, 
        thumbnailContainer,
        titleText,
        albumCover
    } = styles
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={textContainer}>
                    <Text style={titleText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={albumCover} 
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button 
                    onPress={() => Linking.openURL(url)}
                    text={`Order now`}
                />
            </CardSection>
        
        </Card>
    )
}

export default AlbumDetail

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    albumCover: {
        height: 300,
        flex: 1, // this container stretch the image to full screen's width
        width: null
    }

})