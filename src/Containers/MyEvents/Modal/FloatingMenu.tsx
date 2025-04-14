// import React from 'react';
// import {
//     View,
//     Modal,
//     TouchableOpacity,
//     Text,
//     StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// interface Props {
//     visible: boolean;
//     onclose: () => void;

// }

// const FloatingMenu: React.FC<Props> = ({ visible, onclose, }) => {
//     return (
//         <View style={styles.container}>

//             <TouchableOpacity style={styles.floatingIcon} onPress={() => { }}>
//                 <Icon name="plus" size={24} color="white" />
//             </TouchableOpacity>

//             <Modal
//                 transparent
//                 animationType="fade"
//                 visible={visible}
//                 onRequestClose={onclose}
//             >
//                 <TouchableOpacity
//                     style={styles.modalOverlay}
//                     onPress={onclose}
//                     activeOpacity={1}
//                 >
//                     <View style={styles.modalContent}>
//                         <TouchableOpacity style={styles.item}>
//                             <Icon name="history" size={20} color="red" />
//                             <Text style={styles.historyText}>History</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.item}>
//                             <Icon name="heart-outline" size={20} color="gray" />
//                             <Text style={styles.favoriteText}>Favorite</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </TouchableOpacity>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     floatingIcon: {
//         position: 'absolute',
//         bottom: 30,
//         right: 30,
//         backgroundColor: 'red',
//         borderRadius: 25,
//         padding: 10,
//         elevation: 5,
//     },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0,0,0,0.1)',
//         justifyContent: 'flex-end',
//         alignItems: 'flex-end',
//         padding: 20,
//     },
//     modalContent: {
//         width: 140,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         paddingVertical: 10,
//         elevation: 10,
//     },
//     item: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//     },
//     historyText: {
//         color: 'red',
//         marginLeft: 10,
//     },
//     favoriteText: {
//         color: 'gray',
//         marginLeft: 10,
//     },
// });

// export default FloatingMenu;
