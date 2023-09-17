import { StatusBar, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const appStyles = {
    container: {
        flex: 1,
        backgroundColor: "#abcdef",
        width: windowWidth,
    },
    containerBox: {
        paddingTop: StatusBar.currentHeight + 20 || 0,
    },
    header: {
        height: 75,
        borderWidth: 1,
        borderColor: "black"
    },
    contactBox: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.9,
        padding: windowHeight * 0.025,
        marginTop: 17,
        marginLeft: windowWidth * 0.05,
        color: "black",
        borderWidth: 1,
        borderColor: "black"
    },
    contactTextBold: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    contactDetailsBox: {
        height: windowHeight * 0.8,
        width: windowWidth * 0.9,
        padding: windowHeight * 0.025,
        marginTop: 17,
        marginLeft: windowWidth * 0.05,
        color: "black",
        borderWidth: 1,
        borderColor: "black"
    },
  };
  
  