import React from 'react'
import Text from './Reuse/Text';
import Row from './Reuse/Row';
import Column from './Reuse/Column';
import { Apps, CloudDownload, Map, LocationSearching, Filter, Category, Search } from "@material-ui/icons";
import image from "assets/img/marker_icon.png";
class Item extends React.Component {
    render() {
        const {item} = this.props
        return (
            <React.Fragment>
            <Row style={{ marginBottom: 10, justifyContent: 'space-between', alignItems:'center', paddingTop:10, paddingBottom:10 }}>
                <Column style={{flex: 1, paddingRight:10, paddingLeft:10 }}>

                    <Text type='h4' title={item.name}></Text>
                    <Text type='p' title={item.description}></Text>
                    <div style={{display:'flex'}}>
                        <img
                            alt="..."
                            src={image}
                        />
                        <p style={{ color: '#e67e22', margin: 0, fontWeight: 'bold',fontSize:16}}>{item.distance}</p>
                    </div>
                    <Text type='info' title={item.place} />
                    <Row style={{alignItems:'center'}}>
                    <p style={{margin: 0}}>Giá: &nbsp;</p>
                    <Text type='h4-price' title={item.price}></Text>
                    </Row>
                </Column>
                <Text type='image' image={item.image}></Text>
            </Row>
            <div style={{height:1, backgroundColor:'red'}}></div>
            </React.Fragment>
        )
    }
}

export default Item