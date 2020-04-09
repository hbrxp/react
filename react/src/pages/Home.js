import React,{Component} from 'react';

import UcSwiper from "../components/uc-swiper";
import Cell from "../components/cell";
import UcButton from "../components/uc-button";


export default class Home extends Component{

  state={
    banner:[],
    home:[]
  };

  constructor(props){
    super(props);

     React.axios.all([
          React.axios({url:'/api/goods/user',params:{_page:1,_limit:10}})
        ]).then(React.axios.spread(( home)=>{//banner|home ~~ res
    
          this.setState({
            home:home.data.data
          })
        }));
  }

  render(){
	  let {home}=this.state;
	  console.log(home);
    return (
      <div className="Home">

        <UcSwiper
          data={[
            {_id:'1',title:'大鹏',sub_title:'大鹏123',banner:'/images/img_1.jpg'},
            {_id:'2',title:'大鹏',sub_title:'大鹏123',banner:'/images/img_1.jpg'},
			{_id:'3',title:'大鹏',sub_title:'大鹏123',banner:'/images/img_1.jpg'},
          ]}
        />
        {
          home.map((item,index)=>(
            <Cell
              key={item._id}
              index={index}
              data={item}
              to={{pathname:'/detail',apiname:'home'}}
            >
              <UcButton style={{float:'right'}} size="mini">+</UcButton>
            </Cell>
          ))
        }



      </div>
    )
  }

}