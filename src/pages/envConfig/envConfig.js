import { Button } from "carbon-components-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EnvCard from "../../components/envCard/envCard";
import { addEnv, removeEnv } from "../../store/features/envs";
import './envConfig.scss'

function EnvConfig() {

    const envs = useSelector(state => state.envs.value)
    const dispatch = useDispatch()

    function adicionarItem(){
        let newEnvs = {
            nome: "A", 
            caURL:"A", 
            CPURL:"",
            caUser: "",
            caPassword: ""
        }
        dispatch(addEnv(newEnvs))
    }

    return (
        <div className="bx--grid bx--grid--full-width env-config-page">
            <div className="bx--row">
                <div className="bx--col-lg-16"></div>
            </div>
            {
                envs.map((env,index)=>
                    <div className="bx--row" key={index}>
                        <div className="bx--col-md-4 bx--col-lg-4"></div>
                                    <div className="bx--col-md-8 bx--col-lg-8">
                                        <EnvCard index={index}></EnvCard>
                                    </div>
                        <div className="bx--col-md-4 bx--col-lg-4"></div>
                    </div>
                )
            }
            <div className="bx--row">
                <div className="bx--col-md-4 bx--col-lg-4"></div>   
                <div className="bx--col-md-8 bx--col-lg-8">
                    <Button onClick={() => adicionarItem()}>
                        Adicionar
                    </Button>
                </div>
                <div className="bx--col-md-4 bx--col-lg-4"></div>
            </div>
        </div>
    )
}

export default EnvConfig;