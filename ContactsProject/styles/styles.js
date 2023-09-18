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
    contactBoxList: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.9
    },
    contactBox: {
        padding: 16,
        marginTop: 17,
        marginLeft: windowWidth * 0.05,
        color: "black",
        borderWidth: 1,
        borderColor: "black", 
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 20, 
    },
    contactsTextPrimary: {
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginTop: 5,
    },

    contactsTextSecondary: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2,
    },

    contactDetailsBox: {
        height: windowHeight * 0.6,
        width: windowWidth * 0.9,
        padding: windowHeight * 0.025,
        marginTop: windowWidth * 0.25,
        marginLeft: windowWidth * 0.05,
        color: "black",
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 20,
        paddingTop: 70,
    },

    label: {
        fontSize: 30,
        fontWeight: 'bold',
      },

    value: {
    fontSize: 50,
    },

    name: {
        color: 'red'
    },
    email: {
        fontSize: 35, 
        color: 'blue', 
        textDecorationLine: 'underline',
        fontStyle: 'italic',
    },

    phone: {
        color: 'green'
    },

    favoriteButton: {
        backgroundColor: 'transparent',
        borderRadius: 50, 
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    favoritedContact: {
        backgroundColor: 'lightblue'
    }
  };
  
  