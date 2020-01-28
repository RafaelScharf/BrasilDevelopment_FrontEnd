import React, { Component } from 'react';
import './styles.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaReact} from "react-icons/fa";
import { FaVuejs} from "react-icons/fa";



class NavigateOfTopics extends Component {

    constructor(props){
        super(props);
        this.state = {
            initial_pos: 0,
            final_pos: 7,
            list_size: 0,
            list_of_topics: [],
            list_of_topics_showing: []
        }
        this.nextNavigation = this.nextNavigation.bind(this);
        this.backNavigation = this.backNavigation.bind(this);
    }


    //Carrega a lista de tópicos
    componentDidMount(){
        this.getListOfTopics();
    }

    //Método criado para realizar uma chamada a API carregando a lista de Tópicos.
    getListOfTopics = ()=>{
        //realizar chama via api com aixos
        /*
            code ..................
        */
        this.setState({
            list_of_topics : [
                {'name':'Angular', 'icon': <FaAngular size={30} />},
                {'name':'Java', 'icon': <FaJava size={30}  />},
                {'name':'Javascript', 'icon': <FaNodeJs size={30}  />},
                {'name':'NodeJs', 'icon': <FaNodeJs size={30} />},
                {'name':'PHP', 'icon': <FaPhp size={30}  />},
                {'name':'React', 'icon': <FaReact size={30}  />},
                {'name':'React Native', 'icon': <FaReact size={30}  />},
                {'name':'VueJs', 'icon': <FaVuejs size={30}  />},
            ]
        }, ()=>{
           if(this.state.list_of_topics.length>=8){
               let list_size = this.state.list_of_topics.length;
                this.setState(
                    {
                        list_of_topics_showing: 
                            this.state.list_of_topics.slice(this.state.initial_pos,this.state.final_pos),
                        list_size
                    }
                )
           }
        });
    }


    //Exibe o proximo Tópico na barra de navegação.
    nextNavigation = ()=>{
        let initial_pos = this.state.initial_pos;
        let final_pos = this.state.final_pos;
        initial_pos += 1;
        final_pos += 1;            
        if(this.state.list_of_topics.length>=final_pos){
            this.setState({list_of_topics_showing: this.state.list_of_topics.slice(initial_pos,final_pos), initial_pos, final_pos});
       }
    }

    //Exibe o Tópico anterior na barra de navegação.
    backNavigation = ()=>{
        let initial_pos = this.state.initial_pos;
        let final_pos = this.state.final_pos;
        initial_pos -= 1;
        final_pos -= 1;
        if(initial_pos>=0){
            this.setState({list_of_topics_showing: this.state.list_of_topics.slice(initial_pos,final_pos), initial_pos, final_pos});
       }
    }


  render() {
    let initial_pos = this.state.initial_pos;
    let final_pos = this.state.final_pos;  
    let list_size = this.state.list_size;
    console.log(initial_pos);
    return (
        <div>
            
                <nav>
                <FaChevronLeft  className={""+(initial_pos===0 ? 'icons-disable' : 'icons')} onClick={()=>{
                    this.backNavigation();
                }}/>
                { this.state.list_of_topics_showing.map((item, index)=>
                    (   <a href='#' key={item.name}>
                        <span>{ item.icon }<label>{item.name}</label></span>
                        </a>
                ))}
                <FaChevronRight className={""+(final_pos === list_size ? 'icons-disable' : 'icons')} onClick={()=>{
                    this.nextNavigation();
                }}/>    
            
                </nav>
            
        </div>
      );
  }
}

export default NavigateOfTopics;

