import React,{Component} from 'react';

import '../assets/css/detail.css';

import zan from '../assets/img/zan.png';//图片引入，模块化使用
import xing from '../assets/img/xing.png';//图片引入，模块化使用
import fx from '../assets/img/fx.png';
import UcNav from "../components/uc-nav/UcNav";
//图片引入，模块化使用
import qs from 'query-string'
import BareScreen from "../components/BareScreen";

export default class Detail extends Component{
  state={
    data:{}
  };
  constructor(props){
    super(props);

    let apiname = qs.parse(props.location.search).apiname;
    let _id = props.match.params._id;
    this.axios({url:`/api/goods/user/${_id}`}).then(
      res=>this.setState({data:res.data.data})
    )

  }

  renderPage=({username,age})=>(
    <div>
      <UcNav/>
      <div className="content">
        <div className="cont">
          <h3>{username}</h3>
		  <h3>{age}</h3>
        </div>
      </div>
     <div className="foot-btn">
             <ul>
               <li className="say"><a >
                <i style={{background:"url(/images/say321.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
               </a></li>
               <li
                 className="zan"
               ><a >
                 <i style={{background:"url(/images/zan123.png) no-repeat 0 0", "backgroundSize":"100%"}}></i><span>0</span>
               </a></li>
               <li className="xing"><a >
                 <i><img src={xing} alt=""/></i>
               </a></li>
               <li className="fx"><a>
                 <i><img src={fx} alt=""/></i>
               </a></li>
             </ul>
           </div>
    </div>
  );
  renderBareScreen=()=>(<BareScreen/>);

  render(){
    let el=null;

    if (this.state.data) {
      el = this.renderPage(this.state.data)
    }else{
      el = this.renderBareScreen()
    }



    return el;
  }
}