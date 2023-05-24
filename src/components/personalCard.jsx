import { StyleSheet, View, Text, Image } from 'react-native';


const PersonalCard = ({width, height, landscape}) => {
    //trae ancho y alto de la pantalla y si es landscape o no
    console.log(width, height, landscape)

    styles = landscape ? landscapesStyles : portraitStyles;

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.cardImage} source={require('../../assets/perfil.jpg')} />
            <Text style={styles.url}>agencia.portinos.com</Text>
            <View style={styles.textContainer}>
                <Text style={styles.personalName}>coco</Text>
                <Text style={styles.personalRole}>Development Team Leader</Text>
                <Text>coco@portinos.com</Text>
            </View>
            
        </View>
    );
}

const portraitStyles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: '90%',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 1,
        alignItems: 'center',
        overflow: 'hidden',
       
    },

    cardImage: {
        width: '100%',
        height: '40%',
        resizeMode: 'cover',
        marginBottom: 20,
    },

    url: {
        height: '10%',
        fontSize: 20,
    },

    textContainer: {
        width: '80%',
        height: '40%',
        justifyContent: 'flex-end',
    },

    personalName: {
        fontSize: 18,
        marginBottom: 2,
        fontWeight: 'bold',
    },

    personalRole: {
        fontSize: 10,
        marginBottom: 5,
    }

})

const landscapesStyles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: '90%',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#333',
        borderWidth: 1,
        alignItems: 'flex-start',
        overflow: 'hidden',
    },

    cardImage: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
        marginBottom: 20,
    },

    url: {
        height: '10%',
        fontSize: 20,
    },

    textContainer: {
        width: '80%',
        height: '40%',
        justifyContent: 'flex-end',
    },

    personalName: {
        fontSize: 18,
        marginBottom: 2,
        fontWeight: 'bold',
    },

    personalRole: {
        fontSize: 10,
        marginBottom: 5,
    }

})

export default PersonalCard;