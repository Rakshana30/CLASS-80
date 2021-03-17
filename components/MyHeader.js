import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props =>{
return(
<Header
centerComponent = {{text: props.title , style :{ color:'purple', fontSize:20,fontWeight:"bold"}}}
backgroundColor = "pink"
/>
)


}

export default MyHeader;


