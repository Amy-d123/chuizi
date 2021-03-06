import React, { Component } from 'react'
import "./list.scss"
// import Axios from 'axios'
import {withRouter} from 'react-router'
// import {ActivityIndicator,PullToRefresh} from 'antd-mobile'


class List extends Component{
  // state = {
  //   datalist: [],
  //   animating:true
  //       // ids:[],
  // }
  render(){
    
    // console.log(item)
    // if(this.props!==null){
    //   return
    // }
    let {item}=this.props
    

    return <div className="home_list">
      <div className="home_list_box">
        <div className="guesslike-wrap">
          {/* {
            item.map((item,index)=> */}
              <div className="guess-like-item" key={item.skuId} onClick={()=>this.handleClick(item.skuId, item.spuId)}>
                <div className="guess-like-item_img">
                  <img src={item.images} alt=""/>
                </div>
                <div className="item-title">
                  <span>{item.skuTitle}</span>
                </div>
                <div className="item-bottom-info">
                  <div className="item-price">
                    {/* <span className="discountPrice"><i className="discountPrice_symbol">￥</i>{item.discountPrice}</span> */}
                    <span className="originalPrice">￥{item.originalPrice}</span>
                  </div>
                  <div className=""></div>
                </div>
              </div>  
            {/* )
          } */}
        </div>
      </div>
      {/* <ActivityIndicator
          toast
          text="正在加载..."
          animating={this.state.animating}
      /> */}
    </div>
  }
  handleClick(id, spuId){
    // console.log(id, spuId)
    localStorage.setItem('spuId', spuId)
    localStorage.setItem('id', id)
    this.props.history.push(`/detail/${id}`)
    // this.props.match.params.push({
    //   id:id
    // })
  }
    
    
}

export default withRouter(List)