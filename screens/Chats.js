import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import ContactRow from '../components/ContactRow';
import Separator from '../components/Separator';

const chats = [
  {
    users: ['fatihsonmez-95@hotmail.com', 'f@outlook.com'],
    messages: [],
  },
  {
    users: ['fatihsonmez-95@hotmail.com', 'f@outlook.com'],
    messages: [],
  },
  {
    users: ['fatihsonmez-95@hotmail.com', 'f@outlook.com'],
    messages: [],
  },
  {
    users: ['fatihsonmez-95@hotmail.com', 'f@outlook.com'],
    messages: [],
  },
  {
    users: ['fatihsonmez-95@hotmail.com', 'f@outlook.com'],
    messages: [],
  },
];

const Chats = ({navigation}) => {
  useEffect(() => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  });
  return (
    <SafeAreaView>
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          <ContactRow
            name={chat.users.find(x => x !== firebase.auth().currentUser.email)}
            subtitle="No message yet"
            onPress={() => {
              navigation.navigate('Chat');
            }}
          />
          <Separator />
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
};

export default Chats;
