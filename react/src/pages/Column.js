import React,{Component} from 'react';

import Cell from "../components/cell";


export default class Column extends Component{
  state={
    column : []
  };

  async componentDidMount(){
    let res =  await React.axios({url:'/api/goods/user',params:{_page:1,_limit:3}})
    this.setState({column:res.data.data})
  }
  render(){
    let {column}=this.state;
    return (
      <div className="pt">

        {
          column.map((item,index)=>(
            <Cell
              key={item._id}
			  index={index}
              data={item}
              to={{pathname:'/detail',apiname:'column'}}
            />
          ))
        }
      </div>
    )
  }
}