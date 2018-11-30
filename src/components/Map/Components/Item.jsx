import React from 'react'
import Text from './Reuse/Text';
import Row from './Reuse/Row';
import Column from './Reuse/Column';
import image from "assets/img/faces/avatar.jpg";
class Item extends React.Component {
    render() {
        const {item} = this.props
        return (
            <Row style={{ marginBottom: 10, justifyContent: 'space-between', alignItems:'center' }}>
                <Column style={{flex: 1, paddingRight:10, paddingLeft:10 }}>

                    <Text type='h4' title={item.name}></Text>
                    <Text type='p' title={item.description}></Text>
                    <Text type='info' title={item.place} />
                    <Row style={{alignItems:'center'}}>
                    <p style={{margin: 0}}>Giá:{' '}</p>
                    <Text type='h4' title={item.price}></Text>
                    </Row>
                </Column>
                <Text type='image' image={item.image}></Text>
            </Row>
        )
    }
}

export default Item